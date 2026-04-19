import { useLoaderData, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, UtensilsCrossed, Calendar, Award } from "lucide-react";
import { motion } from "motion/react";

export default function DossierPage() {
  const venue = useLoaderData();
  const navigate = useNavigate();

  if (!venue) return null;

  return (
    <article className="py-12 space-y-16">
      {/* Editorial Header */}
      <header className="space-y-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-cool-ui/60 hover:text-soul-display transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="mono-label text-[10px]">Return to Circuit</span>
        </button>

        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
               <span className="mono-label text-soul-ui px-3 py-1 bg-soul-display/5 border border-soul-display/20 rounded-full">
                Dossier #{venue.id.toUpperCase()}
              </span>
               <div className="flex items-center space-x-1">
                <Star size={14} className="fill-stimulant text-stimulant" />
                <span className="mono-label text-soul-ui">{venue.rating}</span>
              </div>
            </div>
            <h1 className="text-fluid-display font-editorial text-soul-ui leading-none tracking-tighter">
              {venue.name}
            </h1>
            <p className="text-fluid-lg font-editorial italic text-cool-ui/70 max-w-2xl">
              "{venue.tagline}"
            </p>
          </div>
          
          {venue.openTable && (
             <button className="px-8 py-4 bg-stimulant hover:bg-soul-display hover:text-white transition-all rounded-full font-utility font-black text-lg uppercase tracking-wider shadow-xl shadow-stimulant/20">
              Check Tables
            </button>
          )}
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-soul-ui/10 pt-16">
        {/* Left Column: Utility Metadata */}
        <aside className="lg:col-span-4 space-y-12">
          <div className="space-y-6">
            <h3 className="mono-label text-soul-ui text-xs border-b border-soul-ui/10 pb-2">Technical Specs</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <UtensilsCrossed size={18} className="text-cool-ui/40" />
                <div>
                  <div className="mono-label text-[10px] text-cool-ui/40">Cuisine</div>
                  <div className="font-editorial text-lg text-soul-ui">{venue.cuisine}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Award size={18} className="text-cool-ui/40" />
                <div>
                  <div className="mono-label text-[10px] text-cool-ui/40">Chef de Cuisine</div>
                  <div className="font-editorial text-lg text-soul-ui">{venue.dossier.chef}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Calendar size={18} className="text-cool-ui/40" />
                <div>
                  <div className="mono-label text-[10px] text-cool-ui/40">Established</div>
                  <div className="font-editorial text-lg text-soul-ui">{venue.dossier.openSince}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="mono-label text-soul-ui text-xs border-b border-soul-ui/10 pb-2">Must Order</h3>
            <ul className="space-y-3">
              {venue.dossier.mustOrder.map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-soul-display mt-2" />
                  <span className="font-editorial text-lg text-soul-ui/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-4">
            {venue.tags.map(tag => (
              <span key={tag} className="mono-label text-[9px] px-2 py-1 rounded bg-canvas border border-cool-ui/10 text-cool-ui/60">
                #{tag}
              </span>
            ))}
          </div>
        </aside>

        {/* Right Column: Narrative Body */}
        <div className="lg:col-span-8 space-y-12">
           <div className="aspect-video w-full rounded-2xl bg-soul-display/5 border border-soul-ui/10 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="mono-label text-cool-ui/20 text-xs">Awaiting Editorial Asset — {venue.id}.jpg</div>
              </div>
           </div>

           <div className="prose prose-lg max-w-none">
              <p className="text-fluid-lg font-editorial leading-relaxed text-soul-ui/90 first-letter:text-5xl first-letter:font-editorial first-letter:text-soul-display first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                {venue.dossier.body}
              </p>
           </div>
        </div>
      </div>
    </article>
  );
}
