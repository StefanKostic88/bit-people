import { useEffect, useState } from "react";
import ContentWraper from "../components/ContentWraper";
import UsersList from "../components/UsersList/UsersList";

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

const HomePage = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch("https://randomuser.me/api/?results=15");
    const data = await res.json();

    const usersArr = data.results.map((user) => {
      return {
        userName: `${user.name.first} ${user.name.last}`,
        img: user.picture.thumbnail,
        id: user.id.value,
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
    setUsers(() => [...usersArr]);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <ContentWraper>
      <div>
        Icone
        <input type="text" />
      </div>
      <div>
        <div>Male: 3 Female: 12</div>
      </div>
      <UsersList usersData={users} />
    </ContentWraper>
  );
};

export default HomePage;
