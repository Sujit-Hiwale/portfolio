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
  title: "Sujit Hiwale — AI/ML Engineer & Full-Stack Developer",
  description:
    "Portfolio of Sujit Hiwale showcasing AI, ML, Full-Stack development, IoT and engineering work.",
  keywords: [
    "Sujit Hiwale",
    "AI Engineer",
    "ML Engineer",
    "DL Engineer",
    "Machine Learning",
    "Deep Learning",
    "Neural Network",
    "Full Stack Developer",
    "Portfolio",
    "Next.js Developer"
  ],

  alternates: {
    canonical: "https://sujithiwale.me",
  },

  icons: {
    icon: "/favicon.ico",
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
    title: "Sujit Hiwale — Portfolio",
    description:
      "Portfolio of Sujit Hiwale — AI/ML Engineering, Full-Stack Development, IoT and engineering work.",
    url: "https://sujithiwale.me",
    siteName: "Sujit Hiwale Portfolio",
    images: [
      {
        url: "https://sujithiwale.me/profile.jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sujit Hiwale",
    description:
      "Portfolio of Sujit Hiwale — AI/ML Engineering & Full-Stack Development.",
    images: ["https://sujithiwale.me/profile.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-neutral-900 text-gray-100 antialiased min-h-screen`}>
        <a href="#main" className="sr-only sr-only-focusable">Skip to content</a>
        <Background />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
