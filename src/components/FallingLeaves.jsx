import React, { useState, useEffect } from 'react';
import { SlenderLeaf, CurvedLeaf, PetalParticle, SparkleParticle } from './Ornaments';

export function FallingLeaves({ count = 18 }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const sways = ['leaf-sway-1', 'leaf-sway-2', 'leaf-sway-3'];
    const generated = Array.from({ length: count }, (_, idx) => {
      const rand = Math.random();
      let type = 'slender';
      let w = 17;
      let h = 26;

      if (rand < 0.38) {
        type = 'slender';
        const scale = 0.8 + Math.random() * 0.45;
        w = Math.round(18 * scale);
        h = Math.round(28 * scale);
      } else if (rand < 0.72) {
        type = 'curved';
        const scale = 0.8 + Math.random() * 0.45;
        w = Math.round(22 * scale);
        h = Math.round(26 * scale);
      } else if (rand < 0.88) {
        type = 'petal';
        const scale = 0.75 + Math.random() * 0.4;
        w = Math.round(19 * scale);
        h = Math.round(19 * scale);
      } else {
        type = 'sparkle';
        const scale = 0.65 + Math.random() * 0.4;
        w = Math.round(13 * scale);
        h = Math.round(13 * scale);
      }

      const colPct = (idx / count) * 100;
      const left = Math.max(2, Math.min(95, colPct + (Math.random() - 0.5) * (100 / count)));
      const fallDur = 7 + Math.random() * 5.5;
      const fallDelay = -Math.random() * fallDur;
      const driftX = (Math.random() - 0.5) * 80;
      const swayClass = type === 'sparkle' ? 'sparkle-twinkle' : sways[Math.floor(Math.random() * sways.length)];
      const swayDur = 1.3 + Math.random() * 1;
      const swayDelay = -Math.random() * 2;

      return {
        id: idx,
        type,
        left,
        w,
        h,
        fallDur,
        fallDelay,
        driftX,
        swayClass,
        swayDur,
        swayDelay,
      };
    });

    setParticles(generated);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-35 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="continuous-leaf-wrapper"
          style={{
            left: `${p.left}%`,
            width: p.w,
            height: p.h,
            '--drift-x': `${p.driftX}px`,
            '--fall-dur': `${p.fallDur}s`,
            '--fall-delay': `${p.fallDelay}s`,
          }}
        >
          <div
            className={p.swayClass}
            style={{
              '--sway-dur': `${p.swayDur}s`,
              '--sway-delay': `${p.swayDelay}s`,
            }}
          >
            {p.type === 'slender' && <SlenderLeaf />}
            {p.type === 'curved' && <CurvedLeaf />}
            {p.type === 'petal' && <PetalParticle />}
            {p.type === 'sparkle' && <SparkleParticle />}
          </div>
        </div>
      ))}
    </div>
  );
}
