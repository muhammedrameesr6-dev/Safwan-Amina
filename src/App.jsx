import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { weddingData } from './config/weddingData';
import { EnvelopeGatefold } from './components/EnvelopeGatefold';
import { MainInvitation } from './components/MainInvitation';
import { FallingLeaves } from './components/FallingLeaves';
import { TapBurstParticles } from './components/TapBurstParticles';

export default function App() {
  const [stage, setStage] = useState('closed'); // 'closed' | 'open'
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const showParticles = hasInteracted || stage !== 'closed';

  const handleStartOpen = () => {
    setHasInteracted(true);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          let vol = 0;
          const ramp = setInterval(() => {
            vol = Math.min(0.7, vol + 0.035);
            audio.volume = vol;
            if (vol >= 0.7) clearInterval(ramp);
          }, 120);
        })
        .catch(() => {
          // Autoplay blocked or interrupted
        });
    }

    setTimeout(() => {
      setStage('open');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1850);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#031812] text-[#fdfbf7] selection:bg-[#0b3a2d] selection:text-[#f5d58f] relative">
      {/* Background Audio */}
      <audio
        ref={audioRef}
        src={weddingData.media.audioTrack}
        loop
        preload="auto"
      />

      {/* Falling Leaves / Petals Background */}
      {showParticles && <FallingLeaves count={18} />}

      {/* Tap / Click Burst Particles */}
      <TapBurstParticles onTap={() => setHasInteracted(true)} />

      {/* Stage Views: Gatefold Envelope or Main Invitation */}
      {stage === 'open' ? (
        <MainInvitation />
      ) : (
        <EnvelopeGatefold stage={stage} onStartOpen={handleStartOpen} />
      )}

      {/* Floating Audio Play/Pause Button */}
      {stage === 'open' && (
        <button
          onClick={toggleMusic}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
          className="pulse-gold fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#dfba73] bg-[#072920]/95 text-[#dfba73] shadow-2xl backdrop-blur transition hover:scale-105 cursor-pointer"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="ml-0.5 h-5 w-5" />
          )}
        </button>
      )}
    </div>
  );
}
