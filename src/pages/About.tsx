import Hero from '../components/Hero';
import { Target, Eye, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      <Hero
        title="About 230 Conversations"
        subtitle="We are a youth-led ministry creating spaces for authentic conversations about faith, life, and purpose."
        imageUrl="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  230 Conversations began with a simple question: What if young Adventists had a safe space
                  to have real, honest conversations about faith, doubt, culture, and life?
                </p>
                <p>
                  Inspired by 2 Corinthians 3:0, which reminds us that we are living letters known and
                  read by all, we realized that our conversations matter. They shape who we are, influence
                  those around us, and ultimately reflect our faith journey.
                </p>
                <p>
                  Under the Trans-Orange Conference of the Seventh-day Adventist Church in South Africa,
                  230 Conversations has grown into a vibrant community of young people who aren't afraid
                  to ask hard questions, challenge assumptions, and support each other's spiritual growth.
                </p>
                <p>
                  We believe that authentic dialogue strengthens faith rather than weakens it. Through
                  events, online content, and community gatherings, we create spaces where young people
                  can be honest about their struggles, celebrate their victories, and grow together.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Community gathering"
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-[#262450] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower young Adventists to engage in authentic conversations about faith, culture,
                and purpose, creating a community where questions are welcomed, growth is celebrated,
                and every voice matters. We are committed to fostering spaces where young people can
                explore their faith journey with honesty, support, and biblical grounding.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-[#a57614] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                We envision a generation of young Adventists who are confident in their faith, equipped
                to navigate contemporary challenges, and passionate about living as authentic disciples
                of Christ. We see communities where honest dialogue strengthens relationships, where
                questions lead to deeper understanding, and where every young person feels valued and heard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-[#262450] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do at 230 Conversations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Authenticity</h4>
              <p className="text-gray-600">
                We create spaces where people can be real about their struggles, questions, and victories.
              </p>
            </div>

            <div className="text-center p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Community</h4>
              <p className="text-gray-600">
                We believe in the power of supportive relationships and intentional connection.
              </p>
            </div>

            <div className="text-center p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Growth</h4>
              <p className="text-gray-600">
                We champion continuous spiritual, emotional, and intellectual development.
              </p>
            </div>

            <div className="text-center p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Grace</h4>
              <p className="text-gray-600">
                We extend the same grace we've received, meeting people where they are with love.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#262450] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg mb-8 leading-relaxed">
            Whether you're in South Africa or anywhere in the world, you're invited to be part of
            230 Conversations. Connect with us today and discover a community that celebrates your
            questions, values your voice, and supports your faith journey.
          </p>
          <a
            href="/connect"
            className="inline-block bg-[#a57614] text-white px-8 py-3 rounded-md hover:bg-[#8c6310] transition-colors font-semibold text-lg"
          >
            Get Connected
          </a>
        </div>
      </section>
    </div>
  );
}
