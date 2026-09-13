import React, { useState, useEffect } from 'react';
import { motion, useDragControls, useMotionValue } from 'motion/react';
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
  const dragControls = useDragControls();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [isDesktop, setIsDesktop] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth >= 768 : true
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // When maximized, reset position offset to 0 so it snaps to maximized bounds cleanly
  useEffect(() => {
    if (isMaximized) {
      x.set(0);
      y.set(0);
    }
  }, [isMaximized, x, y]);

  if (!isOpen || isMinimized) return null;

  return (
    <motion.div
      drag={isDesktop && !isMaximized}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={{
        top: -30,
        bottom: typeof window !== 'undefined' ? Math.max(300, window.innerHeight - 200) : 500,
        left: typeof window !== 'undefined' ? -(window.innerWidth * 0.45) : -500,
        right: typeof window !== 'undefined' ? window.innerWidth * 0.45 : 500
      }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      onClick={onFocus}
      style={{ zIndex, x, y }}
      className={`fixed ${
        isMaximized
          ? 'top-10 sm:top-12 bottom-2 sm:bottom-6 inset-x-2 sm:inset-6'
          : 'top-11 sm:top-[7vh] inset-x-0 mx-auto w-[95vw] sm:w-[88vw] ' + defaultWidth
      } max-h-[calc(100dvh-3.25rem)] sm:max-h-[85vh] flex flex-col rounded-2xl backdrop-blur-3xl backdrop-saturate-180 bg-[#111317]/90 sm:bg-[#111317]/85 border border-white/35 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.45),0_30px_70px_-15px_rgba(0,0,0,0.85)] overflow-hidden select-text will-change-transform`}
    >
      {/* macOS Window Titlebar Header (Liquid Glass) */}
      <div 
        onDoubleClick={() => setIsMaximized(!isMaximized)}
        onPointerDown={(e) => {
          onFocus();
          const target = e.target as HTMLElement;
          if (target.closest('button') || target.closest('a') || target.closest('input')) {
            return;
          }
          if (isDesktop && !isMaximized) {
            dragControls.start(e);
          }
        }}
        className={`h-11 sm:h-10 px-3 sm:px-4 flex items-center justify-between border-b border-white/15 bg-gradient-to-b from-white/[0.14] via-white/[0.05] to-transparent select-none shrink-0 touch-none ${
          isDesktop && !isMaximized ? 'sm:cursor-grab sm:active:cursor-grabbing' : 'cursor-default'
        }`}
      >
        {/* Traffic Light Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 group/traffic">
          <button
            onPointerDown={(e) => e.stopPropagation()}
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
            onPointerDown={(e) => e.stopPropagation()}
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
            onPointerDown={(e) => e.stopPropagation()}
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
        <div className="text-xs font-medium text-zinc-300 tracking-tight flex items-center gap-1.5 truncate max-w-[50%] sm:max-w-[60%] px-2 pointer-events-none">
          <span className="truncate">{title}</span>
        </div>

        {/* Right side: Explicit Close button on mobile / ESC shortcut & ASIK.OS on desktop */}
        <div className="flex items-center justify-end gap-2">
          <button
            onPointerDown={(e) => e.stopPropagation()}
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
          <div className="hidden sm:flex items-center gap-2">
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-400 hover:text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
              title="ESC 키 또는 클릭하여 창 닫기"
            >
              <kbd className="font-mono text-[9px] px-1 py-0.2 rounded bg-black/40 border border-white/10 text-zinc-300">ESC</kbd>
              <span>닫기</span>
            </button>
            <span className="text-[10px] text-zinc-500 tracking-widest font-mono">ASIK.OS</span>
          </div>
        </div>
      </div>

      {/* Window Body */}
      <div className={`flex-1 overflow-y-auto overscroll-contain ${isMaximized ? '' : defaultHeight} text-zinc-100 p-5 sm:p-7 custom-scrollbar`}>
        {children}
      </div>
    </motion.div>
  );
};
