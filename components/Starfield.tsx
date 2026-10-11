import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number;
  size: number;
  twinkle: number;
  speed: number;
};

/** Full-screen animated starfield canvas with parallax drift and twinkle. */
export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let stars: Star[] = [];
    const mouse = { x: 0.5, y: 0.5 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(320, Math.floor((width * height) / 4500));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        size: Math.random() * 1.6 + 0.3,
        twinkle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.06 + 0.015,
      }));
    };

    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX / width;
      mouse.y = e.clientY / height;
    };

    let t = 0;
    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, width, height);
      const px = (mouse.x - 0.5) * 24;
      const py = (mouse.y - 0.5) * 24;

      for (const s of stars) {
        s.y += s.speed;
        if (s.y > height + 2) s.y = -2;
        const alpha = 0.35 + 0.65 * Math.abs(Math.sin(s.twinkle + t * (0.5 + s.z)));
        const depth = 0.3 + s.z * 0.7;
        ctx.beginPath();
        ctx.arc(s.x + px * s.z, s.y + py * s.z, s.size * depth, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(214, 232, 255, ${alpha * depth})`;
        ctx.fill();
      }

      // Occasional shooting star
      if (Math.random() < 0.004) {
        const sx = Math.random() * width;
        const sy = Math.random() * height * 0.4;
        const grad = ctx.createLinearGradient(sx, sy, sx + 120, sy + 40);
        grad.addColorStop(0, "rgba(160, 240, 255, 0.9)");
        grad.addColorStop(1, "rgba(160, 240, 255, 0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + 120, sy + 40);
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
