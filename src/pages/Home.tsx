import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import VideoCard from '../components/VideoCard';
import BlogPostCard from '../components/BlogPostCard';
import { supabase, type Event, type Video, type BlogPost } from '../lib/supabase';
import { Users, Heart, MessageCircle } from 'lucide-react';

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetchFeaturedContent();
  }, []);

  const fetchFeaturedContent = async () => {
    const { data: eventsData } = await supabase
      .from('events')
      .select('*')
      .gte('date', new Date().toISOString().split('T')[0])
      .order('date', { ascending: true })
      .limit(3);

    const { data: videosData } = await supabase
      .from('videos')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(3);

    const { data: blogPostsData } = await supabase
      .from('blog_posts')
      .select('*')
      .order('publish_date', { ascending: false })
      .limit(3);

    if (eventsData) setEvents(eventsData);
    if (videosData) setVideos(videosData);
    if (blogPostsData) setBlogPosts(blogPostsData);
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="Welcome to 230 Conversations"
        subtitle="A space for young Adventists to engage in authentic dialogue about faith, culture, and purpose. Join us as we explore what it means to live as letters known and read by all."
        ctaText="Join the Conversation"
        ctaLink="/connect"
      />

      <section className="py-16 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why 230 Conversations?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Inspired by 2 Corinthians 3:0, we believe that authentic conversations shape who we are
              and who we become. We create spaces where young people can ask questions, share doubts,
              and grow together in faith.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#262450] dark:bg-neutral-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Community</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with like-minded young people who are navigating faith in the modern world.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#a57614] dark:bg-[#d4a574] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <MessageCircle size={32} className="text-white dark:text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Dialogue</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Engage in meaningful conversations that challenge, inspire, and deepen your faith journey.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#262450] dark:bg-neutral-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Growth</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Discover resources and support to help you grow spiritually, emotionally, and socially.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Upcoming Events</h2>
            <Link
              to="/events"
              className="text-[#a57614] dark:text-[#d4a574] font-semibold hover:text-[#8c6310] dark:hover:text-[#b8935f] transition-colors"
            >
              View All Events →
            </Link>
          </div>
          {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400 text-center py-8">No upcoming events at the moment. Check back soon!</p>
          )}
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Videos</h2>
            <Link
              to="/watch"
              className="text-[#a57614] dark:text-[#d4a574] font-semibold hover:text-[#8c6310] dark:hover:text-[#b8935f] transition-colors"
            >
              Watch More →
            </Link>
          </div>
          {videos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400 text-center py-8">No videos available yet. Check back soon!</p>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Articles</h2>
            <Link
              to="/read"
              className="text-[#a57614] dark:text-[#d4a574] font-semibold hover:text-[#8c6310] dark:hover:text-[#b8935f] transition-colors"
            >
              Read More →
            </Link>
          </div>
          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400 text-center py-8">No articles available yet. Check back soon!</p>
          )}
        </div>
      </section>
    </div>
  );
}
