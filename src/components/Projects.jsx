import { ExternalLink, Shield, Globe, Network, Terminal, Server, Bug, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const GithubIcon = ({ size = 13 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>);

const projects = [
  {
    title: 'VulnSight',
    subtitle: 'Vulnerability Report Automation Platform',
    description: 'An internal security platform built for a bank to automate Qualys vulnerability report processing — ingesting CSV/Excel scan exports, classifying vulnerabilities via NLP, tracking SLA compliance, and generating branded PDF, Excel, and PowerPoint executive reports with role-based access control.',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'NLP', 'RBAC'],
    github: 'https://github.com/aalsaati55',
    icon: <Shield size={22} />,
    color: 'from-violet-600 to-purple-500',
    border: 'border-violet-500/30',
    badge: 'Cybersecurity',
    features: [
      { title: 'Qualys Report Ingestion', desc: 'Parses CSV/Excel exports from Qualys vulnerability scans automatically.' },
      { title: 'NLP Auto-Classification', desc: 'Classifies each vulnerability by required IT action using natural language processing.' },
      { title: 'SLA Compliance Tracking', desc: 'Monitors remediation deadlines and surfaces aging trends for each vulnerability.' },
      { title: 'Executive Report Generation', desc: 'Generates branded PDF, Excel, and PowerPoint reports for management.' },
      { title: 'Role-Based Access Control', desc: 'Granular RBAC ensures each team only sees their relevant vulnerabilities.' },
      { title: 'Bank Deployment', desc: 'Built and deployed as an internal tool for a real banking environment.' },
    ],
  },
  {
    title: 'SentinelAI',
    subtitle: 'Full-Stack AI-Assisted SIEM Platform',
    description: 'A full-stack AI-assisted SIEM platform with real-time log ingestion, a 14-rule MITRE ATT&CK detection engine, ML anomaly scoring, and an automated SOC dashboard with threat intelligence and SOAR remediation.',
    tags: ['Python', 'FastAPI', 'React', 'scikit-learn', 'WebSockets', 'SQLite', 'JWT', 'Docker'],
    github: 'https://github.com/aalsaati55/sentinelai',
    icon: <Shield size={22} />,
    color: 'from-red-600 to-orange-500',
    border: 'border-red-500/30',
    badge: 'Cybersecurity',
    features: [
      { title: 'Live Log Ingestion', desc: 'Ingests real Linux logs from a VM via SSH in real time for continuous monitoring.' },
      { title: '14-Rule Detection Engine', desc: 'Custom rule engine mapped to MITRE ATT&CK covering brute force, privilege escalation, and more.' },
      { title: 'ML Anomaly Scoring', desc: 'Isolation Forest model scores anomalies and correlates alerts into prioritized incidents.' },
      { title: 'SOAR Auto-Remediation', desc: 'Automatically blocks malicious IPs and executes remediation playbooks on detection.' },
      { title: 'Threat Intelligence', desc: 'AbuseIPDB + GeoIP enrichment on every alert for real-world context.' },
      { title: 'SOC Dashboard', desc: 'Live React dashboard with WebSocket updates, charts, and incident management.' },
    ],
  },
  {
    title: 'Social Network',
    subtitle: 'Full-Stack Social Platform',
    description: 'A full-stack social platform built with Go and Next.js, featuring auth, privacy controls, real-time WebSocket chat, notifications, groups, and events.',
    tags: ['Go', 'JavaScript', 'SQLite', 'Docker', 'WebSockets', 'Next.js'],
    github: 'https://github.com/mmahmood233/social-network.git',
    icon: <Globe size={22} />,
    color: 'from-blue-600 to-cyan-500',
    border: 'border-blue-500/30',
    badge: 'Full-Stack',
    features: [
      { title: 'Authentication & Sessions', desc: 'Secure login/register with session-based auth and cookie management.' },
      { title: 'Privacy Controls', desc: 'Public, private, and semi-private profile modes with follow request system.' },
      { title: 'Real-Time Chat', desc: 'WebSocket-powered direct messaging and group chat with live notifications.' },
      { title: 'Groups & Events', desc: 'Create groups, invite members, and manage events with RSVP responses.' },
    ],
  },
  {
    title: 'Netcat',
    subtitle: 'TCP Group Chat Application',
    description: 'A TCP-based group chat tool in Go supporting multiple concurrent clients, real-time messaging, nickname handling, and message history sync via goroutines.',
    tags: ['Go', 'TCP Sockets', 'Goroutines', 'Concurrency'],
    github: 'https://github.com/aalsaati55',
    icon: <Terminal size={22} />,
    color: 'from-green-600 to-teal-500',
    border: 'border-green-500/30',
    badge: 'Systems',
    features: [
      { title: 'TCP Multi-Client', desc: 'Handles multiple simultaneous connections using goroutines and channels.' },
      { title: 'Message History Sync', desc: 'New clients receive full chat history upon joining.' },
      { title: 'Nickname System', desc: 'Users can set and change nicknames visible to all participants.' },
    ],
  },
  {
    title: 'Defense in Depth Network',
    subtitle: 'Enterprise Network Security Design',
    description: 'A multi-branch enterprise network design applying Defense in Depth — VLAN segmentation, IPsec VPNs, DMZ isolation, IDS/IPS, and centralized AAA authentication.',
    tags: ['Cisco Packet Tracer', 'VLANs', 'IPsec VPN', 'Firewalls', 'AAA', 'DMZ'],
    github: 'https://github.com/aalsaati55',
    icon: <Network size={22} />,
    color: 'from-purple-600 to-violet-500',
    border: 'border-purple-500/30',
    badge: 'Networking',
    features: [
      { title: 'VLAN Segmentation', desc: 'Isolated departments into separate VLANs to limit lateral movement.' },
      { title: 'Site-to-Site IPsec VPN', desc: 'Encrypted tunnels between multiple branch offices.' },
      { title: 'DMZ Architecture', desc: 'Public-facing servers isolated in a DMZ with strict ACL enforcement.' },
      { title: 'Centralized AAA', desc: 'RADIUS-based authentication, authorization, and accounting for all devices.' },
    ],
  },
  {
    title: 'Localhost Web Server',
    subtitle: 'HTTP/1.1 Server from Scratch in Rust',
    description: 'A custom HTTP/1.1 web server written in Rust from scratch, using epoll for non-blocking I/O, with session management, file uploads, and configurable error pages.',
    tags: ['Rust', 'HTTP/1.1', 'epoll', 'Systems Programming'],
    github: 'https://github.com/aalsaati55/localhost',
    icon: <Server size={22} />,
    color: 'from-orange-600 to-yellow-500',
    border: 'border-orange-500/30',
    badge: 'Systems',
    features: [
      { title: 'epoll Event Loop', desc: 'Non-blocking I/O using Linux epoll for high-concurrency request handling.' },
      { title: 'HTTP/1.1 Compliant', desc: 'Full request parsing, status codes, headers, and keep-alive support.' },
      { title: 'File Uploads & Sessions', desc: 'Multipart form parsing, file storage, and cookie-based session management.' },
      { title: 'Custom Error Pages', desc: 'Configurable error responses for 404, 500, and other HTTP error codes.' },
    ],
  },
  {
    title: 'GraphQL Profile Dashboard',
    subtitle: 'JWT-Auth User Stats Visualizer',
    description: 'A profile dashboard using GraphQL and JWT authentication to fetch user data, with custom SVG-based charts to visualize XP, grades, and progress.',
    tags: ['JavaScript', 'GraphQL', 'SVG', 'JWT', 'Data Visualization'],
    github: 'https://github.com/aalsaati55/aalsaati55.github.io.git',
    icon: <Bug size={22} />,
    color: 'from-pink-600 to-rose-500',
    border: 'border-pink-500/30',
    badge: 'Full-Stack',
    features: [
      { title: 'JWT Authentication', desc: 'Secure login flow with JWT token storage and protected GraphQL queries.' },
      { title: 'GraphQL Data Fetching', desc: 'Efficient querying of user stats and progress via GraphQL API.' },
      { title: 'SVG Data Visualization', desc: 'Custom SVG charts built from scratch to display XP, grades, and progress.' },
    ],
  },
  {
    title: 'Ransomware Lab',
    subtitle: 'Educational Malware Analysis Environment',
    description: 'A sandboxed Python environment for studying ransomware encryption behavior, detection strategies, and behavioral indicators for educational security research.',
    tags: ['Python', 'Cybersecurity', 'Malware Analysis'],
    github: 'https://github.com/aalsaati55/ransomware-lab',
    icon: <Shield size={22} />,
    color: 'from-red-700 to-red-500',
    border: 'border-red-600/30',
    badge: 'Cybersecurity',
    features: [
      { title: 'Encryption Simulation', desc: 'Simulates file encryption behavior used by real ransomware families.' },
      { title: 'Isolated Environment', desc: 'Fully sandboxed setup to safely study malware without risk.' },
      { title: 'Detection Strategies', desc: 'Documents behavioral indicators and detection approaches for each sample.' },
    ],
  },
  {
    title: 'Pentest Kit',
    subtitle: 'Penetration Testing Toolkit',
    description: 'A modular collection of Python scripts for penetration testing — covering reconnaissance, vulnerability scanning, and exploitation in controlled lab environments.',
    tags: ['Python', 'Pentesting', 'Security Automation'],
    github: 'https://github.com/aalsaati55/pentest-kit',
    icon: <Shield size={22} />,
    color: 'from-yellow-600 to-orange-500',
    border: 'border-yellow-500/30',
    badge: 'Cybersecurity',
    features: [
      { title: 'Reconnaissance Tools', desc: 'Automated port scanning, banner grabbing, and service enumeration.' },
      { title: 'Vulnerability Assessment', desc: 'Scripts for common vulnerability checks across web and network targets.' },
      { title: 'Security Automation', desc: 'Modular Python scripts for repeatable, scriptable pentest workflows.' },
    ],
  },
  {
    title: 'Wget',
    subtitle: 'File Downloader in Go',
    description: 'A Go implementation of the wget CLI tool supporting HTTP/HTTPS file downloads, real-time progress tracking, and recursive site mirroring.',
    tags: ['Go', 'CLI', 'HTTP', 'Systems'],
    github: 'https://github.com/aalsaati55/wget',
    icon: <Terminal size={22} />,
    color: 'from-teal-600 to-cyan-500',
    border: 'border-teal-500/30',
    badge: 'Systems',
    features: [
      { title: 'File Downloads', desc: 'Downloads files over HTTP/HTTPS with resume support and error handling.' },
      { title: 'Progress Tracking', desc: 'Real-time progress bar with speed and ETA displayed in the terminal.' },
      { title: 'Site Mirroring', desc: 'Recursively mirrors websites for offline access.' },
    ],
  },
];

const badgeColors = {
  'Cybersecurity': 'bg-red-900/40 text-red-300 border-red-700/40',
  'Full-Stack': 'bg-blue-900/40 text-blue-300 border-blue-700/40',
  'Systems': 'bg-green-900/40 text-green-300 border-green-700/40',
  'Networking': 'bg-purple-900/40 text-purple-300 border-purple-700/40',
};

function ProjectCard({ p }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-500 card-shimmer group`}
      style={{
        background: 'linear-gradient(145deg, rgba(15,12,30,0.9), rgba(8,8,20,0.95))',
        border: `1px solid rgba(255,255,255,0.06)`,
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 40px rgba(139,92,246,0.2), 0 0 0 1px rgba(139,92,246,0.2)'; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)'; }}
    >
      {/* Top gradient accent line */}
      <div className={`h-[2px] w-full bg-gradient-to-r ${p.color}`} />

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white shrink-0`}
            style={{ boxShadow: '0 4px 16px rgba(139,92,246,0.3)' }}>
            {p.icon}
          </div>
          <span className={`text-[10px] px-2.5 py-1 rounded-full border font-bold tracking-widest uppercase ${badgeColors[p.badge] || 'bg-gray-800 text-gray-300 border-gray-600'}`}>
            {p.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-base leading-tight tracking-tight">{p.title}</h3>
        <p className={`text-[11px] font-semibold mt-0.5 mb-3 bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}>{p.subtitle}</p>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{p.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tags.map(t => (
            <span key={t} className="text-[11px] px-2 py-0.5 rounded-md font-mono text-gray-400"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              {t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {p.features?.length > 0 ? (
            <button
              onClick={() => setOpen(o => !o)}
              className="flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors group/btn"
            >
              <ChevronRight size={13} className={`transition-transform duration-200 ${open ? 'rotate-90' : 'group-hover/btn:translate-x-0.5'}`} />
              {open ? 'Hide Features' : 'View Features'}
            </button>
          ) : <span />}

          <a href={p.github} target="_blank" rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white px-3 py-1.5 rounded-lg transition-all duration-200 font-medium hover:bg-white/8">
            <GithubIcon size={12} /> Code
          </a>
        </div>
      </div>

      {/* Features overlay */}
      {open && (
        <div className="absolute inset-0 flex flex-col p-5 overflow-y-auto z-10"
          style={{ background: 'rgba(8,6,22,0.97)', backdropFilter: 'blur(16px)' }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-white font-bold text-sm">{p.title}</h4>
              <p className={`text-[11px] font-semibold bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}>Key Features</p>
            </div>
            <button onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-white w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors text-base">
              ✕
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 flex-1">
            {p.features.map(f => (
              <div key={f.title} className="p-3 rounded-xl transition-colors"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <p className="text-purple-400 text-xs font-bold mb-1.5 flex items-center gap-1">
                  <span className="opacity-50 font-mono">&lt;/&gt;</span> {f.title}
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <a href={p.github} target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white w-fit px-3 py-1.5 rounded-lg hover:bg-white/8 transition-colors font-medium">
              <GithubIcon size={12} /> View on GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 section-fade" style={{ background: '#080810' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block text-purple-400 text-xs font-mono font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-4">
            What I've Built
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-3 tracking-tight">Projects</h2>
          <div className="w-20 h-1 rounded-full mx-auto mt-5" style={{ background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)' }} />
          <p className="text-gray-500 mt-5 max-w-xl mx-auto text-base">A selection of projects spanning cybersecurity, systems programming, and full-stack development.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ gridAutoRows: '1fr' }}>
          {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>

        <div className="text-center mt-10">
          <a href="https://github.com/aalsaati55" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-purple-500/40 text-purple-300 hover:bg-purple-900/30 transition-all duration-200 font-semibold">
            <GithubIcon size={18} /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
