import { useState } from "react";
import { Link } from "react-router-dom";

const MainNav = ({ onGridSet }) => {
  const onClickHandler = () => {
    onGridSet();
  };

  return (
    <div
      style={{
        backgroundColor: "#EE6E73",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <div>Logo</div>
      <ul style={{ display: "flex", listStyle: "none", gap: "25px" }}>
        <Link to="/about">About</Link>
        <li>Reload</li>
        <li onClick={onClickHandler}>Grid</li>
      </ul>
    </div>
  );
};

export default MainNav;
