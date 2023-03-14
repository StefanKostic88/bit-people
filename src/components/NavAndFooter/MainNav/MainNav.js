import {
  MainOuterNavStled,
  MainNavStyled,
  NavBarStyled,
  NavLInkStyled,
  LinkStyled,
  LogoStyled,
} from "../NavFooterStyles";

import { useLocation } from "react-router-dom";
import { MdViewModule, MdViewList, MdRefresh } from "react-icons/md";
import { useState } from "react";

const MainNav = ({ onGridSet, onRefresh }) => {
  const [gridIsVisible, setGridIsVisible] = useState(false);

  const path = useLocation();

  const onClickHandler = () => {
    onGridSet();
    setGridIsVisible((prev) => !prev);
  };

  const onRefreshHandler = () => {
    onRefresh();
  };

  return (
    <MainOuterNavStled id="main-nav">
      <MainNavStyled>
        <LogoStyled to="/">Bit People</LogoStyled>

        {path.pathname === "/about" ? null : (
          <NavBarStyled>
            <NavLInkStyled to="/about">About</NavLInkStyled>
            <LinkStyled onClick={onRefreshHandler}>
              <MdRefresh />
            </LinkStyled>
            <LinkStyled onClick={onClickHandler}>
              {gridIsVisible ? <MdViewList /> : <MdViewModule />}
            </LinkStyled>
          </NavBarStyled>
        )}
      </MainNavStyled>
    </MainOuterNavStled>
  );
};

export default MainNav;
