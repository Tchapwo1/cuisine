export const REGISTRY = [
  {
    id: "arch-36",
    name: "Arch 36",
    tagline: "Where railway architecture meets modern British fire.",
    rating: "4.9",
    cuisine: "Modern British",
    district: "Bermondsey",
    price: "£££",
    imageColor: "soul",
    coordinates: { x: 340, y: 180 }, 
    openTable: true,
    tags: ["open-fire", "natural-wine", "counter-seating"],
    dossier: {
      body: "Nestled in a cavernous railway arch, Arch 36 is the definitive word on smoke-infused British fare. The kitchen is anchored by a massive custom-built hearth where rare-breed meats and heritage vegetables meet intense charcoal heat. The atmosphere is industrial yet cathedral-like, with high ceilings and a minimalist counter that puts you inches from the flames.",
      chef: "Ewan Sterling",
      openSince: 2021,
      mustOrder: ["Aged beef tartare", "Smoked celeriac with truffle hazelnut"],
      coverImage: null
    }
  },
  {
    id: "oseille",
    name: "Oseille",
    tagline: "High-fidelity French bistro logic in a converted dock house.",
    rating: "4.8",
    cuisine: "French Bistro",
    district: "The Docks",
    price: "££",
    imageColor: "cool",
    coordinates: { x: 420, y: 80 },
    openTable: true,
    tags: ["sustainable-seafood", "low-intervention-wine", "dockside"],
    dossier: {
      body: "Oseille strips away the traditional bistro stuffiness, focusing on precision-engineered French classics. Overlooking the Thames, the space is flooded with light and features a rotating menu dictated by the morning's catch and local fermentations.",
      chef: "Clémence Roche",
      openSince: 2024,
      mustOrder: ["Seared scallops with sorrel butter", "Duck confit croquettes"],
      coverImage: null
    }
  },
  {
    id: "static",
    name: "Static",
    tagline: "A fermentation lab pushing the boundaries of the circuit.",
    rating: "4.7",
    cuisine: "Fermentation Lab",
    district: "Railway Arches",
    price: "£££",
    imageColor: "soul",
    coordinates: { x: 280, y: 220 },
    openTable: false,
    tags: ["laboratory-aesthetic", "experimental", "omnivore-tasting"],
    dossier: {
      body: "Static is more than a restaurant; it is an investigation into time and technique. The menu is a series of snapshots from their ongoing fermentation experiments, resulting in flavors that are challenging, complex, and deeply rewarding.",
      chef: "Aris Thorne",
      openSince: 2023,
      mustOrder: ["30-day koji-aged trout", "Pickled spruce tips and honey"],
      coverImage: null
    }
  },
  {
    id: "grain-glass",
    name: "Grain & Glass",
    tagline: "Refined grain-focused plates in the heart of Spa Terminus.",
    rating: "4.6",
    cuisine: "Small Plates",
    district: "Spa Terminus",
    price: "£",
    imageColor: "cool",
    coordinates: { x: 580, y: 340 },
    openTable: true,
    tags: ["bakery-by-day", "wine-bar-by-night", "local-grain"],
    dossier: {
      body: "Occupying a bright corner of the Spa Terminus cluster, Grain & Glass is a celebration of the artisan. By day, it's the neighborhood's premier bakery; by night, it transforms into a sophisticated wine bar serving small, focused plates that highlight their stone-ground grains.",
      chef: "Maya Singh",
      openSince: 2022,
      mustOrder: ["Sourdough flatbread with whipped tallow", "Heritage wheat salad"],
      coverImage: null
    }
  }
];

export const getAllVenues = () => REGISTRY;
export const getVenueById = (id) => REGISTRY.find(v => v.id === id);
