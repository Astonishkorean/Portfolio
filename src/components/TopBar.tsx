import React, { useState, useEffect } from 'react';
import { Sparkles, Smartphone, Monitor, Info, Disc } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface TopBarProps {
  onOpenWindow: (type: any, data?: any) => void;
  isMobileFrame: boolean;
  onToggleMobileFrame: () => void;
  isPlaying?: boolean;
  onTogglePlay?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  onOpenWindow,
  isMobileFrame,
  onToggleMobileFrame
}) => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [isDolbyActive, setIsDolbyActive] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: false }));
      setCurrentDate(now.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric', weekday: 'short' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleDolby = () => {
    const active = audioEngine.toggleDolbyAtmos();
    setIsDolbyActive(active);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 h-8 px-3.5 backdrop-blur-2xl backdrop-saturate-180 bg-white/[0.08] dark:bg-black/40 border-b border-white/25 shadow-[inset_0_-1px_1px_rgba(255,255,255,0.18)] text-white/90 text-xs flex items-center justify-between select-none">
      {/* Left items */}
      <div className="flex items-center gap-4">
        <div 
          onClick={() => onOpenWindow('about')}
          className="flex items-center gap-2 font-semibold tracking-wide cursor-pointer hover:text-white transition-colors"
        >
          <span className="text-sm font-serif">◈</span>
          <span>Asi.K Studio</span>
        </div>

        <nav className="hidden md:flex items-center gap-3 text-white/70">
          <button 
            onClick={() => onOpenWindow('about')} 
            className="hover:text-white transition-colors px-1.5 py-0.5 rounded hover:bg-white/10"
          >
            About
          </button>
          <button 
            onClick={() => onOpenWindow('credits')} 
            className="hover:text-white transition-colors px-1.5 py-0.5 rounded hover:bg-white/10"
          >
            Discography
          </button>
          <button 
            onClick={() => onOpenWindow('direction')} 
            className="hover:text-white transition-colors px-1.5 py-0.5 rounded hover:bg-white/10"
          >
            Engineering & Direction
          </button>
          <button 
            onClick={() => onOpenWindow('mentoring')} 
            className="hover:text-white transition-colors px-1.5 py-0.5 rounded hover:bg-white/10"
          >
            Mentoring
          </button>
          <button 
            onClick={() => onOpenWindow('contact')} 
            className="hover:text-white transition-colors px-1.5 py-0.5 rounded hover:bg-white/10"
          >
            Contact
          </button>
        </nav>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-3">
        {/* Dolby Atmos spatial tag */}
        <button
          onClick={handleToggleDolby}
          title="Dolby Atmos 7.1.2 Spatial Audio Simulation"
          className={`hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] tracking-wider transition-all font-medium ${
            isDolbyActive 
              ? 'bg-amber-400/20 border border-amber-400/40 text-amber-300' 
              : 'bg-white/5 text-white/40 border border-white/10'
          }`}
        >
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>DOLBY ATMOS</span>
        </button>

        {/* View Mode Toggle: Desktop Canvas vs iPhone Frame (Matching Frame A & Frame C) */}
        <button
          onClick={onToggleMobileFrame}
          className="hidden md:flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 transition-colors text-white/80 text-[11px]"
          title={isMobileFrame ? '데스크톱 전체화면 모드로 전환' : '아이폰 프레임 모드로 전환 (Frame C)'}
        >
          {isMobileFrame ? (
            <>
              <Monitor className="w-3 h-3" />
              <span>Desktop View</span>
            </>
          ) : (
            <>
              <Smartphone className="w-3 h-3" />
              <span>iPhone Frame</span>
            </>
          )}
        </button>

        {/* Date & Time */}
        <div className="flex items-center gap-2 text-white/80 font-mono text-[11px]">
          <span className="hidden sm:inline">{currentDate}</span>
          <span className="font-semibold text-white">{currentTime}</span>
        </div>
      </div>
    </header>
  );
};
