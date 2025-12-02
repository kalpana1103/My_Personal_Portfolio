import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex justify-center items-center p-6">
        <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-xl w-full">

          <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
            Contact Me
          </h1>

          <p className="text-center text-gray-600 mb-6">
            Feel free to reach out for collaborations, opportunities, or any questions!
          </p>

          <form className="space-y-5">

            {/* Name */}
            <div>
              <label className="text-gray-700 font-semibold flex items-center gap-2">
                <FaUser /> Full Name
              </label>
              <input
                type="text"
                className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-700 font-semibold flex items-center gap-2">
                <FaEnvelope /> Email
              </label>
              <input
                type="email"
                className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-gray-700 font-semibold">Message</label>
              <textarea
                rows="4"
                className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Type your message..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-lg font-semibold shadow-md transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="text-center mt-8">
            <p className="text-gray-700 flex justify-center items-center gap-2">
              <FaEnvelope className="text-indigo-600" /> 
              <b>kalpanasalla99@gmail.com</b>
            </p>
            <p className="text-gray-700 flex justify-center items-center gap-2 mt-2">
              <FaPhoneAlt className="text-indigo-600" /> 
              <b>+91 7659872819</b>
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
