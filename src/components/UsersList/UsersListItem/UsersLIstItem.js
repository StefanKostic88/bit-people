import { HiEnvelope, HiCake } from "react-icons/hi2";
import styled from "styled-components";

const UsersLIstItemStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 0 0 1px #c7c7c7;
  padding: 10px 15px;
`;

const ListImageStyled = styled.img`
  border-radius: 50%;
`;

const LIstItemContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LIstContentItemStyled = styled.span`
  display: flex;
  align-items: center;
`;

const UsersListItem = ({ userName, email, birthDate, img }) => {
  return (
    <UsersLIstItemStyled>
      <div>
        <ListImageStyled src={img} alt={`User: ${userName}`} />
      </div>
      <LIstItemContentStyled>
        <LIstContentItemStyled> {userName}</LIstContentItemStyled>
        <LIstContentItemStyled>
          <HiEnvelope />
          email: {email}
        </LIstContentItemStyled>
        <LIstContentItemStyled>
          <HiCake />
          {birthDate}.
        </LIstContentItemStyled>
      </LIstItemContentStyled>
    </UsersLIstItemStyled>
  );
};

export default UsersListItem;
