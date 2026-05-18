import {
  FaPaintBrush,
  FaPenNib,
  FaPalette,
  FaImage,
  FaCube,
  FaBoxOpen,
  FaAd,
} from "react-icons/fa";

const graphicDesignServices = [
  {
    id: 1,
    title: "Logo Design",
    slug: "logo-design",
    shortDescription:
      "Unique and memorable logo designs for your business and brand.",
    icon: FaPenNib,

    overview:
      "Our Logo Design service helps businesses build a strong and memorable brand identity through creative and professional logo designs. We focus on simplicity, uniqueness, and brand recognition.",

    features: [
      "Custom Logo Design",
      "Minimal & Modern Style",
      "Brand-Focused Concepts",
      "Multiple Revisions",
      "High-Resolution Files",
    ],

    benefits: [
      "Professional brand identity",
      "Improved brand recognition",
      "Unique visual presence",
    ],

    process: [
      "Research",
      "Concept Sketching",
      "Digital Design",
      "Feedback & Revisions",
      "Final Delivery",
    ],

    tools: ["Illustrator", "Photoshop", "Figma"],

    faqs: [
      {
        q: "Will I receive source files?",
        a: "Yes, we provide high-quality source files and export formats for your logo.",
      },
    ],
  },

  {
    id: 2,
    title: "Banner Design",
    slug: "banner-design",
    shortDescription:
      "Creative and eye-catching banner designs for promotions and branding.",
    icon: FaPaintBrush,

    overview:
      "Our Banner Design service creates visually attractive banners for websites, social media, advertisements, and marketing campaigns. We focus on impactful visuals and modern design trends.",

    features: [
      "Custom Banner Design",
      "Web & Social Media Banners",
      "High-Quality Graphics",
      "Creative Layouts",
      "Multiple Revisions",
    ],

    benefits: [
      "Better audience engagement",
      "Professional marketing visuals",
      "Improved online presence",
    ],

    process: [
      "Requirement Discussion",
      "Concept Creation",
      "Design Development",
      "Revisions",
      "Final Delivery",
    ],

    tools: ["Photoshop", "Illustrator", "Canva", "Figma"],

    faqs: [
      {
        q: "Can you create banners for social media ads?",
        a: "Yes, we design banners optimized for Facebook, Instagram, YouTube, and other platforms.",
      },
    ],
  },

  {
    id: 3,
    title: "3D Artwork",
    slug: "3d-artwork",
    shortDescription:
      "Modern and realistic 3D artwork designs for branding and marketing.",
    icon: FaCube,

    overview:
      "Our 3D Artwork service creates realistic and visually stunning 3D graphics for branding, advertisements, products, and creative projects. We focus on high-quality rendering and modern visual effects.",

    features: [
      "3D Modeling",
      "Realistic Rendering",
      "Product Visualization",
      "Creative 3D Concepts",
      "High-Resolution Output",
    ],

    benefits: [
      "Modern visual presentation",
      "More engaging marketing content",
      "Professional product showcase",
    ],

    process: [
      "Concept Discussion",
      "3D Modeling",
      "Texturing & Lighting",
      "Rendering",
      "Final Delivery",
    ],

    tools: ["Blender", "Cinema 4D", "Photoshop"],

    faqs: [
      {
        q: "Can you create realistic 3D product renders?",
        a: "Yes, we create realistic and high-quality 3D renders for products and branding.",
      },
    ],
  },

  {
    id: 4,
    title: "Flyer Design",
    slug: "flyer-design",
    shortDescription:
      "Professional flyer designs for events, promotions, and marketing.",
    icon: FaImage,

    overview:
      "Our Flyer Design service creates attractive and informative flyers that effectively promote your business, events, or campaigns. We focus on modern layouts and visually engaging content.",

    features: [
      "Custom Flyer Design",
      "Print & Digital Formats",
      "Creative Layouts",
      "High-Quality Graphics",
      "Multiple Revisions",
    ],

    benefits: [
      "Better promotional reach",
      "Professional marketing materials",
      "Improved audience attention",
    ],

    process: [
      "Content Planning",
      "Design Concept",
      "Visual Creation",
      "Revisions",
      "Final Delivery",
    ],

    tools: ["Photoshop", "Illustrator", "Canva", "Figma"],

    faqs: [
      {
        q: "Do you design flyers for events?",
        a: "Yes, we create flyers for events, businesses, promotions, and campaigns.",
      },
    ],
  },

  {
    id: 5,
    title: "Poster Design",
    slug: "poster-design",
    shortDescription:
      "Creative poster designs that attract attention and promote your brand.",
    icon: FaAd,

    overview:
      "Our Poster Design service creates visually striking posters for events, advertising, branding, and promotions. We combine creativity with modern design techniques to deliver impactful results.",

    features: [
      "Custom Poster Design",
      "Modern Typography",
      "Creative Visual Concepts",
      "High-Resolution Files",
      "Print-Ready Designs",
    ],

    benefits: [
      "Eye-catching marketing materials",
      "Better brand visibility",
      "Professional presentation",
    ],

    process: [
      "Requirement Discussion",
      "Concept Design",
      "Design Development",
      "Revisions",
      "Final Delivery",
    ],

    tools: ["Photoshop", "Illustrator", "Canva"],

    faqs: [
      {
        q: "Can you design promotional posters?",
        a: "Yes, we create posters for events, products, social media, and business promotions.",
      },
    ],
  },

  {
    id: 6,
    title: "Product Branding",
    slug: "product-branding",
    shortDescription:
      "Professional product branding solutions to make your products stand out.",
    icon: FaBoxOpen,

    overview:
      "Our Product Branding service helps businesses create a strong and professional identity for their products through packaging, labels, brand colors, and marketing visuals.",

    features: [
      "Packaging Design",
      "Label Design",
      "Brand Color Selection",
      "Marketing Visuals",
      "Custom Product Identity",
    ],

    benefits: [
      "Stronger product identity",
      "Improved customer trust",
      "Professional market appearance",
    ],

    process: [
      "Brand Research",
      "Concept Planning",
      "Design Creation",
      "Revisions",
      "Final Delivery",
    ],

    tools: ["Illustrator", "Photoshop", "Figma"],

    faqs: [
      {
        q: "Do you provide packaging mockups?",
        a: "Yes, we provide realistic packaging and branding mockups for products.",
      },
    ],
  },
];

export default graphicDesignServices;
