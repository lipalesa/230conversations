import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { supabase, type BlogPost } from '../lib/supabase';

export default function BlogPostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();

    if (data) {
      setPost(data);
    }
    setLoading(false);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#a57614]"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link
            to="/read"
            className="text-[#a57614] font-semibold hover:text-[#8c6310] transition-colors"
          >
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="relative h-96">
        <img
          src={post.featured_image_url || 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920'}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <Link
            to="/read"
            className="inline-flex items-center text-[#a57614] font-semibold hover:text-[#8c6310] transition-colors mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Articles
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-600">
            {post.author && (
              <div className="flex items-center">
                <User size={18} className="mr-2 text-[#a57614]" />
                <span className="font-medium">{post.author}</span>
              </div>
            )}
            {post.publish_date && (
              <div className="flex items-center">
                <Calendar size={18} className="mr-2 text-[#a57614]" />
                <span>{formatDate(post.publish_date)}</span>
              </div>
            )}
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enjoyed this article?</h3>
                <p className="text-gray-600">Share it with your community and join the conversation.</p>
              </div>
              <Link
                to="/read"
                className="inline-block bg-[#a57614] text-white px-6 py-2 rounded-md hover:bg-[#8c6310] transition-colors font-semibold"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </article>

      <div className="h-16" />
    </div>
  );
}
