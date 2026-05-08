import {
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { FaArrowRightLong, FaChartLine } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";

const digitalMarketingServices = [
  {
    id: 1,
    title: "Google Ads",
    slug: "google-ads",
    shortDescription:
      "Run high-converting Google Ads campaigns to drive traffic and sales.",
    icon: BsGoogle,

    overview:
      "Our Google Ads service helps businesses reach customers instantly through targeted search, display, and shopping campaigns. We optimize every campaign with proper keyword research, bidding strategies, and conversion tracking to maximize ROI and generate quality leads.",

    features: [
      "Keyword Research",
      "Search Campaigns",
      "Display Ads",
      "Conversion Tracking",
    ],

    benefits: [
      "Instant traffic",
      "High-quality leads",
      "Better return on investment",
    ],

    process: [
      "Research",
      "Campaign Setup",
      "Optimization",
      "Performance Tracking",
    ],

    tools: ["Google Ads", "Google Analytics", "Tag Manager"],

    faqs: [
      {
        q: "How quickly can Google Ads generate results?",
        a: "Google Ads can start generating traffic and leads immediately after campaign launch.",
      },
    ],
  },

  {
    id: 2,
    title: "YouTube Video Promotion",
    slug: "youtube-video-promotion",
    shortDescription: "Promote your videos and grow your audience on YouTube.",
    icon: BsYoutube,

    overview:
      "We help businesses and creators increase views, subscribers, and engagement through strategic YouTube video promotion. Our campaigns target the right audience to improve brand visibility and video performance effectively.",

    features: [
      "Audience Targeting",
      "Video Ad Campaigns",
      "Channel Growth",
      "Performance Analytics",
    ],

    benefits: [
      "More video views",
      "Increased subscribers",
      "Stronger brand awareness",
    ],

    process: [
      "Channel Analysis",
      "Target Research",
      "Campaign Launch",
      "Optimization",
    ],

    tools: ["YouTube Studio", "Google Ads", "TubeBuddy"],

    faqs: [
      {
        q: "Can you promote existing YouTube videos?",
        a: "Yes, we can promote both existing and newly uploaded videos.",
      },
    ],
  },

  {
    id: 3,
    title: "SEO Optimization",
    slug: "seo-optimization",
    shortDescription:
      "Improve search rankings and grow organic website traffic.",
    icon: FaChartLine,

    overview:
      "Our SEO Optimization service improves your website visibility on search engines through on-page SEO, technical SEO, and quality backlink strategies. We focus on increasing organic traffic and improving website performance for long-term business growth.",

    features: [
      "Keyword Research",
      "Technical SEO",
      "On-page Optimization",
      "Backlink Building",
    ],

    benefits: [
      "Higher rankings",
      "Organic traffic growth",
      "Improved website authority",
    ],

    process: [
      "Website Audit",
      "Keyword Planning",
      "Optimization",
      "Monthly Reporting",
    ],

    tools: ["Ahrefs", "SEMrush", "Google Search Console"],

    faqs: [
      {
        q: "How long does SEO take?",
        a: "SEO is a long-term strategy and usually takes a few months for noticeable results.",
      },
    ],
  },

  {
    id: 4,
    title: "Social Media Management",
    slug: "social-media-management",
    shortDescription:
      "Manage your social media platforms professionally and consistently.",
    icon: TfiLayoutMediaCenterAlt,

    overview:
      "We handle your social media presence by creating engaging content, scheduling posts, interacting with followers, and growing your audience. Our goal is to build a strong online brand presence and improve customer engagement.",

    features: [
      "Content Creation",
      "Post Scheduling",
      "Audience Engagement",
      "Page Management",
    ],

    benefits: [
      "Consistent online presence",
      "Better audience engagement",
      "Brand growth",
    ],

    process: [
      "Content Planning",
      "Design & Posting",
      "Engagement",
      "Analytics Review",
    ],

    tools: ["Meta Business Suite", "Canva", "Buffer"],

    faqs: [
      {
        q: "Which social media platforms do you manage?",
        a: "We manage Facebook, Instagram, LinkedIn, and other major platforms.",
      },
    ],
  },

  {
    id: 5,
    title: "Facebook Ads",
    slug: "facebook-ads",
    shortDescription:
      "Reach targeted audiences and increase sales with Facebook Ads.",
    icon: BsFacebook,

    overview:
      "Our Facebook Ads campaigns are designed to generate leads, increase sales, and boost brand awareness. We create engaging ad creatives and target the right audience to maximize campaign performance and ROI.",

    features: [
      "Audience Targeting",
      "Ad Creative Design",
      "Retargeting",
      "Campaign Optimization",
    ],

    benefits: ["More leads", "Higher engagement", "Cost-effective advertising"],

    process: ["Audience Research", "Campaign Setup", "Testing", "Scaling"],

    tools: ["Meta Ads Manager", "Facebook Pixel", "Google Analytics"],

    faqs: [
      {
        q: "Can Facebook Ads work for small businesses?",
        a: "Yes, Facebook Ads are highly effective for businesses of all sizes.",
      },
    ],
  },
  {
    id: 6,
    title: "Instagram Ads Campaign",
    slug: "instagram-ads-campaign",
    shortDescription:
      "Grow your brand and increase engagement with Instagram ads.",
    icon: BsInstagram,

    overview:
      "Our Instagram Ads Campaign service helps businesses reach the right audience through visually engaging and high-converting ads. We create strategic campaigns designed to increase followers, website traffic, leads, and sales. From content creation to audience targeting and campaign optimization, we manage everything to maximize your business growth on Instagram.",

    features: [
      "Story & Feed Ads",
      "Audience Targeting",
      "Creative Ad Design",
      "Campaign Optimization",
    ],

    benefits: [
      "Better brand visibility",
      "Higher audience engagement",
      "Increased sales and leads",
    ],

    process: [
      "Audience Research",
      "Ad Creative Design",
      "Campaign Launch",
      "Optimization",
      "Performance Reporting",
    ],

    tools: ["Meta Ads Manager", "Instagram Insights", "Canva"],

    faqs: [
      {
        q: "Can Instagram Ads help increase followers?",
        a: "Yes, Instagram Ads can effectively increase followers, engagement, and website traffic when properly targeted.",
      },
    ],
  },

  {
    id: 7,
    title: "TikTok Ads Campaign",
    slug: "tiktok-ads-campaign",
    shortDescription:
      "Promote your brand and reach millions with engaging TikTok ads.",
    icon: SiTiktok,

    overview:
      "Our TikTok Ads Campaign service helps businesses grow quickly through creative and high-performing video advertisements. We create engaging TikTok campaigns that attract attention, increase brand awareness, and drive conversions. From audience targeting to ad optimization, we manage the complete campaign strategy to ensure maximum performance and ROI.",

    features: [
      "Audience Targeting",
      "Video Ad Campaigns",
      "Creative Strategy",
      "Performance Optimization",
    ],

    benefits: [
      "Massive audience reach",
      "Higher engagement",
      "Increased brand awareness",
    ],

    process: [
      "Audience Research",
      "Campaign Setup",
      "Creative Development",
      "Optimization",
      "Performance Tracking",
    ],

    tools: ["TikTok Ads Manager", "Canva", "Google Analytics"],

    faqs: [
      {
        q: "Are TikTok Ads effective for small businesses?",
        a: "Yes, TikTok Ads are highly effective for reaching targeted audiences and growing brand visibility, even with smaller budgets.",
      },
    ],
  },

  {
    id: 8,
    title: "LinkedIn Marketing",
    slug: "linkedin-marketing",
    shortDescription:
      "Build professional connections and generate B2B leads on LinkedIn.",
    icon: BsLinkedin,

    overview:
      "Our LinkedIn Marketing service helps businesses grow professionally through targeted campaigns, content strategies, and lead generation. We focus on building brand authority and connecting with decision-makers in your industry.",

    features: [
      "Profile Optimization",
      "LinkedIn Ads",
      "Lead Generation",
      "Content Strategy",
    ],

    benefits: [
      "Professional brand image",
      "B2B lead generation",
      "Industry networking",
    ],

    process: [
      "Profile Review",
      "Audience Targeting",
      "Campaign Launch",
      "Performance Tracking",
    ],

    tools: ["LinkedIn Campaign Manager", "Sales Navigator", "Canva"],

    faqs: [
      {
        q: "Is LinkedIn marketing suitable for B2B businesses?",
        a: "Yes, LinkedIn is one of the best platforms for B2B marketing and lead generation.",
      },
    ],
  },
];

export default digitalMarketingServices;
