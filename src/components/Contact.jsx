import React from "react";
import {
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // New X icon

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 px-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        Get in <span className="text-indigo-400">Touch</span>
      </h2>

      {/* Social Icons */}
      <div className="flex justify-center gap-10 mb-12 flex-wrap">
        <a
          href="https://instagram.com/ramansh_shah"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 text-4xl hover:scale-110 transform transition duration-300"
        >
          <FaInstagram />
        </a>

        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=shahramansh@gmail.com&su=Let's%20Connect"
  target="_blank"
  rel="noopener noreferrer"
  className="text-red-500 text-4xl hover:scale-110 transform transition duration-300"
>
  <FaEnvelope />
</a>


        <a
          href="https://www.linkedin.com/in/ramansh-shah-/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-4xl hover:scale-110 transform transition duration-300"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://x.com/RamanshShah"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-4xl hover:scale-110 transform transition duration-300"
        >
          <FaXTwitter />
        </a>
      </div>

      {/* WhatsApp */}
      <div className="mt-6">
        <p className="text-xl text-gray-300 mb-4">
          Prefer texting? Hit me up on WhatsApp:
        </p>
        <a
          href="https://wa.me/8866935615"
          className="inline-flex items-center gap-3 px-6 py-3 border-2 border-green-500 rounded-full text-green-400 hover:bg-green-500 hover:text-black transition duration-300 text-lg"
        >
          <FaWhatsapp className="text-2xl" />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;
