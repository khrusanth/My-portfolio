import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './DomeGallery.css';

const DomeGallery = ({
  images = [],
  autoRotate = true,
  rotationSpeed = 2,
  className = ''
}) => {
  const containerRef = useRef(null);
  const domeRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!domeRef.current || images.length === 0) return;

    const dome = domeRef.current;
    const numImages = images.length;
    const angleSlice = 360 / numImages;

    // Position images in a dome
    const items = dome.querySelectorAll('.dome-item');
    items.forEach((item, index) => {
      const angle = index * angleSlice;
      gsap.set(item, {
        rotationY: angle,
        transformOrigin: '50% 50% 500px',
        z: 500
      });
    });

    if (autoRotate) {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(dome, {
        rotationY: 360,
        duration: (360 / angleSlice) * rotationSpeed,
        ease: 'none'
      });

      return () => tl.kill();
    }
  }, [images, autoRotate, rotationSpeed]);

  const handleImageClick = (index) => {
    setActiveIndex(index);
    if (domeRef.current) {
      const numImages = images.length;
      const angleSlice = 360 / numImages;
      const targetRotation = -index * angleSlice;

      gsap.to(domeRef.current, {
        rotationY: targetRotation,
        duration: 0.8,
        ease: 'power2.inOut'
      });
    }
  };

  return (
    <div className={`dome-gallery ${className}`}>
      <div ref={containerRef} className="dome-container">
        <div
          ref={domeRef}
          className="dome"
          style={{
            perspective: '1000px'
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`dome-item ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleImageClick(index)}
            >
              <img src={image} alt={`Gallery item ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="dome-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleImageClick(index)}
            aria-label={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DomeGallery;
