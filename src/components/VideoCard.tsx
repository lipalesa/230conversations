import { useState } from 'react';
import { Play, X } from 'lucide-react';
import type { Video } from '../lib/supabase';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <>
      <div
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative group">
          <img
            src={video.thumbnail_url || 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'}
            alt={video.title}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
            <div className="bg-[#a57614] rounded-full p-4 group-hover:scale-110 transition-transform">
              <Play size={32} className="text-white fill-white" />
            </div>
          </div>
          {video.duration && (
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
              {video.duration} min
            </div>
          )}
        </div>
        <div className="p-6">
          <h4 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h4>
          {video.speakers && (
            <p className="text-sm text-gray-600 mb-2">Speaker: {video.speakers}</p>
          )}
          {video.category && (
            <span className="inline-block bg-[#262450] text-white text-xs px-3 py-1 rounded-full">
              {video.category}
            </span>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-colors"
              aria-label="Close video"
            >
              <X size={24} className="text-white" />
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                src={getYouTubeEmbedUrl(video.youtube_url)}
                title={video.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
