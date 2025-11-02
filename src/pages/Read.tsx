import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import BlogPostCard from '../components/BlogPostCard';
import { supabase, type BlogPost } from '../lib/supabase';

export default function Read() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .order('publish_date', { ascending: false });

    if (data) {
      setPosts(data);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="Read & Reflect"
        subtitle="Explore articles, devotionals, and thought pieces that encourage deeper reflection on faith, culture, and what it means to live authentically as young Adventists."
        imageUrl="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#a57614]"></div>
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Have a Story to Share?</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We welcome guest contributions from young people who want to share their faith journey,
            insights, or perspectives. If you have something to say, we'd love to hear from you.
          </p>
          <a
            href="/connect"
            className="inline-block bg-[#a57614] text-white px-8 py-3 rounded-md hover:bg-[#8c6310] transition-colors font-semibold text-lg"
          >
            Submit Your Story
          </a>
        </div>
      </section>
    </div>
  );
}
