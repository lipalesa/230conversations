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
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#a57614] transition-colors">
            {post.title}
          </h3>
        </Link>
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
          {post.author && (
            <div className="flex items-center">
              <User size={16} className="mr-2 text-[#a57614]" />
              <span>{post.author}</span>
            </div>
          )}
          {post.publish_date && (
            <div className="flex items-center">
              <Calendar size={16} className="mr-2 text-[#a57614]" />
              <span>{formatDate(post.publish_date)}</span>
            </div>
          )}
        </div>
        <p className="text-gray-700 mb-4 line-clamp-3">
          {post.content?.substring(0, 150)}...
        </p>
        <Link
          to={`/read/${post.slug}`}
          className="inline-block text-[#a57614] font-semibold hover:text-[#8c6310] transition-colors"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}
