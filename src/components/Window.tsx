import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Minus, Square, X, Maximize2, Minimize2 } from 'lucide-react';

interface WindowProps {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
  defaultWidth?: string;
  defaultHeight?: string;
}

export const Window: React.FC<WindowProps> = ({
  id,
  title,
  isOpen,
  isMinimized,
  zIndex,
  onClose,
  onMinimize,
  onFocus,
  children,
  initialPosition = { x: 0, y: 0 },
  defaultWidth = 'max-w-3xl',
  defaultHeight = 'max-h-[85vh]'
}) => {
  const [isMaximized, setIsMaximized] = useState(false);

  if (!isOpen || isMinimized) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 15 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      onClick={onFocus}
      style={{ zIndex }}
      className={`fixed ${
        isMaximized
          ? 'top-10 sm:top-12 bottom-2 sm:bottom-6 inset-x-2 sm:inset-6'
          : 'top-11 sm:top-1/2 left-1/2 -translate-x-1/2 sm:-translate-y-1/2 w-[95vw] sm:w-[88vw] ' + defaultWidth
      } max-h-[calc(100dvh-3.25rem)] sm:max-h-[85vh] flex flex-col rounded-2xl bg-zinc-900/95 backdrop-blur-2xl border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 select-text`}
    >
      {/* macOS Window Titlebar Header (Frame B) */}
      <div 
        onDoubleClick={() => setIsMaximized(!isMaximized)}
        className="h-11 sm:h-10 px-3 sm:px-4 flex items-center justify-between border-b border-white/10 bg-zinc-800/80 backdrop-blur-md select-none cursor-default shrink-0"
      >
        {/* Traffic Light Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 group/traffic">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="w-4 h-4 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] flex items-center justify-center hover:opacity-90 focus:outline-none transition-transform active:scale-90 cursor-pointer"
            title="창 닫기"
            aria-label="창 닫기"
          >
            <X className="w-2.5 h-2.5 sm:w-2 sm:h-2 text-[#4c0002] opacity-80 sm:opacity-0 sm:group-hover/traffic:opacity-100 transition-opacity" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
            className="w-4 h-4 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] flex items-center justify-center hover:opacity-90 focus:outline-none transition-transform active:scale-90 cursor-pointer"
            title="최소화"
            aria-label="최소화"
          >
            <Minus className="w-2.5 h-2.5 sm:w-2 sm:h-2 text-[#5a3b00] opacity-80 sm:opacity-0 sm:group-hover/traffic:opacity-100 transition-opacity" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMaximized(!isMaximized);
            }}
            className="w-4 h-4 sm:w-3 sm:h-3 rounded-full bg-[#27c93f] border border-[#1aab29] flex items-center justify-center hover:opacity-90 focus:outline-none transition-transform active:scale-90 cursor-pointer"
            title={isMaximized ? "이전 크기로 복원" : "최대화"}
            aria-label={isMaximized ? "이전 크기로 복원" : "최대화"}
          >
            {isMaximized ? (
              <Minimize2 className="w-2 h-2 sm:w-1.5 sm:h-1.5 text-[#004f12] opacity-80 sm:opacity-0 sm:group-hover/traffic:opacity-100 transition-opacity" />
            ) : (
              <Maximize2 className="w-2 h-2 sm:w-1.5 sm:h-1.5 text-[#004f12] opacity-80 sm:opacity-0 sm:group-hover/traffic:opacity-100 transition-opacity" />
            )}
          </button>
        </div>

        {/* Center Title */}
        <div className="text-xs font-medium text-zinc-300 tracking-tight flex items-center gap-1.5 truncate max-w-[50%] sm:max-w-[60%] px-2">
          <span className="truncate">{title}</span>
        </div>

        {/* Right side: Explicit Close button on mobile / ASIK.OS on desktop */}
        <div className="flex items-center justify-end">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="flex sm:hidden items-center gap-1 px-2.5 py-1 rounded-lg bg-red-500/20 active:bg-red-500/30 text-red-300 border border-red-500/40 text-xs font-semibold active:scale-95 transition-all cursor-pointer"
            aria-label="창 닫기"
          >
            <X className="w-3.5 h-3.5" />
            <span>닫기</span>
          </button>
          <span className="hidden sm:inline text-[10px] text-zinc-500 tracking-widest font-mono">ASIK.OS</span>
        </div>
      </div>

      {/* Window Body */}
      <div className={`flex-1 overflow-y-auto overscroll-contain ${isMaximized ? '' : defaultHeight} text-zinc-100 p-5 sm:p-7 custom-scrollbar`}>
        {children}
      </div>
    </motion.div>
  );
};
