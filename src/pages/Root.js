import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

const Root = ({ setOnGridIsVisible, onRefresh, lastUpdate }) => {
  return (
    <>
      <MainNav onGridSet={setOnGridIsVisible} onRefresh={onRefresh} />
      <Outlet />
      <Footer lastUpdate={lastUpdate} />
    </>
  );
};

export default Root;
