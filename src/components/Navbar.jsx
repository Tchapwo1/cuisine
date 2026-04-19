import { motion } from "motion/react";
import { Search, Menu, Globe, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-canvas/80 backdrop-blur-xl border-b border-soul-ui/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <motion.a 
            href="/"
            whileHover={{ scale: 1.05 }}
            className="text-fluid-xl font-editorial text-soul-display leading-none pb-1"
          >
            cuisine
          </motion.a>
          
          <div className="hidden md:flex items-center space-x-8">
            {["Guides", "Producers", "Journals", "Archive"].map((item) => (
              <a 
                key={item}
                href="#" 
                className="mono-label text-cool-ui hover:text-soul-display transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 px-4 py-2 bg-canvas border border-soul-ui/20 rounded-full text-cool-ui focus-within:border-soul-display transition-all">
            <Search size={16} />
            <input 
              type="text" 
              placeholder="Search by cuisine or district..." 
              className="bg-transparent border-none outline-none text-fluid-xs font-utility w-48"
            />
          </div>
          
          <button className="p-2 text-cool-ui hover:text-soul-display transition-colors">
            <Globe size={20} />
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-stimulant hover:bg-soul-display hover:text-white transition-all rounded-full font-utility font-bold text-fluid-xs uppercase tracking-wider">
            <span>Join Protocol</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
