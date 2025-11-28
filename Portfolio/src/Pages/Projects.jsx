import React from 'react'
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.jpg"

const Projects = () => {
  return (
   
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">

      {/* Project 1 */}
      <div className="bg-white shadow-lg rounded-xl p-4">
        <img src={project1} alt="Project 1" className="rounded-lg w-full h-60 object-cover" />
        <h2 className="text-xl font-semibold mt-3">Project 1</h2>

        <div className="flex gap-4 mt-3">
          <a
            href="https://github.com/YOUR_GITHUB_REPO"
            target="_blank"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg"
          >
            GitHub
          </a>

          <a
            href="https://YOUR_NETLIFY_URL.netlify.app"
            target="_blank"
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-white shadow-lg rounded-xl p-4">
        <img src={project2} alt="Project 2" className="rounded-lg w-full h-60 object-cover" />
        <h2 className="text-xl font-semibold mt-3">Project 2</h2>

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
      <div className="bg-white shadow-lg rounded-xl p-4">
        <img src={project3} alt="Project 3" className="rounded-lg w-full h-60 object-cover" />
        <h2 className="text-xl font-semibold mt-3">Project 3</h2>

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

    </div>
  )
}

export default Projects
