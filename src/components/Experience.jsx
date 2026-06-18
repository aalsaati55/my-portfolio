import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    role: 'IT Security Intern',
    company: 'Al Salam Bank',
    location: 'Manama, Bahrain',
    period: 'Feb 2026 — Jun 2026',
    type: 'Internship',
    color: 'from-cyan-500 to-blue-600',
    glowColor: 'rgba(6,182,212,0.25)',
    pillColor: { bg: 'rgba(6,182,212,0.08)', border: 'rgba(6,182,212,0.25)', text: '#67e8f9' },
    summary: 'Supported day-to-day IT Security operations within a banking environment, gaining hands-on experience with Trend Micro, Qualys VMDR, Imperva, Postman, and GitHub.',
    bullets: [
      'Monitored IT assets, endpoint security coverage, and security agent status across the organisation',
      'Supported endpoint asset management — moving endpoints between groups, removing inactive or duplicate agents, and maintaining accurate asset records',
      'Deployed and verified endpoint security agents on bank devices',
      'Assisted with vulnerability scanning, tracking, and patch management using Qualys VMDR',
      'Reviewed and released legitimate quarantined emails while flagging suspicious activity for further investigation',
      'Identified duplicate agents, inactive devices, and coverage gaps to improve overall asset visibility',
      'Reviewed vulnerability findings and supported remediation tracking across the organisation',
      'Developed VulnSight — an internal vulnerability report automation platform that processes Qualys CSV and Excel exports, normalises and enriches vulnerability data, tracks remediation aging, and generates interactive dashboards and reports',
    ],
    tags: ['Trend Micro', 'Qualys VMDR', 'Imperva', 'Endpoint Security', 'Vulnerability Management', 'Patch Management', 'Email Security', 'VulnSight', 'Python', 'GitHub'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 section-fade" style={{ background: '#080810' }}>
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-purple-400 text-xs font-mono font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-4">
            My Journey
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-3 tracking-tight">Experience</h2>
          <div className="w-20 h-1 rounded-full mx-auto mt-5" style={{ background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)' }} />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(180deg, #8b5cf6, #06b6d4)' }} />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-20">

                {/* Timeline dot */}
                <div className="absolute left-[18px] top-8 w-4 h-4 rounded-full hidden md:block"
                  style={{
                    background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                    boxShadow: '0 0 14px 3px rgba(6,182,212,0.5)',
                    border: '2px solid #06060f',
                  }} />

                <div
                  className="relative rounded-2xl overflow-hidden transition-all duration-500 group"
                  style={{
                    background: 'linear-gradient(145deg, rgba(14,10,28,0.95), rgba(7,6,18,0.98))',
                    border: '1px solid rgba(255,255,255,0.07)',
                    boxShadow: '0 4px 30px rgba(0,0,0,0.5)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = `0 16px 50px ${exp.glowColor}, 0 0 0 1px rgba(255,255,255,0.1)`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
                  }}
                >
                  {/* Top gradient stripe */}
                  <div className={`h-[2px] w-full bg-gradient-to-r ${exp.color}`} />

                  {/* Ambient corner glow */}
                  <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${exp.glowColor} 0%, transparent 70%)` }} />

                  <div className="p-7">
                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div className="flex items-start gap-4">
                        {/* Company icon */}
                        <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white shrink-0 p-3 transition-transform duration-300 group-hover:scale-110`}
                          style={{ boxShadow: `0 6px 20px ${exp.glowColor}` }}>
                          <Briefcase size={22} />
                        </div>
                        <div>
                          <h3 className="text-white font-black text-xl tracking-tight">{exp.role}</h3>
                          <p className={`font-bold text-sm bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mt-0.5`}>
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Meta badges */}
                      <div className="flex flex-col items-end gap-2">
                        <span className="flex items-center gap-1.5 text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-lg"
                          style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)' }}>
                          <Calendar size={11} className="text-cyan-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-400 text-xs px-3 py-1 rounded-lg"
                          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                          <MapPin size={11} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="mb-5" style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

                    {/* Summary */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-5">{exp.summary}</p>

                    {/* Bullet points */}
                    <ul className="space-y-3 mb-6">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-gradient-to-r ${exp.color}`} />
                          <span className="text-gray-400 text-sm leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: b.replace(/VulnSight/g, '<span class="text-cyan-300 font-bold">VulnSight</span>') }}
                          />
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(t => (
                        <span key={t} className="text-[11px] px-2.5 py-1 rounded-lg font-semibold transition-all duration-200 cursor-default"
                          style={{
                            background: exp.pillColor.bg,
                            border: `1px solid ${exp.pillColor.border}`,
                            color: exp.pillColor.text,
                          }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
