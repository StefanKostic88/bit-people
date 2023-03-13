import { HiEnvelope, HiCake } from "react-icons/hi2";
import styled from "styled-components";

const UsersLIstItemStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 0 0 1px #e0e0e0;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.gender === "female" ? "#FFEBEE" : null};
  margin-bottom: 2px;
  cursor: pointer;
  transition: all 200ms;
  &:hover {
    box-shadow: 0 0 25px 1px #686868;
    transform: scaleY(1.05);
    margin: 5px 0;
  }
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
  gap: 7px;
`;

const UsersListItem = ({ userName, email, birthDate, img, gender }) => {
  console.log(gender);
  return (
    <UsersLIstItemStyled gender={gender}>
      <div>
        <ListImageStyled src={img} alt={`User: ${userName}`} />
      </div>
      <LIstItemContentStyled>
        <LIstContentItemStyled> {userName}</LIstContentItemStyled>
        <LIstContentItemStyled>
          <HiEnvelope />
          Email: {email}
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
