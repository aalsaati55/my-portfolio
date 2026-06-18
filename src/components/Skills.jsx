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
  { name: 'HTML',       bg: '#1a0e00', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS',        bg: '#001226', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'TypeScript', bg: '#001433', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind',   bg: '#001a26', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
];

const skillGroups = [
  {
    icon: <Shield size={20} />,
    label: 'Security',
    color: 'from-red-500 to-orange-500',
    glowColor: 'rgba(239,68,68,0.25)',
    pillColor: { bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.25)', text: '#fca5a5', hoverBg: 'rgba(239,68,68,0.2)' },
    skills: ['SIEM Development', 'Threat Intelligence (AbuseIPDB, VirusTotal)', 'MITRE ATT&CK Mapping', 'IDS/IPS & Log Analysis', 'Kali Linux & Nmap & Metasploit', 'Wireshark', 'ML Anomaly Detection Models', 'Wazuh', 'Suricata', 'Cowrie Honeypot'],
  },
  {
    icon: <Code2 size={20} />,
    label: 'Programming',
    color: 'from-purple-500 to-violet-600',
    glowColor: 'rgba(139,92,246,0.25)',
    pillColor: { bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.25)', text: '#c4b5fd', hoverBg: 'rgba(139,92,246,0.2)' },
    skills: ['JavaScript', 'Python', 'Golang', 'Rust', 'Java'],
  },
  {
    icon: <Globe size={20} />,
    label: 'Frontend',
    color: 'from-cyan-500 to-blue-500',
    glowColor: 'rgba(6,182,212,0.25)',
    pillColor: { bg: 'rgba(6,182,212,0.08)', border: 'rgba(6,182,212,0.25)', text: '#67e8f9', hoverBg: 'rgba(6,182,212,0.2)' },
    skills: ['React', 'Next.js', 'HTML / CSS', 'TypeScript', 'TailwindCSS', 'GraphQL (client)', 'WebSockets'],
  },
  {
    icon: <Network size={20} />,
    label: 'Networking',
    color: 'from-green-500 to-teal-500',
    glowColor: 'rgba(34,197,94,0.25)',
    pillColor: { bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.25)', text: '#86efac', hoverBg: 'rgba(34,197,94,0.2)' },
    skills: ['Defense in Depth', 'Firewalls / ACLs', 'VLANs / VPN / IPsec', 'AAA / Syslog / NTP', 'Cisco Packet Tracer'],
  },
  {
    icon: <Database size={20} />,
    label: 'Backend & Data',
    color: 'from-yellow-500 to-orange-400',
    glowColor: 'rgba(234,179,8,0.25)',
    pillColor: { bg: 'rgba(234,179,8,0.08)', border: 'rgba(234,179,8,0.25)', text: '#fde047', hoverBg: 'rgba(234,179,8,0.2)' },
    skills: ['REST APIs', 'GraphQL', 'MySQL / SQLite', 'scikit-learn', 'Pandas / NumPy', 'Matplotlib'],
  },
  {
    icon: <Shield size={20} />,
    label: 'Security Automation',
    color: 'from-orange-500 to-red-600',
    glowColor: 'rgba(249,115,22,0.25)',
    pillColor: { bg: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.25)', text: '#fdba74', hoverBg: 'rgba(249,115,22,0.2)' },
    skills: ['SOAR Automation', 'Automated Email Alerts', 'Automated Vulnerability Reports', 'SOAR Playbook Execution', 'IP Auto-Blocking', 'Scheduled Threat Scans', 'Log Parsing & Alerting', 'Python Security Scripting'],
  },
  {
    icon: <Wrench size={20} />,
    label: 'Tools & Platforms',
    color: 'from-pink-500 to-rose-500',
    glowColor: 'rgba(236,72,153,0.25)',
    pillColor: { bg: 'rgba(236,72,153,0.08)', border: 'rgba(236,72,153,0.25)', text: '#f9a8d4', hoverBg: 'rgba(236,72,153,0.2)' },
    skills: ['Git / GitHub', 'Docker', 'Postman', 'GitHub Actions', 'Azure', 'Jupyter Notebook'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 section-fade" style={{ background: '#070710' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block text-purple-400 text-xs font-mono font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-4">
            What I Know
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-3 tracking-tight">Tech Skills</h2>
          <div className="w-20 h-1 rounded-full mx-auto mt-5" style={{ background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)' }} />
        </div>

        {/* Tech icon grid */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-white font-bold text-lg tracking-tight">Development Stack</h3>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(139,92,246,0.4), transparent)' }} />
          </div>
          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
            {techIcons.map(({ name, bg, img }) => (
              <div key={name} className="flex flex-col items-center gap-2 group cursor-default">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 card-shimmer"
                  style={{
                    backgroundColor: bg,
                    border: '1px solid rgba(255,255,255,0.06)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(139,92,246,0.4), 0 4px 20px rgba(0,0,0,0.5)'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.4)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
                >
                  <img src={img} alt={name} className="w-8 h-8 object-contain" />
                </div>
                <span className="text-gray-500 text-[10px] font-medium text-center leading-tight group-hover:text-gray-200 transition-colors">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill group cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(({ icon, label, color, glowColor, pillColor, skills }) => (
            <div key={label}
              className="relative p-6 rounded-2xl overflow-hidden group transition-all duration-500"
              style={{
                background: 'linear-gradient(145deg, rgba(14,10,28,0.95), rgba(7,6,18,0.98))',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 4px 30px rgba(0,0,0,0.5)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 16px 50px ${glowColor}, 0 0 0 1px rgba(255,255,255,0.1)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
              }}
            >
              {/* Ambient corner glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)` }} />

              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${color}`} />

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  style={{ boxShadow: `0 6px 20px ${glowColor}` }}>
                  {icon}
                </div>
                <div>
                  <h3 className="text-white font-black text-base tracking-tight">{label}</h3>
                  <p className="text-gray-600 text-xs">{skills.length} skills</p>
                </div>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {skills.map(s => (
                  <span key={s}
                    className="text-[11px] px-2.5 py-1 rounded-lg font-semibold transition-all duration-200 cursor-default"
                    style={{
                      background: pillColor.bg,
                      border: `1px solid ${pillColor.border}`,
                      color: pillColor.text,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = pillColor.hoverBg; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = pillColor.bg; e.currentTarget.style.color = pillColor.text; }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
