import React from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const Projects = () => {
  return (
    <section className="bg-slate-800 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl text-white sm:text-4xl md:text-5xl font-bold text-center mb-12">
          Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="bg-white shadow-xl rounded-2xl p-5 hover:scale-105 transition-transform duration-300">
            <img
              src={project1}
              alt="Portfolio Website"
              className="rounded-xl w-full h-52 sm:h-56 object-cover"
            />

            <h2 className="text-xl font-semibold mt-4">
              Portfolio Website
            </h2>

            <ul className="list-disc ml-5 mt-3 text-gray-700 text-sm sm:text-base space-y-1">
              <li>Built using React and Tailwind CSS</li>
              <li>Fully responsive across all devices</li>
              <li>Includes About, Projects, and Contact sections</li>
              <li>Deployed on Netlify</li>
            </ul>

            <div className="flex flex-wrap gap-4 mt-5">
              <a
                href="https://github.com/kalpana1103/My_Personal_Portfolio"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
              >
                GitHub
              </a>
              <a
                href="https://kalpana-vobinaboina-portfolio.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-xl rounded-2xl p-5 hover:scale-105 transition-transform duration-300">
            <img
              src={project2}
              alt="Food Ordering Website"
              className="rounded-xl w-full h-52 sm:h-56 object-cover"
            />

            <h2 className="text-xl font-semibold mt-4">
              Food Ordering Website
            </h2>

            <ul className="list-disc ml-5 mt-3 text-gray-700 text-sm sm:text-base space-y-1">
              <li>Responsive React-based e-commerce website</li>
              <li>Product listing with search, filter, and sorting</li>
              <li>Add-to-cart functionality with UI updates</li>
              <li>Modern UI using Tailwind CSS</li>
              <li>Deployed on Netlify</li>
            </ul>

            <div className="flex flex-wrap gap-4 mt-5">
              <a
                href="https://github.com/kalpana1103/Mini_-project"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
              >
                GitHub
              </a>
              <a
                href="https://kalpana-ecommerce.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white shadow-xl rounded-2xl p-5 hover:scale-105 transition-transform duration-300">
            <img
              src={project3}
              alt="Social Media App"
              className="rounded-xl w-full h-52 sm:h-56 object-cover"
            />

            <h2 className="text-xl font-semibold mt-4">
              Social Media App (MERN)
            </h2>

            <ul className="list-disc ml-5 mt-3 text-gray-700 text-sm sm:text-base space-y-1">
              <li>Full-stack social media app using MERN stack</li>
              <li>JWT & bcrypt authentication</li>
              <li>Create, like, comment, and upload posts</li>
              <li>User profiles with post details</li>
              <li>Node.js & Express backend with MongoDB</li>
              <li>Frontend deployed on Netlify</li>
            </ul>

            <div className="flex flex-wrap gap-4 mt-5">
              <a
                href="https://github.com/kalpana1103/Major_Project"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
              >
                GitHub
              </a>
              <a
                href="https://kalpana-social-mern.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
              >
                Live Demo
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
