import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="w-full h-screen flex items-center justify-center text-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/profile.jpg')", // Background image
        backgroundSize: "cover", // Ensures the background image scales properly
        backgroundPosition: "center", // Centers the background image
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Main content section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-white px-6 py-10 md:px-12 md:py-16 max-w-2xl w-full"
      >
        {/* Heading with a clean font style */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Hey, I'm{" "}
          <span className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Ramansh
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl font-medium text-gray-200 mb-8"
        >
          MERN Stack Developer | Crafting Beautiful Web Experiences | ICT @ PDEU
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/devraj-sys"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            <FaGithub className="inline-block mr-2 text-xl" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ramansh-shah-/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            <FaLinkedin className="inline-block mr-2 text-xl" />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
