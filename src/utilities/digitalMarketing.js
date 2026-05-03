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
    title: "Search Engine Optimization",
    slug: "seo",
    shortDescription:
      "Improve rankings and drive organic traffic from search engines.",
    icon: FaChartLine,

    overview:
      "Our SEO service is designed to improve your website’s visibility on search engines like Google. We focus on both on-page and off-page SEO techniques to ensure long-term growth and higher rankings. From keyword research to technical optimization, we cover everything needed to boost your online presence. We analyze your competitors, optimize your website structure, improve content quality, and build high-quality backlinks to increase authority. Our goal is to bring targeted organic traffic that converts into real customers.",

    features: [
      "Keyword Research",
      "On-page SEO",
      "Technical SEO",
      "Link Building",
    ],

    benefits: [
      "Higher search rankings",
      "Long-term organic traffic",
      "Better website performance",
    ],

    process: [
      "Website Audit",
      "Keyword Research",
      "Optimization",
      "Link Building",
      "Monitoring",
    ],

    tools: ["Ahrefs", "Google Search Console", "SEMrush"],

    faqs: [
      {
        q: "Is SEO a long-term process?",
        a: "Yes, SEO takes time but delivers long-lasting results.",
      },
    ],
  },

  {
    id: 2,
    title: "Facebook Ads",
    slug: "facebook-ads",
    shortDescription: "Run targeted Facebook ads to generate leads and sales.",
    icon: FaFacebook,

    overview:
      "We create and manage high-converting Facebook ad campaigns that help you reach your ideal customers. Our strategy focuses on audience targeting, creative ad design, and continuous optimization to maximize your return on investment. From brand awareness to lead generation and sales campaigns, we handle everything professionally. We test different audiences and creatives to find the best-performing ads for your business.",

    features: [
      "Audience Targeting",
      "Ad Creative Design",
      "Campaign Management",
      "Retargeting",
    ],

    benefits: [
      "More leads and sales",
      "Precise audience targeting",
      "Better ROI",
    ],

    process: [
      "Audience Research",
      "Campaign Setup",
      "Testing",
      "Optimization",
      "Scaling",
    ],

    tools: ["Meta Ads Manager", "Facebook Pixel", "Google Analytics"],

    faqs: [
      {
        q: "Can I run ads with a small budget?",
        a: "Yes, we can optimize campaigns for both small and large budgets.",
      },
    ],
  },

  {
    id: 3,
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    shortDescription:
      "Grow your brand and engagement on social media platforms.",
    icon: FaPen,

    overview:
      "Our social media marketing service helps you build a strong online presence and connect with your audience. We create engaging content, manage your profiles, and run campaigns to increase followers, engagement, and brand awareness. We focus on platforms like Facebook, Instagram, and others to promote your business effectively. Our goal is to turn your social media into a powerful marketing channel.",

    features: [
      "Content Creation",
      "Page Management",
      "Post Scheduling",
      "Audience Engagement",
    ],

    benefits: [
      "Stronger brand presence",
      "Higher engagement",
      "Audience growth",
    ],

    process: [
      "Content Planning",
      "Design & Posting",
      "Engagement",
      "Performance Tracking",
    ],

    tools: ["Meta Business Suite", "Canva", "Buffer"],

    faqs: [
      {
        q: "Which platforms do you manage?",
        a: "We manage Facebook, Instagram, and other platforms based on your needs.",
      },
    ],
  },

  {
    id: 4,
    title: "Google Ads (PPC)",
    slug: "google-ads",
    shortDescription:
      "Get instant traffic and leads with Google Ads campaigns.",
    icon: FaSearch,

    overview:
      "Our Google Ads service helps you get instant visibility on search results and generate leads quickly. We create optimized campaigns that target high-intent keywords to bring the right customers to your business. We continuously monitor and optimize your campaigns to reduce cost and increase conversions. Our data-driven approach ensures maximum ROI from your advertising budget.",

    features: [
      "Keyword Research",
      "Campaign Setup",
      "Ad Optimization",
      "Conversion Tracking",
    ],

    benefits: ["Instant traffic", "High conversion rate", "Better ROI"],

    process: [
      "Keyword Research",
      "Campaign Setup",
      "Optimization",
      "Tracking",
      "Scaling",
    ],

    tools: ["Google Ads", "Google Analytics", "Tag Manager"],

    faqs: [
      {
        q: "How fast can I get results?",
        a: "Google Ads can generate traffic and leads almost immediately after launch.",
      },
    ],
  },
];

export default digitalMarketingServices;
