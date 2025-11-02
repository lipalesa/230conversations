import { useState } from 'react';
import Hero from '../components/Hero';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Send } from 'lucide-react';

export default function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitMessage('Thank you for reaching out! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '', interest: 'general' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="Connect With Us"
        subtitle="Whether you're new here or a longtime friend, we'd love to hear from you. Get in touch and join the conversation."
        imageUrl="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">I'm New Here</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                <p>
                  Welcome to 230 Conversations! We're thrilled that you found us. Whether you stumbled
                  upon our website, heard about us from a friend, or are simply curious about what we do,
                  you're in the right place.
                </p>
                <p>
                  We're a community of young Adventists who believe that authentic conversations matter.
                  Here, you can:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Ask questions without judgment</li>
                  <li>Connect with like-minded peers</li>
                  <li>Explore faith in a safe, supportive environment</li>
                  <li>Participate in events and online discussions</li>
                  <li>Access resources for spiritual growth</li>
                </ul>
                <p>
                  Fill out the form to let us know you're here, and we'll reach out with more information
                  about how you can get involved!
                </p>
              </div>

              <div className="bg-[#262450] text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail size={20} className="mt-1 text-[#a57614] flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a
                        href="mailto:info@230conversations.org"
                        className="hover:text-[#a57614] transition-colors"
                      >
                        info@230conversations.org
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone size={20} className="mt-1 text-[#a57614] flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <span>+27 XX XXX XXXX</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin size={20} className="mt-1 text-[#a57614] flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Location</div>
                      <span>Trans-Orange Conference<br />South Africa</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-600">
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#a57614] transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#a57614] transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#a57614] transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>

                {submitMessage && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-md">
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#a57614] focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#a57614] focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-gray-700 font-semibold mb-2">
                      I'm Interested In
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#a57614] focus:border-transparent outline-none transition-all"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="events">Attending Events</option>
                      <option value="hosting">Hosting an Event</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="content">Contributing Content</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#a57614] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us a bit about yourself or what you'd like to know..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#a57614] text-white px-8 py-3 rounded-md hover:bg-[#8c6310] transition-colors font-semibold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
