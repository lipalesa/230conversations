import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollPosition } from '../hooks/useScrollPosition';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const scrollPosition = useScrollPosition();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Watch', path: '/watch' },
    { name: 'Read', path: '/read' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isScrolled = scrollPosition > 10;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-lg bg-[#1a1a1a]/95 dark:bg-black/90 border-b border-gray-700/50 dark:border-gray-800/50 shadow-lg'
          : 'bg-[#262626] dark:bg-black shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-white font-bold text-xl">
              230 Conversations
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-white hover:text-[#a57614] dark:hover:text-[#d4a574] transition-colors ${
                  isActive(link.path)
                    ? 'text-[#a57614] dark:text-[#d4a574] font-semibold'
                    : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/connect"
              className="bg-[#a57614] dark:bg-[#d4a574] text-white dark:text-black px-6 py-2 rounded-md hover:bg-[#8c6310] dark:hover:bg-[#b8935f] transition-all font-semibold shadow-md hover:shadow-lg"
            >
              Connect
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-white hover:bg-white/10 dark:hover:bg-gray-900/50 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-white hover:bg-white/10 dark:hover:bg-gray-900/50 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#262626] dark:bg-black border-t border-gray-700 dark:border-gray-800">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-white hover:text-[#a57614] dark:hover:text-[#d4a574] transition-colors ${
                  isActive(link.path)
                    ? 'text-[#a57614] dark:text-[#d4a574] font-semibold'
                    : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/connect"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-[#a57614] dark:bg-[#d4a574] text-white dark:text-black px-6 py-2 rounded-md hover:bg-[#8c6310] dark:hover:bg-[#b8935f] transition-all font-semibold text-center"
            >
              Connect
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
