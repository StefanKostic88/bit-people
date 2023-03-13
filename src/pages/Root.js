import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import { useState } from "react";

const Root = ({ setOnGridIsVisible }) => {
  return (
    <div>
      <MainNav onGridSet={setOnGridIsVisible} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
