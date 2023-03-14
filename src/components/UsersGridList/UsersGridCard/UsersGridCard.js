import React from "react";
import styled from "styled-components";

const GridCardImageContainerStyled = styled.div`
  position: relative;
  width: 100%;
  img {
    object-fit: cover;
    width: 100%;
    display: block;
  }
  h3 {
    position: absolute;
    bottom: 0;
    left: 20px;
    color: #fff;
  }
`;

const GridCardStyled = styled.figure`
  box-shadow: 0 0 0 1px black;
  border-radius: 3px;
  min-width: 320px;
  margin: 0;
  cursor: pointer;
`;

const GridCardContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${(props) =>
    props.gender === "female" ? "#FFEBEE" : null};
`;

const UsersGridCard = ({ userName, email, birthDate, imgLarge, gender }) => {
  return (
    <GridCardStyled>
      <GridCardImageContainerStyled>
        <img src={imgLarge} alt={`User: ${userName}`} />
        <h3>{userName.split(" ")[0]}</h3>
      </GridCardImageContainerStyled>
      <GridCardContentStyled gender={gender}>
        <span>{email}</span>
        <span>Birth Date: {birthDate}</span>
      </GridCardContentStyled>
    </GridCardStyled>
  );
};

export default UsersGridCard;
