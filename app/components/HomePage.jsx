"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function HomePage() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@type": "Person",
              "@id": "https://sujithiwale.me/",
              "name": "Sujit Hiwale",
              "alternateName": "Sujit Vijay Hiwale",
              "url": "https://sujithiwale.me",
              "image": "https://sujithiwale.me/profile.jpeg",
              "jobTitle": "AI & Machine Learning Engineer",
              "description":
                "AI & ML engineering student with experience in reinforcement learning, deep learning, and IoT systems, focused on building socially impactful and accessible technologies.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chhatrapati Sambhajinagar",
                "addressCountry": "IN"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Deogiri Institute of Engineering and Management Studies"
              },
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Reinforcement Learning",
                "Deep Learning",
                "Computer Vision",
                "Internet of Things",
                "Embedded Systems",
                "Full Stack Development",
                "Edge AI"
              ],
              "sameAs": [
                "https://github.com/Sujit-Hiwale",
                "https://www.linkedin.com/in/sujit-hiwale-a2b368295/",
                "https://www.instagram.com/thesujithiwale/"
              ]
            }
          }),
        }}
      />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
