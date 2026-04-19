import DiscoveryHero from "../components/DiscoveryHero";
import CuisineCard from "../components/CuisineCard";
import { getAllVenues } from "../data/registry";

export default function HomePage() {
  const venues = getAllVenues();

  return (
    <div className="space-y-24">
      <DiscoveryHero />
      
      <section>
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-1">
            <h2 className="text-fluid-2xl font-editorial text-soul-ui">Market Pulse</h2>
            <p className="mono-label text-cool-ui opacity-60">Real-time snapshots from the Bermondsey circuit</p>
          </div>
          <button className="text-soul-ui font-utility font-bold uppercase tracking-widest text-sm border-b-2 border-soul-ui/20 hover:border-soul-display transition-all">
            View All Entries
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {venues.map((restaurant) => (
            <CuisineCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </section>

      {/* Editorial Quote Section */}
      <section className="py-24 border-t border-soul-ui/10 text-center max-w-4xl mx-auto">
        <blockquote className="text-fluid-xl font-editorial text-soul-display leading-tight italic">
          "The neighborhood is no longer just a collection of arches. It is a living, breathing dossier of culinary intent."
        </blockquote>
        <cite className="block mt-8 mono-label text-cool-ui">— The Editor, Protocol 01</cite>
      </section>
    </div>
  );
}
