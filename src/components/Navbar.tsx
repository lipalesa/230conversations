import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Watch', path: '/watch' },
    { name: 'Read', path: '/read' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#414143] z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-white font-bold text-xl">230 Conversations</div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-white hover:text-[#a57614] transition-colors ${
                  isActive(link.path) ? 'text-[#a57614] font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/connect"
              className="bg-[#a57614] text-white px-6 py-2 rounded-md hover:bg-[#8c6310] transition-colors font-semibold"
            >
              Connect
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#414143] border-t border-gray-600">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-white hover:text-[#a57614] transition-colors ${
                  isActive(link.path) ? 'text-[#a57614] font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/connect"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-[#a57614] text-white px-6 py-2 rounded-md hover:bg-[#8c6310] transition-colors font-semibold text-center"
            >
              Connect
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
