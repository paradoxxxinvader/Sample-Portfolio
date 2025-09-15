import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import a placeholder for company logos
import papertechy from "../assets/company/papertechy.png";
import placeholder from "../assets/company/placeholder.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Development Engineer",
    icon: web, // You can choose an appropriate icon
  },
  {
    title: "Full-Stack Web Developer",
    icon: mobile, // You can choose an appropriate icon
  },
  {
    title: "API Development",
    icon: backend, // You can choose an appropriate icon
  },
  {
    title: "Performance Optimization",
    icon: creator, // You can choose an appropriate icon
  },
];

const technologies = [
  {
    name: "Python",
    icon: placeholder, // You will need to add an image for Python
  },
  {
    name: "C++",
    icon: placeholder, // You will need to add an image for C++
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "NextJS",
    icon: placeholder, // You will need to add an image for NextJS
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Flask",
    icon: placeholder, // You will need to add an image for Flask
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: placeholder, // You will need to add an image for PostgreSQL
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Linux",
    icon: placeholder, // You will need to add an image for Linux
  },
  {
    name: "Postman",
    icon: placeholder, // You will need to add an image for Postman
  },
  {
    name: "VS Code",
    icon: placeholder, // You will need to add an image for VS Code
  },
  {
    name: "Vercel",
    icon: placeholder, // You will need to add an image for Vercel
  },
  {
    name: "Netlify",
    icon: placeholder, // You will need to add an image for Netlify
  },
  {
    name: "NumPy",
    icon: placeholder, // You will need to add an image for NumPy
  },
  {
    name: "pandas",
    icon: placeholder, // You will need to add an image for pandas
  },
  {
    name: "scikit-learn",
    icon: placeholder, // You will need to add an image for scikit-learn
  },
  {
    name: "TensorFlow",
    icon: placeholder, // You will need to add an image for TensorFlow
  },

];

const experiences = [
  {
    title: "Web Developer (Hybrid)",
    company_name: "PAPERTECHY PVT. LTD.",
    icon: papertechy, // You will need to provide this image
    iconBg: "#383E56",
    date: "September 2025 - Present",
    points: [
      "Building and optimizing a full-stack e-commerce platform, enabling secure workflows and seamless customer experience for handmade products.",
      "Improving platform performance and engagement by integrating new features, boosting speed, and enhancing navigation.",
    ],
  },
];

// Removing testimonials as requested
const testimonials = [];

const projects = [
  {
    name: "Campus Cove",
    description:
      "Designed and developed a centralized campus portal that streamlined student resource access, resulting in 40% faster information retrieval across academics, placements, and clubs.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "white-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: project2, // Placeholder image
    source_code_link: "https://github.com/",
  },
  {
    name: "Quick AI",
    description:
      "Developed a full-stack AI-powered content generation system with role management and secure authentication. Built scalable backend APIs, optimized queries for high throughput, and deployed a responsive UI to support 500+ active users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "white-text-gradient",
      },
    ],
    image: gearXpert, // Placeholder image
    source_code_link: "https://github.com/",
  },
  {
    name: "Weather API",
    description:
      "Implemented a real-time weather forecasting application integrating external APIs with HTTPS & TLS for security. Enhanced reliability by engineering fault-tolerant API calls and optimized data pipelines.",
    tags: [
      {
        name: "open-weather-map-api",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: project3, // Placeholder image
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
