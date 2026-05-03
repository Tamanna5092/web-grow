import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";
import digitalMarketingServices from "../../utilities/digitalMarketing";

export default function DigitalMarketing() {
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
                {service.shortDescription}
              </p>
              <ul className="mt-4 space-y-2">
                {service.features.slice(0, 3).map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-(--text-color) gap-2"
                  >
                    <FaCheckCircle className="w-4 h-4 text-(--primary-color)" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={`/services/digital-marketing/service-details/${service.slug}`}
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
