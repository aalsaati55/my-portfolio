import { Shield, Code2, Globe, Network, Database, Wrench } from 'lucide-react';

const skillGroups = [
  {
    icon: <Shield size={20} />,
    label: 'Security',
    color: 'from-red-500 to-orange-500',
    border: 'border-red-500/30',
    glow: 'shadow-red-900/30',
    skills: ['Honeypots / IDS/IPS', 'Kali Linux', 'Nmap & Metasploit', 'Wireshark', 'Security Log Analysis', 'Python Security Automation'],
  },
  {
    icon: <Code2 size={20} />,
    label: 'Programming',
    color: 'from-purple-500 to-violet-600',
    border: 'border-purple-500/30',
    glow: 'shadow-purple-900/30',
    skills: ['JavaScript', 'Python', 'Golang', 'Rust', 'Java'],
  },
  {
    icon: <Globe size={20} />,
    label: 'Frontend',
    color: 'from-cyan-500 to-blue-500',
    border: 'border-cyan-500/30',
    glow: 'shadow-cyan-900/30',
    skills: ['React', 'Next.js', 'HTML / CSS', 'GraphQL (client)', 'WebSockets'],
  },
  {
    icon: <Network size={20} />,
    label: 'Networking',
    color: 'from-green-500 to-teal-500',
    border: 'border-green-500/30',
    glow: 'shadow-green-900/30',
    skills: ['Defense in Depth', 'Firewalls / ACLs', 'VLANs / VPN / IPsec', 'AAA / Syslog / NTP', 'Cisco Packet Tracer'],
  },
  {
    icon: <Database size={20} />,
    label: 'Backend & Data',
    color: 'from-yellow-500 to-orange-400',
    border: 'border-yellow-500/30',
    glow: 'shadow-yellow-900/30',
    skills: ['REST APIs', 'GraphQL', 'MySQL / SQLite', 'scikit-learn', 'Pandas / NumPy', 'Matplotlib'],
  },
  {
    icon: <Wrench size={20} />,
    label: 'Tools & Platforms',
    color: 'from-pink-500 to-rose-500',
    border: 'border-pink-500/30',
    glow: 'shadow-pink-900/30',
    skills: ['Git / GitHub', 'Docker', 'Postman', 'GitHub Actions', 'Azure', 'Jupyter Notebook'],
  },
];

const techBadges = [
  { name: 'Python', color: 'bg-blue-900/40 text-blue-300 border-blue-700/40' },
  { name: 'Go', color: 'bg-cyan-900/40 text-cyan-300 border-cyan-700/40' },
  { name: 'Rust', color: 'bg-orange-900/40 text-orange-300 border-orange-700/40' },
  { name: 'JavaScript', color: 'bg-yellow-900/40 text-yellow-300 border-yellow-700/40' },
  { name: 'React', color: 'bg-sky-900/40 text-sky-300 border-sky-700/40' },
  { name: 'Next.js', color: 'bg-gray-800/60 text-gray-200 border-gray-600/40' },
  { name: 'Docker', color: 'bg-blue-900/40 text-blue-300 border-blue-700/40' },
  { name: 'Kali Linux', color: 'bg-purple-900/40 text-purple-300 border-purple-700/40' },
  { name: 'GraphQL', color: 'bg-pink-900/40 text-pink-300 border-pink-700/40' },
  { name: 'WebSockets', color: 'bg-green-900/40 text-green-300 border-green-700/40' },
  { name: 'Wireshark', color: 'bg-indigo-900/40 text-indigo-300 border-indigo-700/40' },
  { name: 'Metasploit', color: 'bg-red-900/40 text-red-300 border-red-700/40' },
  { name: 'Azure', color: 'bg-blue-900/40 text-blue-200 border-blue-600/40' },
  { name: 'GitHub Actions', color: 'bg-gray-800/60 text-gray-200 border-gray-600/40' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0a0a14]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-mono font-semibold tracking-widest uppercase">What I Know</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">Tech Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Tech badge cloud */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {techBadges.map(({ name, color }) => (
            <span key={name} className={`px-3 py-1.5 rounded-full text-sm font-medium border ${color} transition-transform hover:scale-110 cursor-default`}>
              {name}
            </span>
          ))}
        </div>

        {/* Skill group cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(({ icon, label, color, border, glow, skills }) => (
            <div key={label} className={`card-hover p-6 rounded-2xl bg-white/5 border ${border} shadow-lg ${glow}`}>
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-md`}>
                  {icon}
                </div>
                <h3 className="text-white font-bold text-lg">{label}</h3>
              </div>
              <ul className="space-y-2">
                {skills.map(s => (
                  <li key={s} className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${color}`} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
