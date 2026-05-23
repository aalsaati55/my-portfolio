import { Github, Linkedin, Mail, Shield, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070710] border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
              <Shield size={16} className="text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">AbdulMajeed AlSaati</div>
              <div className="text-gray-500 text-xs">Cybersecurity & Full-Stack Developer</div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-5 text-sm text-gray-500">
            {['About', 'Skills', 'Projects', 'Contact'].map(l => (
              <button
                key={l}
                onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-purple-400 transition-colors"
              >
                {l}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a href="https://github.com/aalsaati55" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/15 transition-all">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/abdulmajeed-alsaati" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/15 transition-all">
              <Linkedin size={16} />
            </a>
            <a href="mailto:majeedghassan45@gmail.com"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/15 transition-all">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-gray-600 text-xs flex items-center justify-center gap-1">
          Built with <Heart size={12} className="text-red-500 mx-1" /> by AbdulMajeed AlSaati · {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
