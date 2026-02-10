import { motion } from 'framer-motion';
export function RadarGraphic() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      {/* Outer Ring */}
      <div className="absolute inset-0 border border-slate-700/50 rounded-full" />

      {/* Middle Ring */}
      <div className="absolute inset-8 border border-slate-700/50 rounded-full" />

      {/* Inner Ring */}
      <div className="absolute inset-16 border border-slate-700/50 rounded-full" />

      {/* Center Dot */}
      <div className="absolute w-2 h-2 bg-electric rounded-full shadow-[0_0_10px_#3B82F6]" />

      {/* Crosshairs */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-full h-[1px] bg-cyan" />
        <div className="h-full w-[1px] bg-cyan absolute" />
      </div>

      {/* Rotating Sweep */}
      <div className="absolute inset-0 animate-radar-spin">
        <div className="w-full h-full rounded-full radar-sweep opacity-50" />
      </div>

      {/* Pulsing Blips (Decorations) */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_#EF4444]"
        animate={{
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.5
        }} />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-yellow-500 rounded-full shadow-[0_0_8px_#EAB308]"
        animate={{
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1.2
        }} />


      {/* Status Text Overlay */}
      <div className="absolute bottom-4 right-4 text-[10px] font-mono text-cyan/70 tracking-widest">
        SCANNING...
      </div>
    </div>);

}