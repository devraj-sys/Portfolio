import { motion } from "framer-motion";
import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Moodify 🎧",
    description:
      "Moodify is a dynamic full-stack music streaming web app built with the MERN stack and Spotify API. It generates playlists based on your mood, giving users an immersive and personalized music experience. Features include mood-based filtering, playlist display, and Spotify Web Playback SDK integration with real-time playback.",
    link: "https://github.com/devraj-sys/Moodify",
    video: "/video1.mp4",
  },
  {
    title: "Password Manager 🔐",
    description:
      "A secure, full-stack password manager web app where users can safely store, edit, and delete credentials. Built using React, Node.js, Express, and MongoDB. Includes advanced hashing for data protection, authentication flow, and a modern, responsive UI for great UX.",
    link: "https://github.com/devraj-sys/password-manager",
    video: "/video2.mp4",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white flex flex-col items-center py-16 px-6"
    >
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-5xl font-extrabold mb-12"
      >
        Projects 🚀
      </motion.h3>

      <div className="flex flex-col gap-16 max-w-5xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-700"
          >
            {/* Project Video */}
            <div className="w-full">
              <video
                src={project.video}
                controls
                className="w-full h-[300px] md:h-[450px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-10">
              <h4 className="text-3xl font-bold mb-4 text-blue-400">
                {project.title}
              </h4>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
              >
                <FaGithub /> View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
