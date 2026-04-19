import Navbar from "./Navbar";

export default function LayoutShell({ children }) {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        {children}
      </main>
      
      <footer className="mt-24 border-t border-soul-ui/10 py-12 px-6 text-center">
        <p className="mono-label text-cool-ui opacity-50">
          cuisine protocol &copy; 2026 / bermondsey archive
        </p>
      </footer>
    </div>
  );
}
