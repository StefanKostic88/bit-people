import React from "react";
import { HiOutlineFaceFrown } from "react-icons/hi2";
import { ErrorContainerStyled, ErrorHeadingStyled } from "./ErrorStyles";

const Error = () => {
  return (
    <ErrorContainerStyled>
      <div>
        <HiOutlineFaceFrown style={{ width: "75px", height: "75px" }} />
      </div>
      <ErrorHeadingStyled>
        We couldn't find any people matching your search
      </ErrorHeadingStyled>
    </ErrorContainerStyled>
  );
};

export default Error;
