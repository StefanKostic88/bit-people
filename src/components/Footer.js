import {
  FooterOuterStyled,
  FooterInnerStyled,
} from "../styles/NavFooterStyles";

const Footer = () => {
  return (
    <FooterOuterStyled id="footer">
      <FooterInnerStyled>
        <div>
          <h5>Copy 2023 Copyright Stefan Kostic BIT</h5>
        </div>
        <div>
          <h5>Last Update: 5 miuntes ago</h5>
        </div>
      </FooterInnerStyled>
    </FooterOuterStyled>
  );
};

export default Footer;
