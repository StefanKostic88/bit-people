import { useEffect, useState } from "react";

import {
  Error,
  UsersNumber,
  UsersList,
  UsersGridLIst,
  ContentWraper,
  CostumInput,
} from "../../components";

import { getUsersNum } from "../../assets/helpers/helperFunctions.js";

const HomePage = ({ onGridIsVisible, users }) => {
  const [filteredUsers, setFilteredUsers] = useState([...users]);
  const [maleUsers, setMaleUsers] = useState(0);
  const [femlaUsers, setFemaleUsers] = useState(0);

  const onChangehandler = (e) => {
    const convertToLower = e.target.value.toLowerCase();
    setFilteredUsers(() =>
      users.filter((user) =>
        user.userName.toLowerCase().startsWith(convertToLower)
      )
    );
  };

  useEffect(() => {
    setFilteredUsers(() => [...users]);
    setMaleUsers(() => getUsersNum(users, "male"));
    setFemaleUsers(() => getUsersNum(users, "female"));
  }, [users]);

  useEffect(() => {
    const maleUsersNum = getUsersNum(filteredUsers, "male");
    const femaleUsersNum = getUsersNum(filteredUsers, "female");
    setMaleUsers(() => maleUsersNum);
    setFemaleUsers(() => femaleUsersNum);
  }, [filteredUsers]);

  return (
    <ContentWraper>
      <CostumInput
        onChangehandler={onChangehandler}
        placeholder="Search users"
        type="text"
      />
      {filteredUsers.length === 0 ? null : (
        <UsersNumber maleUsers={maleUsers} femlaUsers={femlaUsers} />
      )}
      {!onGridIsVisible ? (
        filteredUsers.length === 0 ? (
          <Error />
        ) : (
          <UsersList usersData={filteredUsers} />
        )
      ) : filteredUsers.length === 0 ? (
        <Error />
      ) : (
        <UsersGridLIst usersData={filteredUsers} />
      )}
    </ContentWraper>
  );
};

export default HomePage;
