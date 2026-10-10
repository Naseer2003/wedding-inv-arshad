import { useEffect, useRef } from 'react';

export default function PetalsCanvas({ enabled = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const petalsCount = window.innerWidth < 768 ? 18 : 32;
    const petals = [];
    const colors = [
      'rgba(244, 114, 182, 0.65)', // Soft blush rose
      'rgba(255, 255, 255, 0.85)', // White jasmine
      'rgba(251, 207, 232, 0.7)',  // Pale petal
      'rgba(212, 175, 55, 0.45)',  // Subtle gold accent
      'rgba(226, 232, 240, 0.7)'   // Silvery white
    ];

    for (let i = 0; i < petalsCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 11 + 7,
        speedY: Math.random() * 1.1 + 0.7,
        speedX: Math.random() * 0.8 - 0.4,
        angle: Math.random() * 360,
        spin: Math.random() * 2 - 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.35,
        flip: Math.random() * Math.PI,
        flipSpeed: Math.random() * 0.03 + 0.01
      });
    }

    // Sparkles
    const sparklesCount = window.innerWidth < 768 ? 20 : 40;
    const sparkles = [];
    for (let i = 0; i < sparklesCount; i++) {
      sparkles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.7 + 0.2,
        speed: Math.random() * 0.02 + 0.01,
        phase: Math.random() * Math.PI * 2
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Sparkles
      sparkles.forEach((s) => {
        s.phase += s.speed;
        const currentAlpha = Math.abs(Math.sin(s.phase)) * s.alpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 160, 120, ${currentAlpha * 0.6})`;
        ctx.fill();
      });

      // Render Petals
      for (let i = petals.length - 1; i >= 0; i--) {
        const p = petals[i];
        p.y += p.speedY;
        p.x += Math.sin(p.angle * 0.02) * 1.1 + p.speedX;
        p.angle += p.spin;
        p.flip += p.flipSpeed;

        if (p.y > height + 30) {
          if (p.isBurst) {
            petals.splice(i, 1);
            continue;
          } else {
            p.y = -20;
            p.x = Math.random() * width;
          }
        }
        if (p.x > width + 25) p.x = -25;
        if (p.x < -25) p.x = width + 25;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.angle * Math.PI) / 180);
        ctx.scale(1, Math.cos(p.flip));

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size, 0, 0, p.size);
        ctx.bezierCurveTo(-p.size, 0, -p.size / 2, -p.size / 2, 0, 0);

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.12)';
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const handlePetalBurst = (e) => {
      const burstCount = e.detail?.count || 75;
      const burstColors = [
        'rgba(225, 29, 72, 0.9)',   // Vivid Ruby Red Rose
        'rgba(190, 18, 60, 0.9)',   // Deep Crimson Rose
        'rgba(244, 114, 182, 0.85)', // Fresh Blush Pink
        'rgba(251, 113, 133, 0.85)', // Soft Rose
        'rgba(255, 241, 242, 0.95)', // White Jasmine
        'rgba(245, 158, 11, 0.75)'  // Warm Gold Shimmer
      ];

      for (let i = 0; i < burstCount; i++) {
        petals.push({
          x: Math.random() * width,
          y: Math.random() * -180,
          size: Math.random() * 14 + 10,
          speedY: Math.random() * 2.2 + 1.2,
          speedX: Math.random() * 1.6 - 0.8,
          angle: Math.random() * 360,
          spin: Math.random() * 2.5 - 1.25,
          color: burstColors[Math.floor(Math.random() * burstColors.length)],
          opacity: Math.random() * 0.35 + 0.65,
          flip: Math.random() * Math.PI,
          flipSpeed: Math.random() * 0.05 + 0.02,
          isBurst: true
        });
      }
    };

    window.addEventListener('trigger-petal-shower', handlePetalBurst);

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('trigger-petal-shower', handlePetalBurst);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 4
      }}
    />
  );
}
