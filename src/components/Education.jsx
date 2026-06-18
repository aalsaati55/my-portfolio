import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    school: 'Reboot01 Coding Institute',
    degree: 'Full-Stack Developer Program',
    period: '2023 – Present',
    location: 'Bahrain',
    description: 'Intensive hands-on coding program focused on building complete web applications across frontend and backend. Working with modern languages and frameworks including Go, JavaScript, React, and Docker.',
    color: 'from-purple-600 to-cyan-500',
    border: 'border-purple-500/30',
    dot: 'bg-purple-500',
  },
  {
    school: 'Polytechnic Bahrain',
    degree: "Bachelor's Degree in ICT (Cyber Security)",
    period: '2022 – Present',
    location: 'Bahrain',
    description: 'Bachelor\'s degree program with a focus on cybersecurity fundamentals, network security, enterprise networking, and ICT systems. Gaining strong theoretical and practical knowledge in security principles.',
    color: 'from-cyan-600 to-blue-500',
    border: 'border-cyan-500/30',
    dot: 'bg-cyan-500',
  },
  {
    school: 'Al Rawabi Private School',
    degree: 'High School Degree',
    period: 'Completed',
    location: 'Bahrain',
    description: 'Completed high school education with a strong academic foundation.',
    color: 'from-violet-600 to-purple-500',
    border: 'border-violet-500/30',
    dot: 'bg-violet-500',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-28 section-fade" style={{ background: '#070710' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block text-purple-400 text-xs font-mono font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-4">
            My Background
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-3 tracking-tight">Education</h2>
          <div className="w-20 h-1 rounded-full mx-auto mt-5" style={{ background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)' }} />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block" style={{ background: 'linear-gradient(180deg, #8b5cf6, #06b6d4, #8b5cf6)' }} />

          <div className="space-y-6">
            {education.map((e, i) => (
              <div key={i} className="relative md:pl-20">
                {/* Timeline dot */}
                <div className={`absolute left-[18px] top-8 w-4 h-4 rounded-full ${e.dot} hidden md:block`}
                  style={{ boxShadow: `0 0 12px 2px ${e.dot.includes('purple') ? 'rgba(139,92,246,0.6)' : e.dot.includes('cyan') ? 'rgba(6,182,212,0.6)' : 'rgba(139,92,246,0.6)'}`, border: '2px solid rgba(6,6,18,1)' }} />

                <div
                  className="card-shimmer p-6 rounded-2xl transition-all duration-400"
                  style={{
                    background: 'linear-gradient(145deg, rgba(15,12,30,0.85), rgba(8,8,20,0.95))',
                    border: '1px solid rgba(255,255,255,0.06)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                  }}
                  onMouseEnter={e2 => { e2.currentTarget.style.boxShadow = '0 8px 40px rgba(139,92,246,0.15), 0 0 0 1px rgba(139,92,246,0.15)'; }}
                  onMouseLeave={e2 => { e2.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)'; }}
                >
                  {/* Top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-[1px] rounded-t-2xl bg-gradient-to-r ${e.color} opacity-50`} />

                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-lg tracking-tight">{e.school}</h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${e.color} bg-clip-text text-transparent mt-0.5`}>
                        {e.degree}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="flex items-center gap-1.5 text-gray-400 text-xs px-2.5 py-1 rounded-lg"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <Calendar size={11} />
                        {e.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-500 text-xs">
                        <MapPin size={11} />
                        {e.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
