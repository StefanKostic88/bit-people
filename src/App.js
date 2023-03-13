import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";

import { theme } from "./Theme";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

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

function App() {
  const [gridIsVisible, setGridIsVisible] = useState(false);
  const [users, setUsers] = useState([]);

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

    setUsers(() => [...usersArr]);
  };

  const setGrid = () => {
    setGridIsVisible((prev) => !prev);
  };

  const refreshHandler = () => {
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root setOnGridIsVisible={setGrid} onRefresh={refreshHandler} />,
      children: [
        {
          path: "/",
          element: <HomePage onGridIsVisible={gridIsVisible} users={users} />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
