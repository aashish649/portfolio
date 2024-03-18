import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { projects } from "../Data/Projects";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const openGithubLink = (url) => {
    window.open(url, "_blank");
  };

  const openProjectLink = (url) => {
    window.open(url, "_blank");
  };

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 mt-5 font-['Poppins'] max-sm:p-2 max-sm:mx-5 max-sm:max-h-[48px] relative"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      
      <div className="WRAPPER mt-8" data-aos="fade-down">
        <div className="flex justify-center mt-10 my-5 lg:py-8">
          <div className="flex items-center">
            <span className="text-[#00040f] dark:text-slate-300 text-center font-extrabold mb-3 max-sm:text-2xl p-2 px-8 text-3xl ml-[-70px]">
              Projects
            </span>
          </div>
        </div>

        <div className="PROJECTS grid gap-6  grid-cols-1 sm:grid-cols-3 max-sm:grid-cols-1 mt-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded overflow-hidden shadow-lg bg-[#e1e1e1] dark:bg-transparent button-animation hover:bg-gradient-to-tl from-[#ccc] to-[#e1e1e1] dark:from-[#00040F] dark:to-[#0B274C]"
            >
              {/* Image Slider */}
              <div className="relative w-full h-[120px] sm:h-[150px] overflow-hidden px-3 py-3">
                <Slider {...settings}>
                  {project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ))}
                </Slider>
              </div>

              <div className="flex-grow flex flex-col justify-between px-4 py-4">
                {" "}
                <div className="flex flex-wrap mb-2">
                  {project.tags.map((tag, index) => (
                    <button
                      key={index}
                      className="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-2xl px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-2"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <div className="font-bold text-lg mb-2 text-[#00040f] dark:text-slate-200">
                  {project.title}
                </div>
                <p className="text-gray-700 text-sm mb-2 text-left">
                  {project.date}
                </p>
                
                <p className="text-gray-500 text-sm text-left mb-2">
                  {showFullDescription
                    ? project.description
                    : project.description.split(" ").slice(0, 30).join(" ")}
                  {project.description.split(" ").length > 30 && (
                    <button
                      className="text-blue-600 hover:underline"
                      onClick={toggleDescription}
                    >
                      {showFullDescription ? "Read Less" : "Read More"}
                    </button>
                  )}
                </p>
  
                <div className="flex justify-between">
                  {" "}
                  <button
                    className="flex items-center bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 px-4 transition-all hover:scale-105 rounded-full duration-300 h-14 w-14 "
                    onClick={() => openGithubLink(project.github)}
                  >
                    <FaGithub size={30} />
                  </button>
                  <button
                    className="flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 transition-all hover:scale-105 rounded-full duration-300 h-14 w-14"
                    onClick={() => openProjectLink(project.webapp)}
                  >
                    <IoIosLink size={30} />
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
