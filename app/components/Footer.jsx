"use client";

import { useState } from "react";
import { Github, Linkedin, Send } from "lucide-react";

export default function Footer() {
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: feedback }),
      });

      if (res.ok) {
        setStatus("Feedback sent successfully ✅");
        setFeedback("");
      } else {
        setStatus("Failed to send feedback ❌");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send feedback ❌");
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Quick Links */}
        <div className="footer-block">
          <h4>Quick Links</h4>
          <div className="links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        {/* Feedback */}
        <div className="footer-block feedback">
          <h4>Feedback</h4>
          <p>Have any suggestions or ideas? Let me know!</p>
          <form onSubmit={handleSubmit}>
            <div className="textarea-wrapper">
              <textarea
                id="feedback"
                placeholder="Your feedback..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
            </div>
            <button type="submit">
              Send <Send size={18} style={{ marginLeft: "4px" }} />
            </button>
            {status && <p className="status">{status}</p>}
          </form>
        </div>

        {/* Connect With Me */}
        <div className="footer-block">
          <h4>Connect With Me</h4>
          <div className="social-icons">
            <a
              href="https://github.com/Sujit-Hiwale"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/Sujit-Hiwale"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <p className="footer-bottom">
        © {new Date().getFullYear()} Sujit Hiwale. All rights reserved.
      </p>

      <style jsx>{`
        .footer-section {
          background: #0d0d0d;
          color: #fff;
          padding: 4rem 2rem 2rem;
          border-top: 2px solid #222;
        }

        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 3rem;
          max-width: 1100px;
          margin: 0 auto 2rem;
        }

        .footer-block h4 {
          margin-bottom: 1rem;
          font-size: 1.3rem;
          background: linear-gradient(90deg, #61dafb, #bb00ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .links {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .links a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .links a:hover {
          color: #61dafb;
        }

        .footer-block p {
          margin-bottom: 0.8rem;
          color: #aaa;
          font-size: 0.95rem;
        }

        /* Feedback box */
        .feedback form {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .textarea-wrapper {
          position: relative;
        }

        .textarea-wrapper textarea {
          width: 100%;
          padding: 1rem 1rem 1rem 0.9rem;
          border-radius: 1rem;
          border: 2px solid #222;
          background: #1a1a1a;
          color: #fff;
          resize: none;
          min-height: 100px;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .textarea-wrapper textarea:focus {
          outline: none;
          border-image: linear-gradient(90deg, #61dafb, #bb00ff) 1;
          box-shadow: 0 0 15px rgba(97, 218, 251, 0.3);
        }

        .textarea-wrapper label {
          position: absolute;
          top: 12px;
          left: 16px;
          color: #aaa;
          font-size: 0.9rem;
          pointer-events: none;
          transition: 0.25s ease all;
        }

        .textarea-wrapper textarea:focus + label,
        .textarea-wrapper textarea:not(:placeholder-shown) + label {
          top: -10px;
          left: 12px;
          font-size: 0.75rem;
          color: #61dafb;
          background: #0d0d0d;
          padding: 0 4px;
        }

        .feedback button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.65rem 1.5rem;
          border-radius: 999px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          background: linear-gradient(90deg, #61dafb, #bb00ff);
          color: #111;
          font-size: 0.95rem;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
        }

        .feedback button:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 4px 20px rgba(97, 218, 251, 0.35);
        }

        .social-icons {
          display: flex;
          gap: 1.5rem;
        }

        .social-icons a {
          color: #ccc;
          transition: color 0.3s ease, transform 0.2s ease;
        }

        .social-icons a:hover {
          color: #61dafb;
          transform: scale(1.2);
        }

        .footer-bottom {
          text-align: center;
          font-size: 0.9rem;
          color: #555;
        }

        .status {
          font-size: 0.85rem;
          color: #61dafb;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
}
