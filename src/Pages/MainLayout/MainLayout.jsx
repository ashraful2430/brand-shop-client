import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <div className="font-sans">
        <Header></Header>
      </div>
      <div className="font-sans">
        <Outlet></Outlet>
      </div>
      <div className="font-sans">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
