import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px 0;
`;

export const InputStyled = styled.input`
  flex: 1;
  border: none;
  border-bottom: 1px solid black;
  padding: 10px 0;
  outline: none;
  font-size: 18px;
  &:focus {
    border-bottom: none;
  }
`;

export const ContentWpraperStyled = styled.main`
  max-width: ${({ theme }) => theme.containerWidth};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: calc(
    100vh - ${(props) => props.mainNavHeight + props.footerHeight}px
  );
  @media (max-width: 1225px) {
    width: 90%;
  }
`;
