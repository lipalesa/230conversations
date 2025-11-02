import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import { supabase, type Event } from '../lib/supabase';

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: true });

    if (data) {
      setEvents(data);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="Events & Gatherings"
        subtitle="Join us for inspiring conversations, workshops, and community gatherings. Whether online or in-person, there's always a space for you at 230 Conversations."
        imageUrl="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
              Mark your calendar and join us for these exciting opportunities to connect, learn, and grow together.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#a57614] dark:border-[#d4a574]"></div>
            </div>
          ) : events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-slate-400 text-lg">No events scheduled at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-6">Want to Host an Event?</h2>
          <p className="text-lg text-gray-600 dark:text-slate-400 mb-8 leading-relaxed">
            Are you interested in bringing 230 Conversations to your community? We'd love to partner
            with local churches, youth groups, and organizations to create meaningful dialogue spaces.
          </p>
          <a
            href="/connect"
            className="inline-block bg-[#a57614] dark:bg-[#d4a574] text-white px-8 py-3 rounded-md hover:bg-[#8c6310] dark:hover:bg-[#b8935f] transition-colors font-semibold text-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
