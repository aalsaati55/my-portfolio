import { Mail, Github, Linkedin, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

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
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'github.com/aalsaati55',
    href: 'https://github.com/aalsaati55',
    color: 'from-gray-600 to-gray-500',
    border: 'border-gray-500/30',
  },
  {
    icon: <Linkedin size={20} />,
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
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:majeedghassan45@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a14]">
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
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-purple-900/40"
              >
                <Send size={16} />
                {sent ? 'Opening email client...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
