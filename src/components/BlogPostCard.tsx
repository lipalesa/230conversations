import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import type { BlogPost } from '../lib/supabase';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl dark:shadow-slate-900/50 dark:hover:shadow-slate-900 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]">
      <Link to={`/read/${post.slug}`}>
        <img
          src={post.featured_image_url || 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'}
          alt={post.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </Link>
      <div className="p-6">
        <Link to={`/read/${post.slug}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-3 hover:text-[#a57614] dark:hover:text-[#d4a574] transition-colors">
            {post.title}
          </h3>
        </Link>
        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-slate-400 mb-4">
          {post.author && (
            <div className="flex items-center">
              <User size={16} className="mr-2 text-[#a57614] dark:text-[#d4a574]" />
              <span>{post.author}</span>
            </div>
          )}
          {post.publish_date && (
            <div className="flex items-center">
              <Calendar size={16} className="mr-2 text-[#a57614] dark:text-[#d4a574]" />
              <span>{formatDate(post.publish_date)}</span>
            </div>
          )}
        </div>
        <p className="text-gray-700 dark:text-slate-300 mb-4 line-clamp-3">
          {post.content?.substring(0, 150)}...
        </p>
        <Link
          to={`/read/${post.slug}`}
          className="inline-block text-[#a57614] dark:text-[#d4a574] font-semibold hover:text-[#8c6310] dark:hover:text-[#b8935f] transition-colors"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}
