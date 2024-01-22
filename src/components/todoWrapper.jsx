import React, { useState, useEffect } from 'react';

const TodoWrapper = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hello, let me organize your day!";
  const typingSpeed = 50; // Adjust the speed as needed

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    // Cleanup the interval on component unmount
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="text-5xl font-bold text-gray-800 text-center">
      {typedText}
      <span className="text-gray-800 animate-blink">|</span>
    </div>
  );
};

export default TodoWrapper;
