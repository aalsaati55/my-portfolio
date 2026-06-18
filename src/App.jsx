import './index.css'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.section-fade').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative" style={{ background: '#06060f' }}>

      {/* Canvas particle network */}
      <ParticleBackground />

      {/* Ambient glow orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute rounded-full" style={{ width: 900, height: 900, top: '-200px', left: '-300px', background: 'radial-gradient(circle, rgba(109,40,217,0.12) 0%, transparent 65%)', animation: 'orbDrift1 22s ease-in-out infinite' }} />
        <div className="absolute rounded-full" style={{ width: 700, height: 700, top: '30%', right: '-200px', background: 'radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 65%)', animation: 'orbDrift2 28s ease-in-out infinite' }} />
        <div className="absolute rounded-full" style={{ width: 600, height: 600, bottom: '20%', left: '20%', background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 65%)', animation: 'orbDrift3 32s ease-in-out infinite' }} />
        <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: '-100px', right: '10%', background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 65%)', animation: 'orbDrift1 24s ease-in-out infinite reverse' }} />
      </div>

      {/* All page content above background layers */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
