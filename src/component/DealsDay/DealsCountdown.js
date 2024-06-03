import React, { useState, useEffect } from 'react';

const DealsCountdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const dealDate = new Date('2024-04-05T00:00:00'); // Set your deal end date here
      const now = new Date().getTime();
      const difference = dealDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    };

    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-item">
        <span>{countdown.days}</span> days
      </div>
      <div className="countdown-item">
        <span>{countdown.hours}</span> hours
      </div>
      <div className="countdown-item">
        <span>{countdown.minutes}</span> minutes
      </div>
      <div className="countdown-item">
        <span>{countdown.seconds}</span> seconds
      </div>
    </div>
  );
};

export default DealsCountdown;
