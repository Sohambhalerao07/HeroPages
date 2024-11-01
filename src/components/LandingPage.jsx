import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function LandingPage() {
  const textRef = useRef(null);

  useEffect(() => {
    
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' } 
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-navbar-color">
      <h1
        ref={textRef}
        className="Anton text-3xl font-extrabold cursor-pointer tracking-wide"
      >
        PHA5E
      </h1>
      <div className="mt-8">
       
      </div>
    </div>
  );
}

export default LandingPage;
