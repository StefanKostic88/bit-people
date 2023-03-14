import React from "react";

import styled from "styled-components";
import UsersGridCard from "./UsersGridCard/UsersGridCard";

const GridContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  grid-gap: 2rem;
  margin: 2rem 0;
  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: repeat(2, auto);
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: repeat(1, auto);
  }
`;

const UsersGridLIst = ({ usersData }) => {
  return (
    <GridContainerStyled>
      {usersData.map((user, index) => (
        <UsersGridCard {...user} key={`${user.id}-${index}`} />
      ))}
    </GridContainerStyled>
  );
};

export default UsersGridLIst;
