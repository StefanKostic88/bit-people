import { useEffect, useState } from "react";
import { ContentWpraperStyled } from "../styles/UiStyles";

const ContentWraper = (props) => {
  const [mainNavHeight, setMainNavHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    setMainNavHeight(() => document.getElementById("main-nav").clientHeight);
    setFooterHeight(() => document.getElementById("footer").clientHeight);
  }, []);

  return (
    <ContentWpraperStyled {...{ mainNavHeight, footerHeight }}>
      {props.children}
    </ContentWpraperStyled>
  );
};
export default ContentWraper;
