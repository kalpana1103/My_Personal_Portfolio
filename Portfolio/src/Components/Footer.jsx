import React from "react";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-4 w-full h-32 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        {/* Left */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-xl font-semibold">Hyderabad, Telangana</h2>
          <p className="text-lg mt-1">Contact: 9876543210</p>
          <p className="text-lg">Email: kalpanasalla99@gmail.com</p>
        </div>
        {/* Right */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-3">Follow Me</h2>
          <div className="flex justify-center space-x-8">
            <a href="https://kalpana-ecommerce.netlify.app" target="_blank" rel="noreferrer">
              <SiNetlify size={35} className="hover:text-cyan-400 transition" />
            </a>
            <a href="https://github.com/kalpana1103/" target="_blank" rel="noreferrer">
              <FaGithub size={35} className="hover:text-rose-300 transition" />
            </a>
            <a href="https://www.linkedin.com/in/kalpana-vobinaboina/" target="_blank" rel="noreferrer">
              <CiLinkedin size={38} className="hover:text-blue-400 transition" />
            </a>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="text-center text-gray-400 mt-8 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Kalpana Portfolio | All Rights Reserved
      </div>
    </footer>
//     <footer className=" text-white py-10 w-full mt-10">
//  <div className="text-center">
//        <h2 className="text-xl font-semibold mb-3">Follow Me</h2>
//            <div className="flex justify-center space-x-8">
//              <a href="https://kalpana-ecommerce.netlify.app" target="_blank" rel="noreferrer">
//                <SiNetlify size={35} className="hover:text-cyan-400 transition" />
//             </a>
//              <a href="https://github.com/kalpana1103/" target="_blank" rel="noreferrer">
//          <FaGithub size={35} className="hover:text-gray-300 transition" />
//             </a>
//              <a href="https://www.linkedin.com/in/kalpana-vobinaboina/" target="_blank" rel="noreferrer">
//                <CiLinkedin size={38} className="hover:text-blue-400 transition" />
//          </a>
//        </div>
//          </div>
//      {/* Bottom */}
//      <div className="text-center text-gray-400 mt-8 text-sm border-t border-gray-700 pt-4">
//         © {new Date().getFullYear()} Kalpana Portfolio | All Rights Reserved
//      </div>
//     </footer>
  );
};

export default Footer;
