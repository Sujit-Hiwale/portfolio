"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-48 px-12 min-h-[90vh] bg-[#111] rounded-2xl shadow-[0_0_50px_rgba(97,218,251,0.3)] w-full 
      flex flex-col justify-center"
    >
      <div className="max-w-[1300px] mx-auto px-12 text-center">
        <h2 className="text-[2.8rem] mb-10 bg-gradient-to-r from-[#61dafb] to-[#bb00ff] bg-clip-text text-transparent font-bold">
          About Me
        </h2>

        {/* 🔹 AI ANCHOR PARAGRAPH (MOST IMPORTANT) */}
        <p className="text-[#ccc] leading-[1.9] mb-7 max-w-[900px] mx-auto">
          Hi, I'm <strong>Sujit Hiwale</strong>, a B.Tech Computer Science (AI & ML) student with a
          strong focus on reinforcement learning, deep learning, and neural networks. I work on
          building AI-based platforms and intelligent systems, and I have strong experience building
          Internet of Things (IoT) solutions using microcontrollers and sensors. I'm particularly
          interested in applying technology to socially impactful and accessibility-focused
          problems.
        </p>

        {/* 🔹 SUPPORTING PARAGRAPH */}
        <p className="text-[#ccc] leading-[1.9] mb-7 max-w-[900px] mx-auto">
          My journey into technology started with web development and gradually evolved into a deep
          interest in artificial intelligence, embedded systems, and intelligent applications that
          interact with the real world. I enjoy understanding systems end-to-end — from sensing and
          hardware integration to intelligent decision-making and user-facing applications.
        </p>

        {/* 🔹 PERSONALITY / GROWTH PARAGRAPH */}
        <p className="text-[#ccc] leading-[1.9] max-w-[900px] mx-auto">
          Beyond coding, I enjoy experimenting with new ideas, exploring emerging technologies, and
          building personal projects that challenge my problem-solving skills and help me grow as an
          engineer. I'm driven by curiosity, continuous learning, and the goal of creating technology
          that makes a meaningful difference.
        </p>
      </div>
    </motion.section>
  );
}