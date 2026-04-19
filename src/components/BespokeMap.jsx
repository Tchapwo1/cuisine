import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, MapPin } from "lucide-react";

export default function BespokeMap({ venues }) {
  const navigate = useNavigate();
  const [hoveredVenue, setHoveredVenue] = useState(null);

  return (
    <div className="relative w-full aspect-[800/520] bg-canvas rounded-3xl border border-soul-ui/10 overflow-hidden shadow-inner">
      <svg 
        viewBox="0 0 800 520" 
        className="w-full h-full fill-none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Thames River - Thick Bold Stroke */}
        <path 
          d="M 0,40 C 200,60 400,20 600,50 C 700,65 800,45 800,45 L 800,0 L 0,0 Z" 
          fill="var(--color-cool-ui)" 
          fillOpacity="0.08" 
        />
        <path 
          d="M 0,40 C 200,60 400,20 600,50 C 700,65 800,45" 
          stroke="var(--color-cool-ui)" 
          strokeWidth="6" 
          strokeLinecap="round"
          strokeOpacity="0.3"
        />

        {/* Railway Viaduct - The Hero Element */}
        <path 
          d="M 50,150 C 250,170 450,210 750,230" 
          stroke="var(--color-soul-ui)" 
          strokeWidth="7" 
          strokeLinecap="round"
          strokeOpacity="0.4"
        />
        {/* Arch Ticks (Illustrative rhythm) */}
        {[...Array(19)].map((_, i) => {
          const x = 50 + (i * 38);
          const y = 150 + (i * 4.5);
          return (
            <line 
              key={i}
              x1={x} y1={y} x2={x} y2={y + 12}
              stroke="var(--color-soul-ui)"
              strokeWidth="2"
              strokeOpacity="0.3"
            />
          );
        })}

        {/* Street Logic (Minimalist Grid) */}
        <path 
          d="M 120,40 L 150,520 M 340,40 L 370,520 M 580,40 L 610,520" 
          stroke="var(--color-soul-ui)" 
          strokeWidth="1" 
          strokeOpacity="0.08" 
        />

        {/* Venue Pins */}
        {venues.map((venue) => (
          <g 
            key={venue.id} 
            transform={`translate(${venue.coordinates.x}, ${venue.coordinates.y})`}
            onMouseEnter={() => setHoveredVenue(venue)}
            onMouseLeave={() => setHoveredVenue(null)}
            onClick={() => navigate(`/dossier/${venue.id}`)}
            className="cursor-pointer group"
          >
             <motion.path
               d="M 0 0 C -4 -4 -8 -10 -8 -15 A 8 8 0 1 1 8 -15 C 8 -10 4 -4 0 0 Z"
               fill={hoveredVenue?.id === venue.id ? "var(--color-stimulant)" : "var(--color-soul-ui)"}
               stroke="var(--color-canvas)"
               strokeWidth="2"
               whileHover={{ scale: 1.2 }}
               transition={{ type: "spring", stiffness: 300 }}
             />
          </g>
        ))}
      </svg>

      {/* Tooltip Overlay */}
      <AnimatePresence>
        {hoveredVenue && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-20 bg-soul-ui text-canvas p-4 rounded-xl shadow-2xl pointer-events-none w-64"
            style={{ 
              left: `${(hoveredVenue.coordinates.x / 800) * 100}%`, 
              top: `${(hoveredVenue.coordinates.y / 520) * 100 - 15}%`,
              transform: "translate(-50%, -100%)"
            }}
          >
            <div className="mono-label text-[10px] opacity-70 mb-1">{hoveredVenue.district}</div>
            <div className="font-editorial text-xl leading-tight mb-2">{hoveredVenue.name}</div>
            <div className="flex items-center justify-between border-t border-canvas/20 pt-2 mt-2">
              <span className="mono-label text-[10px]">{hoveredVenue.cuisine}</span>
              <div className="flex items-center space-x-1">
                <Star size={10} className="fill-stimulant text-stimulant" />
                <span className="mono-label text-[10px]">{hoveredVenue.rating}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Map Legend */}
      <div className="absolute bottom-6 left-6 flex flex-col space-y-2 pointer-events-none">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-1 bg-soul-ui opacity-40 rounded-full" />
          <span className="mono-label text-[10px] text-cool-ui">The Viaduct (Arches)</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-1 bg-cool-ui opacity-40 rounded-full" />
          <span className="mono-label text-[10px] text-cool-ui">The Thames</span>
        </div>
      </div>
    </div>
  );
}
