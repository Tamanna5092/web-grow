import {
  FaCheckCircle,
  FaFacebook,
  FaLink,
  FaPen,
  FaSearch,
} from "react-icons/fa";
import { FaArrowRightLong, FaChartLine } from "react-icons/fa6";
import { MdOutlineCampaign } from "react-icons/md";

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

export default digitalMarketingServices;