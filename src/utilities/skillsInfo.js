import {
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsLayoutTextWindowReverse,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { FaChartLine, FaCode } from "react-icons/fa6";
import { Gi3dMeeple } from "react-icons/gi";
import { IoLogoDropbox } from "react-icons/io";
import { MdOutlineWeb, MdProductionQuantityLimits } from "react-icons/md";
import { SiAffinitydesigner } from "react-icons/si";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";

const skillsDetails = [
  {
    id: 1,
    title: "Google Ads",
    slug: "google-ads",
    icon: BsGoogle,
    description:
      "Google Ads helps businesses reach targeted customers through paid advertising campaigns.",
    howItWorks:
      "Google Ads works by displaying your ads to people who are searching for related products or services on Google. Businesses choose specific keywords, create ads, and set a budget for campaigns. When users search those keywords, Google may show your ads at the top of search results. We research high-performing keywords, create engaging ad copy, optimize audience targeting, and continuously monitor campaign performance to improve clicks, leads, and conversions. With Google Ads, you can reach potential customers instantly, increase website traffic, and generate quality leads and sales. It also allows you to track campaign performance easily and control your advertising budget effectively.",
    benefits: [
      "Reach targeted customers instantly",
      "Increase website traffic",
      "Generate quality leads and sales",
      "Improve brand awareness",
      "Track campaign performance easily",
      "Control advertising budget",
      "Boost local and global business growth",
    ],
    tools: [
      "Google Ads",
      "Keyword Planner",
      "Google Analytics",
      "Google Search Console",
    ],
  },
  {
    id: 2,
    title: "YouTube Video Promotion",
    slug: "youtube-video-promotion",
    icon: BsYoutube,
    description:
      "YouTube promotion helps videos reach more viewers and improve engagement.",
    howItWorks:
      "YouTube promotion works by optimizing videos so they appear in YouTube search results, suggested videos, and recommendations. We improve titles, descriptions, keywords, tags, thumbnails, hashtags, and audience targeting to help videos rank better. We also analyze competitors, optimize playlists, improve watch time strategies, and use audience engagement techniques such as likes, comments, and shares to grow the channel organically. YouTube promotion is used to increase views, grow subscribers, improve brand awareness, promote products or services, and build a strong online presence. It helps content creators and businesses reach a wider audience, increase engagement, and achieve their goals on the YouTube platform.",
    benefits: [
      "Increase video views",
      "Grow channel subscribers",
      "Improve audience engagement",
      "Boost watch time",
      "Reach targeted viewers",
      "Build strong online presence",
      "Increase brand awareness",
    ],
    tools: ["TubeBuddy", "VidIQ", "YouTube Studio", "Google Trends"],
  },
  {
    id: 3,
    title: "SEO Optimization",
    slug: "seo-optimization",
    icon: FaChartLine,
    description:
      "SEO optimization improves website rankings on Google and other search engines.",
    howItWorks:
      "SEO optimization works by improving various aspects of a website to make it more attractive to search engines. This includes optimizing on-page elements such as titles, meta descriptions, headers, and content with relevant keywords. We also focus on technical SEO by improving site speed, mobile-friendliness, and fixing any crawl errors. Off-page SEO strategies include building high-quality backlinks and improving domain authority. By implementing these techniques, we help websites rank higher in search engine results pages (SERPs), which increases organic traffic, improves visibility, and ultimately leads to more conversions and business growth.",
    benefits: [
      "Higher Google rankings",
      "Increase organic traffic",
      "Improve website visibility",
      "Generate long-term leads",
      "Build customer trust",
      "Better website performance",
      "Cost-effective marketing",
    ],
    tools: [
      "Ahrefs",
      "SEMrush",
      "Yoast SEO",
      "Google Search Console",
      "Google Analytics",
    ],
  },
  {
    id: 4,
    title: "Social Media Management",
    slug: "social-media-management",
    icon: TfiLayoutMediaCenterAlt,
    description:
      "Social media management helps businesses grow audience engagement and online presence.",
    howItWorks:
      "Social media management works by creating and implementing a strategic plan to manage a brand's presence on social media platforms. This includes content creation, scheduling posts, engaging with followers, monitoring analytics, and running paid advertising campaigns. We create high-quality content that resonates with the target audience, optimize posting times for maximum reach, and actively engage with followers to build a loyal community. Additionally, we analyze performance metrics to continuously improve strategies and ensure that the brand's social media presence effectively supports its overall marketing goals.",
    benefits: [
      "Better engagement",
      "Consistent branding",
      "Audience growth",
      "Improved communication",
      "Increased website traffic",
      "Higher conversion rates",
      "Cost-effective marketing",
    ],
    tools: ["Meta Business Suite", "Canva", "Buffer"],
  },
  {
    id: 5,
    title: "Facebook Ads",
    slug: "facebook-ads",
    icon: BsFacebook,
    description:
      "Facebook Ads help businesses target customers and increase conversions.",
    howItWorks:
      "Facebook Ads work by allowing businesses to create targeted advertising campaigns on the Facebook platform. We create engaging ad content, select specific audience demographics, and set a budget for the campaign. Facebook then displays the ads to users who match the selected criteria, such as age, location, interests, and behaviors. We continuously monitor and optimize the campaigns based on performance metrics to improve click-through rates, conversions, and return on investment (ROI). Facebook Ads are effective for increasing brand awareness, driving website traffic, generating leads, and boosting sales.",
    benefits: [
      "Increase brand awareness",
      "Generate leads",
      "Boost sales",
      "Reach target audience",
      "Track campaign performance",
      "Real-time analytics",
      "Improved targeting",
    ],
    tools: ["Meta Ads Manager", "Facebook Pixel"],
  },
  {
    id: 6,
    title: "Instagram Ads",
    slug: "instagram-ads",
    icon: BsInstagram,
    description:
      "Instagram Ads help brands grow through engaging visual marketing campaigns.",
    howItWorks:
      "Instagram Ads work by allowing businesses to create visually appealing advertisements that are displayed to users on the Instagram platform. We create engaging ad content, select specific audience demographics, and set a budget for the campaign. Instagram then shows the ads to users who match the selected criteria, such as age, location, interests, and behaviors. We continuously monitor and optimize the campaigns based on performance metrics to improve engagement rates, conversions, and return on investment (ROI). Instagram Ads are effective for increasing brand awareness, driving website traffic, generating leads, and boosting sales through visually compelling marketing strategies.",
    benefits: [
      "Increase brand awareness",
      "Generate leads",
      "Boost sales",
      "Reach target audience",
      "Track campaign performance",
      "Real-time analytics",
      "Improved targeting",
    ],
    tools: ["Meta Ads Manager", "Instagram Insights"],
  },
  {
    id: 7,
    title: "LinkedIn Marketing",
    slug: "linkedin-marketing",
    icon: BsLinkedin,
    description:
      "LinkedIn marketing helps professionals and businesses grow their network.",
    howItWorks:
      "LinkedIn marketing works by creating and sharing professional content, engaging with industry peers, and utilizing LinkedIn's advertising platform to reach a targeted audience. We optimize LinkedIn profiles, create valuable posts, and run targeted ad campaigns to increase visibility and generate leads. By building a strong presence on LinkedIn, businesses can connect with potential clients, partners, and industry influencers, ultimately driving growth and establishing authority in their field.",
    benefits: [
      "Expand professional network",
      "Generate B2B leads",
      "Increase visibility",
      "Expand connections",
    ],
    tools: ["LinkedIn Campaign Manager", "LinkedIn Analytics"],
  },
  {
    id: 8,
    title: "Web Development",
    slug: "web-development",
    icon: FaCode,
    description:
      "Web development focuses on building fast, responsive, and modern websites.",
    howItWorks:
      "Web development works by designing and coding websites that are visually appealing, user-friendly, and optimized for performance. We use modern technologies like React, JavaScript, and Tailwind CSS to create responsive layouts that look great on all devices. We also focus on improving loading speed, enhancing user experience, and implementing best practices for SEO. By building a strong online presence with a professional website, businesses can attract more visitors, increase engagement, and drive conversions effectively.",
    benefits: [
      "Modern and responsive design",
      "Fast loading speed",
      "Better user experience",
      "Professional online presence",
      "Improved SEO performance",
      "Increased engagement",
      "Higher conversion rates",
    ],
    tools: ["React", "JavaScript", "Tailwind CSS", "GitHub"],
  },
  {
    id: 9,
    title: "Web Design",
    slug: "web-design",
    icon: BsLayoutTextWindowReverse,
    description:
      "Web design creates attractive and user-friendly website interfaces.",
    howItWorks:
      "Web design works by combining creativity and technical skills to create visually appealing and functional website layouts. We focus on modern design principles, responsive layouts, and user experience to ensure that websites not only look great but also provide an intuitive and engaging experience for visitors. By using tools like Figma and Adobe XD, we create prototypes and design concepts that align with the brand's identity and goals. A well-designed website helps businesses attract and retain visitors, improve engagement, and ultimately drive conversions.",
    benefits: [
      "Attractive website design",
      "Improved user experience",
      "Responsive layouts",
      "Strong visual impact",
    ],
    tools: ["Figma", "Adobe XD"],
  },
  {
    id: 10,
    title: "Logo Design",
    slug: "logo-design",
    icon: IoLogoDropbox,
    description:
      "Logo design creates a unique identity for brands and businesses.",
    howItWorks:
      "Logo design works by understanding a brand’s identity, values, and target audience, then converting that concept into a simple and meaningful visual symbol. We start with research about the business, competitors, and industry style. After that, we create multiple sketch ideas and concepts based on creativity and brand message. Then we refine the best concept using design tools like Adobe Illustrator or Photoshop, focusing on color psychology, typography, and scalability. A strong logo must work in all sizes, from website icons to large banners. Finally, we deliver a professional logo that represents the brand identity, builds recognition, and creates a lasting impression on customers.",
    benefits: [
      "Unique brand identity",
      "Better brand recognition",
      "Professional image",
      "Improved customer trust",
      "Stronger market presence",
    ],
    tools: ["Illustrator", "Photoshop", "Canva", "Figma"],
  },
  {
    id: 11,
    title: "Banner Design",
    slug: "banner-design",
    icon: MdOutlineWeb,
    description:
      "Banner design helps businesses promote products and services visually.",
    howItWorks:
      "Banner design works by creating visually appealing graphics that effectively communicate a promotional message. We start by understanding the campaign goals, target audience, and key message. Then we create eye-catching designs using tools like Photoshop or Canva, focusing on strong visuals, clear typography, and compelling calls to action. We also optimize banner sizes for different platforms to ensure maximum visibility and engagement. A well-designed banner can attract attention, increase click-through rates, and drive traffic to websites or landing pages, ultimately boosting conversions and sales.",
    benefits: [
      "Attractive promotion",
      "Better engagement",
      "Professional visuals",
      "Improved marketing",
    ],
    tools: ["Photoshop", "Illustrator", "Canva"],
  },
  {
    id: 12,
    title: "3D Artwork",
    slug: "3d-artwork",
    icon: Gi3dMeeple,
    description:
      "3D artwork creates realistic and creative visual experiences for brands.",
    howItWorks:
      "3D artwork works by using specialized software to create three-dimensional models and scenes that can be rendered into high-quality images or animations. We start by understanding the client's vision and requirements, then we create detailed 3D models using tools like Blender or Cinema 4D. We focus on realistic textures, lighting, and composition to bring the artwork to life. 3D artwork can be used for product visualization, advertising, virtual reality experiences, and more. It helps businesses create engaging and memorable visual content that stands out in a competitive market.",
    benefits: [
      "Realistic visual experiences",
      "Creative branding",
      "Improved product visualization",
      "Enhanced advertising",
      "Unique marketing content",
    ],
    tools: ["Blender", "Cinema 4D", "3ds Max", "Substance Painter"],
  },
  {
    id: 13,
    title: "Flyer Design",
    slug: "flyer-design",
    icon: SiAffinitydesigner,
    description:
      "Flyer design helps businesses promote events and services effectively.",
    howItWorks:
      "Flyer design works by creating visually appealing and informative graphics that effectively communicate a promotional message. We start by understanding the campaign goals, target audience, and key message. Then we create eye-catching designs using tools like Photoshop or Canva, focusing on strong visuals, clear typography, and compelling calls to action. We also optimize flyer sizes for different distribution methods, whether it's print or digital. A well-designed flyer can attract attention, increase engagement, and drive traffic to websites or events, ultimately boosting conversions and sales.",
    benefits: [
      "Professional promotion",
      "Better audience reach",
      "Creative marketing",
      "Improved visibility",
      "Better engagement",
    ],
    tools: ["Illustrator", "Photoshop"],
  },
  {
    id: 14,
    title: "Poster Design",
    slug: "poster-design",
    icon: BsLayoutTextWindowReverse,
    description:
      "Poster design creates eye-catching promotional visuals for businesses and events.",
    howItWorks:
      "Poster design works by creating visually appealing graphics that effectively communicate a promotional message. We start by understanding the campaign goals, target audience, and key message. Then we create eye-catching designs using tools like Photoshop or Illustrator, focusing on strong visuals, clear typography, and compelling calls to action. We also optimize poster sizes for different display methods, whether it's print or digital. A well-designed poster can attract attention, increase engagement, and drive traffic to websites or events, ultimately boosting conversions and sales.",
    benefits: [
      "Strong visual impact",
      "Better promotion",
      "Creative branding",
      "Professional presentation",
      "Improved marketing",
    ],
    tools: ["Photoshop", "Illustrator"],
  },
  {
    id: 15,
    title: "Product Branding",
    slug: "product-branding",
    icon: MdProductionQuantityLimits,
    description:
      "Product branding helps products stand out with professional visual identity.",
    howItWorks:
      " Product branding works by creating a unique and consistent visual identity for a product that resonates with the target audience. We start by understanding the product's features, benefits, and target market. Then we develop a brand strategy that includes logo design, packaging design, color schemes, and overall aesthetics. We use tools like Illustrator and Photoshop to create professional designs that reflect the product's identity and values. Effective product branding helps build customer trust, improve market presence, and increase sales by making the product more attractive and memorable to consumers.",
    benefits: [
      "Unique product identity",
      "Improved market presence",
      "Better customer trust",
      "Increased sales",
      "Stronger brand recognition",
    ],
    tools: ["Illustrator", "Photoshop", "Canva", "Figma"],
  },
];

export default skillsDetails;
