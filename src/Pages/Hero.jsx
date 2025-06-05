import React, { useRef, useEffect } from 'react';
import './Hero.css';
import myImage from '../assets/raj.jpg';
import { FaDownload } from 'react-icons/fa';
import heroVideo from '../assets/Raj.mp4';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Play video programmatically on mount (some browsers may require this)
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        // Handle play error, usually autoplay policy restrictions
        console.log('Video playback failed:', error);
      });
    }
  }, []);

  return (
    <section id="home" className="hero-section">
      
      {/* Background video controlled via React ref */}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        src={heroVideo }
        type="video/mp4"
      >
        Your browser does not support the video tag.
      </video>

      <div className="hero-text">
        <h1>Hi, I'm Raj Kishor</h1>
        <p>
          I'm a passionate full-stack developer with hands-on experience in building scalable web applications using modern web technologies. I specialize in developing clean, efficient, and user-centric solutions—from intuitive frontends to robust backend systems. I'm also skilled in integrating third-party APIs, including AI-powered services, to deliver smart, real-world functionality that drives results.
        </p>
        <div className="hero-buttons">
          <a
            href="https://drive.google.com/file/d/1ZV5p9Mvw4KuvY1k_v3Dlmbv61xdnxcoI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <FaDownload style={{ marginRight: '8px' }} />
            Download CV
          </a>

          <a
            href="mailto:rajkishorec39@gmail.com"
            className="btn"
          >
            Contact via Gmail
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={myImage} alt="Raj Kishor" />
      </div>
    </section>
  );
};

export default Hero;
