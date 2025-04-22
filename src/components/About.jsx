import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white px-6 py-20"
    >
      <div className="text-center max-w-4xl mx-auto space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-5xl font-extrabold text-indigo-400"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-gray-200"
        >
          I'm <span className="text-indigo-400 font-semibold">Ramansh</span>, a Full Stack Web Developer with a strong foundation in the MERN stack and a passion for crafting modern, responsive, and efficient web experiences.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          Currently pursuing my B.Tech in Information and Communication Technology at Pandit Deendayal Energy University (PDEU), I bring both creativity and technical expertise to every project I take on. Whether it's frontend design or backend logic, I enjoy building seamless solutions from start to finish.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          With over 10 completed web projects and strong proficiency in C++, I’m well-versed in both problem-solving and scalable software development. I love merging design with logic to build user-friendly, functional applications.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          I'm actively looking to contribute to innovative startups, collaborate on meaningful products, and build impactful tech solutions that drive user engagement and real-world value.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 1 }}
          className="text-lg md:text-xl text-indigo-400 font-semibold"
        >
          Let’s connect and build something extraordinary together.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
