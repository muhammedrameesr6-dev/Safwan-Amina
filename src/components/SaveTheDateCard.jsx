import React, { useState, useEffect, useRef } from 'react';
import { Calendar } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import { CornerGoldOrnament } from './Ornaments';

const dateBadges = [
  { v: weddingData.dateFormatted.day, l: 'Date' },
  { v: weddingData.dateFormatted.month, l: 'Month' },
  { v: weddingData.dateFormatted.year, l: 'Year' },
  { v: 'Ceremony', l: 'Nikkah & Reception' },
];

export function SaveTheDateCard() {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setFlipped(true), 650);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // December 2026 calendar starts on Tuesday (offset of 2 blank days: Sunday & Monday)
  const offsetDays = 2; // Dec 1, 2026 is Tuesday
  const totalDays = 31; // December has 31 days

  return (
    <div ref={cardRef} className="mx-auto w-full max-w-md px-2 text-center">
      <p className="font-serif text-lg sm:text-xl italic text-[#dfba73] mb-3">
        By the grace of the Almighty
      </p>

      {/* 3D Flip Card Container */}
      <div
        className="card-flip-container relative min-h-[390px] w-full cursor-pointer select-none"
        onClick={() => setFlipped((prev) => !prev)}
      >
        <div className={`card-flip-inner min-h-[390px] w-full ${flipped ? 'flipped' : ''}`}>
          {/* Front Face */}
          <div className="card-face-front absolute inset-0 rounded-sm border border-[#dfba73]/40 bg-[#041c16]/90 p-6 sm:p-8 flex flex-col justify-between items-center shadow-2xl overflow-hidden">
            <div className="pointer-events-none absolute inset-2.5 border border-[#dfba73]/50" />
            <div className="pointer-events-none absolute inset-4 border border-[#dfba73]/25" />
            <CornerGoldOrnament className="absolute left-1 top-1 h-20 w-20 text-[#dfba73] pointer-events-none opacity-85" />
            <CornerGoldOrnament className="absolute right-1 top-1 h-20 w-20 -scale-x-100 text-[#dfba73] pointer-events-none opacity-85" />

            <div className="pt-2">
              <p className="font-cinzel text-xs tracking-[0.4em] text-[#dfba73] uppercase font-semibold">
                SAVE THE DATE
              </p>
              <div className="mt-1 flex items-center justify-center gap-1.5">
                <span className="h-px w-8 bg-[#dfba73]/40" />
                <span className="h-1 w-1 rotate-45 bg-[#dfba73]" />
                <span className="h-px w-8 bg-[#dfba73]/40" />
              </div>
            </div>

            {/* Circular Date Badge */}
            <div className="pulse-gold relative flex items-center justify-center my-auto">
              <div className="relative flex h-32 w-32 sm:h-36 sm:w-36 items-center justify-center rounded-full bg-gradient-to-br from-[#dfba73] via-[#05241c] to-[#041c16] p-1.5 shadow-[0_12px_28px_rgba(0,0,0,0.85)] border border-[#dfba73]/80">
                <div className="relative flex h-full w-full flex-col items-center justify-center rounded-full bg-[#05261e] border border-[#dfba73]/60 shadow-inner px-2">
                  <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-widest text-[#dfba73] uppercase">
                    {weddingData.dateFormatted.month}
                  </span>
                  <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#fdfbf7] leading-tight drop-shadow my-0.5">
                    {weddingData.dateFormatted.day}
                  </span>
                  <span className="font-cinzel text-xs sm:text-sm tracking-wider text-[#dfba73]/90">
                    {weddingData.dateFormatted.year}
                  </span>
                </div>
              </div>
            </div>

            <div className="pb-1 text-center">
              <p className="font-serif text-sm sm:text-base italic text-[#fdfbf7]/80">
                Saturday &amp; Sunday · Nikkah &amp; Reception
              </p>
              <p className="mt-2 text-[10px] font-cinzel tracking-widest text-[#dfba73]/60 uppercase">
                ✦ Tap to View Calendar ✦
              </p>
            </div>
          </div>

          {/* Back Face */}
          <div className="card-face-back absolute inset-0 rounded-sm border border-[#dfba73]/40 bg-[#041c16]/95 p-5 sm:p-6 flex flex-col justify-between items-center shadow-2xl overflow-hidden">
            <div className="pointer-events-none absolute inset-2.5 border border-[#dfba73]/50" />
            <div className="pointer-events-none absolute inset-4 border border-[#dfba73]/25" />
            <CornerGoldOrnament className="absolute left-1 top-1 h-16 w-16 text-[#dfba73] pointer-events-none opacity-80" />
            <CornerGoldOrnament className="absolute right-1 top-1 h-16 w-16 -scale-x-100 text-[#dfba73] pointer-events-none opacity-80" />

            {/* 4-Column Badges */}
            <div className="w-full grid grid-cols-4 gap-1 rounded-sm border border-[#dfba73]/30 bg-[#05261e]/80 py-2.5 shadow-lg">
              {dateBadges.map((b) => (
                <div key={b.l} className="px-1 text-center">
                  <div className="font-cinzel text-base sm:text-lg text-[#fdfbf7] font-bold">
                    {b.v}
                  </div>
                  <div className="mt-0.5 text-[8px] sm:text-[9px] uppercase tracking-[0.15em] text-[#dfba73] truncate">
                    {b.l}
                  </div>
                </div>
              ))}
            </div>

            {/* Calendar Grid for December 2026 */}
            <div className="w-full my-auto px-1">
              <div className="flex items-center justify-between pb-1.5 border-b border-[#dfba73]/30">
                <span className="font-cinzel text-xs font-bold tracking-widest text-[#dfba73]">
                  {weddingData.dateFormatted.monthFull} {weddingData.dateFormatted.year}
                </span>
                <span className="font-serif text-xs italic text-[#f5d58f]">
                  Sat &amp; Sun · The Wedding Days
                </span>
              </div>
              <div className="grid grid-cols-7 text-center pt-2 text-[10px] font-cinzel font-bold text-[#dfba73]/80">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                  <div key={idx} className={idx === 0 || idx === 6 ? 'text-[#f5d58f]' : ''}>
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 pt-1.5 text-center text-xs font-serif text-[#fdfbf7]/80">
                {/* Blank cells for offset */}
                {Array.from({ length: offsetDays }, (_, idx) => (
                  <div key={`blank-${idx}`} className="h-6 sm:h-6" />
                ))}
                {/* 31 days */}
                {Array.from({ length: totalDays }, (_, idx) => {
                  const dayNum = idx + 1;
                  const isWeddingDay = dayNum === 26 || dayNum === 27;
                  return (
                    <div
                      key={dayNum}
                      className={`h-6 sm:h-6 flex items-center justify-center rounded-full transition-all ${
                        isWeddingDay
                          ? 'pulse-gold bg-[#dfba73] text-[#041c16] font-bold font-cinzel shadow-md scale-110 z-10'
                          : 'hover:bg-[#dfba73]/10'
                      }`}
                    >
                      {dayNum}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons & Flip Hint */}
            <div className="w-full flex items-center justify-center gap-3 pt-1">
              <a
                href={weddingData.events[0].calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#dfba73] bg-[#0b3a2d] px-4 py-2 font-cinzel text-[10px] sm:text-[11px] tracking-widest text-[#f5d58f] transition hover:bg-[#072920] shadow-md cursor-pointer"
              >
                <Calendar className="h-3.5 w-3.5 text-[#dfba73]" />
                ADD TO CALENDAR
              </a>
              <span className="text-[10px] font-cinzel tracking-widest text-[#dfba73]/60 uppercase">
                ✦ Click to Flip ✦
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
