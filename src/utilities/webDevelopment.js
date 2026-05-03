import { FaCode, FaLaptopCode, FaServer, FaTools } from "react-icons/fa";

const webDevelopmentServices = [
  {
    id: 1,
    title: "Web Development",
    slug: "web-development",
    shortDescription:
      "Build fast, responsive, and modern websites for your business.",
    icon: FaCode,
    overview:
      "Our Website Development service focuses on creating modern, responsive, and high-performing websites tailored to your business needs. We ensure clean design, fast loading speed, and SEO-friendly structure so your website not only looks good but also performs well. Whether it's a business website, portfolio, or landing page, we build scalable and user-friendly solutions that help you grow online.",
    features: [
      "Custom Website Development",
      "Responsive Design",
      "Fast Loading Speed",
      "SEO-Friendly Structure",
      "Clean & Modern UI",
    ],
    benefits: [
      "Better user experience",
      "Mobile-friendly design",
      "Improved website performance",
    ],

    process: [
      "Requirement Analysis",
      "UI/UX Design",
      "Development",
      "Testing",
      "Launch",
    ],

    tools: ["HTML", "CSS", "JavaScript", "React"],

    faqs: [
      {
        q: "Will my website be mobile-friendly?",
        a: "Yes, all our websites are fully responsive and mobile-friendly.",
      },
    ],
  },
  {
    id: 2,
    title: "Frontend Development",
    slug: "frontend-development",
    shortDescription:
      "Create interactive and visually appealing user interfaces.",
    icon: FaLaptopCode,
    overview:
      "Our Frontend Development service focuses on creating interactive and visually appealing user interfaces using modern technologies. We ensure a seamless user experience with responsive design and optimized performance.",
    features: [
      "React.js Development",
      "UI/UX Implementation",
      "Responsive Layout",
      "Modern Frameworks",
      "Interactive Elements",
    ],
    benefits: [
      "Improved user experience",
      "Modern and attractive design",
      "Better performance",
    ],
    process: [
      "Requirement Analysis",
      "UI/UX Design",
      "Development",
      "Testing",
      "Launch",
    ],
    tools: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React"],
    faqs: [
      {
        q: "What technologies do you use for frontend development?",
        a: "We use modern technologies like React and Next.js to create interactive and visually appealing user interfaces.",
      },
    ],
  },
  {
    id: 3,
    title: "Backend Development",
    slug: "backend-development",
    shortDescription:
      "We develop secure and scalable server-side applications and APIs.",
    icon: FaServer,
    overview:
      "Our Backend Development service focuses on creating secure and scalable server-side applications and APIs. We ensure robust architecture, efficient database management, and strong security measures to support your application's performance and growth.",
    features: [
      "REST API Development",
      "Database Management",
      "Authentication & Security",
    ],
    benefits: [
      "Improved security",
      "Scalable architecture",
      "Efficient database management",
    ],
    process: [
      "Requirement Analysis",
      "System Design",
      "Development",
      "Testing",
      "Deployment",
    ],
    tools: ["Node.js", "Express.js", "MongoDB"],
    faqs: [
      {
        q: "What technologies do you use for backend development?",
        a: "We use modern technologies like Node.js, Python, and databases such as PostgreSQL and MongoDB.",
      },
    ],
  },
  {
    id: 4,
    title: "Website Maintenance",
    slug: "website-maintenance",
    shortDescription:
      "We ensure your website stays updated, secure, and performs optimally.",
    icon: FaTools,
    overview:
      "Our Website Maintenance service ensures that your website stays updated, secure, and performs optimally. We provide regular updates, security patches, performance monitoring, and bug fixes to keep your website running smoothly and securely.",
    features: [
      "Regular Updates",
      "Security Patches",
      "Performance Monitoring",
      "Bug Fixing",
      "Content Updates",
    ],
    benefits: [
      "Better website security",
      "Reduced downtime",
      "Smooth performance",
    ],

    process: ["Monitoring", "Issue Fixing", "Updates", "Optimization"],

    tools: ["cPanel", "Git", "Hosting Tools"],
    faqs: [
      {
        q: "Do you provide ongoing support?",
        a: "Yes, we offer ongoing maintenance and support plans.",
      },
    ],
  },
];

export default webDevelopmentServices;
