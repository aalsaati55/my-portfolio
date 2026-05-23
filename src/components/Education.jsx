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
    <section id="education" className="py-24 bg-[#0a0a14]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-mono font-semibold tracking-widest uppercase">My Background</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-cyan-600 to-violet-600 hidden md:block" />

          <div className="space-y-8">
            {education.map((e, i) => (
              <div key={i} className="relative md:pl-20">
                {/* Timeline dot */}
                <div className={`absolute left-4 top-6 w-5 h-5 rounded-full ${e.dot} border-4 border-[#0a0a14] hidden md:block shadow-lg`} />

                <div className={`card-hover p-6 rounded-2xl bg-white/5 border ${e.border} transition-all duration-300`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-xl">{e.school}</h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${e.color} bg-clip-text text-transparent mt-0.5`}>
                        {e.degree}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                        <Calendar size={14} />
                        {e.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                        <MapPin size={14} />
                        {e.location}
                      </div>
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
