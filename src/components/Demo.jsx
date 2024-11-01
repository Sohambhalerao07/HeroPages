import React, { useRef } from 'react';
import { gsap } from 'gsap';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

function Hero() {
  const imageRefs = useRef([]);
  const containerRefs = useRef([]);
  const textRefs = useRef([]);

  const handleMouseEnter = (index) => {
    gsap.to(imageRefs.current[index], {
      scale: 1.2,
      duration: 0.3,
      ease: 'power3.out',
    });

    // Set opacity of text elements to 0.2
    textRefs.current.forEach((text) => {
      gsap.to(text, { opacity: 0.2, duration: 0.3, ease: 'power3.out' });
    });

    // Bring the image to the front by increasing its z-index
    containerRefs.current[index].style.zIndex = '30';
  };

  const handleMouseLeave = (index) => {
    gsap.to(imageRefs.current[index], {
      scale: 1,
      x: 0,
      y: 0,
      duration: 0.3,
      ease: 'power3.out',
    });

    // Reset text opacity to 1
    textRefs.current.forEach((text) => {
      gsap.to(text, { opacity: 1, duration: 0.3 });
    });

    // Reset z-index so text appears on top when not hovering
    containerRefs.current[index].style.zIndex = '10';
  };

  const handleMouseMove = (e, index) => {
    const container = containerRefs.current[index];
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(imageRefs.current[index], {
      x: x * 1,
      y: y * 1,
      duration: 0.3,
      ease: 'power3.out',
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-navbar-color">
      {/* Container divs for each image */}
      {[image1, image2, image3, image4].map((image, i) => (
        <div
          key={i}
          ref={(el) => (containerRefs.current[i] = el)}
          className="absolute w-64 h-64 flex items-center justify-center"
          style={{ ...getPositionStyle(i), zIndex: '10' }}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={() => handleMouseLeave(i)}
          onMouseMove={(e) => handleMouseMove(e, i)}
        >
          <img
            ref={(el) => (imageRefs.current[i] = el)}
            src={image}
            alt={`Image ${i + 1}`}
            className="w-40 h-40 object-cover"
          />
        </div>
      ))}

      {/* Text elements */}
      <div ref={(el) => (textRefs.current[0] = el)} className="absolute inline-block font-anton font-extrabold md:text-5xl lg:text-9xl tracking-wide hero-text" style={{ top: '5%', left: '30%', zIndex: '20' }}>IMAGINING</div>
      <div ref={(el) => (textRefs.current[1] = el)} className="absolute inline-block font-anton font-extrabold md:text-5xl lg:text-9xl tracking-wide hero-text" style={{ top: '25%', left: '35%', zIndex: '20' }}>UNIQUE</div>
      <div ref={(el) => (textRefs.current[2] = el)} className="absolute inline-block font-anton font-extrabold md:text-5xl lg:text-9xl tracking-wide hero-text" style={{ top: '45%', left: '31%', zIndex: '20' }}>CONCEPTS</div>
      <div ref={(el) => (textRefs.current[3] = el)} className="absolute inline-block font-anton font-extrabold md:text-5xl lg:text-9xl tracking-wide hero-text" style={{ top: '65%', left: '29%', zIndex: '20' }}>AND DIGITAL</div>
      <div ref={(el) => (textRefs.current[4] = el)} className="absolute inline-block font-anton font-extrabold md:text-5xl lg:text-9xl tracking-wide hero-text" style={{ top: '85%', left: '25%', zIndex: '20' }}>EXPERIENCES</div>
    </div>
  );
}

const getPositionStyle = (index) => {
  const positions = [
    { top: '15%', left: '10%' },
    { top: '20%', right: '15%' },
    { bottom: '20%', left: '20%' },
    { bottom: '15%', right: '10%' },
  ];
  return positions[index];
};

export default Hero;
  