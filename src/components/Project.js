import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { projects } from "../Data/Projects";

const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 mt-5 font-['Poppins'] max-sm:p-2 max-sm:mx-5 max-sm:max-h-[48px] relative -z-50"
    >
      <div className="WRAPPER mt-8" data-aos="fade-down">
        {/* Section Title */}
        <div className="flex justify-center mt-10 my-5 lg:py-8">
          <div className="flex items-center">
            <span className="text-[#00040f] dark:text-slate-300 text-center font-extrabold mb-3 max-sm:text-2xl p-2 px-8 text-3xl ml-[-70px]">
              Projects
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="PROJECTS grid gap-6  grid-cols-1 sm:grid-cols-3 max-sm:grid-cols-1 mt-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="max-w-[350px] rounded overflow-hidden shadow-lg bg-[#e1e1e1] dark:bg-transparent button-animation  hover:bg-gradient-to-tl from-[#ccc] to-[#e1e1e1] dark:from-[#00040F] dark:to-[#0B274C]"
            >
              {/* Project Image */}
              <div className="relative w-full h-[120px] sm:h-[150px] overflow-hidden px-3 py-3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="px-4 py-2">
                {/* Display tags horizontally */}
                <div className="flex flex-wrap mb-2">
                  {project.tags.map((tag, index) => (
                    <button
                      key={index}
                      className="inline-block bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-2xl px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-2"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                {/* Project Title */}
                <div className="font-bold text-lg mb-2 text-[#00040f] dark:text-slate-200">
                  {project.title}
                </div>
                {/* Project Date */}
                <p className="text-gray-700 text-sm mb-2 text-left">
                  {project.date}
                </p>
                {/* Project Description */}
                <p className="text-gray-500 text-sm text-left mb-2">
                  {project.description}
                </p>
                {/* Project Buttons */}
                <div className="flex justify-start">
                  <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold py-1 px-3 rounded mr-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </button>
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-1 px-3 rounded">
                    <a
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Web App
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
