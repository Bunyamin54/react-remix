import { Outlet } from "react-router-dom";
import About from "../components/About";
import Courses from "../components/Courses";

const Home = () => {
  return (
    <div className="p-3">
      {/* <About />
      <Courses /> */}

       {/* nested route yapisinda kullandiigmiz child componentleri outlet component ile sergilliyoruz  */}
      <Outlet/>
    </div>
  );
};

export default Home;
