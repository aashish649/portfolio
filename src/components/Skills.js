import React from "react";
import { skillsData } from "../Data/SkillsData";
import { skillsImage } from "../Data/SkilsImage";
import Marquee from "react-fast-marquee";
import LazyLoad from "react-lazy-load";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
   useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="skills"
      className="max-w-screen-lg mx-auto relative z-50 border-t my-12 lg:my-24 border-[#25213b] overflow-x-hidden overflow-hidden"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center mt-10  my-5 lg:py-8">
        <div className="flex items-center">
          <span className="text-[#00040f] dark:text-slate-300 text-center font-extrabold  mb-3 max-sm:text-2xl  p-2 px-8 text-5xl ml-[-100px]">
            Skills
          </span>
        </div>
      </div>

      <div className="w-full my-12">
        <div className="w-full">
          <Marquee
            className="marquee"
            delay={0}
            play={true}
            speed={80}
            behavior="scroll"
            pauseOnHover={true}
            pauseOnClick={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div
                key={id}
                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer" data-aos="fade-up"
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-12">
                      <LazyLoad height={50} offset={100}>
                        <img
                          src={skillsImage(skill)}
                          alt={skill}
                          width={40}
                          height={40}
                          className="h-full w-auto rounded-lg"
                        />
                      </LazyLoad>
                    </div>
                    <p className="text-white text-sm sm:text-lg">{skill}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;
