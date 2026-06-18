import { MapPin, Calendar, GraduationCap, Globe, Shield, Code2, Cpu } from 'lucide-react';

const facts = [
  { icon: <MapPin size={15} />, label: 'Location', value: 'Bahrain' },
  { icon: <Calendar size={15} />, label: 'Date of Birth', value: '23 October 2003' },
  { icon: <GraduationCap size={15} />, label: 'Degree', value: 'BSc ICT (Cyber Security)' },
  { icon: <Globe size={15} />, label: 'Languages', value: 'Arabic · English (Fluent)' },
];

const stats = [
  { num: '10+', label: 'Projects Built', icon: <Code2 size={18}/>, color: 'from-purple-500 to-violet-600' },
  { num: '3+', label: 'Certifications', icon: <Shield size={18}/>, color: 'from-cyan-500 to-blue-500' },
  { num: '3+', label: 'Years Coding', icon: <Cpu size={18}/>, color: 'from-pink-500 to-rose-500' },
];

export default function About() {
  return (
    <section id="about" className="py-28 section-fade" style={{ background: '#080810' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block text-purple-400 text-xs font-mono font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-4">
            Who I Am
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-3 tracking-tight">About Me</h2>
          <div className="w-20 h-1 rounded-full mx-auto mt-5" style={{ background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="flex flex-col items-center gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl animate-spin-slow opacity-30"
                style={{ background: 'conic-gradient(from 0deg, #8b5cf6, #06b6d4, #8b5cf6)', padding: '2px', borderRadius: '24px' }} />
              <div className="relative w-52 h-52 rounded-3xl flex items-center justify-center text-7xl font-black text-white animate-float z-10"
                style={{ background: 'linear-gradient(135deg, #1e1035, #0c1a2e)', boxShadow: '0 0 60px rgba(139,92,246,0.3), 0 0 120px rgba(6,182,212,0.1)' }}>
                AM
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(6,182,212,0.1))' }} />
              </div>
              {/* Available badge */}
              <div className="absolute -bottom-4 -right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-strong border border-green-500/30 z-20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                <span className="text-green-300 text-xs font-bold">Open to Work</span>
              </div>
            </div>

            {/* Facts */}
            <div className="w-full space-y-2.5">
              {facts.map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 px-4 py-3 rounded-xl glass card-shimmer border border-white/5 hover:border-purple-500/20 transition-colors">
                  <span className="text-purple-400 shrink-0">{icon}</span>
                  <span className="text-gray-500 text-sm w-24 shrink-0">{label}</span>
                  <span className="text-gray-200 text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-7">
            <p className="text-gray-200 text-lg leading-relaxed">
              I&apos;m a <span className="gradient-text font-bold">Cybersecurity & Full-Stack Developer</span> who has completed a Bachelor&apos;s in ICT (Cyber Security) at Bahrain Polytechnic and the Full-Stack Developer program at{' '}
              <span className="text-cyan-300 font-semibold">Reboot01 Coding Institute</span>.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I build systems that live at the intersection of security and software — from full-stack SIEM platforms with ML anomaly detection, to enterprise network designs, to low-level systems in Rust and Go. I care about how things work under the hood: authentication, real-time communication, APIs, and threat detection.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I&apos;m particularly passionate about <span className="text-purple-300 font-medium">detection engineering</span>, <span className="text-cyan-300 font-medium">security automation</span>, and building tools that make security teams faster and smarter.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map(({ num, label, icon, color }) => (
                <div key={label}
                  className="relative text-center p-5 rounded-2xl glass card-glow border border-white/5 overflow-hidden group">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${color}`} style={{ opacity: 0.04 }} />
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mx-auto mb-3 shadow-lg`}>
                    {icon}
                  </div>
                  <div className={`text-3xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{num}</div>
                  <div className="text-gray-500 text-xs mt-1 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
