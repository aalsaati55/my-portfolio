import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    // --- Particles ---
    const COLORS = ['139,92,246', '6,182,212', '168,85,247', '34,211,238', '99,102,241'];
    const COUNT = 200;
    const particles = Array.from({ length: COUNT }, () => {
      const speed = Math.random() * 0.4 + 0.1;
      const angle = Math.random() * Math.PI * 2;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.4,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        alpha: Math.random() * 0.6 + 0.2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      };
    });

    // --- Shooting stars ---
    const MAX_STARS = 4;
    const stars = [];
    const spawnStar = () => {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        len: Math.random() * 120 + 60,
        speed: Math.random() * 8 + 5,
        alpha: 1,
        angle: Math.PI / 5 + (Math.random() - 0.5) * 0.3,
        tail: [],
      });
    };
    let starTimer = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- Shooting stars ---
      starTimer++;
      if (starTimer > 90 && stars.length < MAX_STARS) {
        spawnStar();
        starTimer = 0;
      }
      for (let i = stars.length - 1; i >= 0; i--) {
        const s = stars[i];
        s.tail.push({ x: s.x, y: s.y });
        if (s.tail.length > 18) s.tail.shift();
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= 0.018;

        const grad = ctx.createLinearGradient(
          s.tail[0]?.x ?? s.x, s.tail[0]?.y ?? s.y, s.x, s.y
        );
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(1, `rgba(200,180,255,${s.alpha})`);
        ctx.beginPath();
        ctx.moveTo(s.tail[0]?.x ?? s.x, s.tail[0]?.y ?? s.y);
        s.tail.forEach(t => ctx.lineTo(t.x, t.y));
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (s.alpha <= 0 || s.x > canvas.width || s.y > canvas.height) {
          stars.splice(i, 1);
        }
      }

      // --- Particles ---
      particles.forEach(p => {
        // Mouse repulsion
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 120) {
          const force = (120 - mdist) / 120;
          p.x += (mdx / mdist) * force * 2.5;
          p.y += (mdy / mdist) * force * 2.5;
        }

        p.x += p.dx;
        p.y += p.dy;
        p.pulse += p.pulseSpeed;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const liveAlpha = p.alpha * (0.8 + 0.2 * Math.sin(p.pulse));
        const liveR = p.r * (0.9 + 0.1 * Math.sin(p.pulse));

        // Glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, liveR * 4);
        grd.addColorStop(0, `rgba(${p.color},${liveAlpha})`);
        grd.addColorStop(1, `rgba(${p.color},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, liveR * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, liveR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${Math.min(liveAlpha + 0.3, 1)})`;
        ctx.fill();
      });

      // --- Connection lines ---
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const LINK = 110;
          if (dist < LINK) {
            const opacity = 0.18 * (1 - dist / LINK);
            const ci = particles[i].color;
            const cj = particles[j].color;
            const grad = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            grad.addColorStop(0, `rgba(${ci},${opacity})`);
            grad.addColorStop(1, `rgba(${cj},${opacity})`);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
