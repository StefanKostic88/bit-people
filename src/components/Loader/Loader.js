import React from "react";
import ContentWraper from "../ContentWraper";

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
} from "../../styles/LoaderStyles";

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
