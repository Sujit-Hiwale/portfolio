"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Activity, Database, Wrench, Bot } from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Web Development",
      icon: <Code2 size={28} />,
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "RESTful APIs"
      ],
      color: "text-[#61dafb]",
    },
    {
      title: "Machine Learning",
      icon: <Activity size={28} />,
      skills: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Computer Vision",
        "Reinforcement Learning"
      ],
      color: "text-[#38ffbc]",
    },
    {
      title: "Data Analysis",
      icon: <Database size={28} />,
      skills: [
        "Data Cleaning",
        "Exploratory Data Analysis",
        "Tableau",
        "Power BI",
        "Looker Studio",
        "BigQuery"
      ],
      color: "text-[#bb00ff]",
    },
    {
      title: "Deep Learning",
      icon: <Bot size={28} />,
      skills: [
        "TensorFlow",
        "Keras",
        "CNNs",
        "RNNs",
        "Large Language Models",
        "Architecture Design"
      ],
      color: "text-[#00af99]",
    },
    {
      title: "IoT & Embedded Systems",
      icon: <Cpu size={28} />,
      skills: [
        "Arduino",
        "ESP32",
        "Raspberry Pi",
        "Sensors",
        "Embedded System Integration"
      ],
      color: "text-[#f5a623]",
    },
    {
      title: "Tools & Workflow",
      icon: <Wrench size={28} />,
      skills: [
        "Postman",
        "Firebase",
        "Google Cloud Platform",
        "Vertex AI",
        "Deployment & CI/CD",
        "Looker"
      ],
      color: "text-white",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[#0d0d0d] py-32 px-8 rounded-3xl"
    >
      <div
        className="max-w-[1200px] mx-auto text-center"
        style={{ paddingTop: "25vh", paddingBottom: "25vh" }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-24 bg-gradient-to-r from-[#61dafb] to-[#bb00ff] bg-clip-text text-transparent">
          Skills & Expertise
        </h1>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-16">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              whileHover={{ scale: 1.07, y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111] border border-[#222]
                         shadow-[0_0_25px_rgba(97,218,251,0.2)]
                         hover:shadow-[0_0_35px_rgba(97,218,251,0.4)]
                         transition-all"
              style={{ padding: "2rem 0.2rem", borderRadius: "2rem" }}
            >
              <div
                className={`flex flex-col items-center mb-24 text-4xl font-bold ${cat.color}`}
                style={{ padding: "1rem 0" }}
              >
                <div className="flex items-center justify-center">
                  <div style={{ marginRight: "20px" }}>{cat.icon}</div>
                  <h3 style={{ fontSize: "1.5rem" }}>{cat.title}</h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-12 justify-center text-2xl">
                {cat.skills.map((s) => (
                  <motion.span
                    key={s}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.2 }}
                    style={{ padding: "0.5rem 0.5rem" }}
                    className="flex items-center justify-center rounded-full
                               text-white
                               hover:border-white
                               hover:shadow-[0_0_16px_rgba(255,255,255,0.6)]
                               transition-all cursor-default"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
