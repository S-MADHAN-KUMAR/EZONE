import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://pyfusxatiafnfaesecsb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5ZnVzeGF0aWFmbmZhZXNlY3NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3NDIwODksImV4cCI6MjA0NzMxODA4OX0.yjGKgMBMB_3Ku1pQxYa9EqZwVSmPkuvMUeKx1iimz7U"
);

export default supabase;
