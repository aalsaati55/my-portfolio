import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Certificates', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY < 100) { setActive('Home'); return; }
      const sections = links.slice(1).map(l => document.getElementById(l.toLowerCase()));
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && window.scrollY >= sections[i].offsetTop - 120) {
          setActive(links[i + 1]);
          return;
        }
      }
    };
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#080812]/95 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-purple-950/30' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-md shadow-purple-900/40">
            <Shield size={17} className="text-white" />
          </div>
          <span className="text-white font-black text-lg tracking-tight">AM<span className="text-purple-400">.</span></span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${active === l ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
              >
                {active === l && (
                  <span className="absolute inset-0 rounded-lg bg-white/8 border border-white/10" />
                )}
                <span className="relative">{l}</span>
              </button>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-gray-300 hover:text-white p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#080812]/98 backdrop-blur-xl px-6 py-5 flex flex-col gap-1 border-t border-white/5">
          {links.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
                ${active === l ? 'text-white bg-white/8' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
