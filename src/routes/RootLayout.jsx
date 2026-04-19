import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  const { pathname } = useLocation();
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Trigger fade out
    setIsFading(true);
    
    // Scroll to top instantly
    window.scrollTo(0, 0);

    const timeout = setTimeout(() => {
      setIsFading(false);
    }, 300); // Matches transition duration

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-canvas selection:bg-soul-display/20">
      <Navbar />
      
      <main 
        className={`transition-opacity duration-300 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'} max-w-7xl mx-auto px-6 pb-24`}
      >
        <Outlet />
      </main>
      
      {/* Footer / Editorial Signature */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-soul-ui/10 text-center">
        <div className="mono-label text-cool-ui opacity-40 text-[10px]">
          © 2026 cuisine protocol — bermondsey circuit edition
        </div>
      </footer>
    </div>
  );
}
