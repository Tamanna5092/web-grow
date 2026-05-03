import { useParams } from "react-router";
import WebDevelopment from "../../utilities/webDevelopment";
import DigitalMarketing from "../../utilities/digitalMarketing";
import image from "../../assets/background.jpg";
import { FaChartLine, FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ServiceDetails() {
  const { category, slug } = useParams();
  console.log("category:", category, "slug:", slug);

  let services = [];

  if (category === "web-development") {
    services = WebDevelopment;
  } else if (category === "digital-marketing") {
    services = DigitalMarketing;
  }

  const service = services.find((item) => item.slug === slug);
  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <div className="max-w-7xl mx-auto my-20 px-4 md:px-0">
      <div>
        <img
          className="w-full md:h-100 object-cover"
          src={image}
          alt={service.title}
        />
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mt-6">{service.title}</h2>
        {service.overview?.length > 0 && (
          <p className=" mt-4 lora text-lg text-(--text-color)">
            {service.overview}
          </p>
        )}
        {service.features?.length > 0 && (
          <div>
            <p className="font-bold text-lg mt-4">Features:</p>
            <ul className="mt-4 space-y-2">
              {service.features?.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-(--text-color) gap-2"
                >
                  <FaCheckCircle className="w-4 h-4 text-(--primary-color)" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        {service.benefits?.length > 0 && (
          <div>
            <p className="font-bold text-lg mt-4">Benefits:</p>
            <ul className="mt-4 space-y-2">
              {service.benefits?.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-(--text-color) gap-2"
                >
                  <FaChartLine className="w-4 h-4 text-(--primary-color)" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        {service.process?.length > 0 && (
          <div>
            <p className="font-bold text-lg mt-4">Process:</p>
            <ul className="mt-4 space-y-2">
              {service.process?.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-(--text-color) gap-2"
                >
                  <FaArrowRightLong className="w-4 h-4 text-(--primary-color)" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        {service.tools?.length > 0 && (
          <div className="flex gap-2">
            <p className="font-bold text-lg mt-4">Tools & Technologies:</p>
            <p className=" mt-4 lora text-lg text-(--text-color)">
              {service.tools?.join(" , ")}
            </p>
          </div>
        )}
        <button className="btn-primary-custom mt-4">Get Started</button>
      </div>
    </div>
  );
}
