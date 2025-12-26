import HomePage from "./components/HomePage";

export default function Page() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://sujithiwale.me/#person",
    "name": "Sujit Hiwale",
    "alternateName": "Sujit Vijay Hiwale",
    "url": "https://sujithiwale.me",
    "image": "https://sujithiwale.me/profile.jpeg",
    "jobTitle": "AI & Machine Learning Engineer",
    "description":
      "AI & ML engineering student working on reinforcement learning, deep learning, IoT systems, and AI-based platforms.",
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
  };

  return (
    <>
      {/* JSON-LD — server rendered */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Static identity confirmation (AI-readable, visually hidden) */}
      <section className="sr-only">
        <h1>Sujit Hiwale</h1>
        <p>
          AI & Machine Learning Engineer working on reinforcement learning,
          deep learning, IoT systems, and full-stack AI platforms.
        </p>
      </section>

      <HomePage />
    </>
  );
}
