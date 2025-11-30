import React from 'react'
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.jpg"

const Projects = () => {
  return (
    <> <div className=''>
      <h1 className='text-5xl font-roboto text-center text-black-300 text-bold'>Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 ">

        {/* Project 1 */}
        <div className="bg-white shadow-xl rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
          <img
            src={project1}
            alt="Project 1"
            className="rounded-xl w-full h-60 object-cover"
          />

          <h2 className="text-xl font-semibold mt-4">Portfolio Website</h2>
          <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
            <li>Built using React + Tailwind CSS</li>
            <li>Fully responsive for all devices</li>
            <li>Includes About, Projects, and Contact sections</li>
            <li>Deployed on Netlify</li>
          </ul>

          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/kalpana1103/My_Personal_Portfolio"
              target="_blank"
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
            >
              GitHub
            </a>

            <a
              href="https://kalpana-vobinaboina-portfolio.netlify.app/"
              target="_blank"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-xl rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
          <img src={project2} alt="Project 2" className="rounded-lg w-full h-60 object-cover" />
          <h2 className="text-xl font-semibold mt-3">Food Ordering Website</h2>
          <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
            <li>Responsive React-based E-Commerce website</li>
            <li>Product listing page with search, filter and sorting</li>
            <li>Add to Cart functionality with UI updates</li>
            <li>Clean and modern Tailwind CSS design</li>
            <li>Deployed live on Netlify</li>
          </ul>

          <div className="flex gap-4 mt-3">
            <a
              href="https://github.com/kalpana1103/Mini_-project"
              target="_blank"
              className="px-4 py-2 bg-gray-800 text-white rounded-lg"
            >
              GitHub
            </a>

            <a
              href="https://kalpana-ecommerce.netlify.app/"
              target="_blank"
              className="px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white shadow-xl rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
          <img src={project3} alt="Project 3" className="rounded-lg w-full h-60 object-cover" />
          <h2 className="text-xl font-semibold mt-3">Social Media App</h2>
          <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
            <li>Full-stack Social Media app built using MERN</li>
            <li>User authentication using JWT & bcrypt</li>
            <li>Create, Like, Comment, Upload Posts with images</li>
            <li>User profile page with post details</li>
            <li>Node.js + Express backend with MongoDB database</li>
            <li>Frontend hosted on Netlify</li>
          </ul>


          <div className="flex gap-4 mt-3">
            <a
              href="https://github.com/kalpana1103/Major_Project"
              target="_blank"
              className="px-4 py-2 bg-gray-800 text-white rounded-lg"
            >
              GitHub
            </a>

            <a
              href="https://kalpana-social-mern.netlify.app/"
              target="_blank"
              className="px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              Live Demo
            </a>
          </div>
        </div>

      </div></div>

    </>

  )
}

export default Projects
