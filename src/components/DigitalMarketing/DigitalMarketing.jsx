import {
  FaCheckCircle,
  FaFacebook,
  FaLink,
  FaPen,
  FaSearch,
} from "react-icons/fa";
import { FaArrowRightLong, FaChartLine } from "react-icons/fa6";
import { MdOutlineCampaign } from "react-icons/md";
import { Link } from "react-router";

export default function DigitalMarketing() {
  const digitalMarketingServices = [
    {
      id: 1,
      title: "Digital Marketing",
      slug: "digital-marketing",
      description:
        "We provide comprehensive digital marketing services to help your business grow online.",
      icon: MdOutlineCampaign,
      features: [
        "SEO Optimization",
        "Social Media Marketing",
        "PPC Advertising",
      ],
    },
    {
      id: 2,
      title: "SEO",
      slug: "seo",
      description:
        "We provide SEO services to help your business rank higher in search engine results.",
      icon: FaChartLine,
      features: ["Keyword Research", "On page SEO", "Off page SEO"],
    },
    {
      id: 3,
      title: "Social Media Marketing",
      slug: "social-media-marketing",
      description:
        "We provide social media marketing services to help your business connect with your audience.",
      icon: FaFacebook,
      features: [
        "Content Creation",
        "Community Management",
        "Paid Social Media Advertising",
      ],
    },
    {
      id: 4,
      title: "Search Engine Marketing",
      slug: "search-engine-marketing",
      description:
        "We provide search engine marketing services to boost your visibility on search engines.",
      icon: FaSearch,
      features: [
        "Pay-Per-Click (PPC)",
        "Search Engine Optimization (SEO)",
        "Local SEO",
      ],
    },
    {
      id: 5,
      title: "Content Marketing",
      slug: "content-marketing",
      description:
        "We create engaging and valuable content to attract and retain your audience.",
      icon: FaPen,
      features: ["Blog Writing", "Infographic Creation", "Video Production"],
    },
    {
      id: 6,
      title: "Affiliate Marketing",
      slug: "affiliate-marketing",
      description:
        "We help you grow revenue through affiliate partnerships and programs.",
      icon: FaLink,
      features: [
        "Affiliate Program Setup",
        "Affiliate Recruitment",
        "Affiliate Management",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-20 px-4 md:px-0">
        {digitalMarketingServices.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="flex flex-col p-6 border-2 border-(--primary-color) rounded-lg group hover:scale-105 transition duration-1000"
            >
              <Icon className="w-16 h-16 p-4 bg-(--primary-color) text-white rounded-lg" />
              <h2 className="text-2xl font-bold mt-6">{service.title}</h2>
              <p className=" mt-4 lora text-lg text-(--text-color)">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-(--text-color) gap-2">
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
  );
}
