import React from 'react';
import { motion } from 'motion/react';
import { SOUND_DIRECTION_WORKS } from '../data/portfolioData';

interface DesktopIconsProps {
  onOpenRelease: (release: any) => void;
  onOpenWindow: (type: string, data?: any) => void;
  isMobileLayout?: boolean;
}

interface DesktopAppItem {
  id: string;
  windowType: 'about' | 'direction' | 'credits' | 'mentoring' | 'contact';
  windowData?: any;
  appName: string;
  icon: React.ReactNode;
}

export const DesktopIcons: React.FC<DesktopIconsProps> = ({
  onOpenWindow,
  isMobileLayout = false
}) => {
  // Reordered to match the exact order in the Dock:
  // 1. About
  // 2. Discography (credits)
  // 3. Sound Engineering (direction)
  // 4. Mentoring
  // 5. Contact
  const appItems: DesktopAppItem[] = [
    // 1. About
    {
      id: 'app-about',
      windowType: 'about',
      appName: 'About',
      icon: (
        <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
          {/* Artist Profile / Persona Pictogram */}
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2s2.1 4.8 4.8 4.8zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
        </svg>
      ),
    },
    // 2. Discography (Official Releases)
    {
      id: 'app-discography',
      windowType: 'credits',
      appName: 'Discography',
      icon: (
        <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
          {/* Vinyl LP Record Disc Pictogram */}
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0 6.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
          <circle cx="12" cy="12" r="1.2" />
        </svg>
      ),
    },
    // 3. Sound Engineering
    {
      id: 'app-engineering',
      windowType: 'direction',
      windowData: SOUND_DIRECTION_WORKS[0],
      appName: 'Sound Engineering',
      icon: (
        <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
          {/* Audio Console Equalizer Faders Pictogram */}
          <path d="M4 2c-.55 0-1 .45-1 1v4.5H1.5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5H3V21c0 .55.45 1 1 1s1-.45 1-1v-7.5h1.5c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5H5V3c0-.55-.45-1-1-1z" />
          <path d="M12 2c-.55 0-1 .45-1 1v2H9.5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5H11V21c0 .55.45 1 1 1s1-.45 1-1V11h1.5c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5H13V3c0-.55-.45-1-1-1z" />
          <path d="M20 2c-.55 0-1 .45-1 1v7.5h-1.5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5H19V21c0 .55.45 1 1 1s1-.45 1-1v-4.5h1.5c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5H21V3c0-.55-.45-1-1-1z" />
        </svg>
      ),
    },
    // 4. Mentoring (Education)
    {
      id: 'app-mentoring',
      windowType: 'mentoring',
      appName: 'Mentoring',
      icon: (
        <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
          {/* Graduation Cap (Mortarboard) Pictogram */}
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
          <path d="M5 13.18v4c0 2.5 3.13 4.5 7 4.5s7-2 7-4.5v-4l-7 3.82-7-3.82z" />
        </svg>
      ),
    },
    // 5. Contact (Collaboration & Work Requests)
    {
      id: 'app-contact',
      windowType: 'contact',
      appName: 'Contact',
      icon: (
        <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
          {/* Postal Mail Envelope Pictogram */}
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ];

  const handleLaunchApp = (item: DesktopAppItem) => {
    onOpenWindow(item.windowType, item.windowData);
  };

  // Mobile layout: About on top (prominent), and 2x2 grid below (Sound Engineering, Discography, Mentoring, Contact)
  if (isMobileLayout) {
    const mobileTopApp = appItems.find(a => a.windowType === 'about')!;
    const mobileGridApps = [
      appItems.find(a => a.windowType === 'direction')!, // Sound Engineering
      appItems.find(a => a.windowType === 'credits')!,   // Discography
      appItems.find(a => a.windowType === 'mentoring')!, // Mentoring
      appItems.find(a => a.windowType === 'contact')!,   // Contact
    ];

    return (
      <div 
        className="w-full h-full overflow-y-auto custom-scrollbar px-4 pt-9 xs:pt-12 sm:pt-16 flex flex-col items-center justify-start sm:justify-center"
        style={{ paddingBottom: 'max(9rem, calc(8rem + env(safe-area-inset-bottom, 24px)))' }}
      >
        {/* Balanced 5-App Cluster: Lowered slightly from top bar, perfectly clear of bottom dock */}
        <div className="mt-2 xs:mt-3 sm:my-auto flex flex-col items-center gap-4 xs:gap-5 sm:gap-6 w-full max-w-[310px] sm:max-w-[360px]">
          {/* Top Hero App: About (Liquid Glass Hero) */}
          <motion.button
            key={mobileTopApp.id}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleLaunchApp(mobileTopApp)}
            className="flex flex-col items-center group text-center focus:outline-none cursor-pointer"
          >
            <div className="relative w-24 h-24 xs:w-26 xs:h-26 sm:w-30 sm:h-30 rounded-[22px] xs:rounded-[25px] sm:rounded-[28px] overflow-hidden transition-transform duration-200 active:scale-95 group-hover:scale-105 liquid-glass-hero flex items-center justify-center">
              {/* Refractive convex highlight */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20 pointer-events-none" />
              <div className="relative z-10 w-12 h-12 xs:w-13 xs:h-13 sm:w-15 sm:h-15 text-amber-300 group-hover:text-amber-200 transition-colors flex items-center justify-center drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                {mobileTopApp.icon}
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors pointer-events-none" />
            </div>
            <span className="mt-1.5 text-xs sm:text-sm font-semibold text-amber-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] tracking-tight text-center">
              {mobileTopApp.appName}
            </span>
          </motion.button>

          {/* 4 Apps in 2x2 Square (Sound Engineering, Discography, Mentoring, Contact) */}
          <div className="grid grid-cols-2 gap-y-3.5 xs:gap-y-4 sm:gap-y-6 gap-x-4 xs:gap-x-5 sm:gap-x-7 w-full justify-items-center">
            {mobileGridApps.map((item, idx) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: (idx + 1) * 0.06, duration: 0.25 }}
                onClick={() => handleLaunchApp(item)}
                className="flex flex-col items-center group text-center focus:outline-none cursor-pointer w-full max-w-[125px]"
              >
                <div className="relative w-20 h-20 xs:w-22 xs:h-22 sm:w-26 sm:h-26 rounded-[19px] xs:rounded-[21px] sm:rounded-[24px] overflow-hidden transition-transform duration-200 active:scale-95 group-hover:scale-105 liquid-glass flex items-center justify-center">
                  {/* Refractive convex highlight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/15 pointer-events-none" />
                  <div className="relative z-10 w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-zinc-100 group-hover:text-white transition-colors flex items-center justify-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                    {item.icon}
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors pointer-events-none" />
                </div>
                <span className="mt-1 text-[11px] xs:text-xs font-medium text-white/90 drop-shadow-[0_1px_5px_rgba(0,0,0,0.95)] tracking-tight text-center whitespace-nowrap">
                  {item.appName}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop & Landscape layout: Center-aligned horizontal row (가로 일렬), matching Dock order:
  // 1. About -> 2. Discography -> 3. Sound Engineering -> 4. Mentoring -> 5. Contact
  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center pt-2 sm:pt-8 pb-16 sm:pb-24 px-2 sm:px-8 overflow-x-auto overflow-y-hidden custom-scrollbar">
      <div className="flex flex-row items-center justify-center gap-2 xs:gap-3 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 my-auto pointer-events-auto">
        {appItems.map((item, idx) => {
          const isEngineering = item.windowType === 'direction';

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                y: [0, -4, 0],
                scale: 1 
              }}
              transition={{ 
                opacity: { duration: 0.35, delay: idx * 0.07 },
                scale: { duration: 0.35, delay: idx * 0.07 },
                y: { 
                  duration: 4.8 + (idx % 3) * 0.6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: idx * 0.25 
                }
              }}
            >
              <button
                onClick={() => handleLaunchApp(item)}
                className="flex flex-col items-center group focus:outline-none cursor-pointer select-none"
              >
                {/* Liquid Glass App Icon Tile (Responsive for mobile landscape to large desktop) */}
                <div 
                  className={`relative w-18 h-18 xs:w-22 xs:h-22 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-56 xl:h-56 rounded-[18px] xs:rounded-[22px] sm:rounded-[38px] md:rounded-[46px] lg:rounded-[54px] xl:rounded-[58px] overflow-hidden transition-all duration-300 group-hover:scale-108 group-active:scale-95 flex items-center justify-center ${
                    isEngineering ? 'liquid-glass-hero' : 'liquid-glass'
                  }`}
                >
                  {/* Refractive convex highlight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20 pointer-events-none" />

                  {/* 2D Pictogram Icon */}
                  <div 
                    className={`relative z-10 w-9 h-9 xs:w-11 xs:h-11 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-28 lg:h-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] ${
                      isEngineering
                        ? 'text-amber-300 group-hover:text-amber-200'
                        : 'text-zinc-100 group-hover:text-white'
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Hover highlight overlay */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors pointer-events-none" />
                </div>

                {/* Minimalist Title */}
                <span 
                  className={`mt-1.5 xs:mt-2 sm:mt-3.5 text-[11px] xs:text-xs sm:text-base md:text-lg lg:text-xl font-medium sm:font-semibold tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] transition-colors text-center whitespace-nowrap ${
                    isEngineering 
                      ? 'text-amber-300 font-bold group-hover:text-amber-200' 
                      : 'text-white/95 group-hover:text-amber-200'
                  }`}
                >
                  {item.appName}
                </span>
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
