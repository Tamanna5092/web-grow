import React from 'react'
import { FaCheckCircle, FaCode, FaLaptopCode, FaServer, FaTools } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router';

export default function WebDevelopment() {
  const webDevelopmentServices = [
  {
    "id": 1,
    "title": "Web Development",
    "slug": "web-development",
    "description": "We build modern, responsive, and high-performing websites tailored to your business needs.",
    "icon": FaCode,
    "features": [
      "Custom Website Development",
      "Responsive Design",
      "Performance Optimization"
    ]
  },
  {
    "id": 2,
    "title": "Frontend Development",
    "slug": "frontend-development",
    "description": "We create interactive and visually appealing user interfaces using modern technologies.",
    "icon": FaLaptopCode,
    "features": [
      "React / Next.js Development",
      "UI/UX Implementation",
      "Responsive Layout"
    ]
  },
  {
    "id": 3,
    "title": "Backend Development",
    "slug": "backend-development",
    "description": "We develop secure and scalable server-side applications and APIs.",
    "icon": FaServer,
    "features": [
      "REST API Development",
      "Database Management",
      "Authentication & Security"
    ]
  },
  {
    "id": 4,
    "title": "Website Maintenance",
    "slug": "website-maintenance",
    "description": "We ensure your website stays updated, secure, and performs optimally.",
    "icon": FaTools,
    "features": [
      "Bug Fixing",
      "Security Updates",
      "Performance Monitoring"
    ]
  }
]


  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-20 px-4 md:px-0">
        {webDevelopmentServices.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="flex flex-col p-6 border-2 border-(--primary-color) rounded-lg group hover:scale-105 transition duration-1000"
            >
              <Icon className="w-16 h-16 p-4 bg-(--primary-color) text-white rounded-lg" />
              <h2 className="text-2xl font-bold mt-6">{service.title}</h2>
              <p className=" mt-4 lora text-lg">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4 text-(--primary-color)" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={`/services/${service.slug}`}
                className="w-full flex justify-center items-center gap-2 group-hover:gap-4 mt-6 btn-primary-custom "
              >
                See Details
                <FaArrowRightLong className="w-6 h-6" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  )
}
