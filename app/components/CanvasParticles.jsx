"use client";

import { useEffect, useRef } from "react";

export default function CanvasParticles({ role, show }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    let particles = [];
    let animationId;
    let opacity = 0;

    // Create particles based on role
    const createParticles = () => {
      particles = [];
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Fade in/out
      if (show) opacity = Math.min(opacity + 0.02, 1);
      else opacity = Math.max(opacity - 0.02, 0);

      particles.forEach((p) => {
        if (role === "ML Developer") ctx.fillStyle = `rgba(97,218,251,${opacity})`; // blue
        else if (role === "Web Developer") ctx.fillStyle = `rgba(255,215,0,${opacity})`; // gold
        else if (role === "IoT Enthusiast") ctx.fillStyle = `rgba(255,50,50,${opacity})`; // red

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // movement
        p.x += p.vx;
        p.y += p.vy;

        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;
      });

      animationId = requestAnimationFrame(draw);
    };

    createParticles();
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [role, show]);

  return <canvas ref={canvasRef} style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 0,
    transition: "opacity 0.3s",
  }} />;
}
