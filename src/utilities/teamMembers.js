import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const teamMembers = [
  {
    id: 1,
    name: "Shariful Islam Siam",
    role: "Digital Marketer & SEO Expert",
    slug: "shariful-islam-siam",
    image: "https://i.ibb.co.com/kpFhSxW/Shoriful-Islam-Siam.jpg",

    about:
      "I am a passionate and dedicated digital marketing professional who loves exploring new strategies in online growth and business development. I am currently a student pursuing a BBA in Accounting (Honours), 2nd year. Alongside my academic journey, I am actively developing my skills in SEO and digital marketing to build a strong career in this field.",

    description:
      "I specialize in SEO, Google Ads, keyword research, and performance-based marketing campaigns. My approach is focused on understanding business goals and creating data-driven strategies that deliver measurable results. I conduct in-depth keyword analysis, optimize website structure, and implement both on-page and off-page SEO techniques to improve search engine rankings. I create and manage high-performing Google Ads campaigns that target the right audience and maximize return on investment. I continuously monitor performance, analyze data, and optimize campaigns to ensure consistent growth. My goal is to help businesses increase their online visibility, drive high-quality traffic, and generate leads that convert into long-term customers",

    specialization: [
      "Search Engine Optimization (SEO)",
      "Google Ads Campaigns",
      "Keyword Research",
      "Analytics & Reporting",
    ],

    skills: ["SEO", "Google Ads", "Analytics", "Keyword Research"],

    experience: "3+ Years",
    startWork: "2022",

    socialLinks: [
      {
        name: "email",
        url: "mailto:sismarketingagencybd@gmail.com",
        icon: IoMdMail,
      },
      {
        name: "facebook",
        url: "https://www.facebook.com/sismarketingagencybd",
        icon: FaFacebook,
      },
      {
        name: "youtube",
        url: "https://www.youtube.com/@sismarketingagency",
        icon: FaYoutube,
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/bdsismarketingagency2003/",
        icon: FaInstagram,
      },
    ],
  },

  {
    id: 2,
    name: "Tamanna Akter Moni",
    role: "Web Developer",
    slug: "tamanna-akter-moni",
    image:
      "https://i.ibb.co.com/7tCznGSG/Whats-App-Image-2025-09-29-at-13-20-27-601f245b.jpg",

    about:
      "I am a creative and passionate web developer who enjoys building modern, responsive, and user-friendly web applications. I am currently a student pursuing a BBA in Management (Honours). Alongside my studies, I focus on improving my frontend development skills and creating high-quality web experiences.",

    description:
      "I work with React, JavaScript, and modern frontend technologies to create scalable and high-performance web applications. My focus is on clean UI, responsive design, and smooth user experience. My development process includes designing responsive layouts, optimizing performance, and ensuring cross-browser compatibility so that every website works perfectly on all devices. I pay close attention to UI/UX principles, aiming to create visually appealing designs that are both functional and intuitive. My goal is to deliver high-quality web solutions that not only look great but also perform reliably and efficiently.",

    specialization: [
      "Frontend Development",
      "React Development",
      "UI/UX Design Implementation",
      "Responsive Web Design",
    ],

    skills: ["React", "JavaScript", "Tailwind CSS", "UI Development"],

    experience: "2+ Years",
    startWork: "2023",

    socialLinks: [
      {
        name: "email",
        url: "mailto:tamannaaktermoni51@gmail.com",
        icon: IoMdMail,
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/tamanna51",
        icon: FaLinkedin,
      },
      {
        name: "github",
        url: "https://github.com/Tamanna5092",
        icon: FaGithub,
      },
      {
        name: "facebook",
        url: "https://www.facebook.com/tamannaaktermoni51",
        icon: FaFacebook,
      },
      {
        name: "twitter",
        url: "https://x.com/tamanna_51?s=09",
        icon: FaTwitter,
      },
    ],
  },
];

export default teamMembers;
