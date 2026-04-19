import { motion } from "motion/react";
import { useState, useTransition } from "react";

export default function SmokeTest() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  const handleClick = () => {
    startTransition(() => {
      setCount((c) => c + 1);
    });
  };

  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-screen space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20 
        }}
        className="text-6xl font-editorial text-soul-display"
      >
        cuisine
      </motion.div>

      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-stimulant hover:bg-soul-display hover:text-white transition-colors rounded-full font-utility font-bold text-lg"
        >
          {isPending ? "Syncing..." : `Interaction Count: ${count}`}
        </button>
        
        <p className="font-utility text-cool-ui text-sm uppercase tracking-widest">
          React 19 + Motion/React Smoke Test
        </p>
      </div>

      <motion.div 
        animate={{ 
          rotate: 360 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 10, 
          ease: "linear" 
        }}
        className="w-12 h-12 border-4 border-cool-display border-t-cool-ui rounded-full"
      />
    </div>
  );
}
