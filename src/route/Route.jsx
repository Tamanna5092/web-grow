import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/Home/Home";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Services from "../pages/Services/Services";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import WebDevelopment from "../components/WebDevelopment/WebDevelopment";
import DigitalMarketing from "../components/DigitalMarketing/DigitalMarketing";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";

const Route = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "skills", Component: Skills },
      {
        path: "services",
        Component: Services,
        children: [
          { path: "web-development", Component: WebDevelopment },
          { path: "digital-marketing", Component: DigitalMarketing },
          { path: ":category/service-details/:slug", Component: ServiceDetails },
        ],
      },
      { path: "projects", Component: Projects },
      { path: "contact", Component: Contact },
    ],
  },
]);
export default Route;
