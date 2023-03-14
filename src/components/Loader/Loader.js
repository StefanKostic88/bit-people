import React from "react";
import ContentWraper from "../ui/ContentWraper/ContentWraper";

import {
  LoaderOuterContainerStyled,
  LoaderContainerStyled,
  CubeOneStyled,
  CubeTwoStyled,
  CubeThreeStyled,
  CubeFourStyled,
  CubeFiveStyled,
  CubeSixStyled,
  CubeSevenStyled,
  CubeEightStyled,
  CubeNineStyled,
} from "./LoaderStyles";

const Loader = () => {
  return (
    <ContentWraper>
      <LoaderOuterContainerStyled>
        <LoaderContainerStyled>
          <CubeOneStyled />
          <CubeTwoStyled />
          <CubeThreeStyled />
          <CubeFourStyled />
          <CubeFiveStyled />
          <CubeSixStyled />
          <CubeSevenStyled />
          <CubeEightStyled />
          <CubeNineStyled />
        </LoaderContainerStyled>
      </LoaderOuterContainerStyled>
    </ContentWraper>
  );
};

export default Loader;
