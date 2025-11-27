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
  title: "Sujit Hiwale — Full-Stack & AI Engineer",
  description: "Portfolio of Sujit Hiwale — Full‑Stack Engineer, ML & AI practitioner. Projects, contact and resume.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Sujit Hiwale — Full-Stack & AI Engineer',
    description: 'Portfolio of Sujit Hiwale — Full‑Stack Engineer, ML & AI practitioner. Projects, contact and resume.',
    url: 'https://github.com/Sujit-Hiwale',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-neutral-900 text-gray-100 antialiased min-h-screen`}>
        {/* Skip link for keyboard users */}
        <a href="#main" className="sr-only sr-only-focusable">Skip to content</a>
        <Background />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
