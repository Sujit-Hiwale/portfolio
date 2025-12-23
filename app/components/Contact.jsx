"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully! ✅");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message ❌");
    }
  };

  return (
    <motion.section
      id="contact"
      aria-label="Contact Sujit Hiwale"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="contact-section"
      style={{ paddingTop: "20vh", paddingBottom: "20vh" }}
    >
      <div className="container">
        <h2 className="contact-title">Get in Touch</h2>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          aria-label="Contact form"
        >
          <div className="row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-label="Your name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-label="Your email address"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            aria-label="Message subject"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            aria-label="Your message"
          ></textarea>

          <button type="submit">Send Message 💬</button>
          {status && <p className="status">{status}</p>}
        </form>

        <br />

        {/* 🔹 SEMANTIC CONTACT INFORMATION */}
        <address className="contact-info not-italic">
          {/* LOCATION */}
          <a
            className="info-card"
            href="https://www.google.com/maps/search/?api=1&query=Chhatrapati+Sambhajinagar+India"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={24} />
            <p>Chh. Sambhajinagar, India</p>
          </a>

          {/* PHONE */}
          <a className="info-card" href="tel:+917264807452">
            <Phone size={24} />
            <p>+91 72648 07452</p>
          </a>

          {/* EMAIL */}
          <a
            className="info-card"
            href="mailto:sujithiwale88@gmail.com?subject=Contact%20via%20Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={24} />
            <p>sujithiwale88@gmail.com</p>
          </a>
        </address>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 6rem 2rem;
          background: #111;
          color: #fff;
          border-radius: 1.5rem;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          background: linear-gradient(90deg, #61dafb, #bb00ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-info {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .info-card {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.1rem;
          background: #1a1a1a;
          padding: 1rem 1.5rem;
          border-radius: 1rem;
          border: 2px solid #222;
          transition: 0.3s ease;
        }

        .info-card:hover {
          border-color: #61dafb;
          box-shadow: 0 0 20px rgba(97, 218, 251, 0.35);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-form .row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        input,
        textarea {
          padding: 0.8rem 1rem;
          border-radius: 0.8rem;
          border: 2px solid #222;
          background: #1a1a1a;
          color: #fff;
          font-size: 1rem;
          resize: none;
          transition: 0.3s ease;
          flex: 1;
        }

        input:focus,
        textarea:focus {
          border-color: #61dafb;
          outline: none;
        }

        button {
          padding: 0.9rem 2rem;
          border: none;
          border-radius: 0.8rem;
          background: linear-gradient(90deg, #61dafb, #bb00ff);
          color: #111;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.25s ease;
        }

        button:hover {
          transform: scale(1.05);
        }

        .status {
          margin-top: 0.5rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .contact-info {
            flex-direction: column;
          }
          .contact-form .row {
            flex-direction: column;
          }
        }
      `}</style>
    </motion.section>
  );
}