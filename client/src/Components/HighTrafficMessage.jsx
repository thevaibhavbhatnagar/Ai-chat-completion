import React, { useState, useEffect } from 'react';

const HighTrafficMessage = ({isHighTraffic,isDarkMode}) => {
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    // Start the countdown timer
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Clear the timer and reset the state when the countdown reaches 0
    if (countdown === 0) {
      clearInterval(timer);
      setCountdown(60);
    }

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [countdown]);

  // Show the high traffic message and countdown timer
  return (
    <div className={`flex md:flex-row flex-col gap-1 ${isDarkMode ? '  text-gray-50' : 'text-gray-800 ' }`}>
      {isHighTraffic && <div>We are experiencing high traffic</div>}
      {isHighTraffic && <div>Countdown:  {countdown} seconds</div>}
    </div>
  );
};

export default HighTrafficMessage;
