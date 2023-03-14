import { Outlet } from "react-router-dom";

import { MainNav, Footer } from "../../components";

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
