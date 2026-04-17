import React, { useState } from "react";
import faqimg from "../../assets/FAQ.avif";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((prevActive) => (prevActive === index ? null : index));
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide web development, SEO optimization, and digital marketing services to help your business grow online.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "It usually takes 3–7 days depending on the complexity and requirements of the project.",
    },
    {
      question: "Do you provide SEO services?",
      answer:
        "Yes, we offer both on-page and off-page SEO to improve your website ranking and traffic.",
    },
    {
      question: "What is your pricing?",
      answer:
        "Our pricing depends on the project scope. Contact us to get a custom quote based on your needs.",
    },
  ];

  return (
    <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0">
      <div>
        <div>
          <p className="lora bg-(--primary-color) text-white py-2 px-6 rounded-full w-fit">
            FAQ
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mt-4">
            Direct Answers to Significant Questions
          </h2>
          <p className="mt-4 lora text-lg text-(--text-color)">
            Here are some of our FAQs. If you have any other quesitons you'd
            like answered please feel free to email us.
          </p>
        </div>
        <div className="mt-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-300 py-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center space-y-3 font-medium cursor-pointer"
              >
                <span className="text-xl font-bold">{faq.question}</span>
                <span>{activeIndex === index ? <FaMinus /> : <FaPlus />}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-1000 ${
                  activeIndex === index ? "mt-2" : "max-h-0"
                }`}
              >
                <p className="lora text-lg text-(--text-color)">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img className="w-full h-full" src={faqimg} alt="FAQ" />
      </div>
    </div>
  );
}
