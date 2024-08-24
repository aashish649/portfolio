import React from "react";
import experi from "../lottie/experince.json";
import { Experience } from "../Data/Experience";
import Lottie from "lottie-react";
import GlowCard from "../Data/GlowCard";
import vector from "../ProjectImage/company1.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Experinces = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="experience"
      className="max-w-screen-lg mx-auto relative border-t my-12 lg:my-24 border-[#25213b] overflow-x-hidden overflow-hidden" data-aos="fade-down"
    >
      <div className="w-[100px] h-[100px] mb-16 bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center mt-10 my-2 lg:py-6">
        <div className="flex items-center">
          <span className="text-[#00040f] dark:text-slate-300 text-center font-extrabold mb-10 max-sm:text-2xl p-2 px-8 text-4xl mx-auto ml-[-120px] sm:mr-100">
            Experiences
          </span>
        </div>
      </div>

      <div
        className="flex flex-col items-center mt-10 md:flex-row md:justify-center space-y-10 md:space-y-0 md:space-x-10"
        data-aos="fade-up"
      >
        <div className="md:w-1/2" style={{ perspective: "1000px" }}>
          <Lottie
            animationData={experi}
            loop={true}
            className="max-w-[300px] md:max-w-[380px] h-auto rounded-xl border border-[#00040f] lottie-3d-effect mb-10"
          />
        </div>
        <div
          className="flex flex-col gap-4 -mb-80 sm:gap-6 md:w-3/4 lg:w-1/2"
          style={{ margin: "0 16px" }}
        >
          {Experience.map((experience) => (
            <GlowCard
              key={experience.id}
              identifier={`experience-${experience.id}`}
            >
              <div>
                <p className="text-xs sm:text-sm text-[#16f2b3] mt-4 text-center">
                  {experience.duration}
                </p>
              </div>
              <div className="px-3 pr-2 py-2 relative text-white flex flex-col items-start max-w-[calc(100%-40px)]">
                <div className="flex items-center gap-3">
                  <div className="w-15 h-15 rounded-full overflow-hidden">
                    <img
                      src={vector}
                      alt="Logo"
                      width={60}
                      height={60}
                      className="opacity-80"
                    />
                  </div>

                  <div className="flex flex-col text-left">
                    <p className="text-base sm:text-xl mb-1 font-medium uppercase text-left">
                      {experience.title}
                    </p>
                    <p className="text-sm sm:text-base text-left">
                      {experience.company}
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

export default Experinces;

