import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/Home/Home";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import WebDevelopment from "../components/WebDevelopment/WebDevelopment";
import DigitalMarketing from "../components/DigitalMarketing/DigitalMarketing";
import GraphicDesign from "../components/GraphicDesign/GraphicDesign";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import TeamMemberDetails from "../pages/TeamMemberDetails/TeamMemberDetails";
import Portfolio from "../pages/Portfolio/Portfolio";
import SkillsInfo from "../pages/SkillsInfo/SkillsInfo";

const Route = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "skills", Component: Skills },
      { path: "skills/:slug", Component: SkillsInfo },
      {
        path: "services",
        Component: Services,
        children: [
          { path: "web-development", Component: WebDevelopment },
          { path: "digital-marketing", Component: DigitalMarketing },
          { path: "graphic-design", Component: GraphicDesign },
          { path: ":category/:slug", Component: ServiceDetails },
        ],
      },
      { path: "portfolio", Component: Portfolio },
      { path: "contact", Component: Contact },
      { path: "team-member/:slug", Component: TeamMemberDetails },
    ],
  },
]);
export default Route;
