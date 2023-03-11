import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <MainNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
