
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
  NetflixRec1,
  DoctorAppoint,
  RealtimeChat
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


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
  {
    id:"resume",
    title:"Resume"
  }
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Infotact Solutions",
    icon: tekisky,
    iconBg: "#383E56",
    date: "July  2025 - present",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Avinash proved me wrong.",
    name: "Mr.Rushikesh Dalvi",
    designation: "Founder & CEO",
    company: "kaliyug Technologies",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Avinash does.",
    name: "Aftab Attar",
    designation: "Freelancer",
    company: "Remote Jobs",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Avinash optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Bhagesh Bansode",
    designation: "GET",
    company: "Johnsan Controls",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "NetFlix-GPT",
    description:
      "Netflix GPT is a smart movie recommendation web app built using ReactJS and styled with Tailwind CSS. It integrates Google's Gemini AI API to provide intelligent, AI-driven movie and series suggestions based on user mood..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "Gemini Ai Api",
        color: "green-text-gradient",
      },
 
    ],
  
    video: NetflixRec1,
    source_code_link: "https://github.com/Avinash23072003/NetflixGptByAvi",
  },
  {
    name: "Doctor Appointmnt Sys",
    description:
      "Role-based system for patients, doctors, and admins Secure online payments via Razorpay with real-time confirmations Admin dashboard to manage users, doctors, and appointmentsDynamic  creation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDb",
        color: "pink-text-gradient",
      },
      {
        name: "RazorPay",
        color: "blue-text-gradient",
      }
    ],
    video: DoctorAppoint,
    source_code_link: "https://github.com/Avinash23072003/DoctorsAppointment",
  },
  {
    name: "Pookie-Shookie ChatApp",
    description:
      "Developed a full-stack realtime chat application that supports both one-to-one and group conversations using Socket.io for seamless, bidirectional communication.Users can create group chats, and group admins have privileges to add or remove members.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
       {
        name: "Socket",
        color: "green-text-gradient",
      },
      

      

    ],
    video: RealtimeChat,
    source_code_link: "https://github.com/Avinash23072003/Avinash-s-Realtime-Chat-App",
  },
];

export { services, technologies, experiences, testimonials, projects };
