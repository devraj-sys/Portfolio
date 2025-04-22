import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiPostman,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";
import React from "react";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white px-6 py-16 flex flex-col items-center justify-center"
    >
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center"
      >
        Skills 🛠️
      </motion.h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-md hover:shadow-cyan-400/40 transition-all duration-300"
          >
            <div className="text-5xl">{skill.icon}</div>
            <div className="text-lg font-medium text-gray-100">{skill.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
