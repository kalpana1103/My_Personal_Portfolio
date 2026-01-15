import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProfilePic from "./Profilepic";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-800 text-white">
      <Navbar />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 pt-24">
        
        {/* Intro */}
        <p className="text-sm text-gray-400 tracking-widest">
          HELLO, MY NAME IS
        </p>

        {/* Hero Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mt-6">
          
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Kalpana Vobinaboina
            </h1>
            <p className="text-2xl text-gray-300 mt-2">
              Web Developer
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <p className="flex items-center gap-3 text-lg">
                <MdEmail className="text-xl" />
                kalpanasalla99@gmail.com
              </p>
              <p className="flex items-center gap-3 text-lg">
                <FaSquarePhone className="text-xl" />
                +91 7659872819
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-6">
              <a
                href="https://www.linkedin.com/in/kalpana-vobinaboina/"
                target="_blank"
                rel="noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <CiLinkedin className="text-emerald-400 hover:text-emerald-300 text-4xl" />
              </a>

              <a
                href="https://github.com/kalpana1103/"
                target="_blank"
                rel="noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <FaGithub className="text-emerald-400 hover:text-emerald-300 text-3xl" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-40 sm:w-48 md:w-56 lg:w-64">
            <ProfilePic />
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <p className="text-lg font-medium">Master of Science (M.Sc.)</p>
          <p className="text-gray-400">
            Kakatiya University — 2021
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
