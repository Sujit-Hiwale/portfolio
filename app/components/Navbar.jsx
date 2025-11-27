"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">

        {/* Logo */}
        <Link href="/" legacyBehavior>
          <a className="logo">Sujit Hiwale</a>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav">
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

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://github.com/Sujit-Hiwale" target="_blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sujit-hiwale-a2b368295/" target="_blank"><FaLinkedin /></a>
        </div>

        {/* Mobile Menu Button */}
        <button className={`menu-btn ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <Link href="#about" legacyBehavior>
          <a className="mobile-link" onClick={() => setMenuOpen(false)}>About</a>
        </Link>

        <Link href="#projects" legacyBehavior>
          <a className="mobile-link" onClick={() => setMenuOpen(false)}>Projects</a>
        </Link>

        <Link href="#contact" legacyBehavior>
          <a className="mobile-link" onClick={() => setMenuOpen(false)}>Contact</a>
        </Link>

        <div className="mobile-icons">
          <a href="https://github.com/" target="_blank"><FaGithub /></a>
          <a href="https://linkedin.com/" target="_blank"><FaLinkedin /></a>
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
    animation: fadeSlideDown 0.6s ease-out;
  }

  @keyframes fadeSlideDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .container {
    max-width: 1200px;
    margin: auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* LOGO */
  .logo {
    font-size: 1.6rem;
    font-weight: 700;
    color: #61dafb;
    transition: 0.3s ease;
  }

  .logo:hover {
    text-shadow: 0 0 12px #61dafb;
    transform: scale(1.05);
  }

  /* NAVIGATION */
  .nav ul {
    display: flex;
    gap: 28px;
    list-style: none;
  }

  .nav-link {
    display: inline-block;
    position: relative;
    color: white;
    font-size: 1rem;
    padding-bottom: 4px;
    transition: color 0.3s, transform 0.3s, text-shadow 0.3s;
  }

  .nav-link:hover {
    color: #b9daff;
    text-shadow: 0 0 10px #61dafb;
    transform: translateY(-4px) scale(1.08);
    transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  }

  /* Underline animation */
  .nav-link::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background: #61dafb;
    transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  /* ICONS */
  .social-icons {
    display: flex;
    gap: 18px;
    font-size: 1.4rem;
  }

  .social-icons a {
    color: white;
    transition: transform 0.3s, color 0.3s;
  }

  .social-icons a:hover {
    color: #61dafb;
    transform: scale(1.2);
  }

  /* MOBILE */
  .menu-btn {
    display: none;
    font-size: 1.8rem;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .menu-btn.open {
    transform: rotate(180deg);
  }

  .mobile-menu {
    display: none;
    flex-direction: column;
    background: #000;
    padding: 20px;
    gap: 20px;
    text-align: center;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .mobile-menu.show {
    display: flex;
    opacity: 1;
    transform: translateY(0);
  }

  .mobile-link {
    font-size: 1.2rem;
    color: white;
    transition: color 0.3s, transform 0.3s, text-shadow 0.3s;
  }

  .mobile-link:hover {
    color: #61dafb;
    text-shadow: 0 0 12px #61dafb;
    transform: scale(1.08);
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
