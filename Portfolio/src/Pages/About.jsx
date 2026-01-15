import React from "react";

const About = () => {
  return (
    <section className="bg-slate-800 text-white px-4 sm:px-6 md:px-10 py-16 md:py-20 font-serif">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-8 md:mb-10">
          About Me
        </h1>

        {/* Content */}
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg leading-relaxed text-slate-200 text-center px-2">
          <p>
            Hello! I’m{" "}
            <span className="text-emerald-500 font-semibold">Kalpana</span>, an
            aspiring{" "}
            <span className="text-emerald-500">MERN Stack Developer</span>.
          </p>

          <p>
            I specialize in building scalable and user-friendly web applications
            using{" "}
            <span className="text-emerald-500">
              MongoDB, Express.js, React.js, and Node.js
            </span>.
            I enjoy developing responsive front-end interfaces and creating
            secure, efficient back-end APIs.
          </p>

          <p>
            I’m passionate about learning new technologies, improving my
            problem-solving skills, and contributing to impactful development
            teams.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-12 md:mt-14 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-emerald-500 font-semibold mb-5 md:mb-6">
            My Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Bootstrap",
              "Tailwind CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-emerald-500/90 text-slate-900 rounded-md sm:rounded-lg text-xs sm:text-sm md:text-base font-medium shadow-md transition-transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
