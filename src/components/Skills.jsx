import { Shield, Code2, Globe, Network, Database, Wrench } from 'lucide-react';

const techIcons = [
  { name: 'Python',     bg: '#1c2b3a', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', bg: '#2a2800', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Go',         bg: '#00253a', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg' },
  { name: 'Rust',       bg: '#1a0e00', img: 'https://cdn.simpleicons.org/rust/CE412B' },
  { name: 'React',      bg: '#001a26', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js',    bg: '#111111', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Docker',     bg: '#001f3d', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git',        bg: '#1a0a00', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Linux',      bg: '#1a1800', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'MySQL',      bg: '#00172a', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'GraphQL',    bg: '#1a0020', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Azure',      bg: '#001233', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'Wireshark',  bg: '#001a33', img: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg' },
  { name: 'Kali Linux', bg: '#0d0d1a', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg' },
  { name: 'GitHub',     bg: '#111111', img: 'https://cdn.simpleicons.org/github/ffffff' },
];

const skillGroups = [
  {
    icon: <Shield size={20} />,
    label: 'Security',
    color: 'from-red-500 to-orange-500',
    border: 'border-red-500/30',
    skills: ['SIEM Development', 'Threat Intelligence (AbuseIPDB)', 'SOAR Automation', 'MITRE ATT&CK Mapping', 'IDS/IPS & Log Analysis', 'Kali Linux & Nmap & Metasploit', 'Wireshark', 'ML Anomaly Detection Models'],
  },
  {
    icon: <Code2 size={20} />,
    label: 'Programming',
    color: 'from-purple-500 to-violet-600',
    border: 'border-purple-500/30',
  },
  {
    icon: <Globe size={20} />,
    label: 'Frontend',
    color: 'from-cyan-500 to-blue-500',
    border: 'border-cyan-500/30',
    skills: ['React', 'Next.js', 'HTML / CSS', 'GraphQL (client)', 'WebSockets'],
  },
  {
    icon: <Network size={20} />,
    label: 'Networking',
    color: 'from-green-500 to-teal-500',
    border: 'border-green-500/30',
    skills: ['Defense in Depth', 'Firewalls / ACLs', 'VLANs / VPN / IPsec', 'AAA / Syslog / NTP', 'Cisco Packet Tracer'],
  },
  {
    icon: <Database size={20} />,
    label: 'Backend & Data',
    color: 'from-yellow-500 to-orange-400',
    border: 'border-yellow-500/30',
    skills: ['REST APIs', 'GraphQL', 'MySQL / SQLite', 'scikit-learn', 'Pandas / NumPy', 'Matplotlib'],
  },
  {
    icon: <Wrench size={20} />,
    label: 'Tools & Platforms',
    color: 'from-pink-500 to-rose-500',
    border: 'border-pink-500/30',
    skills: ['Git / GitHub', 'Docker', 'Postman', 'GitHub Actions', 'Azure', 'Jupyter Notebook'],
  },
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

        {/* Tech icon grid */}
        <div className="mb-16">
          <h3 className="text-white font-bold text-xl mb-3">Development Stack</h3>
          <div className="w-12 h-0.5 bg-purple-600 mb-8" />
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-5">
            {techIcons.map(({ name, bg, img }) => (
              <div key={name} className="flex flex-col items-center gap-2.5 group cursor-default">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:ring-2 group-hover:ring-purple-500/50 shadow-md"
                  style={{ backgroundColor: bg }}
                >
                  <img src={img} alt={name} className="w-9 h-9 object-contain" />
                </div>
                <span className="text-gray-400 text-xs font-medium text-center leading-tight group-hover:text-white transition-colors">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill group cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(({ icon, label, color, border, skills }) => (
            <div key={label} className={`card-hover p-6 rounded-2xl bg-white/5 border ${border}`}>
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
