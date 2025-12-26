import { Geist, Geist_Mono } from "next/font/google";
import "./output.css";
import "./globals.css";
import Background from "./components/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://sujithiwale.me"),

  title: {
    default: "Sujit Hiwale | AI & ML Engineer",
    template: "%s | Sujit Hiwale",
  },

  description:
    "Official portfolio of Sujit Hiwale — an AI & Machine Learning engineer working with reinforcement learning, deep learning, IoT systems, and full-stack development to build socially impactful technology.",

  keywords: [
    "Sujit Hiwale",
    "Sujit Vijay Hiwale",
    "AI Engineer",
    "Machine Learning Engineer",
    "Reinforcement Learning",
    "Deep Learning",
    "Neural Networks",
    "Computer Vision",
    "Internet of Things",
    "Embedded Systems",
    "Edge AI",
    "Full Stack Developer",
    "Next.js Developer",
    "Portfolio"
  ],

  authors: [{ name: "Sujit Hiwale" }],
  creator: "Sujit Hiwale",

  alternates: {
    canonical: "https://sujithiwale.me",
  },

  icons: {
    icon: "/icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },

  openGraph: {
    title: "Sujit Hiwale | AI & ML Engineer",
    description:
      "AI & ML engineering portfolio featuring reinforcement learning, deep learning, IoT systems, and full-stack applications.",
    url: "https://sujithiwale.me",
    siteName: "Sujit Hiwale Portfolio",
    locale: "en_IN",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sujit Hiwale | AI & ML Engineer",
    description:
      "AI & ML engineering working on reinforcement learning, deep learning, IoT systems, and full-stack platforms.",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://sujithiwale.me/#website",
  "url": "https://sujithiwale.me",
  "name": "Sujit Hiwale Portfolio",
  "publisher": {
    "@id": "https://sujithiwale.me/#person"
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-neutral-900 text-gray-100 antialiased min-h-screen`}>
        <a href="#main" className="sr-only sr-only-focusable">
          Skip to content
        </a>
        <Background />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}