import { Mail, Phone, MapPin, Send } from 'lucide-react';

import { useState } from 'react';

const GithubIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>);
const LinkedinIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>);

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'majeedghassan45@gmail.com',
    href: 'mailto:majeedghassan45@gmail.com',
    color: 'from-purple-600 to-violet-500',
    border: 'border-purple-500/30',
  },
  {
    icon: <GithubIcon />,
    label: 'GitHub',
    value: 'github.com/aalsaati55',
    href: 'https://github.com/aalsaati55',
    color: 'from-gray-600 to-gray-500',
    border: 'border-gray-500/30',
  },
  {
    icon: <LinkedinIcon />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/abdulmajeed-alsaati',
    href: 'https://www.linkedin.com/in/abdulmajeed-alsaati',
    color: 'from-blue-600 to-blue-500',
    border: 'border-blue-500/30',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+973 38978011',
    href: 'tel:+97338978011',
    color: 'from-green-600 to-teal-500',
    border: 'border-green-500/30',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Bahrain',
    href: null,
    color: 'from-red-600 to-orange-500',
    border: 'border-red-500/30',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xwvzqlrn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-28 section-fade" style={{ background: '#070710' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-mono font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">Contact Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4" />
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Open to opportunities, collaborations, and interesting conversations. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xl mb-6">Let&apos;s Connect</h3>
            {contactLinks.map(({ icon, label, value, href, color, border }) => (
              <div key={label} className={`flex items-center gap-4 p-4 rounded-xl bg-white/5 border ${border} card-hover`}>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-md shrink-0`}>
                  {icon}
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-medium">{label}</div>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                      className="text-gray-200 text-sm font-medium hover:text-purple-300 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <span className="text-gray-200 text-sm font-medium">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-white/5 border border-purple-500/20">
            <h3 className="text-white font-bold text-xl mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-gray-400 text-sm font-medium block mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/60 focus:bg-white/15 transition-all text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm font-medium block mb-2">Your Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/60 focus:bg-white/15 transition-all text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm font-medium block mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/60 focus:bg-white/15 transition-all text-sm resize-none"
                  placeholder="Hello AbdulMajeed, I'd like to..."
                />
              </div>
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-green-900/30 border border-green-500/40 text-green-300 text-sm font-medium text-center">
                  ✅ Message sent! I&apos;ll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-900/30 border border-red-500/40 text-red-300 text-sm font-medium text-center">
                  ❌ Something went wrong. Please try emailing me directly.
                </div>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-purple-900/40 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                <Send size={16} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
