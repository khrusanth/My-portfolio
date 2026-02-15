import React from 'react';
import './ShinyText.css';

const ShinyText = ({
  text = 'Shiny Text',
  className = '',
  duration = 3,
  delay = 0
}) => {
  return (
    <span
      className={`shiny-text ${className}`}
      style={{
        '--duration': `${duration}s`,
        '--delay': `${delay}s`
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
