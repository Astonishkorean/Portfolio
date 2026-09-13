import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, Sparkles, Sliders, Music, Radio } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';
import { OFFICIAL_RELEASES } from '../data/portfolioData';

interface AudioPlayerWindowProps {
  isPlaying: boolean;
  activeTrackId: string;
  onTogglePlay: (id?: string) => void;
}

export const AudioPlayerWindow: React.FC<AudioPlayerWindowProps> = ({
  isPlaying,
  activeTrackId,
  onTogglePlay
}) => {
  const [isDolby, setIsDolby] = useState(true);

  const playlist = [
    { id: 'bftl', title: 'BFTL: Golden Rye', style: 'Alternative R&B / Chill Synth', theme: '청춘 & 갈망' },
    { id: 'youth', title: 'Youth', style: 'Modern Indie / Groovy', theme: '청춘의 순간' },
    { id: 'only-you', title: 'Only You (Melon #7)', style: 'Chill Electronica', theme: '사랑과 몰입' },
    { id: 'sleepless', title: '잠에 들지 못한 채', style: 'Lo-Fi Neo Soul', theme: '새벽 감성' },
    { id: 'starry-night', title: 'Starry Night', style: 'Midnight Ambient R&B', theme: '밤하늘과 고요' }
  ];

  const currentTrackIndex = playlist.findIndex((t) => t.id === activeTrackId);
  const currentTrack = playlist[currentTrackIndex >= 0 ? currentTrackIndex : 0];

  const handleNext = () => {
    const nextIdx = (currentTrackIndex + 1) % playlist.length;
    onTogglePlay(playlist[nextIdx].id);
  };

  const handlePrev = () => {
    const prevIdx = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    onTogglePlay(playlist[prevIdx].id);
  };

  const handleToggleDolby = () => {
    const val = audioEngine.toggleDolbyAtmos();
    setIsDolby(val);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono uppercase text-zinc-400">Asi.K Spatial Audio Rack</span>
        </div>
        <button
          onClick={handleToggleDolby}
          className={`px-2 py-0.5 rounded text-[10px] font-mono tracking-wider transition-all flex items-center gap-1 ${
            isDolby
              ? 'bg-amber-400/20 border border-amber-400/40 text-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.3)]'
              : 'bg-zinc-800 text-zinc-500 border border-white/5'
          }`}
        >
          <Sparkles className="w-2.5 h-2.5" />
          <span>7.1.2 DOLBY ATMOS {isDolby ? 'ON' : 'OFF'}</span>
        </button>
      </div>

      {/* Visualizer Rack Display */}
      <div className="p-6 rounded-2xl bg-zinc-950 border border-white/15 relative overflow-hidden flex flex-col items-center justify-center min-h-[160px]">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.1)_0%,transparent_70%)]"></div>

        {/* Dynamic equalizing frequency bars */}
        <div className="flex items-end gap-1.5 h-16 mb-4 z-10">
          {[...Array(24)].map((_, i) => {
            const heightMultiplier = isPlaying ? Math.sin((i / 24) * Math.PI) * 0.8 + 0.2 : 0.1;
            return (
              <div
                key={i}
                style={{
                  height: isPlaying ? `${Math.max(12, Math.floor(heightMultiplier * 64 + (i % 5) * 4))}px` : '6px',
                  transition: 'height 0.15s ease'
                }}
                className={`w-1.5 rounded-full ${
                  isPlaying 
                    ? i % 4 === 0 
                      ? 'bg-amber-400' 
                      : 'bg-emerald-400'
                    : 'bg-zinc-700'
                }`}
              ></div>
            );
          })}
        </div>

        {/* Track Title & Theme info */}
        <div className="text-center z-10 space-y-1">
          <div className="text-base font-bold text-white tracking-tight">
            {currentTrack.title}
          </div>
          <div className="text-xs text-zinc-400">
            {currentTrack.style} · <span className="text-amber-300">{currentTrack.theme}</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          className="p-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white transition-colors cursor-pointer"
        >
          <SkipBack className="w-4 h-4" />
        </button>

        <button
          onClick={() => onTogglePlay(currentTrack.id)}
          className="p-4 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 shadow-xl transition-transform active:scale-95 cursor-pointer"
        >
          {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
        </button>

        <button
          onClick={handleNext}
          className="p-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white transition-colors cursor-pointer"
        >
          <SkipForward className="w-4 h-4" />
        </button>
      </div>

      {/* Track selection list */}
      <div className="space-y-1.5 pt-2">
        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
          Theme Soundscape Selection
        </div>
        {playlist.map((track) => {
          const isActive = track.id === activeTrackId;
          return (
            <div
              key={track.id}
              onClick={() => onTogglePlay(track.id)}
              className={`p-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors border ${
                isActive
                  ? 'bg-white/10 border-white/20 text-white'
                  : 'bg-zinc-950/40 border-white/5 text-zinc-400 hover:bg-white/5 hover:text-zinc-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <Music className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-zinc-600'}`} />
                <span className="text-xs font-medium">{track.title}</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">{track.style}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
