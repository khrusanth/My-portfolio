import React, { useRef, useEffect } from 'react';
import './GlareHover.css';

const GlareHover = ({ children, className = '' }) => {
  const containerRef = useRef(null);
  const glareRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const glare = glareRef.current;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glare.style.opacity = '1';
      glare.style.left = `${x}px`;
      glare.style.top = `${y}px`;
    };

    const handleMouseLeave = () => {
      const glare = glareRef.current;
      glare.style.opacity = '0';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={`glare-hover ${className}`}>
      {children}
      <div
        ref={glareRef}
        className="glare-effect"
      />
    </div>
  );
};

export default GlareHover;
