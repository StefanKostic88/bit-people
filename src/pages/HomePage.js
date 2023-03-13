import { useEffect, useState } from "react";
import ContentWraper from "../components/ContentWraper";
import UsersList from "../components/UsersList/UsersList";
import UsersGridLIst from "../components/UsersGridList/UsersGridLIst";

import { HiSearch } from "react-icons/hi";

const convertToStars = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += "*";
  }
  return newStr;
};

const hideEmail = (str1, str2, str3, cb) => {
  return str1 + cb(str2) + str3;
};

const HomePage = ({ onGridIsVisible }) => {
  const [users, setUsers] = useState([]);
  const [maleUsers, setMaleUsers] = useState(0);
  const [femlaUsers, setFemaleUsers] = useState(0);

  const getUsers = async () => {
    const res = await fetch("https://randomuser.me/api/?results=15");
    const data = await res.json();

    const usersArr = data.results.map((user) => {
      return {
        userName: `${user.name.first} ${user.name.last}`,
        img: user.picture.thumbnail,
        imgLarge: user.picture.large,
        id: user.id.value,
        gender: user.gender,
        email: hideEmail(
          user.email.slice(0, 3),
          user.email.slice(3, user.email.indexOf("@")),
          user.email.slice(user.email.indexOf("@")),
          convertToStars
        ),
        birthDate: new Date(user.dob.date)
          .toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .split("/")
          .join("."),
      };
    });

    const maleUsersNum = usersArr.reduce((acc, user) => {
      if (user.gender === "male") {
        return (acc += 1);
      } else {
        return (acc = acc);
      }
    }, 0);

    const fmaleUsersNum = usersArr.reduce((acc, user) => {
      if (user.gender === "female") {
        return (acc += 1);
      } else {
        return (acc = acc);
      }
    }, 0);

    setUsers(() => [...usersArr]);
    setMaleUsers(() => maleUsersNum);
    setFemaleUsers(() => fmaleUsersNum);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const onChangehandler = (e) => {
    const convertToLower = e.target.value.toLowerCase();

    const filteredUsers = users.filter((user) =>
      user.userName.toLowerCase().startsWith(convertToLower)
    );
    setUsers(() => [...filteredUsers]);
    const maleUsersNum = filteredUsers.reduce((acc, user) => {
      if (user.gender === "male") {
        return (acc += 1);
      } else {
        return (acc = acc);
      }
    }, 0);

    const fmaleUsersNum = filteredUsers.reduce((acc, user) => {
      if (user.gender === "female") {
        return (acc += 1);
      } else {
        return (acc = acc);
      }
    }, 0);
    setMaleUsers(() => maleUsersNum);
    setFemaleUsers(() => fmaleUsersNum);
  };

  return (
    <ContentWraper>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          margin: "15px 0 ",
        }}
      >
        <HiSearch style={{ width: "30px", height: "30px" }} />
        <input
          onChange={onChangehandler}
          type="text"
          style={{
            flex: 1,
            border: " none",
            borderBottom: "1px solid black",
            padding: "10px 0",
            outline: "none",
          }}
          placeholder="Serach Users"
        />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div>
          Male: {maleUsers} Female: {femlaUsers}
        </div>
      </div>

      {!onGridIsVisible ? (
        <UsersList usersData={users} />
      ) : (
        <UsersGridLIst usersData={users} />
      )}
    </ContentWraper>
  );
};

export default HomePage;
