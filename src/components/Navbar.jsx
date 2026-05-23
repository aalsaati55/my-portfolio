import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
// lucide-react this version has no Github/Linkedin icons — using Shield instead is fine

const links = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Certificates', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    if (id === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a14]/95 backdrop-blur-md shadow-lg shadow-purple-900/20' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
            <Shield size={18} className="text-white" />
          </div>
          <span className="text-white font-bold text-lg tracking-wide">AM<span className="text-purple-400">.</span></span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l}>
              <button onClick={() => scrollTo(l)} className="nav-link text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200">
                {l}
              </button>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a0a14]/98 backdrop-blur-md px-6 py-4 flex flex-col gap-4 border-t border-purple-900/30">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="text-gray-300 hover:text-purple-400 text-left text-base font-medium transition-colors">
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
