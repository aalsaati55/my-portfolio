import { useState, useEffect, useRef } from 'react';
import { Mail, ChevronDown, Terminal, Shield, Zap, Code2, Globe } from 'lucide-react';

const GithubIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>);
const LinkedinIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>);

const roles = ['Cybersecurity Engineer','Full-Stack Developer','Network Security Specialist','Penetration Tester','Backend Developer'];

const floatingBadges = [
  { icon: <Shield size={14}/>, label: 'MITRE ATT&CK', style: { top: '18%', left: '6%' }, delay: '0s' },
  { icon: <Zap size={14}/>, label: 'SOAR Automation', style: { top: '30%', right: '5%' }, delay: '0.4s' },
  { icon: <Code2 size={14}/>, label: 'Python · Go · Rust', style: { bottom: '32%', left: '4%' }, delay: '0.8s' },
  { icon: <Globe size={14}/>, label: 'Full-Stack Dev', style: { bottom: '22%', right: '6%' }, delay: '1.2s' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mouse-x', `${x}%`);
      el.style.setProperty('--mouse-y', `${y}%`);
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#06060f' }}
    >
      {/* Aurora background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139,92,246,0.25) 0%, transparent 60%)',
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 40% at 80% 80%, rgba(6,182,212,0.12) 0%, transparent 50%)',
        }} />
        <div className="absolute inset-0 spotlight" />
        {/* Animated grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }} />
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(88,28,220,0.08) 0%, transparent 70%)' }} />
      </div>

      {/* Floating tech badges */}
      {floatingBadges.map((b, i) => (
        <div
          key={i}
          className="absolute hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl glass neon-border text-xs font-mono text-gray-300 animate-float select-none"
          style={{ ...b.style, animationDelay: b.delay, animationDuration: `${4 + i * 0.8}s` }}
        >
          <span className="text-purple-400">{b.icon}</span>
          {b.label}
        </div>
      ))}

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Available badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass neon-border text-sm font-medium mb-10 animate-fadeInUp"
          style={{ animationDelay: '0s' }}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="ripple-badge absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
          </span>
          <span className="text-gray-200">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-black leading-none mb-5 animate-fadeInUp" style={{ animationDelay: '0.15s' }}>
          <span className="text-white tracking-tight">AbdulMajeed</span>
          <br />
          <span className="aurora-text tracking-tight">AlSaati</span>
        </h1>

        {/* Typing role */}
        <div className="flex items-center justify-center gap-3 mb-7 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <span className="text-purple-500 font-mono text-lg select-none">&gt;_</span>
          <span className="text-xl md:text-2xl font-mono">
            <span className="gradient-text-shimmer font-bold">{displayed}</span>
            <span className="animate-blink text-purple-400 ml-0.5">|</span>
          </span>
        </div>

        {/* Bio */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.45s' }}>
          BSc ICT (Cyber Security) graduate · Reboot01 Full-Stack alumnus ·
          building systems that combine <span className="text-purple-300 font-semibold">security</span>,{' '}
          <span className="text-cyan-300 font-semibold">backend engineering</span>, and{' '}
          <span className="text-violet-300 font-semibold">real-world threat detection</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative w-full sm:w-auto px-9 py-4 rounded-2xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #0891b2)', boxShadow: '0 0 30px rgba(124,58,237,0.4), 0 10px 40px rgba(0,0,0,0.3)' }}
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              View My Work
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </span>
          </button>
          <a
            href="mailto:majeedghassan45@gmail.com"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass neon-border text-gray-200 font-semibold hover:text-white transition-all duration-300 hover:scale-105 text-sm"
          >
            Contact Me
          </a>
          <a
            href="/my-portfolio/AbdulMajeed_AlSaati_CV.pdf"
            target="_blank" rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-cyan-500/30 text-cyan-300 font-semibold hover:bg-cyan-950/40 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 text-sm"
          >
            View CV ↗
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3 animate-fadeInUp" style={{ animationDelay: '0.75s' }}>
          {[
            { icon: <GithubIcon />, label: 'GitHub', href: 'https://github.com/aalsaati55' },
            { icon: <LinkedinIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdulmajeed-alsaati' },
            { icon: <Mail size={15} />, label: 'Email', href: 'mailto:majeedghassan45@gmail.com' },
          ].map(s => (
            <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-gray-400 hover:text-white transition-all duration-200 text-sm font-medium card-shimmer">
              {s.icon}
              <span>{s.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 hover:text-purple-400 transition-colors group"
      >
        <span className="text-xs font-mono tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
