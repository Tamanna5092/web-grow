import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <div className="max-w-7xl mx-auto">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
