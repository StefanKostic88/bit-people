import { useEffect, useState } from "react";
import { FooterOuterStyled, FooterInnerStyled } from "../NavFooterStyles";

const Footer = ({ lastUpdate }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    setSeconds(() => 0);
    setMinutes(() => 0);
  }, [lastUpdate]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    if (seconds === 60) {
      setMinutes((prev) => prev + 1);
      setSeconds(() => 0);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [seconds]);

  return (
    <FooterOuterStyled id="footer">
      <FooterInnerStyled>
        <div>
          <h5>Copy 2023 Copyright Stefan Kostic BIT</h5>
        </div>
        <div>
          {lastUpdate && (
            <h5>
              Last Update:
              {minutes
                ? ` ${minutes} ${minutes <= 1 ? "minute" : "minutes"} ago`
                : ` ${seconds} ${seconds <= 1 ? "second" : "seconds"} ago`}
            </h5>
          )}
        </div>
      </FooterInnerStyled>
    </FooterOuterStyled>
  );
};

export default Footer;
