import { SectionProps } from '@/types/SectionProps';
import React from 'react';

const AboutSection = ({ className }: SectionProps) => {
  return (
    <section id="about" className={`${className} mt-24 mb-24`}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Video Background */}
        <div className="relative w-full"> {/* Remove fixed aspect ratio */}
          <div className="aspect-video"> {/* Maintain 16:9 aspect ratio */}
            <video 
              className="w-full h-full object-cover" 
              autoPlay 
              loop 
              muted 
              playsInline 
              src="https://videos.pexels.com/video-files/6091108/6091108-uhd_1440_2732_30fps.mp4"
            />
          </div>
        </div>
        <div className="p-4 md:p-8 lg:p-24"> {/* Responsive padding */}
          <h1 className="font-amatic font-bold text-3xl md:text-4xl lg:text-5xl mb-4 mt-8">
            Welcome to <span className="text-primary">PIZZATA🍕!</span>
          </h1>
          <div className="text-gray-300">
            <p className="font-amatic text-xl md:text-2xl lg:text-3xl mb-4 leading-relaxed">
              At Pizza Factory, our story is a delightful journey of passion and flavor.
              It all began with a love for crafting the perfect pizza, blending tradition with innovation.
              Our chefs, inspired by the rich culinary heritage of Italy, handpick the finest ingredients
              to create mouthwatering masterpieces. From our artisanal crusts to the delectable toppings,
              each pizza tells a tale of dedication and quality.
            </p>
            <p className="font-amatic text-xl md:text-2xl lg:text-3xl leading-relaxed">
              With a commitment to excellence, we&apos;ve built a community that cherishes every slice.
              Join us on this gastronomic adventure, where every order is a chapter in our story—a story of taste,
              tradition, and the joy of sharing exceptional food.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
