import { Github, ExternalLink, Shield, Globe, Network, Terminal, Server, Bug } from 'lucide-react';

const projects = [
  {
    title: 'SentinelAI',
    subtitle: 'AI-Powered Honeypot Threat Detection System',
    description: 'A honeypot-based system to capture and analyze real-world cyberattacks. Uses Cowrie & Suricata for monitoring, processes logs with Python, applies ML for attack classification, and visualizes results using a SOC-style dashboard.',
    tags: ['Python', 'Machine Learning', 'Cowrie', 'Suricata', 'scikit-learn'],
    github: 'https://github.com/aalsaati55/sentinelai',
    icon: <Shield size={22} />,
    color: 'from-red-600 to-orange-500',
    border: 'border-red-500/30',
    badge: 'Cybersecurity',
  },
  {
    title: 'Social Network',
    subtitle: 'Full-Stack Social Platform',
    description: 'A full-stack social network built with Go (Golang) and Next.js featuring authentication, privacy levels, follow requests, real-time chat via WebSockets/SSE, notifications, groups, and events.',
    tags: ['Go', 'JavaScript', 'SQLite', 'Docker', 'WebSockets', 'Next.js'],
    github: 'https://github.com/aalsaati55',
    icon: <Globe size={22} />,
    color: 'from-blue-600 to-cyan-500',
    border: 'border-blue-500/30',
    badge: 'Full-Stack',
  },
  {
    title: 'Netcat Clone',
    subtitle: 'TCP Group Chat Application',
    description: 'A Netcat-style group chat application in Go using TCP sockets. Features real-time messaging, nickname handling, message history synchronization, and multi-client support using goroutines and channels.',
    tags: ['Go', 'TCP Sockets', 'Goroutines', 'Concurrency'],
    github: 'https://github.com/aalsaati55',
    icon: <Terminal size={22} />,
    color: 'from-green-600 to-teal-500',
    border: 'border-green-500/30',
    badge: 'Systems',
  },
  {
    title: 'Defense in Depth Network',
    subtitle: 'Enterprise Network Security Design',
    description: 'Designed a secure multi-branch enterprise network using Defense in Depth principles. Implemented VLAN segmentation, firewalls, IDS/IPS, centralized AAA, DMZ isolation, and site-to-site IPsec VPNs.',
    tags: ['Cisco Packet Tracer', 'VLANs', 'IPsec VPN', 'Firewalls', 'AAA', 'DMZ'],
    github: 'https://github.com/aalsaati55',
    icon: <Network size={22} />,
    color: 'from-purple-600 to-violet-500',
    border: 'border-purple-500/30',
    badge: 'Networking',
  },
  {
    title: 'Localhost Web Server',
    subtitle: 'HTTP/1.1 Server from Scratch in Rust',
    description: 'Built a custom HTTP/1.1 web server in Rust from scratch using epoll. Implements core request handling, sessions, file uploads, and custom error pages with stress-tested stability and reliability.',
    tags: ['Rust', 'HTTP/1.1', 'epoll', 'Systems Programming'],
    github: 'https://github.com/aalsaati55/localhost',
    icon: <Server size={22} />,
    color: 'from-orange-600 to-yellow-500',
    border: 'border-orange-500/30',
    badge: 'Systems',
  },
  {
    title: 'GraphQL Profile Dashboard',
    subtitle: 'JWT-Auth User Stats Visualizer',
    description: 'A profile web application using GraphQL to securely fetch authenticated user data. Implemented JWT-based authentication and created SVG-based graphs to visualize user progress and statistics.',
    tags: ['JavaScript', 'GraphQL', 'SVG', 'JWT', 'Data Visualization'],
    github: 'https://github.com/aalsaati55',
    icon: <Bug size={22} />,
    color: 'from-pink-600 to-rose-500',
    border: 'border-pink-500/30',
    badge: 'Full-Stack',
  },
  {
    title: 'Ransomware Lab',
    subtitle: 'Educational Malware Analysis Environment',
    description: 'A controlled lab environment for studying ransomware behavior, encryption mechanisms, and detection strategies in an isolated Python-based setup for educational security research.',
    tags: ['Python', 'Cybersecurity', 'Malware Analysis'],
    github: 'https://github.com/aalsaati55/ransomware-lab',
    icon: <Shield size={22} />,
    color: 'from-red-700 to-red-500',
    border: 'border-red-600/30',
    badge: 'Cybersecurity',
  },
  {
    title: 'Pentest Kit',
    subtitle: 'Penetration Testing Toolkit',
    description: 'A collection of penetration testing tools and scripts for vulnerability assessment, reconnaissance, and exploitation in controlled environments.',
    tags: ['Python', 'Pentesting', 'Security Automation'],
    github: 'https://github.com/aalsaati55/pentest-kit',
    icon: <Shield size={22} />,
    color: 'from-yellow-600 to-orange-500',
    border: 'border-yellow-500/30',
    badge: 'Cybersecurity',
  },
  {
    title: 'wget Clone',
    subtitle: 'File Downloader in Go',
    description: 'A Go-based implementation of the wget command-line tool with support for file downloads, progress tracking, and mirroring capabilities.',
    tags: ['Go', 'CLI', 'HTTP', 'Systems'],
    github: 'https://github.com/aalsaati55/wget',
    icon: <Terminal size={22} />,
    color: 'from-teal-600 to-cyan-500',
    border: 'border-teal-500/30',
    badge: 'Systems',
  },
];

const badgeColors = {
  'Cybersecurity': 'bg-red-900/40 text-red-300 border-red-700/40',
  'Full-Stack': 'bg-blue-900/40 text-blue-300 border-blue-700/40',
  'Systems': 'bg-green-900/40 text-green-300 border-green-700/40',
  'Networking': 'bg-purple-900/40 text-purple-300 border-purple-700/40',
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0d0d1a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-mono font-semibold tracking-widest uppercase">What I've Built</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">A selection of projects spanning cybersecurity, systems programming, and full-stack development.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className={`card-hover group flex flex-col p-6 rounded-2xl bg-white/5 border ${p.border} hover:bg-white/8 transition-all duration-300`}>
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white shadow-md`}>
                  {p.icon}
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${badgeColors[p.badge] || 'bg-gray-800 text-gray-300 border-gray-600'}`}>
                  {p.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg leading-tight">{p.title}</h3>
              <p className={`text-xs font-semibold mt-0.5 mb-3 bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}>{p.subtitle}</p>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{p.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-white/10 text-gray-300 font-mono">{t}</span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto">
                <a href={p.github} target="_blank" rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors font-medium">
                  <Github size={13} /> Code
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors font-medium">
                    <ExternalLink size={13} /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://github.com/aalsaati55" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-purple-500/40 text-purple-300 hover:bg-purple-900/30 transition-all duration-200 font-semibold">
            <Github size={18} /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
