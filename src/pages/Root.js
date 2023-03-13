import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

const Root = ({ setOnGridIsVisible, onRefresh }) => {
  return (
    <div>
      <MainNav onGridSet={setOnGridIsVisible} onRefresh={onRefresh} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
