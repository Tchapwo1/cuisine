import { NavLink, Link } from "react-router-dom";
import { Search, Map as MapIcon, BookOpen, Layers } from "lucide-react";

export default function Navbar() {
  const navStyles = ({ isActive }) => 
    `mono-label text-fluid-xs transition-all flex items-center space-x-2 ${
      isActive 
        ? "text-soul-display border-b border-soul-display" 
        : "text-cool-ui/60 hover:text-soul-ui"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-canvas/80 backdrop-blur-xl border-b border-soul-ui/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/" className="group flex items-center space-x-2">
           <div className="w-8 h-8 rounded-lg bg-soul-display flex items-center justify-center font-editorial text-canvas text-xl group-hover:rotate-12 transition-transform">
            c
           </div>
           <span className="font-editorial text-fluid-lg text-soul-ui tracking-tighter">cuisine</span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <NavLink to="/map" className={navStyles}>
            <MapIcon size={14} />
            <span>Map Pulse</span>
          </NavLink>
          <NavLink to="/journal" className={navStyles}>
            <BookOpen size={14} />
            <span>Journal</span>
          </NavLink>
          <NavLink to="/archive" className={navStyles}>
            <Layers size={14} />
            <span>Archive</span>
          </NavLink>
          <NavLink to="/guides" className={navStyles}>
            <span>Guides</span>
          </NavLink>
        </div>

        {/* Global CTAs */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-cool-ui hover:text-soul-display transition-colors">
            <Search size={20} />
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-stimulant hover:bg-soul-display hover:text-white transition-all rounded-full font-utility font-bold text-fluid-xs uppercase tracking-wider">
            <span>Join the Circuit</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
