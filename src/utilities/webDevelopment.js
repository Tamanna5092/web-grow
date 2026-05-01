import { FaCode, FaLaptopCode, FaServer, FaTools } from "react-icons/fa";

  const webDevelopmentServices = [
    {
      id: 1,
      title: "Web Development",
      slug: "web-development",
      description:
        "We build modern, responsive, and high-performing websites to your business needs.",
      icon: FaCode,
      features: [
        "Custom Website Development",
        "Responsive Design",
        "Performance Optimization",
      ],
    },
    {
      id: 2,
      title: "Frontend Development",
      slug: "frontend-development",
      description:
        "We create interactive and visually appealing user interfaces using modern technologies.",
      icon: FaLaptopCode,
      features: [
        "React / Next.js Development",
        "UI/UX Implementation",
        "Responsive Layout",
      ],
    },
    {
      id: 3,
      title: "Backend Development",
      slug: "backend-development",
      description:
        "We develop secure and scalable server-side applications and APIs.",
      icon: FaServer,
      features: [
        "REST API Development",
        "Database Management",
        "Authentication & Security",
      ],
    },
    {
      id: 4,
      title: "Website Maintenance",
      slug: "website-maintenance",
      description:
        "We ensure your website stays updated, secure, and performs optimally.",
      icon: FaTools,
      features: ["Bug Fixing", "Security Updates", "Performance Monitoring"],
    },
  ];

export default webDevelopmentServices;