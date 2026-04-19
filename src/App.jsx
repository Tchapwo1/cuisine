import LayoutShell from "./components/LayoutShell";
import DiscoveryHero from "./components/DiscoveryHero";
import CuisineCard from "./components/CuisineCard";

const SAMPLE_DATA = [
  {
    id: 1,
    name: "Arch 36",
    rating: "4.9",
    cuisine: "Modern British",
    district: "Bermondsey",
    price: "£££",
    imageColor: "soul"
  },
  {
    id: 2,
    name: "Oseille",
    rating: "4.8",
    cuisine: "French Bistro",
    district: "The Docks",
    price: "££",
    imageColor: "cool"
  },
  {
    id: 3,
    name: "Static",
    rating: "4.7",
    cuisine: "Fermentation Lab",
    district: "Railway Arches",
    price: "£££",
    imageColor: "soul"
  },
  {
    id: 4,
    name: "Grain & Glass",
    rating: "4.6",
    cuisine: "Small Plates",
    district: "Spa Terminus",
    price: "£",
    imageColor: "cool"
  }
];

function App() {
  return (
    <LayoutShell>
      <DiscoveryHero />
      
      <section className="mt-24">
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
          {SAMPLE_DATA.map((restaurant) => (
            <CuisineCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </section>

      {/* Editorial Quote Section */}
      <section className="mt-32 py-24 border-t border-soul-ui/10 text-center max-w-4xl mx-auto">
        <blockquote className="text-fluid-xl font-editorial text-soul-display leading-tight italic">
          "The neighborhood is no longer just a collection of arches. It is a living, breathing dossier of culinary intent."
        </blockquote>
        <cite className="block mt-8 mono-label text-cool-ui">— The Editor, Protocol 01</cite>
      </section>
    </LayoutShell>
  );
}

export default App;
