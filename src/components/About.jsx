import { MapPin, Calendar, GraduationCap, Globe } from 'lucide-react';

const facts = [
  { icon: <MapPin size={16} />, label: 'Location', value: 'Bahrain' },
  { icon: <Calendar size={16} />, label: 'Date of Birth', value: '23 October 2003' },
  { icon: <GraduationCap size={16} />, label: 'Degree', value: 'Bachelor in ICT (Cyber Security)' },
  { icon: <Globe size={16} />, label: 'Languages', value: 'Arabic (Native), English (Fluent)' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0d0d1a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-mono font-semibold tracking-widest uppercase">Who I Am</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Avatar + quick facts */}
          <div className="flex flex-col items-center gap-6">
            {/* Avatar placeholder with initials */}
            <div className="relative">
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-purple-700 to-cyan-600 flex items-center justify-center text-6xl font-black text-white shadow-2xl shadow-purple-900/50 animate-float">
                AM
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shadow-lg">
                <span className="text-white text-xs font-bold">Open</span>
              </div>
            </div>

            {/* Quick facts */}
            <div className="w-full grid grid-cols-1 gap-3 mt-4">
              {facts.map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-purple-400">{icon}</span>
                  <span className="text-gray-500 text-sm w-28 shrink-0">{label}:</span>
                  <span className="text-gray-200 text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Bio text */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m a <span className="text-purple-300 font-semibold">Cybersecurity & Full-Stack Developer</span> currently pursuing a Bachelor&apos;s degree in ICT at Bahrain Polytechnic, while also enrolled in a Full-Stack Developer coding program at <span className="text-cyan-300 font-semibold">Reboot01 Coding Institute</span>.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I&apos;ve developed a strong passion for cybersecurity and full-stack development, especially building systems that combine coding, security, and networking. I enjoy working across backend and full-stack development with a focus on how systems behave under the hood — authentication, automation, real-time communication, APIs, and low-level system behavior.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I&apos;m particularly interested in <span className="text-purple-300">system security</span>, <span className="text-cyan-300">network behavior</span>, and building applications that interact with real systems efficiently and securely. I prefer learning by building and experimenting.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { num: '10+', label: 'Projects' },
                { num: '3+', label: 'Certs' },
                { num: '2+', label: 'Years Coding' },
              ].map(({ num, label }) => (
                <div key={label} className="text-center p-4 rounded-xl bg-gradient-to-b from-purple-900/30 to-transparent border border-purple-700/30">
                  <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{num}</div>
                  <div className="text-gray-400 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
