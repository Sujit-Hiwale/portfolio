import HomePage from "./components/HomePage";

export const metadata = {
  title: "Sujit Hiwale | AI & ML Engineer",

  description:
    "Sujit Hiwale is a B.Tech CSE (AI & ML) student at Deogiri Institute of Engineering and Management Studies, focused on reinforcement learning, deep learning, neural networks, AI-based platforms, and IoT systems using microcontrollers and sensors, with an interest in building socially impactful and accessible technologies.",

  keywords: [
    "Sujit Hiwale",
    "Sujit Vijay Hiwale",
    "AI Engineer",
    "Machine Learning Engineer",
    "Reinforcement Learning",
    "Deep Learning",
    "Neural Networks",
    "AI Platforms",
    "Internet of Things",
    "Microcontrollers",
    "Sensors",
    "Embedded Systems",
    "Edge AI"
  ],

  authors: [{ name: "Sujit Hiwale" }],
  creator: "Sujit Hiwale",

  metadataBase: new URL("https://sujithiwale.me"),

  openGraph: {
    title: "Sujit Hiwale | AI & ML Engineer",
    description:
      "AI & ML engineering student working on reinforcement learning, deep learning, IoT systems, and AI-based platforms, with a focus on socially impactful and accessible technology.",
    url: "https://sujithiwale.me",
    siteName: "Sujit Hiwale Portfolio",
    locale: "en_IN",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sujit Hiwale | AI & ML Engineer",
    description:
      "AI & ML engineering student focused on reinforcement learning, deep learning, IoT systems, and AI-based platforms.",
  }
};

export default function Page() {
  return <HomePage />;
}
