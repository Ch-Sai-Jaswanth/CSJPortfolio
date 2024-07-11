import { web, react, html, css, javascript, nodejs, rtcclone, weatherapp, portfolio, mongodb } from "../assets";

export const LOGO_URL = "https://i.pinimg.com/originals/d8/54/a2/d854a21d03be1bafb2ece3c43c3b1bfa.png";

export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

export const services = [
    {
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: react,
    }
];
  
export const projects = [
  {
    name : "Portfolio",
    description : "My personal portfolio website",
    image : portfolio,
    tech : ["React", "Tailwind CSS", "Framer Motion"],
    image_link : "#",
    link : "https://github.com/Ch-Sai-Jaswanth/CSJPortfolio/"
  },
  {
    name : "Weather App",
    description : "A simple weather app",
    image : weatherapp,
    tech : ["React", "Tailwind CSS", "Open Weather API"],
    image_link : "#",
    link : "https://github.com/Ch-Sai-Jaswanth/WeatherApp/"
  },
  {
    name : "RTC Clone",
    description : "Front end clone of APSRTC",
    image : rtcclone,
    tech : ["HTML", "CSS"],
    image_link : "https://github.com/industry-ready-2125/module-3-hosting-ChSaiJaswanth",
    link : "https://industry-ready-2125.github.io/module-3-hosting-ChSaiJaswanth/"
  }
]

export const skills = [
  {
    name : "HTML 5",
    icon : html
  },
  {
    name : "CSS 3",
    icon : css
  },
  {
    name : "JavaScript",
    icon : javascript
  },
  {
    name : "Mongo DB",
    icon : mongodb
  },
  {
    name : "React JS",
    icon : react
  },
  {
    name : "Node JS",
    icon : nodejs
  }  
]