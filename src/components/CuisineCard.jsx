import { motion } from "motion/react";
import { Star, Clock, ArrowUpRight } from "lucide-react";

export default function CuisineCard({ restaurant }) {
  const { name, rating, cuisine, district, price, imageColor } = restaurant;
  
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
    >
      <div className={`aspect-[4/5] rounded-2xl mb-4 relative overflow-hidden bg-${imageColor}-display/20`}>
        {/* Mock Image Placeholder */}
        <div className={`absolute inset-0 bg-${imageColor}-display opacity-10 group-hover:opacity-20 transition-opacity`} />
        
        <div className="absolute top-4 right-4 bg-canvas/90 backdrop-blur-md px-3 py-1 rounded-full border border-soul-ui/10 flex items-center space-x-1">
          <Star size={12} className="text-soul-ui fill-soul-ui" />
          <span className="mono-label text-soul-ui">{rating}</span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
          <div className="bg-stimulant text-soul-ui font-utility font-black px-6 py-2 rounded-full uppercase tracking-tighter flex items-center space-x-2">
            <span>View Table</span>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="mono-label text-cool-ui opacity-80">{district}</span>
          <span className="mono-label text-cool-ui opacity-80">{price}</span>
        </div>
        
        <h3 className="text-fluid-lg font-editorial text-soul-ui group-hover:text-soul-display transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center space-x-3 pt-1">
          <span className="text-fluid-xs font-utility text-cool-ui uppercase tracking-widest border-r border-soul-ui/20 pr-3">
            {cuisine}
          </span>
          <div className="flex items-center space-x-1 text-cool-ui/60 font-utility text-xs">
            <Clock size={12} />
            <span>20-30m</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
