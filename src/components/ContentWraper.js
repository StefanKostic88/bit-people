import { useEffect, useState } from "react";

const ContentWraper = (props) => {
  const [mainNavHeight, setMainNavHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    setMainNavHeight(() => document.getElementById("main-nav").clientHeight);
    setFooterHeight(() => document.getElementById("footer").clientHeight);
  });

  return (
    <main
      style={{
        width: "1200px",
        margin: "0 auto",
        minHeight: `calc(97vh - ${mainNavHeight + footerHeight}px)`,
      }}
    >
      {props.children}
    </main>
  );
};
export default ContentWraper;
