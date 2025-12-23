"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function ProjectCard({ title, desc, link, image }) {
  const defaultImage = "/file.svg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="relative p-[1.8rem] bg-[#111] border-2 border-[#222] rounded-[1.5rem] overflow-hidden shadow-[0_0_20px_rgba(97,218,251,0.2)] hover:shadow-[0_0_30px_rgba(97,218,251,0.4)] transition-all duration-300"
    >
      <div className="w-full mb-4 text-center">
        <img
          src={image || defaultImage}
          alt={`${title} - software project by Sujit Hiwale`}
          onError={(e) => (e.currentTarget.src = defaultImage)}
          className="w-full h-[180px] object-cover rounded-[1rem] shadow-[0_0_12px_rgba(97,218,251,0.25)] hover:scale-105 hover:shadow-[0_0_20px_rgba(97,218,251,0.5)] transition-transform transition-shadow duration-300"
        />
      </div>

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[1.6rem] font-bold bg-gradient-to-r from-[#61dafb] to-[#bb00ff] bg-clip-text text-transparent transition-shadow duration-300 hover:drop-shadow-[0_0_12px_#61dafb]">
          {title}
        </h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-3 py-[0.35rem] rounded-full bg-[#111] text-[#61dafb] hover:bg-[#0d1b24] hover:shadow-[0_0_18px_rgba(97,218,251,0.45)] hover:-translate-y-0.5 transition-all duration-300"
            aria-label={`View ${title} source code on GitHub`}
          >
            <Github size={16} />
          </a>
        )}
      </div>

      <p className="text-[#ccc] mt-2 text-[0.95rem] leading-[1.5]">{desc}</p>
    </motion.div>
  );
}
