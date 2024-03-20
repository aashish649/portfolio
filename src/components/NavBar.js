import { CgMenuGridR } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { HiSun } from "react-icons/hi";
import Menu from "./Menu";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [screen, setScreen] = useState(window.innerWidth < 900);
  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  
  
  useEffect(() => {
    const updateScreenSize = () => {
      setScreen(window.innerWidth < 900);
    };

    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <section className="NAVBAR p-5 mx-20 mt-5 font-['Poppins']  max-sm:p-2 max-sm:mx-5 max-sm:max-h-[48px]">
      <div className="NAVBAR flex justify-between capitalize">
        <div className="LOGO flex items-center">
          <a
            href="#"
            className="text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:text-cyan-500 max-sm:text-2xl"
          >
            {"Aashish{</>}"}
          </a>
          {screen && (
            <button onClick={toggleTheme}  className={` mt-1 px-6 ${theme === "dark" ? "text-white" : "text-black"}`}>
              {theme === "dark" ? (
                <HiMoon className="-translate-y-1 text-2xl" />
              ) : (
                <HiSun className="-translate-y-1 text-2xl" />
              )}
            </button>
          )}
        </div>
        <div className="NAVLINKS text-[20px] translate-x-[80px] max-sm:hidden flex gap-6 text-gray-800 dark:text-[#e1e1e1]">
          <a
            href="#home"
            class="nav-link"
            className="nav-link hover:text-blue-600 dark:hover:text-cyan-500 text-lg"
          >
            <button className="px-4 py-2 button-animation">
              Home <span class="top"></span>
              <span class="right"></span>
              <span class="bottom"></span>
              <span class="left"></span>
            </button>
          </a>
          <a
            href="#about"
            class="nav-link"
            className="nav-link hover:text-blue-600 dark:hover:text-cyan-500 text-lg"
          >
            <button className="px-4 py-2 button-animation">
              About
              <span class="top"></span>
              <span class="right"></span>
              <span class="bottom"></span>
              <span class="left"></span>
            </button>
          </a>
          <a
            href="#skills"
            class="nav-link"
            className="nav-link hover:text-blue-600 dark:hover:text-cyan-500 text-lg"
          >
            <button className="px-4 py-2 button-animation">
              Skills <span class="top"></span>
              <span class="right"></span>
              <span class="bottom"></span>
              <span class="left"></span>
            </button>
          </a>
          <a
            href="#projects"
            class="nav-link"
            className="nav-link hover:text-blue-600 dark:hover:text-cyan-500 text-lg"
          >
            <button className="px-4 py-2 button-animation">
              Projects
              <span class="top"></span>
              <span class="right"></span>
              <span class="bottom"></span>
              <span class="left"></span>
            </button>
          </a>
          <a
            href="#education"
            class="nav-link"
            className="nav-link hover:text-blue-600 dark:hover:text-cyan-500 text-lg"
          >
            <button className="px-4 py-2 button-animation">
              Education
              <span class="top"></span>
              <span class="right"></span>
              <span class="bottom"></span>
              <span class="left"></span>
            </button>
          </a>
          <a
            href="#contact"
            class="nav-link"
            className="nav-link hover:text-blue-600 dark:hover:text-cyan-500 text-lg"
          >
            <button className="px-4 py-2   button-animation">
              Contact <span class="top"></span>
              <span class="right"></span>
              <span class="bottom"></span>
              <span class="left"></span>
            </button>
          </a>
          <button onClick={toggleTheme} className="p-4 bg-gradient-to-tl">
            {theme === "dark" ? (
              <HiMoon className="-translate-y-1 text-2xl" />
            ) : (
              <HiSun className="-translate-y-1 text-2xl" />
            )}
          </button>
        </div>
        <button onClick={() => setMobileMenu(!mobileMenu)}>
          <CgMenuGridR className="hidden max-sm:block text-[#00040f] dark:text-[#e1e1e1] text-[32px]" />
        </button>
      </div>
      {mobileMenu && <Menu />}
    </section>
  );
};

export default NavBar;
