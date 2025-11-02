import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Event = {
  id: string;
  title: string;
  date: string;
  location: string | null;
  description: string | null;
  image_url: string | null;
  slug: string;
  created_at: string;
};

export type Video = {
  id: string;
  title: string;
  youtube_url: string;
  thumbnail_url: string | null;
  duration: number | null;
  speakers: string | null;
  category: string | null;
  created_at: string;
};

export type BlogPost = {
  id: string;
  title: string;
  author: string | null;
  publish_date: string | null;
  content: string | null;
  featured_image_url: string | null;
  slug: string;
  created_at: string;
};
