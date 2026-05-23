import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <div className="bg-[#0a0a14] min-h-screen relative">

      {/* Canvas particle network */}
      <ParticleBackground />

      {/* Ambient glow orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* Dot grid overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(139,92,246,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        {/* Orbs */}
        <div className="absolute rounded-full" style={{ width: 700, height: 700, top: '-150px', left: '-200px', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)', animation: 'orbDrift1 18s ease-in-out infinite', filter: 'blur(2px)' }} />
        <div className="absolute rounded-full" style={{ width: 600, height: 600, top: '25%', right: '-150px', background: 'radial-gradient(circle, rgba(6,182,212,0.13) 0%, transparent 70%)', animation: 'orbDrift2 22s ease-in-out infinite', filter: 'blur(2px)' }} />
        <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: '15%', left: '25%', background: 'radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 70%)', animation: 'orbDrift3 26s ease-in-out infinite', filter: 'blur(2px)' }} />
        <div className="absolute rounded-full" style={{ width: 400, height: 400, bottom: '-80px', right: '8%', background: 'radial-gradient(circle, rgba(6,182,212,0.11) 0%, transparent 70%)', animation: 'orbDrift1 20s ease-in-out infinite reverse', filter: 'blur(2px)' }} />
        <div className="absolute rounded-full" style={{ width: 350, height: 350, top: '55%', left: '-80px', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', animation: 'orbDrift2 24s ease-in-out infinite reverse', filter: 'blur(2px)' }} />
        <div className="absolute rounded-full" style={{ width: 300, height: 300, top: '10%', left: '50%', background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)', animation: 'orbDrift3 30s ease-in-out infinite', filter: 'blur(2px)' }} />
      </div>

      {/* All page content above background layers */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
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
