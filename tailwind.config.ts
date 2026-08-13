import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["Sora", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["2.5rem", { lineHeight: "1.15", fontWeight: "800" }],
        "hero-lg": ["4.5rem", { lineHeight: "1.08", fontWeight: "800" }],
        "section": ["1.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "section-lg": ["3rem", { lineHeight: "1.15", fontWeight: "800" }],
        "card-title": ["1.125rem", { lineHeight: "1.3", fontWeight: "700" }],
        "card-title-lg": ["1.25rem", { lineHeight: "1.3", fontWeight: "700" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "body-base": ["1rem", { lineHeight: "1.6" }],
        "label": ["0.75rem", { lineHeight: "1.4", fontWeight: "500" }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        neutral: "hsl(var(--neutral))",
        "light-gray": "hsl(var(--light-gray))",
        "subtle-border": "hsl(var(--subtle-border))",
        surface: "hsl(var(--surface))",
        saffron: "#FF6B35",
        navy: "#0F172A",
        lime: "#84CC16",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "0.75rem",
        "2xl": "1rem",
      },
      boxShadow: {
        "card": "0 2px 12px rgba(0,0,0,0.06)",
        "card-hover": "0 12px 32px rgba(255,107,53,0.12)",
        "btn-hover": "0 6px 20px rgba(255,107,53,0.2)",
        "btn-active": "0 10px 30px rgba(255,107,53,0.25)",
        "focus": "0 0 0 2px #FF6B35",
        "input-focus": "0 0 0 3px rgba(255,107,53,0.15)",
        "chip-hover": "0 4px 12px rgba(255,107,53,0.1)",
        "glow-saffron": "0 0 20px rgba(255,107,53,0.3)",
        "glow-lime": "0 0 16px rgba(132,204,22,0.2)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "fade-in-subtle": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "scale-out": {
          from: { transform: "scale(1)", opacity: "1" },
          to: { transform: "scale(0.95)", opacity: "0" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-8px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "75%": { transform: "translateX(4px)" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "60%": { transform: "scale(1.15)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "count-up": {
          from: { transform: "translateY(20px) scale(0.9)", opacity: "0" },
          to: { transform: "translateY(0) scale(1)", opacity: "1" },
        },
        "rotate-in": {
          from: { transform: "rotate(-90deg)", opacity: "0" },
          to: { transform: "rotate(0)", opacity: "1" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "skeleton-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "progress-fill": {
          from: { width: "0%" },
          to: { width: "var(--progress-width)" },
        },
        "spin-smooth": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "expand-height": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--expand-height)", opacity: "1" },
        },
        "page-enter": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "stagger-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "chip-press": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.98)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.4s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-out": "fade-out 0.25s ease-out forwards",
        "fade-in-subtle": "fade-in-subtle 0.2s ease-out forwards",
        "scale-in": "scale-in 0.3s cubic-bezier(0.16,1,0.3,1) forwards",
        "scale-out": "scale-out 0.15s ease-out forwards",
        "slide-up": "slide-up 0.3s ease-out forwards",
        "slide-down": "slide-down 0.2s ease-out forwards",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-out-right": "slide-out-right 0.25s ease-in",
        "shake": "shake 0.2s ease-in-out",
        "bounce-in": "bounce-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "count-up": "count-up 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
        "rotate-in": "rotate-in 0.3s ease-out forwards",
        "pulse-dot": "pulse-dot 1s ease-in-out infinite",
        "skeleton": "skeleton-pulse 1.5s ease-in-out infinite",
        "progress": "progress-fill 0.4s ease-out forwards",
        "spin-smooth": "spin-smooth 1s linear infinite",
        "page-enter": "page-enter 0.2s ease-out forwards",
        "stagger-in": "stagger-in 0.35s cubic-bezier(0.16,1,0.3,1) forwards",
        "chip-press": "chip-press 0.15s ease-out",
        "enter": "fade-in 0.3s ease-out, scale-in 0.2s ease-out",
        "exit": "fade-out 0.25s ease-out, scale-out 0.15s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
