"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="hero"
      aria-label="Introduction of Sujit Hiwale"
    >
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Sujit <span className="highlight">Hiwale</span>
          </h1>

          <h2 className="hero-role">
            AI & Machine Learning Engineer
          </h2>

          <p className="hero-description">
            I am a B.Tech Computer Science (AI & ML) student focused on reinforcement learning,
            deep learning, and neural networks. I build intelligent platforms and AIoT systems
            using microcontrollers and sensors, with a strong interest in socially impactful
            and accessible technology.
          </p>

          <div className="hero-actions">
            <Link href="#contact" className="primary-btn">
              Contact Me
            </Link>

            <Link href="#projects" className="secondary-btn">
              View Projects
            </Link>
          </div>

          <div className="hero-meta">
            <span className="availability">
              <span className="dot" aria-hidden="true"></span>
              Open to opportunities & collaboration
            </span>

            <span className="location">
              <MapPin size={16} />
              Chhatrapati Sambhajinagar, India
            </span>
          </div>
        </div>

        {/* PROFILE IMAGE */}
        <div className="hero-image">
          <img
            src="/profile.jpeg"
            alt="Sujit Hiwale, AI and Machine Learning Engineer"
          />
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: #0d0d0d;
          color: #fff;
          padding: 0 20px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          flex-wrap: wrap;
        }

        .hero-content {
          max-width: 650px;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }

        .highlight {
          color: #61dafb;
        }

        .hero-role {
          font-size: 1.6rem;
          font-weight: 500;
          color: #b9daff;
          margin-bottom: 1.4rem;
        }

        .hero-description {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #d2d2d2;
          margin-bottom: 2rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .primary-btn {
          background: linear-gradient(90deg, #61dafb, #4fc3f7);
          color: #000;
          padding: 0.75rem 1.8rem;
          border-radius: 0.7rem;
          font-weight: 600;
          box-shadow: 0 0 18px rgba(97, 218, 251, 0.45);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 26px rgba(97, 218, 251, 0.75);
        }

        .secondary-btn {
          border: 2px solid #61dafb;
          padding: 0.75rem 1.8rem;
          border-radius: 0.7rem;
          color: #61dafb;
          font-weight: 600;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .secondary-btn:hover {
          background: #61dafb;
          color: #000;
        }

        .hero-meta {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          flex-wrap: wrap;
          font-size: 0.95rem;
          color: #cfcfcf;
        }

        .availability {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #21ff8a;
          box-shadow: 0 0 10px #21ff8a;
        }

        .location {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .hero-image img {
          width: 360px;
          max-width: 100%;
          border-radius: 14px;
          box-shadow: 0 0 30px rgba(97, 218, 251, 0.35);
        }

        @media (max-width: 900px) {
          .container {
            flex-direction: column-reverse;
            text-align: center;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-meta {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
