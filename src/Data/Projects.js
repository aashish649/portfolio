import alumni1 from "../ProjectImage/alumni1.png";
import alumni2 from "../ProjectImage/alumni2.png";
import alumni3 from "../ProjectImage/alumni3.png";
import alumni4 from "../ProjectImage/alumni4.png";
import portfolio1 from '../ProjectImage/portfolio1.png';
import portfolio2 from '../ProjectImage/portfolio2.png';
import portfolio3 from '../ProjectImage/portfolio3.png';
import math1 from '../ProjectImage/math1.png';
import math2 from '../ProjectImage/math2.png';
import personal1 from '../ProjectImage/personal1.png';
import personal2 from '../ProjectImage/personal2.png';
import weather1 from "../ProjectImage/weather1.png";
import weather2 from "../ProjectImage/weather2.png";
import currency1 from "../ProjectImage/currency1.png";
export const projects = [
  {
    id: "1",
    title: "Alumni Tracker",
    date: "Nov 2023 - Feb 2024",
    description:
      "Alumni Tracker is a web application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It serves a platform for alumni to connect, share updates, and engage with the admin seamlessly. The application is divided into user and admin interfaces, each equipped with distinct features and functionalities.",
    images: [alumni1,alumni2,alumni3,alumni4],
    tags: [
      "React Js",
      "Redux",
      "Tailwind Css",
      "MongoDb",
      "Node Js",
      "Express Js",
      "PostMan",
      "Cloudinary",
      "Twilio",
      "NodeMailer",
      "JWT",
    ],
    github: "https://github.com/aashish649/alumni-track",
    webapp: "https://alumni-track.vercel.app/",
  },
  {
    id: "2",
    title: "Portfolio",
    date: "Feb 2024 - Mar2024",
    description:
      "I built a personal portfolio website using React and styled it with Tailwind CSS. I made it interactive by adding cool animations using React tools like Lottie. The website is designed to look good and work well on all devices, from big screens to smartphones. It's a showcase of my work and skills in a user-friendly way.",
    images: [portfolio1,portfolio2,portfolio3],
    tags: [
      "React Js",
      "Redux",
      "Tailwind Css",
      "Css",
    ],
    github: "https://github.com/aashish649/portfolio",
    webapp: "",
  },
  {
    id: "3",
    title: "Math Helper",
    date: "Jun 2022 - August 2023",
    description:
      "Mathelper is a web app offering solutions for quadratic equations, percentage calculations, area, perimeter, and unit conversion. Simplify math tasks conveniently.",
    images: [math1,math2],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Netlify",
    ],
    category: "web app",
    github: "https://github.com/aashish649/Mathhelper",
    webapp: "https://mathtool.netlify.app/",
  },
  {
    id: "4",
    title: "personal",
    date: "Jun 2022 - Aug 2023",
    description:
      "A complete responsive portfolio website created using HTML, CSS, and JavaScript to learn JavaScript and responsiveness",
    images: [ personal1,personal2,     
    ],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Netlify",
    ],
    github: "https://github.com/aashish649/personal",
    webapp: "https://ashish-anand.netlify.app/",
  },
  {
    id: "5",
    title: "Weather-Forecast-Web-app",
    date: "dec 2023 - dec 2023",
    description:"This project is a hands-on exploration of JavaScript and API integration, designed to provide real-time weather information based on user input. With a user-friendly interface, the application fetches data from a weather API, allowing users to stay informed about current and forecasted weather conditions.",
    images: [weather1,weather2],
    tags: [
      "HTML",
      "CSS",
      "JavaScript", 
    ],
    category: "web app",
    github: "https://github.com/aashish649/Weather-Forecast-Web-app",
    webapp: "https://aashish649.github.io/Weather-Forecast-Web-app/",
  },
  {
    id: "6",
    title: "Currency Converter",
    date: "Dec 2023 - Dec 2023",
    description:"This project is a simple and user-friendly currency converter web application. It allows users to convert amounts from one currency to another, providing real-time exchange rates sourced from an external API. The application supports a variety of currencies, enabling users to perform accurate and instant currency conversions.",
    images: [currency1,currency1],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    category: "web app",
    github: "https://github.com/aashish649/Currency-Converter",
    webapp: "https://aashish649.github.io/Currency-Converter/",
  },
];
