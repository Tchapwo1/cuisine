import BespokeMap from "../components/BespokeMap";
import { getAllVenues } from "../data/registry";
import { useNavigate } from "react-router-dom";

export default function MapPage() {
  const venues = getAllVenues();
  const navigate = useNavigate();

  return (
    <div className="space-y-12 py-12">
      <div className="space-y-2">
        <h1 className="text-fluid-xl font-editorial text-soul-display">District Circuit</h1>
        <p className="mono-label text-cool-ui opacity-60">Interactive plotting of culinary intent / Bermondsey Arches</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <BespokeMap venues={venues} />
        </div>
        
        <div className="space-y-6">
          <h3 className="mono-label text-soul-ui border-b border-soul-ui/10 pb-4">Active Registry</h3>
          <div className="space-y-4 max-h-[520px] overflow-y-auto pr-4 scrollbar-hide">
            {venues.map((venue) => (
              <div 
                key={venue.id}
                onClick={() => navigate(`/dossier/${venue.id}`)}
                className="group cursor-pointer p-4 rounded-xl border border-soul-ui/5 hover:border-soul-display transition-all"
              >
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-editorial text-lg text-soul-ui group-hover:text-soul-display">{venue.name}</h4>
                  <span className="mono-label text-[10px] text-cool-ui">{venue.rating}</span>
                </div>
                <p className="text-xs text-cool-ui/60 line-clamp-1 italic">{venue.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
