"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaBars,
  FaTimes
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        {/* LOGO / IDENTITY */}
        <Link href="/" legacyBehavior>
          <a
            className="logo"
            aria-label="Sujit Hiwale homepage"
          >
            Sujit Hiwale
          </a>
        </Link>

        {/* PRIMARY NAVIGATION */}
        <nav className="nav" aria-label="Primary navigation">
          <ul>
            <li>
              <Link href="#about" legacyBehavior>
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li>
              <Link href="#projects" legacyBehavior>
                <a className="nav-link">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="#contact" legacyBehavior>
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>

        {/* SOCIAL LINKS */}
        <div className="social-icons">
          <a
            href="https://github.com/Sujit-Hiwale"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sujit-hiwale-a2b368295/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/thesujithiwale/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
          >
            <FaInstagram />
          </a>
        </div>

        <button
          className="menu-btn"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "show" : ""}`}
      >
        <Link href="#about" legacyBehavior>
          <a
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
        </Link>

        <Link href="#projects" legacyBehavior>
          <a
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
        </Link>

        <Link href="#contact" legacyBehavior>
          <a
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </Link>

        <div className="mobile-icons">
          <a
            href="https://github.com/Sujit-Hiwale"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sujit-hiwale-a2b368295/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/thesujithiwale/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <style jsx>{`
        .header {
          background: #0d0d0d;
          color: white;
          padding: 16px 0;
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 1.6rem;
          font-weight: 700;
          color: #61dafb;
          text-decoration: none;
        }

        .nav ul {
          display: flex;
          gap: 28px;
          list-style: none;
        }

        .nav-link {
          color: white;
          font-size: 1rem;
          padding-bottom: 4px;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #b9daff;
        }

        .social-icons {
          display: flex;
          gap: 18px;
          font-size: 1.4rem;
        }

        .social-icons a {
          color: white;
          transition: color 0.2s ease;
        }

        .social-icons a:hover {
          color: #61dafb;
        }

        .menu-btn {
          display: none;
          font-size: 1.8rem;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          background: #000;
          padding: 20px;
          gap: 20px;
          text-align: center;
        }

        .mobile-menu.show {
          display: flex;
        }

        .mobile-link {
          font-size: 1.2rem;
          color: white;
          transition: color 0.2s ease;
        }

        .mobile-link:hover {
          color: #61dafb;
        }

        .mobile-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
          font-size: 1.6rem;
        }

        @media (max-width: 768px) {
          .nav { display: none; }
          .social-icons { display: none; }
          .menu-btn { display: block; }
        }
      `}</style>
    </header>
  );
}