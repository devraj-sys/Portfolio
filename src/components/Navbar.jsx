import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white z-50 shadow-lg py-6">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Left - Dev Icon */}
        <div className="text-white select-none">
          <IoCodeSlash size={30} />
        </div>

        {/* Center - Navigation Links */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li>
            <Link to="about" smooth duration={700} className="hover:text-gray-300 transition cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth duration={700} className="hover:text-gray-300 transition cursor-pointer">
              Projects
            </Link>
          </li>
          <li>
            <Link to="skills" smooth duration={700} className="hover:text-gray-300 transition cursor-pointer">
              Skills
            </Link>
          </li>
          <li>
            <Link to="contact" smooth duration={700} className="hover:text-gray-300 transition cursor-pointer">
              Contact
            </Link>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Right - GitHub */}
        <a
          href="https://github.com/devraj-sys"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition"
        >
          <FaGithub size={24} />
        </a>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center space-y-4 py-4 bg-black text-lg">
          <li>
            <Link to="about" smooth duration={700} className="hover:text-gray-300 transition cursor-pointer" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth duration={700} className="hover:text-gray-300 transition cursor-pointer" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="skills" smooth duration={700} className="hover:text-gray-300 transition cursor-pointer" onClick={toggleMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="contact" smooth duration={700} className="hover:text-gray-300 transition cursor-pointer" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300"
              onClick={toggleMenu}
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile GitHub Icon */}
        <div className="flex justify-center py-4">
          <a
            href="https://github.com/devraj-sys"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
