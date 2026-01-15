import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-800 flex items-center justify-center px-4 py-16">
        <div className=" bg-white shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 max-w-lg w-full">

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Contact Me
          </h1>

          <p className="text-center text-gray-600 text-sm sm:text-base mb-6">
            Feel free to reach out for collaborations, opportunities, or any questions.
          </p>

          {/* Form */}
          <form className="space-y-5 bg-white">

            {/* Name */}
            <div>
              <label className="text-gray-700 font-semibold flex items-center gap-2 text-sm sm:text-base">
                <FaUser /> Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 p-3 border rounded-xl text-sm sm:text-base
                focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-700 font-semibold flex items-center gap-2 text-sm sm:text-base">
                <FaEnvelope /> Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-3 border rounded-xl text-sm sm:text-base
                focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-gray-700 font-semibold text-sm sm:text-base">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full mt-2 p-3 border rounded-xl text-sm sm:text-base
                focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl
              text-base sm:text-lg font-semibold shadow-md transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="text-center mt-8 space-y-2">
            <p className="text-gray-700 flex justify-center items-center gap-2 text-sm sm:text-base">
              <FaEnvelope className="text-indigo-600" />
              <span className="font-medium">kalpanasalla99@gmail.com</span>
            </p>
            <p className="text-gray-700 flex justify-center items-center gap-2 text-sm sm:text-base">
              <FaPhoneAlt className="text-indigo-600" />
              <span className="font-medium">+91 7659872819</span>
            </p>
          </div>

        </div>
      </section>

      
    </>
  );
};

export default Contact;
