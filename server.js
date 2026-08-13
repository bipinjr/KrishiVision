import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pathToFileURL } from "url";

dotenv.config();

const isDirectRun = Boolean(process.argv[1]) && import.meta.url === pathToFileURL(process.argv[1]).href;

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const GROQ_API_KEY = process.env.VITE_GROQ_API_KEY || process.env.GROQ_API_KEY;
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

if (!GROQ_API_KEY) {
  console.error("❌ GROQ_API_KEY not found in .env");
  if (isDirectRun) process.exit(1);
}

const SYSTEM_PROMPT_EN = `You are KrishiBot, an expert AI assistant for Indian farmers.

SCOPE: Answer ONLY agriculture-related questions — crop diseases, pest control, weather advisory, MSP prices, government schemes (PM-KISAN, PMFBY, KCC, Soil Health Card), organic farming, soil health, irrigation, seed selection, mandi prices, fertilizer dosage, and seasonal crop planning.

STYLE:
- Give concise, practical answers in simple language a farmer can understand.
- Use bullet points for lists.
- Include specific dosages, timings, or actionable steps when relevant.
- Reference Indian agriculture context: Kharif/Rabi seasons, ICAR guidelines, KVK centres.
- End every answer with one clear actionable tip labeled "✅ Tip:".
- If you mention a government scheme, include eligibility in one line.

BOUNDARIES:
- Politely refuse non-farming questions: "I'm trained only for farming queries. Please ask about crops, pests, schemes, or soil health! 🌾"
- Never give medical, legal, or financial investment advice.

CURRENT CONTEXT (use as reference):
- Kharif 2025: Paddy MSP ₹2,300/quintal, Soybean ₹4,892/quintal
- Rabi 2025-26: Wheat MSP ₹2,425/quintal, Mustard ₹5,950/quintal
- PM-KISAN: ₹6,000/year in 3 installments for eligible farmers
- PMFBY: Crop insurance at 2% premium for Kharif, 1.5% for Rabi
- Common alerts: Fall Armyworm in maize, Yellow Rust in wheat, Late Blight in potato/tomato`;

const LANG_SUFFIX = {
  hi: `\n\nLANGUAGE: Respond in simple Hindi (Devanagari script). Hinglish is acceptable for technical terms. Keep answers practical and easy to understand for rural farmers.`,
  kn: `\n\nLANGUAGE: Respond in simple Kannada (ಕನ್ನಡ script). You may use English for technical/scientific terms. Keep answers practical and easy to understand for Karnataka farmers.`,
};

app.post("/api/krishibot-chat", async (req, res) => {
  try {
    const { messages, language, weather } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Messages are required" });
    }

    let systemPrompt = SYSTEM_PROMPT_EN;
    if (language && LANG_SUFFIX[language]) {
      systemPrompt += LANG_SUFFIX[language];
    }

    if (weather) {
      systemPrompt += `\n\nLIVE WEATHER at farmer's location (${weather.location || "unknown"}):
- Temperature: ${weather.temperature}°C (feels like ${weather.feelsLike}°C)
- Humidity: ${weather.humidity}%
- Wind: ${weather.windSpeed} km/h
- Condition: ${weather.condition}
- Rainfall (last hour): ${weather.rainfall}mm
Use this data when the farmer asks about weather, spraying conditions, irrigation timing, or crop protection. Proactively warn if conditions are risky (e.g., high humidity = fungal risk, strong wind = avoid spraying).`;
    }

    const recentMessages = messages.slice(-6);

    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          ...recentMessages,
        ],
        stream: true,
        temperature: 0.7,
        max_tokens: 2048,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return res.status(429).json({ error: "Too many requests. Please wait a moment and try again." });
      }
      if (response.status === 401) {
        return res.status(401).json({ error: "Invalid Groq API key. Please check your GROQ_API_KEY." });
      }
      if (response.status === 402) {
        return res.status(402).json({ error: "Groq credits exhausted. Check your Groq dashboard for usage." });
      }
      const text = await response.text();
      console.error("Groq API error:", response.status, text);
      return res.status(500).json({ error: "AI service temporarily unavailable" });
    }

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      res.write(chunk);
    }

    res.end();
  } catch (e) {
    console.error("krishibot-chat error:", e);
    res.status(500).json({ error: e instanceof Error ? e.message : "Unknown error" });
  }
});

app.post("/api/weather", async (req, res) => {
  try {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
      return res.status(400).json({ error: "Latitude and longitude required" });
    }

    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,rain&timezone=auto`;

    const response = await fetch(weatherUrl);
    if (!response.ok) {
      return res.status(500).json({ error: "Weather service unavailable" });
    }

    const data = await response.json();
    const current = data.current;

    const weatherCodes = {
      0: "Clear", 1: "Clear", 2: "Cloudy", 3: "Cloudy",
      45: "Foggy", 48: "Foggy", 51: "Rain", 53: "Rain", 55: "Rain",
      56: "Rain", 57: "Rain", 61: "Rain", 63: "Rain", 65: "Rain",
      66: "Rain", 67: "Rain", 71: "Snow", 73: "Snow", 75: "Snow",
      77: "Snow", 80: "Rain", 81: "Rain", 82: "Rain", 95: "Thunderstorm",
      96: "Thunderstorm", 99: "Thunderstorm"
    };

    res.json({
      location: `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`,
      temperature: current.temperature_2m,
      humidity: current.relative_humidity_2m,
      feelsLike: current.apparent_temperature,
      windSpeed: Math.round(current.wind_speed_10m),
      condition: weatherCodes[current.weather_code] || "Clear",
      rainfall: current.rain || 0
    });
  } catch (e) {
    console.error("Weather error:", e);
    res.status(500).json({ error: "Weather service error" });
  }
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

if (isDirectRun) {
  app.listen(PORT, () => {
    console.log(`🚀 KrishiBot local server running on http://localhost:${PORT}`);
    console.log(`📡 Groq proxy: http://localhost:${PORT}/api/krishibot-chat`);
    console.log(`🌤️  Weather proxy: http://localhost:${PORT}/api/weather`);
  });
}

export default app;