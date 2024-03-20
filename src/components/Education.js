import React from "react";
import Lottie from "lottie-react";
import bookc from "../lottie/bookc.json";
import GlowCard from "../Data/GlowCard";
import { Educations } from "../Data/Education";

const Education = () => {
  return (
    <section
      id="education"
      className="max-w-screen-lg mx-auto relative border-t my-12 lg:my-24 border-[#25213b] overflow-x-hidden overflow-hidden"
    >
      <div className="w-[100px] h-[100px] mb-16 bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center mt-10 my-2 lg:py-6">
        <div className="flex items-center">
          <span className="text-[#00040f] dark:text-slate-300 text-center font-extrabold mb-10 max-sm:text-2xl p-2 px-8 text-5xl ml-[-90px]">
            Education
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center mt-16 md:flex-row md:justify-center space-y-10 md:space-y-0 md:space-x-10" data-aos="fade-up">
        <div className="md:w-1/2" style={{ perspective: "1000px" }}>
          <Lottie
            animationData={bookc}
            loop={true}
            className="max-w-[300px] md:max-w-[400px] h-auto rounded-xl border border-[#00040f] lottie-3d-effect mb-10"
          />
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 md:w-3/4 lg:w-1/2" style={{ margin: '0 16px' }}>
          {Educations.map((education) => (
            <GlowCard
              key={education.id}
              identifier={`education-${education.id}`}
            >
              <div>
                <p className="text-xs sm:text-sm text-[#16f2b3] mt-4 text-center">
                  {education.duration}
                </p>
              </div>
              <div className="px-3 pr-2 py-2 relative text-white flex flex-col items-start">
                <div className="flex items-center gap-3">
                  {/* Logo */}
                  <div className="w-15 h-15 rounded-full overflow-hidden">
                    <img
                      src={education.logo}
                      alt="Logo"
                      width={80}
                      height={80}
                      className="opacity-80"
                    />
                  </div>

                  <div className="flex flex-col text-left">
                    <p className="text-base sm:text-xl mb-1 font-medium uppercase text-left">
                      {education.title}
                    </p>
                    <p className="text-sm sm:text-base text-left">
                      {education.institution}
                    </p>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
