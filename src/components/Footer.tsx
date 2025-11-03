import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#414143] dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">About</h3>
            <div className="text-lg font-semibold mb-2">230 Conversations</div>
            <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
              A youth-led ministry under the Trans-Orange Conference of the Seventh-day Adventist Church,
              creating spaces for authentic conversations about faith, life, and purpose.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 dark:text-gray-400 hover:text-[#a57614] dark:hover:text-[#d4a574] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 dark:text-gray-400 hover:text-[#a57614] dark:hover:text-[#d4a574] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 dark:text-gray-400 hover:text-[#a57614] dark:hover:text-[#d4a574] transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/watch" className="text-gray-300 dark:text-gray-400 hover:text-[#a57614] dark:hover:text-[#d4a574] transition-colors">
                  Watch
                </Link>
              </li>
              <li>
                <Link to="/read" className="text-gray-300 dark:text-gray-400 hover:text-[#a57614] dark:hover:text-[#d4a574] transition-colors">
                  Read
                </Link>
              </li>
              <li>
                <Link to="/connect" className="text-gray-300 dark:text-gray-400 hover:text-[#a57614] dark:hover:text-[#d4a574] transition-colors">
                  Connect
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail size={18} className="mt-1 text-[#a57614] dark:text-[#d4a574] flex-shrink-0" />
                <a
                  href="mailto:info@230conversations.org"
                  className="text-gray-300 dark:text-gray-400 hover:text-[#a57614] dark:hover:text-[#d4a574] transition-colors"
                >
                  info@230conversations.org
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={18} className="mt-1 text-[#a57614] dark:text-[#d4a574] flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-400">+27 XX XXX XXXX</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 text-[#a57614] dark:text-[#d4a574] flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-400">South Africa</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 dark:text-gray-400 hover:text-[#a57614] dark:hover:text-[#d4a574] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 dark:text-gray-400 hover:text-[#a57614] dark:hover:text-[#d4a574] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 dark:text-gray-400 hover:text-[#a57614] dark:hover:text-[#d4a574] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-600 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © 2025 230 Conversations. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 dark:text-gray-500 text-sm hover:text-[#a57614] dark:hover:text-[#d4a574] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 dark:text-gray-500 text-sm hover:text-[#a57614] dark:hover:text-[#d4a574] transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
