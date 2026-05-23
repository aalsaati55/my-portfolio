import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Terminal } from 'lucide-react';

const roles = [
  'Cybersecurity Engineer',
  'Full-Stack Developer',
  'Network Security Specialist',
  'Penetration Tester',
  'Backend Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a14]">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-700/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-3xl" />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-900/20 text-purple-300 text-sm font-medium mb-8 animate-fadeInUp">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          AbdulMajeed
          <span className="block bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            AlSaati
          </span>
        </h1>

        {/* Typing role */}
        <div className="flex items-center justify-center gap-2 mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <Terminal size={20} className="text-purple-400" />
          <span className="text-xl md:text-2xl font-mono text-gray-300">
            <span className="text-cyan-400">{displayed}</span>
            <span className="animate-blink text-purple-400">|</span>
          </span>
        </div>

        {/* Bio */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          Cybersecurity-focused ICT student at Bahrain Polytechnic, building systems that combine
          <span className="text-purple-300 font-medium"> security</span>,
          <span className="text-cyan-300 font-medium"> backend development</span>, and
          <span className="text-violet-300 font-medium"> real-world networking</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition-all duration-200 hover:scale-105 shadow-lg shadow-purple-900/40"
          >
            View My Work
          </button>
          <a
            href="mailto:majeedghassan45@gmail.com"
            className="px-8 py-3 rounded-xl border border-purple-500/40 text-purple-300 font-semibold hover:bg-purple-900/30 transition-all duration-200 hover:scale-105"
          >
            Contact Me
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <a href="https://github.com/aalsaati55" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm">
            <Github size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/abdulmajeed-alsaati" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="mailto:majeedghassan45@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm">
            <Mail size={16} /> Email
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-purple-400 transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
