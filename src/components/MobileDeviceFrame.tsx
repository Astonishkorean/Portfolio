import React from 'react';
import { motion } from 'motion/react';

interface MobileDeviceFrameProps {
  children: React.ReactNode;
}

export const MobileDeviceFrame: React.FC<MobileDeviceFrameProps> = ({ children }) => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* iPhone Outer Hardware Frame (Frame C replica) */}
      <motion.div 
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative w-[380px] h-[780px] max-h-[92vh] rounded-[52px] bg-zinc-950 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.8),0_0_0_12px_#1c1c1e,0_0_0_14px_#3a3a3c] border border-white/20 flex flex-col overflow-hidden"
      >
        {/* Dynamic Island Pill */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50 flex items-center justify-between px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-700/50"></div>
          <div className="w-2 h-2 rounded-full bg-blue-950 border border-blue-900/60"></div>
        </div>

        {/* Screen Bezel & Content */}
        <div className="relative flex-1 w-full h-full rounded-[40px] overflow-hidden bg-black flex flex-col">
          {children}

          {/* Home Indicator Bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-50 pointer-events-none"></div>
        </div>
      </motion.div>
    </div>
  );
};
