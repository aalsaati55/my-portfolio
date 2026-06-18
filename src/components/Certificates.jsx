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
    <section id="certificates" className="py-28 section-fade" style={{ background: '#080810' }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-purple-400 text-xs font-mono font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-4">
            Achievements
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-3 tracking-tight">Certificates</h2>
          <div className="w-20 h-1 rounded-full mx-auto mt-5" style={{ background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)' }} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((c) => (
            <div key={c.title}
              className="relative flex flex-col rounded-2xl overflow-hidden card-shimmer group transition-all duration-400"
              style={{
                background: 'linear-gradient(145deg, rgba(15,12,30,0.85), rgba(8,8,20,0.95))',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 40px rgba(139,92,246,0.2), 0 0 0 1px rgba(139,92,246,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)'; }}
            >
              {/* Top color stripe */}
              <div className={`h-[2px] w-full bg-gradient-to-r ${c.color}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Icon + tag row */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white`}
                    style={{ boxShadow: '0 4px 20px rgba(139,92,246,0.3)' }}>
                    {c.icon}
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-full font-bold tracking-widest uppercase text-gray-400"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {c.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-base leading-snug mb-1.5 tracking-tight">{c.title}</h3>
                <p className={`text-xs font-bold bg-gradient-to-r ${c.color} bg-clip-text text-transparent mb-3 uppercase tracking-wider`}>{c.issuer}</p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{c.description}</p>

                {/* Footer */}
                <div className="mt-5 pt-4 flex items-center gap-2"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${c.color} flex items-center justify-center`}>
                    <Award size={12} className="text-white" />
                  </div>
                  <span className="text-gray-400 text-xs font-semibold">Certified</span>
                  <span className="ml-auto text-gray-600 text-xs">✓ Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
