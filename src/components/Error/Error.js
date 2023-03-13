import React from "react";
import ContentWraper from "../ContentWraper";
import { HiOutlineFaceFrown } from "react-icons/hi2";

const Error = () => {
  return (
    <ContentWraper>
      <div
        style={{
          width: "50%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // paddingTop: "150px",
          // alignSelf: "flex-start",
        }}
      >
        <div>
          <HiOutlineFaceFrown style={{ width: "75px", height: "75px" }} />
        </div>
        <h1 style={{ textAlign: "center" }}>
          We couldn't find any people matching your search
        </h1>
      </div>
    </ContentWraper>
  );
};

export default Error;
