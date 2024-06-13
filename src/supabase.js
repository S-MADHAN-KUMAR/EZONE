import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://njuwstkfbfgbxvamrlxr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qdXdzdGtmYmZnYnh2YW1ybHhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxODI0MDUsImV4cCI6MjAzMzc1ODQwNX0.ICDuwIlR-VVpaXSOaXN5oVA3JZ5hOrbrfB4jbjzgvtY"
);

export default supabase;