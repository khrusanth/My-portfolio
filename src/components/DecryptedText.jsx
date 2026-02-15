import React, { useState, useEffect, useRef } from 'react';
import './DecryptedText.css';

const DecryptedText = ({
  text = 'Decrypted Text',
  speed = 50,
  maxRandomChars = 3,
  revealDirection = 'start',
  className = ''
}) => {
  const [displayText, setDisplayText] = useState('');
  const intervalRef = useRef(null);
  const indexRef = useRef(0);

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

  const getRandomChar = () => alphabet[Math.floor(Math.random() * alphabet.length)];

  const decrypt = () => {
    if (indexRef.current <= text.length) {
      let newText = '';

      // Decrypt revealed characters
      for (let i = 0; i < indexRef.current; i++) {
        newText += text[i];
      }

      // Add random characters for unrevealed part
      const remainingLength = text.length - indexRef.current;
      for (let i = 0; i < remainingLength; i++) {
        newText += getRandomChar();
      }

      setDisplayText(newText);
      indexRef.current++;
    } else {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    indexRef.current = 0;
    setDisplayText(text.split('').map(() => getRandomChar()).join(''));

    intervalRef.current = setInterval(decrypt, speed);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, speed]);

  return (
    <span className={`decrypted-text ${className}`}>
      {displayText}
    </span>
  );
};

export default DecryptedText;
