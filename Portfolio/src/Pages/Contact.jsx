import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Contact = () => {
  return (
    <> 
    
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-xl w-full">
        
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Contact Me
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Feel free to reach out for collaborations, opportunities, or questions!
        </p>

        <form className="space-y-5">

          {/* Name */}
          <div>
            <label className="text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-gray-700 font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Type your message"
            ></textarea>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="text-center mt-6">
          <p className="text-gray-700"> Email: <b>kalpanasalla99@gmail.com</b></p>
          <p className="text-gray-700"> Phone: <b>+91 7659872819</b></p>
        </div>

      </div>
    </div>
    
    </>
   
  );
};

export default Contact;
