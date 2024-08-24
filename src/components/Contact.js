import React from "react";
import { Data } from "../Data/Constants";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Lottie from "lottie-react";
import ContactForm from "./ContactForm";
import mail from "../lottie/mail.json";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="contact"
      className="max-w-screen-lg mx-auto relative border-t my-12 lg:my-24 border-[#25213b] overflow-x-hidden overflow-hidden"
      data-aos="fade-up"
    >
      <div className="w-[100px] h-[100px] mb-16 bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center mt-10 my-5 lg:py-8">
        <div className="flex items-center">
          <span
            className="text-[#00040f] dark:text-slate-300 text-center font-extrabold   max-sm:text-2xl p-2 px-8 text-5xl ml-[-70px]"
            data-aos="fade-up"
          >
            Contact
          </span>
        </div>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 max-sm:grid-cols-1 gap-4  items-center"
        data-aos="fade-up"
      >
        <div className="lg:w-full lg:pr-8 lg:pl-8">
          <ContactForm />
        </div>
        <div
          className="md:w-auto md:flex-1 md:mb-5 border-gray-300 rounded-md p-4 md:mx-0 md:ml-2 md:mr-2 m-3 sm:m-12 sm:text-left"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-5 lg:gap-9 lg:w-full ">
            <p className="text-sm md:text-xl flex items-center md:items-start">
              <MdAlternateEmail
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-pink-500 hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer mr-8"
                size={36}
              />
              <span className="ml-12 md:ml-12 text-[#00040f] dark:text-slate-300">
                {Data.email}
              </span>
            </p>
            <p className="text-sm md:text-xl flex items-center md:items-start gap-3">
              <IoMdCall
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-pink-500 hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span className="ml-12 md:ml-12 text-[#00040f] dark:text-slate-300">
                {Data.phone}
              </span>
            </p>
            <div className="mt-4 lg:mt-2 flex gap-2 lg:gap-4 justify-start text-left">
              <a target="_blank" href={Data.github}>
                <IoLogoGithub
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-pink-500 hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </a>
              <a target="_blank" href={Data.linkedIn}>
                <BiLogoLinkedin
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-pink-500 hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </a>
              <a target="_blank" href={Data.twitter}>
                <FaXTwitter
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-pink-500 hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </a>
            </div>
          </div>
    
          <div className="lottie-container">
            <Lottie animationData={mail} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


