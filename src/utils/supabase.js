import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://jhhjgdwpdczvukxifzqa.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoaGpnZHdwZGN6dnVreGlmenFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5MDMxNzAsImV4cCI6MjAzMDQ3OTE3MH0.rhWY_YDng79fGJCuGmg3SGUz1U-7s3uGo4V1-u7OAD4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;