import styled from "styled-components";
import { Link } from "react-router-dom";

const OuterStyledDiv = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.textColorPrimary};
  background-color: ${({ theme }) => theme.backgroundPrimary};
`;

const InnerStyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${({ theme }) => theme.containerWidth};
  padding: ${({ theme }) => theme.sectionPadding};
`;

export const MainOuterNavStled = styled(OuterStyledDiv)`
  min-height: 78px;
`;
export const MainNavStyled = styled(InnerStyledDiv)``;

export const FooterOuterStyled = styled.footer`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.textColorPrimary};
  background-color: ${({ theme }) => theme.backgroundPrimary};
  padding: 1rem 0;
`;

export const FooterInnerStyled = styled(InnerStyledDiv)`
  h5 {
    font-weight: 500;
  }
`;

export const NavBarStyled = styled.ul`
  display: flex;
  list-style: none;
  gap: 25px;
`;

export const NavLInkStyled = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

export const LinkStyled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const LogoStyled = styled(Link)`
  font-weight: 400;
  font-size: 32px;
  color: inherit;
  text-decoration: none;
`;
