import { motion } from "motion/react";

export default function DiscoveryHero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1 space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="mono-label text-soul-ui bg-soul-display/10 px-3 py-1 rounded-full border border-soul-display/20">
              Edition 01 / Spring 2026
            </span>
            <h1 className="text-fluid-display font-editorial text-soul-display leading-[0.9] mt-6">
              Discover the Best Tables <br /> in London Tonight
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-fluid-lg text-cool-ui/80 max-w-xl leading-snug"
          >
            A platform for people who act on instinct. But have excellent taste.
            Curated by the <span className="text-soul-ui font-bold">cuisine</span> digital protocol.
          </motion.p>
          
          <div className="flex items-center space-x-4 pt-4">
            <button className="px-8 py-4 bg-stimulant hover:bg-soul-display hover:text-white transition-all rounded-full font-utility font-black text-lg uppercase tracking-wider shadow-lg shadow-stimulant/20">
              Explore the Pulse
            </button>
            <button className="px-8 py-4 border-2 border-soul-ui/20 hover:border-soul-display text-soul-ui transition-all rounded-full font-utility font-bold text-lg uppercase tracking-wider">
              Access the Archive
            </button>
          </div>
        </div>

        <div className="relative flex-1 w-full max-w-2xl aspect-square">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: "circOut" }}
            className="absolute inset-0 bg-gradient-to-tr from-soul-display via-cool-display to-stimulant opacity-[0.07] blur-3xl rounded-full"
          />
          
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 p-8">
            <motion.div 
               whileHover={{ scale: 1.05, rotate: -2 }}
               className="bg-soul-display h-full rounded-2xl shadow-2xl relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-6 left-6 text-white font-editorial text-2xl">Bermondsey</div>
            </motion.div>
             <motion.div 
                 whileHover={{ scale: 1.05, rotate: 2 }}
                 className="bg-cool-display h-full rounded-2xl shadow-xl overflow-hidden group relative"
               >
                 <div className="absolute bottom-4 left-4 text-canvas font-editorial text-xl">The Docks</div>
               </motion.div>
               <motion.div 
                 whileHover={{ scale: 1.05, rotate: -1 }}
                 className="bg-stimulant h-full rounded-2xl shadow-xl overflow-hidden group relative"
               >
                 <div className="absolute bottom-4 left-4 text-soul-ui font-editorial text-xl">Arches</div>
               </motion.div>
               <motion.div 
                 whileHover={{ scale: 1.05, rotate: 1 }}
                 className="bg-soul-ui h-full rounded-2xl shadow-xl overflow-hidden group relative"
               >
                 <div className="absolute bottom-4 left-4 text-canvas font-editorial text-xl">Vaults</div>
               </motion.div>
          </div>
        </div>
      </div>
      
      {/* Editorial Watermark */}
      <div className="absolute -bottom-16 -right-16 text-[20vw] font-editorial text-soul-ui/[0.04] select-none pointer-events-none uppercase">
        cuisine
      </div>
    </section>
  );
}
