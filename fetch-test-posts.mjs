import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://aobpbfmqvwfeifhimrir.supabase.co"
const supabaseKey = "sb_publishable_K3DfAp68SctAcS6ZCugWsA_CZZ24xvE"

const supabase = createClient(supabaseUrl, supabaseKey)

async function main() {
  const { data, error } = await supabase
    .from('community_posts')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10)
    
  console.log("Recent posts:", data)
  if (error) console.error("Error:", error)
}
main()
