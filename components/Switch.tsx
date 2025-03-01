'use client';

import { useState, useEffect } from 'react';

const SwitchSet = () => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    console.log('Switch state changed to:', isOn);
  }, [isOn]);

  const toggleSwitch = () => {
    console.log('Toggle clicked'); // Debug log
    setIsOn((prevState) => {
      console.log('Setting new state:', !prevState); // Debug log
      return !prevState;
    });
  };

  // Log when component renders
  console.log('Switch rendered, current state:', isOn);

  return (
    <div className="flex items-center">
      <div
        onClick={toggleSwitch}
        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
          isOn ? 'bg-green-500' : 'bg-gray-300'
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
            isOn ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </div>
      <span className="ml-2">{isOn ? 'ON' : 'OFF'}</span>
    </div>
  );
};

export default SwitchSet;