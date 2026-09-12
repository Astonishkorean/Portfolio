import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ASSETS, ARTIST_PROFILE, OFFICIAL_RELEASES, SOUND_DIRECTION_WORKS } from './data/portfolioData';
import { OfficialRelease, WindowState } from './types';
import { audioEngine } from './utils/audioEngine';

// Components
import { TopBar } from './components/TopBar';
import { Dock } from './components/Dock';
import { DesktopIcons } from './components/DesktopIcons';
import { Window } from './components/Window';
import { ReleaseDetailWindow } from './components/ReleaseDetailWindow';
import { AboutWindow } from './components/AboutWindow';
import { DirectionWindow } from './components/DirectionWindow';
import { CreditsWindow } from './components/CreditsWindow';
import { MentoringWindow } from './components/MentoringWindow';
import { ContactWindow } from './components/ContactWindow';
import { AudioPlayerWindow } from './components/AudioPlayerWindow';
import { MobileDeviceFrame } from './components/MobileDeviceFrame';

export default function App() {
  const [windows, setWindows] = useState<Record<string, WindowState>>({
    about: {
      id: 'about',
      title: 'About — 김병혁 | Asi.K (애시케이) 1998.02.23',
      type: 'about',
      isOpen: false,
      isMinimized: false,
      position: { x: 0, y: 0 },
      zIndex: 50
    },
    direction: {
      id: 'direction',
      title: 'Sound Engineering & Mix/Master',
      type: 'direction',
      isOpen: false,
      isMinimized: false,
      position: { x: 0, y: 0 },
      zIndex: 51
    },
    credits: {
      id: 'credits',
      title: 'Official Discography',
      type: 'credits',
      isOpen: false,
      isMinimized: false,
      position: { x: 0, y: 0 },
      zIndex: 52
    },
    mentoring: {
      id: 'mentoring',
      title: 'Education & Mentoring',
      type: 'mentoring',
      isOpen: false,
      isMinimized: false,
      position: { x: 0, y: 0 },
      zIndex: 53
    },
    contact: {
      id: 'contact',
      title: 'Contact & Collaboration',
      type: 'contact',
      isOpen: false,
      isMinimized: false,
      position: { x: 0, y: 0 },
      zIndex: 54
    },
    player: {
      id: 'player',
      title: 'Asi.K Spatial Audio Rack',
      type: 'player',
      isOpen: false,
      isMinimized: false,
      position: { x: 0, y: 0 },
      zIndex: 55
    },
    release: {
      id: 'release',
      title: 'BFTL: Boys From the Last (2025.07 EP)',
      type: 'release',
      isOpen: false,
      isMinimized: false,
      position: { x: 0, y: 0 },
      zIndex: 60,
      data: OFFICIAL_RELEASES[0]
    }
  });

  const [topZIndex, setTopZIndex] = useState(65);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTrackId, setActiveTrackId] = useState('bftl');
  const [isMobileFrame, setIsMobileFrame] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  // Sync with audio engine callbacks
  useEffect(() => {
    audioEngine.setCallback((playing, trackId) => {
      setIsPlaying(playing);
      setActiveTrackId(trackId);
    });

    const checkMobile = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const bringToFront = (windowId: string) => {
    const nextZ = topZIndex + 1;
    setTopZIndex(nextZ);
    setWindows((prev) => ({
      ...prev,
      [windowId]: {
        ...prev[windowId],
        isMinimized: false,
        zIndex: nextZ
      }
    }));
  };

  const openWindow = (type: string, data?: any) => {
    const nextZ = topZIndex + 1;
    setTopZIndex(nextZ);

    if (type === 'release' && data) {
      setWindows((prev) => ({
        ...prev,
        release: {
          ...prev.release,
          title: `${data.title} (${data.type} · ${data.releaseDate})`,
          isOpen: true,
          isMinimized: false,
          zIndex: nextZ,
          data
        }
      }));
      return;
    }

    setWindows((prev) => {
      const target = prev[type];
      if (!target) return prev;
      return {
        ...prev,
        [type]: {
          ...target,
          isOpen: true,
          isMinimized: false,
          zIndex: nextZ,
          data: data || target.data
        }
      };
    });
  };

  const closeWindow = (windowId: string) => {
    setWindows((prev) => ({
      ...prev,
      [windowId]: {
        ...prev[windowId],
        isOpen: false
      }
    }));
  };

  const minimizeWindow = (windowId: string) => {
    setWindows((prev) => ({
      ...prev,
      [windowId]: {
        ...prev[windowId],
        isMinimized: true
      }
    }));
  };

  const handleTogglePlay = (trackId?: string) => {
    audioEngine.togglePlay(trackId);
  };

  const activeWindowIds = Object.keys(windows).filter(
    (key) => windows[key].isOpen && !windows[key].isMinimized
  );

  // Main Desktop / Wallpaper Canvas
  const renderCanvasContent = (inFrame: boolean) => (
    <div className="relative w-full h-full overflow-hidden flex flex-col justify-between bg-zinc-950">
      {/* 1. Artistic Monochromatic Backdrop matching Frame A & Frame C */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Grayscale background image matching Frame A */}
        <img
          src={ASSETS.heroBg}
          alt="Asi.K - Music Producer & Sound Engineer"
          className="w-full h-full object-cover object-center"
        />

        {/* Delicate Studio Lighting & Vignette matching Frame A */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/5 to-black/25 pointer-events-none"></div>
      </div>

      {/* 2. Top Navigation Bar (Only in full desktop mode or inside iPhone top) */}
      {!inFrame ? (
        <TopBar
          onOpenWindow={openWindow}
          isMobileFrame={isMobileFrame}
          onToggleMobileFrame={() => setIsMobileFrame(!isMobileFrame)}
        />
      ) : (
        <div className="pt-10 px-4 flex items-center justify-between text-xs text-white/90 z-20">
          <div className="font-semibold tracking-wide flex items-center gap-1.5">
            <span className="text-amber-400">◈</span>
            <span>Asi.K Studio</span>
          </div>
        </div>
      )}

      {/* 3. Floating Desktop / Mobile App Icons (Frame A & Frame C) */}
      <main className="relative flex-1 w-full h-full flex flex-col justify-center">
        <DesktopIcons
          onOpenRelease={(release) => openWindow('release', release)}
          onOpenWindow={openWindow}
          isMobileLayout={inFrame || isMobileScreen}
        />
      </main>

      {/* 4. Frosted Bottom Dock (Frame A & Frame C) */}
      <div className="z-30 pb-2">
        <Dock
          onOpenWindow={openWindow}
          activeWindows={activeWindowIds}
          isPlaying={isPlaying}
          onTogglePlay={() => handleTogglePlay(activeTrackId)}
        />
      </div>

      {/* 5. Windows Layer (Frame B) */}
      <AnimatePresence>
        {/* Release Detail Window */}
        {windows.release?.isOpen && (
          <Window
            id="release"
            title={windows.release.title}
            isOpen={windows.release.isOpen}
            isMinimized={windows.release.isMinimized}
            zIndex={windows.release.zIndex}
            onClose={() => closeWindow('release')}
            onMinimize={() => minimizeWindow('release')}
            onFocus={() => bringToFront('release')}
          >
            <ReleaseDetailWindow
              release={windows.release.data || OFFICIAL_RELEASES[0]}
              isPlaying={isPlaying}
              activeTrackId={activeTrackId}
              onTogglePlay={handleTogglePlay}
            />
          </Window>
        )}

        {/* About / Bio & Highlights Window */}
        {windows.about?.isOpen && (
          <Window
            id="about"
            title={windows.about.title}
            isOpen={windows.about.isOpen}
            isMinimized={windows.about.isMinimized}
            zIndex={windows.about.zIndex}
            onClose={() => closeWindow('about')}
            onMinimize={() => minimizeWindow('about')}
            onFocus={() => bringToFront('about')}
          >
            <AboutWindow
              onOpenWindow={openWindow}
              onPlaySignature={() => handleTogglePlay('bftl')}
            />
          </Window>
        )}

        {/* Music Direction & Sound Engineering Window */}
        {windows.direction?.isOpen && (
          <Window
            id="direction"
            title={windows.direction.title}
            isOpen={windows.direction.isOpen}
            isMinimized={windows.direction.isMinimized}
            zIndex={windows.direction.zIndex}
            onClose={() => closeWindow('direction')}
            onMinimize={() => minimizeWindow('direction')}
            onFocus={() => bringToFront('direction')}
          >
            <DirectionWindow onOpenContact={() => openWindow('contact')} />
          </Window>
        )}

        {/* Official Discography Window */}
        {windows.credits?.isOpen && (
          <Window
            id="credits"
            title={windows.credits.title}
            isOpen={windows.credits.isOpen}
            isMinimized={windows.credits.isMinimized}
            zIndex={windows.credits.zIndex}
            onClose={() => closeWindow('credits')}
            onMinimize={() => minimizeWindow('credits')}
            onFocus={() => bringToFront('credits')}
          >
            <CreditsWindow
              onSelectRelease={(rel) => openWindow('release', rel)}
              onPlayTrack={handleTogglePlay}
            />
          </Window>
        )}

        {/* Education & Mentoring Window */}
        {windows.mentoring?.isOpen && (
          <Window
            id="mentoring"
            title={windows.mentoring.title}
            isOpen={windows.mentoring.isOpen}
            isMinimized={windows.mentoring.isMinimized}
            zIndex={windows.mentoring.zIndex}
            onClose={() => closeWindow('mentoring')}
            onMinimize={() => minimizeWindow('mentoring')}
            onFocus={() => bringToFront('mentoring')}
          >
            <MentoringWindow onOpenContact={() => openWindow('contact')} />
          </Window>
        )}

        {/* Contact Window */}
        {windows.contact?.isOpen && (
          <Window
            id="contact"
            title={windows.contact.title}
            isOpen={windows.contact.isOpen}
            isMinimized={windows.contact.isMinimized}
            zIndex={windows.contact.zIndex}
            onClose={() => closeWindow('contact')}
            onMinimize={() => minimizeWindow('contact')}
            onFocus={() => bringToFront('contact')}
          >
            <ContactWindow />
          </Window>
        )}

        {/* Spatial Audio Player Window */}
        {windows.player?.isOpen && (
          <Window
            id="player"
            title={windows.player.title}
            isOpen={windows.player.isOpen}
            isMinimized={windows.player.isMinimized}
            zIndex={windows.player.zIndex}
            onClose={() => closeWindow('player')}
            onMinimize={() => minimizeWindow('player')}
            onFocus={() => bringToFront('player')}
          >
            <AudioPlayerWindow
              isPlaying={isPlaying}
              activeTrackId={activeTrackId}
              onTogglePlay={handleTogglePlay}
            />
          </Window>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#121214] text-zinc-100 flex flex-col font-sans">
      {isMobileFrame ? (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-zinc-900/95">
          {/* Switcher header on top */}
          <div className="absolute top-3 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur border border-white/20 text-xs text-white">
            <span>iPhone View Mode (Frame C)</span>
            <button
              onClick={() => setIsMobileFrame(false)}
              className="ml-2 px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-[11px] cursor-pointer"
            >
              Exit to Full Desktop
            </button>
          </div>
          <MobileDeviceFrame>
            {renderCanvasContent(true)}
          </MobileDeviceFrame>
        </div>
      ) : (
        renderCanvasContent(false)
      )}
    </div>
  );
}
