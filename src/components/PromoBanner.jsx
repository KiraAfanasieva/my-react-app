import { useState, useEffect } from 'react';

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState(36000); // 10 годин

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h}г ${m}хв ${sec}с`;
  };

  return (
    <div className="promo-banner light-gray">
      <p>🎁 Акція: -20% на всі номери! До кінця: <span>{formatTime(timeLeft)}</span></p>
    </div>
  );
};

export default PromoBanner;