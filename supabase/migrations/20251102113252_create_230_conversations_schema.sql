/*
  # Create 230 Conversations Database Schema

  1. New Tables
    - `events`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `date` (date, required)
      - `location` (text)
      - `description` (text)
      - `image_url` (text)
      - `slug` (text, unique, generated from title)
      - `created_at` (timestamptz)
    
    - `videos`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `youtube_url` (text, required)
      - `thumbnail_url` (text)
      - `duration` (integer, in minutes)
      - `speakers` (text)
      - `category` (text)
      - `created_at` (timestamptz)
    
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `author` (text)
      - `publish_date` (date)
      - `content` (text)
      - `featured_image_url` (text)
      - `slug` (text, unique, generated from title)
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on all tables
    - Add public read-only policies for all content
    - No write access from client (content managed via admin panel)
*/

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  date date NOT NULL,
  location text,
  description text,
  image_url text,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS videos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  youtube_url text NOT NULL,
  thumbnail_url text,
  duration integer,
  speakers text,
  category text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  author text,
  publish_date date DEFAULT CURRENT_DATE,
  content text,
  featured_image_url text,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Events are publicly readable"
  ON events
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Videos are publicly readable"
  ON videos
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Blog posts are publicly readable"
  ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (true);

INSERT INTO events (title, date, location, description, image_url, slug) VALUES
('Youth Summit 2025', '2025-12-15', 'Cape Town, South Africa', 'Join us for an inspiring day of worship, discussion, and community building with young Adventists across South Africa.', 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800', 'youth-summit-2025'),
('Faith & Culture Workshop', '2025-11-20', 'Johannesburg, South Africa', 'Exploring how young Christians can engage with contemporary culture while staying rooted in faith.', 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800', 'faith-culture-workshop'),
('Sabbath Conversations', '2025-11-10', 'Online', 'Monthly online gathering for meaningful dialogue about faith, life, and purpose.', 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800', 'sabbath-conversations');

INSERT INTO videos (title, youtube_url, thumbnail_url, duration, speakers, category) VALUES
('Finding Purpose in Your 20s', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800', 45, 'Pastor John Smith', 'Life & Purpose'),
('Faith in the Digital Age', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800', 38, 'Dr. Sarah Johnson', 'Culture & Faith'),
('Building Authentic Community', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800', 52, 'Youth Panel Discussion', 'Community');

INSERT INTO blog_posts (title, author, publish_date, content, featured_image_url, slug) VALUES
('Why 230 Conversations?', 'Leadership Team', '2025-10-15', 'The name "230 Conversations" comes from 2 Corinthians 3:0, reminding us that we are living letters, known and read by all. Our conversations matter because they shape who we are and who we become. In this article, we explore the vision behind this ministry and why authentic dialogue is at the heart of everything we do.', 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800', 'why-230-conversations'),
('Navigating Faith Questions', 'Pastor Michael Lee', '2025-10-22', 'Every young person faces questions about faith. Is it okay to doubt? How do we reconcile science and Scripture? What about friends who believe differently? In this post, we create space for honest questions and explore how doubt can actually strengthen our faith journey.', 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800', 'navigating-faith-questions'),
('Community Over Competition', 'Emily Ndlovu', '2025-10-29', 'In a world that celebrates individual achievement, how do we build authentic community? This article explores practical ways young Adventists can support, encourage, and grow together rather than competing against each other.', 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800', 'community-over-competition');