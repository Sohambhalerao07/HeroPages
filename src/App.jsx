import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LandingPage from './components/LandingPage';

function App() {
  const [showLanding, setShowLanding] = useState(true); 
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false); 
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLanding ? (
        <LandingPage />
      ) : (
        <>
          <Navbar />
          <Hero />
        </>
      )}
    </>
  );
}

export default App;
