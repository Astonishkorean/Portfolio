import React from 'react';
import { motion } from 'motion/react';
import { ASSETS, OFFICIAL_RELEASES, SOUND_DIRECTION_WORKS } from '../data/portfolioData';

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
  image: string;
  isCenter?: boolean;
  squareCorner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const DesktopIcons: React.FC<DesktopIconsProps> = ({
  onOpenRelease,
  onOpenWindow,
  isMobileLayout = false
}) => {
  // Center Sound Engineering + 4 Surrounding Apps forming a perfect Square (정사각형)
  const appItems: DesktopAppItem[] = [
    // [CENTER] Sound Engineering - Dead center of the screen
    {
      id: 'app-engineering',
      windowType: 'direction',
      windowData: SOUND_DIRECTION_WORKS[0],
      appName: 'Sound Engineering',
      image: ASSETS.dolbyStudio,
      isCenter: true,
    },
    // [TOP-LEFT OF SQUARE] About
    {
      id: 'app-about',
      windowType: 'about',
      appName: 'About',
      image: ASSETS.avatar,
      squareCorner: 'top-left',
    },
    // [TOP-RIGHT OF SQUARE] Discography (Official Releases)
    {
      id: 'app-discography',
      windowType: 'credits',
      appName: 'Discography',
      image: OFFICIAL_RELEASES[0].coverImage,
      squareCorner: 'top-right',
    },
    // [BOTTOM-LEFT OF SQUARE] Mentoring (Education)
    {
      id: 'app-mentoring',
      windowType: 'mentoring',
      appName: 'Mentoring',
      image: ASSETS.eduIcon,
      squareCorner: 'bottom-left',
    },
    // [BOTTOM-RIGHT OF SQUARE] Contact (Collaboration & Work Requests)
    {
      id: 'app-contact',
      windowType: 'contact',
      appName: 'Contact',
      image: ASSETS.emailIcon,
      squareCorner: 'bottom-right',
    },
  ];

  const handleLaunchApp = (item: DesktopAppItem) => {
    onOpenWindow(item.windowType, item.windowData);
  };

  // Mobile layout (Sound Engineering highlighted + 2x2 square below)
  if (isMobileLayout) {
    const centerApp = appItems.find(a => a.isCenter)!;
    const cornerApps = appItems.filter(a => !a.isCenter);

    return (
      <div 
        className="w-full h-full overflow-y-auto custom-scrollbar px-4 pt-3 sm:pt-6 flex flex-col items-center"
        style={{ paddingBottom: 'max(9.5rem, calc(8.5rem + env(safe-area-inset-bottom, 24px)))' }}
      >
        <div className="my-auto flex flex-col items-center gap-3.5 sm:gap-5 w-full max-w-[300px] sm:max-w-[350px]">
          {/* Center Sound Engineering App */}
          <motion.button
            key={centerApp.id}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleLaunchApp(centerApp)}
            className="flex flex-col items-center group text-center focus:outline-none cursor-pointer"
          >
            <div className="relative w-28 h-28 sm:w-34 sm:h-34 rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-2xl shadow-black/70 border-2 border-amber-400/40 ring-2 ring-amber-400/20 transition-transform duration-200 active:scale-95 group-hover:scale-105 bg-zinc-900">
              <img 
                src={centerApp.image} 
                alt={centerApp.appName} 
                className="w-full h-full object-cover select-none" 
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/10 pointer-events-none" />
            </div>
            <span className="mt-2 text-xs sm:text-sm font-semibold text-amber-300 drop-shadow-[0_2px_5px_rgba(0,0,0,0.95)] tracking-tight text-center">
              {centerApp.appName}
            </span>
          </motion.button>

          {/* 4 Surrounding Apps in 2x2 Square (About, Discography, Mentoring, Contact) */}
          <div className="grid grid-cols-2 gap-y-3.5 sm:gap-y-4 gap-x-3.5 sm:gap-x-5 w-full">
            {cornerApps.map((item, idx) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: (idx + 1) * 0.06, duration: 0.25 }}
                onClick={() => handleLaunchApp(item)}
                className="flex flex-col items-center group text-center focus:outline-none cursor-pointer"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-2xl shadow-black/60 border border-white/20 transition-transform duration-200 active:scale-95 group-hover:scale-105 bg-zinc-900">
                  <img 
                    src={item.image} 
                    alt={item.appName} 
                    className="w-full h-full object-cover select-none" 
                    loading="eager"
                  />
                </div>
                <span className="mt-1.5 text-xs font-medium text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] tracking-tight text-center truncate max-w-[110px] sm:max-w-[130px]">
                  {item.appName}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Exact screen dead center (50%, 50%) for Sound Engineering, with surrounding 4 apps forming a perfect square
  const squareDist = 'min(28vw, 25vh, 310px)';

  const getItemCoordinates = (item: DesktopAppItem): React.CSSProperties => {
    if (item.isCenter) {
      return {
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      };
    }

    if (item.squareCorner === 'top-left') {
      return {
        left: `calc(50% - ${squareDist})`,
        top: `calc(50% - ${squareDist})`,
        transform: 'translate(-50%, -50%)',
      };
    }

    if (item.squareCorner === 'top-right') {
      return {
        left: `calc(50% + ${squareDist})`,
        top: `calc(50% - ${squareDist})`,
        transform: 'translate(-50%, -50%)',
      };
    }

    if (item.squareCorner === 'bottom-left') {
      return {
        left: `calc(50% - ${squareDist})`,
        top: `calc(50% + ${squareDist})`,
        transform: 'translate(-50%, -50%)',
      };
    }

    if (item.squareCorner === 'bottom-right') {
      return {
        left: `calc(50% + ${squareDist})`,
        top: `calc(50% + ${squareDist})`,
        transform: 'translate(-50%, -50%)',
      };
    }

    return {
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    };
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {appItems.map((item, idx) => {
        const positionStyle = getItemCoordinates(item);

        return (
          <div
            key={item.id}
            style={positionStyle}
            className="absolute pointer-events-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -4, 0]
              }}
              transition={{ 
                opacity: { duration: 0.45, delay: idx * 0.08 },
                scale: { duration: 0.45, delay: idx * 0.08 },
                y: { 
                  duration: 5.0 + (idx % 3) * 0.6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: idx * 0.35 
                }
              }}
            >
              <button
                onClick={() => handleLaunchApp(item)}
                className="flex flex-col items-center group focus:outline-none cursor-pointer select-none"
              >
                {/* 150% Enlarged Tile */}
                <div 
                  className={`relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-60 xl:h-60 rounded-[30px] sm:rounded-[36px] md:rounded-[40px] lg:rounded-[46px] overflow-hidden transition-all duration-300 group-hover:scale-105 group-active:scale-95 bg-zinc-900 ${
                    item.isCenter 
                      ? 'border-2 border-amber-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(245,158,11,0.25)] ring-1 ring-amber-400/30 group-hover:shadow-[0_26px_65px_rgba(0,0,0,0.9),0_0_36px_rgba(245,158,11,0.4)] group-hover:border-amber-300'
                      : 'border border-white/25 shadow-[0_18px_45px_rgba(0,0,0,0.65)] group-hover:border-white/50 group-hover:shadow-[0_24px_55px_rgba(0,0,0,0.85),0_0_24px_rgba(255,255,255,0.2)]'
                  }`}
                >
                  <img 
                    src={item.image} 
                    alt={item.appName} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108 select-none" 
                    loading="eager"
                  />
                  {/* Subtle glass sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none" />
                </div>

                {/* Minimalist Title */}
                <span 
                  className={`mt-3.5 text-sm sm:text-base lg:text-lg font-medium tracking-tight drop-shadow-[0_2px_5px_rgba(0,0,0,0.95)] transition-colors text-center whitespace-nowrap ${
                    item.isCenter 
                      ? 'text-amber-300 font-semibold group-hover:text-amber-200' 
                      : 'text-white/90 group-hover:text-amber-200'
                  }`}
                >
                  {item.appName}
                </span>
              </button>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};
