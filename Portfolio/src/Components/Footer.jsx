import React from "react";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Section */}
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-2xl font-semibold">Hyderabad, Telangana</h2>
          <p className="text-lg">Contact: 9876543210</p>
          <p className="text-lg">Email: kalpanasalla99@gmail.com</p>
        </div>

        {/* Right Section */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-3">Follow Me</h2>
          <div className="flex justify-center space-x-8">
            <a
              href="https://kalpana-ecommerce.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <SiNetlify size={35} className="hover:text-cyan-400" />
            </a>
            <a
              href="https://github.com/kalpana1103/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaGithub size={35} className="hover:text-rose-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/kalpana-vobinaboina/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <CiLinkedin size={38} className="hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-400 text-lg mt-10 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} Kalpana Portfolio | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
