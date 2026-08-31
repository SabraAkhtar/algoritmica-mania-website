import React, { useState, useEffect } from 'react';
import { Language, Product } from '../../types';
import { 
  ChevronLeft, 
  ChevronRight,
  Zap
} from 'lucide-react';

interface HeroProductShowcaseProps {
  lang: Language;
  onNavigateProducts: (cat?: any) => void;
  onNavigateProductDetail: (productId: string) => void;
  onRequestQuote: (product?: Product) => void;
}

interface ShowcaseSlide {
  id: string;
  image: string;
  glowColor: string;
  hotspots?: {
    x: number;
    y: number;
    productId?: string;
  }[];
}

export const HeroProductShowcase: React.FC<HeroProductShowcaseProps> = ({
  lang,
  onNavigateProducts,
  onNavigateProductDetail,
  onRequestQuote
}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const slides: ShowcaseSlide[] = [
    {
      id: 'slide-thinkpad',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1400&q=85',
      glowColor: '#2DD4BF',
      hotspots: [{ x: 35, y: 45, productId: 'prod-lenovo-t14s-gen2' }, { x: 70, y: 40 }]
    },
    {
      id: 'slide-macbook',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=85',
      glowColor: '#14B8A6',
      hotspots: [{ x: 50, y: 45, productId: 'prod-apple-macbook-pro-14-m1-pro' }]
    },
    {
      id: 'slide-servers',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85',
      glowColor: '#0D7E73',
      hotspots: [{ x: 45, y: 50, productId: 'prod-dell-poweredge-r640' }]
    },
    {
      id: 'slide-networking',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=85',
      glowColor: '#2DD4BF',
      hotspots: [{ x: 55, y: 45, productId: 'prod-cisco-catalyst-2960x-48fps-l' }]
    },
    {
      id: 'slide-workstation',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1400&q=85',
      glowColor: '#14B8A6',
      hotspots: [{ x: 40, y: 40, productId: 'prod-dell-latitude-5420' }]
    }
  ];

  // Automatic slide rotation every 3.5 seconds continuously
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[activeSlide];

  return (
    <div className="relative w-full rounded-2xl bg-white border border-[#CCFBF1] shadow-xl overflow-hidden group">
      {/* Main Image Stage */}
      <div 
        onClick={() => onNavigateProducts()}
        className="relative h-72 sm:h-84 md:h-96 w-full overflow-hidden cursor-pointer bg-[#F0FDFA]"
      >
        {/* Slides with smooth cross-fade animation */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt="Enterprise Hardware"
              className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-transform duration-700"
            />
            
            {/* Ambient lighting glow from pedestal edge */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 50% 100%, ${slide.glowColor} 0%, transparent 60%)`
              }}
            />

            {/* Pulsing interactive hotspot icons */}
            {slide.hotspots?.map((hs, hIdx) => (
              <div
                key={hIdx}
                style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              >
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute h-8 w-8 rounded-full bg-[#0D7E73] opacity-40"></span>
                  <div className="relative w-7 h-7 rounded-full bg-white text-[#042F2C] border-2 border-[#0D7E73] flex items-center justify-center shadow-md">
                    <Zap className="w-3.5 h-3.5 fill-[#0D7E73] text-[#0D7E73]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Left / Right Manual Navigation Controls */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-[#0D7E73] text-[#042F2C] hover:text-white border border-[#CCFBF1] transition-all cursor-pointer z-25 opacity-0 group-hover:opacity-100 shadow-md"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setActiveSlide((prev) => (prev + 1) % slides.length);
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-[#0D7E73] text-[#042F2C] hover:text-white border border-[#CCFBF1] transition-all cursor-pointer z-25 opacity-0 group-hover:opacity-100 shadow-md"
          aria-label="Next Image"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Sleek Tech Pedestal Base */}
      <div className="relative bg-white border-t border-[#CCFBF1] px-6 py-3 flex items-center justify-center">
        {/* Carousel Indicator Dots */}
        <div className="flex items-center gap-2.5 py-1">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeSlide === idx
                  ? 'w-7 h-2 bg-[#0D7E73]'
                  : 'w-2 h-2 bg-[#CCFBF1] hover:bg-[#0D7E73]/40'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
