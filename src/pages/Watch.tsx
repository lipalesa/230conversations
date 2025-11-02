import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import VideoCard from '../components/VideoCard';
import { supabase, type Video } from '../lib/supabase';

export default function Watch() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('videos')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) {
      setVideos(data);
    }
    setLoading(false);
  };

  const categories = ['All', ...Array.from(new Set(videos.map(v => v.category).filter(Boolean)))];

  const filteredVideos = selectedCategory === 'All'
    ? videos
    : videos.filter(v => v.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Hero
        title="Watch & Learn"
        subtitle="Explore our video archive of sermons, panel discussions, testimonies, and more. Dive into conversations that challenge, inspire, and strengthen your faith."
        imageUrl="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.length > 1 && (
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#a57614] dark:bg-[#d4a574] text-white'
                      : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#a57614] dark:border-[#d4a574]"></div>
            </div>
          ) : filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-slate-400 text-lg">
                {selectedCategory === 'All'
                  ? 'No videos available yet. Check back soon!'
                  : `No videos in the "${selectedCategory}" category.`}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-6">Stay Updated</h2>
          <p className="text-lg text-gray-600 dark:text-slate-400 mb-8 leading-relaxed">
            Subscribe to our YouTube channel to never miss a conversation. New content uploaded regularly!
          </p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#a57614] dark:bg-[#d4a574] text-white px-8 py-3 rounded-md hover:bg-[#8c6310] dark:hover:bg-[#b8935f] transition-colors font-semibold text-lg"
          >
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </div>
  );
}
