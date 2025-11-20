import { Menu, X, Camera, Instagram, Youtube, Facebook } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Packages", href: "#pricing" },
  { name: "Booking", href: "#booking" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-yellow-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <Camera className="w-6 h-6 text-yellow-500" />
            <span className="font-semibold tracking-wide text-white">HKPhotography & Films — Since 2009</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm text-zinc-200 hover:text-yellow-400 transition-colors">
                {item.name}
              </a>
            ))}
            <a href="#booking" className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-semibold shadow hover:shadow-yellow-500/20">
              Book Your Shoot
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-yellow-500/10 bg-black/80">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setOpen(false)} className="block text-zinc-200 py-2">
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://instagram.com" target="_blank" className="text-zinc-300 hover:text-yellow-400"><Instagram className="w-5 h-5"/></a>
              <a href="https://youtube.com" target="_blank" className="text-zinc-300 hover:text-yellow-400"><Youtube className="w-5 h-5"/></a>
              <a href="https://facebook.com" target="_blank" className="text-zinc-300 hover:text-yellow-400"><Facebook className="w-5 h-5"/></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
