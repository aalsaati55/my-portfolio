import { Award, Shield, BookOpen, Trophy } from 'lucide-react';

const certs = [
  {
    title: 'Level Up Your Static Analysis Skills with STRELKA',
    issuer: 'Security Training',
    description: 'Advanced static analysis techniques using STRELKA for malware and threat detection workflows.',
    icon: <Shield size={22} />,
    color: 'from-red-600 to-orange-500',
    border: 'border-red-500/30',
    tag: 'Cybersecurity',
  },
  {
    title: 'IELTS – Score 6.5',
    issuer: 'British Council / IDP',
    description: 'International English Language Testing System certification demonstrating fluent English communication skills.',
    icon: <BookOpen size={22} />,
    color: 'from-blue-600 to-cyan-500',
    border: 'border-blue-500/30',
    tag: 'Language',
  },
  {
    title: 'BH National CTF',
    issuer: 'Bahrain National CTF',
    description: 'Participated in the Bahrain National Capture The Flag competition, applying cybersecurity skills in real-world offensive and defensive challenges.',
    icon: <Trophy size={22} />,
    color: 'from-yellow-500 to-orange-500',
    border: 'border-yellow-500/30',
    tag: 'Competition',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-[#0d0d1a]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-mono font-semibold tracking-widest uppercase">Achievements</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">Certificates</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((c) => (
            <div key={c.title} className={`card-hover flex flex-col p-6 rounded-2xl bg-white/5 border ${c.border} transition-all duration-300`}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white shadow-md mb-4`}>
                {c.icon}
              </div>
              <div className="mb-2">
                <span className={`text-xs px-2.5 py-1 rounded-full bg-white/10 text-gray-400 font-medium`}>{c.tag}</span>
              </div>
              <h3 className="text-white font-bold text-base leading-snug mb-1">{c.title}</h3>
              <p className={`text-xs font-semibold bg-gradient-to-r ${c.color} bg-clip-text text-transparent mb-3`}>{c.issuer}</p>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{c.description}</p>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <Award size={14} className="text-purple-400" />
                <span className="text-purple-300 text-xs font-medium">Certified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
