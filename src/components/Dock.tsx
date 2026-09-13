import React from 'react';
import { motion } from 'motion/react';
import { SOUND_DIRECTION_WORKS } from '../data/portfolioData';

interface DockProps {
  onOpenWindow: (type: any, data?: any) => void;
  activeWindows: string[];
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const Dock: React.FC<DockProps> = ({
  onOpenWindow,
  activeWindows,
}) => {
  const isWindowActive = (type: string) => activeWindows.includes(type);

  // Desktop apps placed on the LEFT side of the dock divider with 2D pictograms matching wallpaper design
  const desktopApps = [
    {
      id: 'about',
      windowType: 'about',
      appName: 'About',
      action: () => onOpenWindow('about'),
      isActive: isWindowActive('about'),
      // 2D Artist Profile / Persona Pictogram
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 fill-current" viewBox="0 0 24 24">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2s2.1 4.8 4.8 4.8zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
        </svg>
      ),
    },
    {
      id: 'discography',
      windowType: 'credits',
      appName: 'Discography',
      action: () => onOpenWindow('credits'),
      isActive: isWindowActive('credits'),
      // 2D Vinyl LP Record Disc Pictogram
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0 6.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
          <circle cx="12" cy="12" r="1.2" />
        </svg>
      ),
    },
    {
      id: 'direction',
      windowType: 'direction',
      appName: 'Sound Engineering',
      action: () => onOpenWindow('direction', SOUND_DIRECTION_WORKS[0]),
      isActive: isWindowActive('direction'),
      // 2D Audio Console Equalizer Faders Pictogram
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 fill-current" viewBox="0 0 24 24">
          {/* Track 1: Slider at upper-mid */}
          <path d="M4 2c-.55 0-1 .45-1 1v4.5H1.5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5H3V21c0 .55.45 1 1 1s1-.45 1-1v-7.5h1.5c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5H5V3c0-.55-.45-1-1-1z" />
          {/* Track 2: Slider at high */}
          <path d="M12 2c-.55 0-1 .45-1 1v2H9.5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5H11V21c0 .55.45 1 1 1s1-.45 1-1V11h1.5c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5H13V3c0-.55-.45-1-1-1z" />
          {/* Track 3: Slider at lower-mid */}
          <path d="M20 2c-.55 0-1 .45-1 1v7.5h-1.5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5H19V21c0 .55.45 1 1 1s1-.45 1-1v-4.5h1.5c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5H21V3c0-.55-.45-1-1-1z" />
        </svg>
      ),
    },
    {
      id: 'mentoring',
      windowType: 'mentoring',
      appName: 'Mentoring',
      action: () => onOpenWindow('mentoring'),
      isActive: isWindowActive('mentoring'),
      // 2D Graduation Cap (Mortarboard) Pictogram - matches wallpaper mentoring design
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 fill-current" viewBox="0 0 24 24">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
          <path d="M5 13.18v4c0 2.5 3.13 4.5 7 4.5s7-2 7-4.5v-4l-7 3.82-7-3.82z" />
        </svg>
      ),
    },
    {
      id: 'contact',
      windowType: 'contact',
      appName: 'Contact',
      action: () => onOpenWindow('contact'),
      isActive: isWindowActive('contact'),
      // 2D Postal Mail Envelope Pictogram - matches wallpaper contact design
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 fill-current" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ];

  const instagramUrl = 'https://www.instagram.com/asik_d_artist/';
  const youtubeUrl = 'https://www.youtube.com/@astonishingkorean';
  const appleMusicUrl = 'https://music.apple.com/us/artist/asi-k/1482593929';
  const spotifyUrl = 'https://open.spotify.com/artist/48kE5uvv2Eh1iAmXIkZmMO';

  return (
    <nav 
      aria-label="Quick Actions" 
      className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-40 select-none max-w-[99vw]"
      style={{ bottom: 'max(0.75rem, env(safe-area-inset-bottom, 0.75rem))' }}
    >
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex items-center gap-2.5 sm:gap-4 px-4 py-3 sm:px-7 sm:py-4 rounded-[26px] sm:rounded-[36px] backdrop-blur-2xl bg-white/20 dark:bg-black/55 border border-white/30 dark:border-white/20 shadow-2xl shadow-black/60 ring-1 ring-white/25"
      >
        {/* ======================================================== */}
        {/* [LEFT OF DIVIDER] Desktop Applications                   */}
        {/* ======================================================== */}
        {desktopApps.map((app) => (
          <div key={app.id} className="relative group">
            <button
              onClick={app.action}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] rounded-2xl sm:rounded-[26px] shadow-lg transition-all duration-200 group-hover:-translate-y-2 group-hover:scale-110 group-active:scale-95 bg-gradient-to-b from-[#2a2d34] via-[#1c1f24] to-[#121417] border border-white/25 ring-1 ring-white/10 flex items-center justify-center relative overflow-hidden text-white group-hover:border-white/50 group-hover:shadow-[0_12px_28px_rgba(0,0,0,0.7)]"
              title={app.appName}
            >
              {/* Subtle top sheen matching wallpaper app icons */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/12 pointer-events-none" />

              {/* 2D Pictogram Icon */}
              <div className={`relative z-10 transition-all duration-200 group-hover:scale-105 flex items-center justify-center ${
                app.id === 'direction' 
                  ? 'text-zinc-100 group-hover:text-amber-300' 
                  : 'text-zinc-100 group-hover:text-white'
              }`}>
                {app.icon}
              </div>

              {/* Hover highlight overlay */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors pointer-events-none" />
            </button>

            {/* Active Running Dot Indicator */}
            {app.isActive && (
              <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white shadow-[0_0_8px_white]" />
            )}

            {/* Hover Tooltip */}
            <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-medium bg-zinc-900/90 text-white backdrop-blur whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50">
              {app.appName}
            </span>
          </div>
        ))}

        {/* ======================================================== */}
        {/* [CENTER DIVIDER LINE] 독바 중앙선                       */}
        {/* ======================================================== */}
        <div className="w-[2px] sm:w-[2.5px] h-12 sm:h-16 bg-white/30 mx-1.5 sm:mx-3 rounded-full flex-shrink-0" />

        {/* ======================================================== */}
        {/* [RIGHT OF DIVIDER] Social, Media & Streaming Channels     */}
        {/* 1. Instagram, 2. YouTube, 3. Apple Music, 4. Spotify      */}
        {/* ======================================================== */}

        {/* 1. Instagram */}
        <div className="relative group">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] rounded-2xl sm:rounded-[26px] shadow-lg transition-all duration-200 group-hover:-translate-y-2 group-hover:scale-110 group-active:scale-95 bg-gradient-to-tr from-[#fdf497] via-[#fd5949] via-[#d6249f] to-[#285AEB] flex items-center justify-center border border-white/30 text-white"
            title="Instagram (@asik_d_artist)"
          >
            <svg className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-medium bg-zinc-900/90 text-white backdrop-blur whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50">
            Instagram
          </span>
        </div>

        {/* 2. YouTube */}
        <div className="relative group">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] rounded-2xl sm:rounded-[26px] shadow-lg transition-all duration-200 group-hover:-translate-y-2 group-hover:scale-110 group-active:scale-95 bg-[#FF0000] flex items-center justify-center border border-white/30 text-white"
            title="YouTube (@astonishingkorean)"
          >
            <svg className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-medium bg-zinc-900/90 text-white backdrop-blur whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50">
            YouTube
          </span>
        </div>

        {/* 3. Apple Music (애플뮤직) */}
        <div className="relative group">
          <a
            href={appleMusicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] rounded-2xl sm:rounded-[26px] shadow-lg transition-all duration-200 group-hover:-translate-y-2 group-hover:scale-110 group-active:scale-95 bg-gradient-to-tr from-[#FC3C44] via-[#F94C57] to-[#FA2D55] flex items-center justify-center border border-white/30 text-white select-none overflow-hidden"
            title="Apple Music (애플뮤직) - Asi.K"
          >
            <svg className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 fill-white" viewBox="0 0 24 24">
              <path d="M19.589 6.686a.75.75 0 0 0-.649-.679l-9-1.286A.75.75 0 0 0 9.1 5.46v9.336a3.25 3.25 0 1 0 1.5 2.704V8.508l7.5 1.071v4.217a3.25 3.25 0 1 0 1.5 2.704V6.75a.75.75 0 0 0-.011-.064z"/>
            </svg>
          </a>
          <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-medium bg-zinc-900/90 text-white backdrop-blur whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50">
            애플뮤직 (Apple Music)
          </span>
        </div>

        {/* 4. Spotify (스포티파이) */}
        <div className="relative group">
          <a
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] rounded-2xl sm:rounded-[26px] shadow-lg transition-all duration-200 group-hover:-translate-y-2 group-hover:scale-110 group-active:scale-95 bg-[#1DB954] flex items-center justify-center border border-white/30 text-black select-none overflow-hidden"
            title="Spotify (스포티파이) - Asi.K 아티스트 채널"
          >
            <svg className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 fill-black" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.497 17.306c-.215.353-.674.464-1.026.25-2.812-1.718-6.352-2.107-10.521-1.155-.403.092-.803-.16-.895-.563-.092-.403.16-.803.563-.895 4.568-1.044 8.487-.597 11.629 1.337.352.215.464.674.25 1.026zm1.467-3.262c-.27.442-.849.582-1.291.311-3.218-1.977-8.125-2.55-11.932-1.393-.499.151-1.028-.135-1.18-.634-.151-.499.135-1.028.634-1.18 4.354-1.321 9.774-.682 13.458 1.583.442.271.582.85.311 1.313zm.126-3.41c-3.858-2.29-10.222-2.502-13.886-1.389-.59.18-1.216-.153-1.396-.743-.18-.59.153-1.216.743-1.396 4.214-1.28 11.246-1.03 15.68 1.603.53.315.704 1.006.39 1.536-.314.53-1.006.704-1.531.393z"/>
            </svg>
          </a>
          <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-medium bg-zinc-900/90 text-white backdrop-blur whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50">
            스포티파이 (Spotify)
          </span>
        </div>
      </motion.div>
    </nav>
  );
};
