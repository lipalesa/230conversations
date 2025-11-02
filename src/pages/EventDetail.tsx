import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowLeft } from 'lucide-react';
import { supabase, type Event } from '../lib/supabase';

export default function EventDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchEvent();
    }
  }, [slug]);

  const fetchEvent = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('events')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();

    if (data) {
      setEvent(data);
    }
    setLoading(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16 bg-white dark:bg-black">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#a57614] dark:border-[#d4a574]"></div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16 bg-white dark:bg-black">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Event Not Found</h1>
          <Link
            to="/events"
            className="text-[#a57614] dark:text-[#d4a574] font-semibold hover:text-[#8c6310] dark:hover:text-[#b8935f] transition-colors"
          >
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-black">
      <div className="relative h-96">
        <img
          src={event.image_url || 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1920'}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-white dark:bg-neutral-950 rounded-lg shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
          <Link
            to="/events"
            className="inline-flex items-center text-[#a57614] dark:text-[#d4a574] font-semibold hover:text-[#8c6310] dark:hover:text-[#b8935f] transition-colors mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Events
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{event.title}</h1>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mb-8 space-y-3 md:space-y-0">
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <Calendar size={20} className="mr-2 text-[#a57614] dark:text-[#d4a574]" />
              <span className="font-medium">{formatDate(event.date)}</span>
            </div>
            {event.location && (
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <MapPin size={20} className="mr-2 text-[#a57614] dark:text-[#d4a574]" />
                <span className="font-medium">{event.location}</span>
              </div>
            )}
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {event.description}
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Interested in Attending?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We'd love to see you there! Connect with us to get more details and register for this event.
            </p>
            <Link
              to="/connect"
              className="inline-block bg-[#a57614] dark:bg-[#d4a574] text-white px-8 py-3 rounded-md hover:bg-[#8c6310] dark:hover:bg-[#b8935f] transition-colors font-semibold"
            >
              Get Connected
            </Link>
          </div>
        </div>
      </div>

      <div className="h-16" />
    </div>
  );
}
