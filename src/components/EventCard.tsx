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
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={event.image_url || 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800'}
          alt={event.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-[#a57614] text-white px-3 py-1 rounded-md text-sm font-semibold">
          {formatDate(event.date).split(',')[0]}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
        <div className="flex items-center text-gray-600 mb-2 text-sm">
          <Calendar size={16} className="mr-2 text-[#a57614]" />
          <span>{formatDate(event.date)}</span>
        </div>
        {event.location && (
          <div className="flex items-center text-gray-600 mb-4 text-sm">
            <MapPin size={16} className="mr-2 text-[#a57614]" />
            <span>{event.location}</span>
          </div>
        )}
        <p className="text-gray-700 mb-4 line-clamp-3">{event.description}</p>
        <Link
          to={`/events/${event.slug}`}
          className="inline-block text-[#a57614] font-semibold hover:text-[#8c6310] transition-colors"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}
