import React, { useState, useEffect } from 'react';
import Smartwatch from '../assets/Smartwatch.png'


const TodoWrapper = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hello, let's get you ready for the day!";
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
    <div>
      <div className="text-5xl font-bold text-gray-800 font-head text-center">
        {typedText}
        <div className="flex items-center justify-center h-screen -z-1 opacity-30">
        <img
          src={Smartwatch}
          alt="Smartwatch"
          className="max-w-full max-h-full"
        />
    </div>
      </div>
    </div>
  );
};

export default TodoWrapper;
