import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/Home/Home";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Services from "../pages/Services/Services";
import Projects from "../pages/Projects/Projects";
import Career from "../pages/Career/Career";
import Contact from "../pages/Contact/Contact";

const Route = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "skills", Component: Skills },
      { path: "services", Component: Services },
      { path: "projects", Component: Projects },
      { path: "career", Component: Career },
      { path: "contact", Component: Contact },
    ],
  },
]);
export default Route;
