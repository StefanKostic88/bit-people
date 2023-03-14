import UsersListItem from "./UsersListItem/UsersLIstItem";
import styled from "styled-components";

const UsersLIstStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 2rem 0;
`;

const UsersList = ({ usersData }) => {
  return (
    <UsersLIstStyled>
      {usersData.map((user, index) => (
        <UsersListItem {...user} key={`${user.id}-${index}`} />
      ))}
    </UsersLIstStyled>
  );
};

export default UsersList;
