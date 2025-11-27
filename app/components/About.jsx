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

        <p className="text-[#ccc] leading-[1.9] mb-7 max-w-[900px] mx-auto">
          Hi, I'm <strong>Sujit Hiwale</strong> — a dedicated and passionate web developer who
          enjoys crafting modern, clean, and intuitive digital experiences. I focus on writing
          efficient, well-structured code and creating user-friendly interfaces that feel smooth
          and responsive.
        </p>

        <p className="text-[#ccc] leading-[1.9] mb-7 max-w-[900px] mx-auto">
          My journey into web development began with curiosity, and over time it evolved into a
          deep fascination with building meaningful digital products. I love exploring new tools,
          improving my skills, and constantly learning better ways to design and develop
          high-quality applications.
        </p>

        <p className="text-[#ccc] leading-[1.9] max-w-[900px] mx-auto">
          When I’m not coding, you’ll find me experimenting with new ideas, discovering new
          technologies, or building personal projects that challenge my creativity and help me grow
          as a developer.
        </p>
      </div>
    </motion.section>
  );
}
