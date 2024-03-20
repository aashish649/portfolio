import { Data } from "../Data/Constants";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";
import computer from "../lottie/Computer.json";
import about from "../lottie/about.json";
import first from "../lottie/first.json";
import second from "../lottie/Second.json";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <section
    id="about"
    className="max-w-screen-lg mx-auto relative z-50 border-t my-12 lg:my-24 border-[#25213b] overflow-x-hidden overflow-hidden" data-aos="fade-down"
>
    <div className="w-[100px] h-[100px] mb-16 bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

    <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
    </div>

    <div className="flex justify-center text-center mt-10 my-5 lg:py-8">
        <div className="flex items-center">
            <span className="text-[#00040f] dark:text-slate-300 text-center font-extrabold mb-10 max-sm:text-2xl p-2 px-8 text-5xl ml-[-120px]">
                About
            </span>
        </div>
    </div>

    <div className="flex flex-col md:flex-row justify-center mt-16 md:mt-0 space-y-5 md:space-y-0 md:space-x-10" data-aos="fade-up">
        <div className="w-full md:w-auto md:flex-1 md:relative md:mr-10" style={{ perspective: '1000px' }}>
            <Lottie
                animationData={first}
                loop={true}
                className="max-w-[650px] md:max-w-[800px] h-auto   lottie-3d-effect"
            />
        </div>

        <div className=" md:w-auto md:flex-1 md:mb-5 button-animation border-gray-300 rounded-md p-4 md:mx-0 md:ml-2 md:mr-2 m-3 sm:m-12" data-aos="fade-up">
            <div className="mb-3 font-semibold text-pink-500 dark:text-[#16f2b3] text-lg md:text-xl text-center uppercase">
                Who I am?
            </div>
            <div className="text-[#00040f] dark:text-slate-300 text-xs md:text-sm lg:text-base">
                {Data.description}
            </div>
        </div>
    </div>
</section>
  );
};

export default About;

