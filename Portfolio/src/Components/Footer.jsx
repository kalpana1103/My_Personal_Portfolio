import React from "react";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white ">
      
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Section */}
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Hyderabad, Telangana
          </h2>
          <p className="text-sm sm:text-base">
            📞 +91 7659872819
          </p>
          <p className="text-sm sm:text-base">
            ✉️ kalpanasalla99@gmail.com
          </p>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Follow Me
          </h2>

          <div className="flex justify-center md:justify-end gap-8">
            <a
              href="https://kalpana-ecommerce.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="transition-transform duration-300 hover:scale-110"
              aria-label="Netlify"
            >
              <SiNetlify size={32} className="hover:text-cyan-400" />
            </a>

            <a
              href="https://github.com/kalpana1103/"
              target="_blank"
              rel="noreferrer"
              className="transition-transform duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={32} className="hover:text-rose-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/kalpana-vobinaboina/"
              target="_blank"
              rel="noreferrer"
              className="transition-transform duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <CiLinkedin size={36} className="hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-400 text-sm sm:text-base border-t border-gray-600 py-4">
        © {new Date().getFullYear()} Kalpana Portfolio | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
