"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const CanvasParticles = dynamic(() => import("./CanvasParticles"), { ssr: false });

export default function HeroSection() {
  const roles = ["ML Developer", "Web Developer", "IoT Enthusiast"];
  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [phase, setPhase] = useState("typing");
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let speed = phase === "typing" ? 120 : phase === "deleting" ? 60 : 100;

    const handle = () => {
      if (phase === "typing") {
        if (typedText.length < current.length) {
          setTypedText(current.slice(0, typedText.length + 1));
          setShowParticles(true); // start particles fade-in
        } else {
          setPhase("holding");
          setTimeout(() => setPhase("deleting"), 3000);
        }
      } else if (phase === "deleting") {
        if (typedText.length > 0) {
          setTypedText(current.slice(0, typedText.length - 1));
        } else {
          setPhase("typing");
          setIndex((prev) => (prev + 1) % roles.length);
          setShowParticles(false); // start particles fade-out
        }
      }
    };

    const timer = setTimeout(handle, speed);
    return () => clearTimeout(timer);
  }, [typedText, phase, index]);

  return (
    <section className="hero fade-in">
      {/* Particles */}
      <CanvasParticles role={roles[index]} show={showParticles} />

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Sujit Hiwale</span>
          </h1>

          <h2 className="role-text">
            {typedText}
            <span className="cursor">|</span>
          </h2>

          <p className="hero-description">
            I specialize in blending intelligence, interactivity, and innovation—
            creating systems that learn, connect, and transform ideas into reality.
          </p>

          <Link href="#contact" legacyBehavior>
            <a className="cta-btn">Contact Me</a>
          </Link>

          <div className="status-row">
            <div className="status-item">
              <span className="dot"></span>
              Available for Freelancing
            </div>
            <div className="status-item">
              <svg
                className="pin"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#61dafb"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Chhatrapati Sambhajinagar, India
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/profile.jpeg"
            className="image"
            alt="Sujit"
          />
        </div>
      </div>

      <style jsx>{`
        .hero {
          background: #0d0d0d;
          color: white;
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 0 20px;
        }
        .fade-in {
          opacity: 0;
          animation: fadeIn 1.2s forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .container {
          max-width: 1250px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          position: relative;
          z-index: 10;
        }
        .hero-title {
          font-size: 2.8rem;
          font-weight: 700;
        }
        .highlight {
          color: #61dafb;
          text-shadow: 0 0 12px #61dafb;
        }
        .role-text {
          font-size: 2rem;
          margin-top: 10px;
          color: #b9daff;
        }
        .cursor {
          margin-left: 6px;
          animation: blink 0.7s infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
        .hero-description {
          margin-top: 15px;
          color: #d2d2d2;
          max-width: 500px;
        }
        .cta-btn {
          margin-top: 25px;
          background: #61dafb;
          color: #000;
          padding: 12px 32px;
          border-radius: 40px;
          font-weight: 600;
          display: inline-block;
          transition: 0.3s ease;
        }
        .cta-btn:hover {
          transform: translateY(-5px) scale(1.05);
          background: #45b6e6;
          text-shadow: 0 0 10px #61dafb;
        }
        .status-row {
          margin-top: 28px;
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
        }
        .status-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
          color: #e0e0e0;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #21ff8a;
          box-shadow: 0 0 10px #21ff8a;
        }
        .pin { width: 18px; height: 18px; flex-shrink: 0; }
        .hero-image .image {
          width: 400px;
          border-radius: 12px;
          box-shadow: 0 0 20px #61dafb77;
          transition: transform 0.8s ease, box-shadow 0.3s ease;
          transform: rotate(0deg);
          animation: tilt 6s ease-in-out infinite alternate;
        }
        .hero-image .image:hover {
          transform: scale(1.08) rotate(5deg);
          box-shadow: 0 0 35px #61dafb;
        }
        @keyframes tilt {
          0% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
          100% { transform: rotate(-3deg); }
        }
        @media (max-width: 900px) {
          .container { flex-direction: column; text-align: center; }
          .status-row { justify-content: center; }
          .hero-image .image { margin-top: 40px; }
        }
      `}</style>
    </section>
  );
}
