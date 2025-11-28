import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6 text-blue-400">
          About Me
        </h1>

        {/* Content Section */}
        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            Hello! I'm <span className="text-blue-300 font-semibold">Kalpana Vobina Boina</span>,  
            a passionate Frontend Developer who loves creating beautiful and 
            responsive web applications.
          </p>

          <p>
            I specialize in working with <span className="text-blue-300">React, Tailwind CSS, JavaScript</span>  
            and love building clean, modern UI designs.
          </p>

          <p>
            I enjoy learning new technologies, solving problems and building 
            real-world projects that make life easier.
          </p>

          <p>
            Apart from coding, I also love design, creativity and exploring 
            new things that improve my skills.
          </p>
        </div>

        {/* Skills Box */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">Skills</h2>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
              HTML
            </span>
            <span className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
              CSS
            </span>
            <span className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
              JavaScript
            </span>
            <span className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
              React
            </span>
            <span className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
              Expressjs
            </span>
             <span className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
              MongoDb
            </span>
             <span className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
           Nodejs
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
