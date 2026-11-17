import React, { useState, useEffect } from 'react';
import { weddingData } from '../config/weddingData';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const targetTime = new Date(weddingData.eventDateISO).getTime();

    const updateTimer = () => {
      const diff = Math.max(0, targetTime - Date.now());
      setTimeLeft({
        Days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((diff / (1000 * 60)) % 60),
        Seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = ['Days', 'Hours', 'Minutes', 'Seconds'];

  return (
    <div className="mx-auto grid max-w-md grid-cols-4 gap-2.5 px-2">
      {units.map((unit) => (
        <div
          key={unit}
          className="rounded-sm border border-[#dfba73]/40 bg-[#05241c]/80 py-3.5 sm:py-4 text-center shadow-lg"
        >
          <div className="font-cinzel text-xl sm:text-2xl text-[#fdfbf7] font-bold">
            {timeLeft === null ? '--' : String(timeLeft[unit]).padStart(2, '0')}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#dfba73]">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
}
