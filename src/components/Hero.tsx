import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink, imageUrl }: HeroProps) {
  const defaultImage = 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1920';

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl || defaultImage})` }}
      />
      <div className="absolute inset-0 bg-[#262450] dark:bg-black opacity-70 dark:opacity-80 transition-all duration-300" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-['Montserrat'] font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
          {title}
        </h1>
        <p className="font-['Open_Sans'] text-lg md:text-xl text-white mb-8 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <Link
            to={ctaLink}
            className="inline-block bg-[#a57614] dark:bg-[#d4a574] text-white dark:text-black px-8 py-3 rounded-md hover:bg-[#8c6310] dark:hover:bg-[#b8935f] transition-all font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
