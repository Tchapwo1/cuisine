import { useNavigate } from "react-router-dom";

const StubPage = ({ title, subtitle }) => {
  const navigate = useNavigate();
  return (
    <div className="py-32 flex flex-col items-center text-center space-y-6">
      <h1 className="text-fluid-2xl font-editorial text-soul-display italic">{title}</h1>
      <p className="mono-label text-cool-ui opacity-60 max-w-md">{subtitle}</p>
      <button 
        onClick={() => navigate('/')}
        className="mt-8 px-6 py-2 border border-soul-ui/20 hover:border-soul-display text-soul-ui transition-all rounded-full font-utility font-bold text-xs uppercase"
      >
        Return to Protocol 01
      </button>
    </div>
  );
};

export const GuidesPage = () => (
  <StubPage 
    title="Editorial Guides" 
    subtitle="Deep-dives into the fermentation labs and breakfast arches of the Bermondsey circuit. Coming Edition 02." 
  />
);

export const JournalPage = () => (
  <StubPage 
    title="The Circuit Journal" 
    subtitle="Monthly snapshots, chef dialogues, and culinary cartography." 
  />
);

export const ArchivePage = () => (
  <StubPage 
    title="The Archive" 
    subtitle="Retiring entries and historical pulses from previous editions." 
  />
);

export const NotFoundPage = () => (
  <StubPage 
    title="404 — Void" 
    subtitle="This coordinate does not exist within the current Bermondsey registry." 
  />
);
