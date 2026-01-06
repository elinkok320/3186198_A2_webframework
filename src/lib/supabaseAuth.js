import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://xarsycpiqgviqkxyodbv.supabase.co';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhcnN5Y3BpcWd2aXFreHlvZGJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc0NDk5NDksImV4cCI6MjA4MzAyNTk0OX0.Oppyl8Oz3RrPAHdjjZkGV8SX-m1GdGOgga9KqPRNySI';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

