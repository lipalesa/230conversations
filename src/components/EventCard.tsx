import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import type { Event } from '../lib/supabase';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white dark:bg-neutral-950 rounded-lg overflow-hidden shadow-md hover:shadow-xl dark:shadow-black/50 dark:hover:shadow-black transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]">
      <div className="relative">
        <img
          src={event.image_url || 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800'}
          alt={event.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-[#a57614] dark:bg-[#d4a574] text-white dark:text-black px-3 py-1 rounded-md text-sm font-semibold shadow-lg">
          {formatDate(event.date).split(',')[0]}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{event.title}</h3>
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2 text-sm">
          <Calendar size={16} className="mr-2 text-[#a57614] dark:text-[#d4a574]" />
          <span>{formatDate(event.date)}</span>
        </div>
        {event.location && (
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4 text-sm">
            <MapPin size={16} className="mr-2 text-[#a57614] dark:text-[#d4a574]" />
            <span>{event.location}</span>
          </div>
        )}
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{event.description}</p>
        <Link
          to={`/events/${event.slug}`}
          className="inline-block text-[#a57614] dark:text-[#d4a574] font-semibold hover:text-[#8c6310] dark:hover:text-[#b8935f] transition-colors"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}
