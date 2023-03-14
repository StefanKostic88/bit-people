import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";

import { theme } from "./Theme";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Loader from "./components/Loader/Loader";
import UserDisplayPage from "./pages/UserDisplayPage";

import { hideEmail, generateData } from "./assets/helpers/helperFunctions.js";

function App() {
  const [gridIsVisible, setGridIsVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [timer, setTimer] = useState(false);

  const getUsers = async () => {
    const res = await fetch("https://randomuser.me/api/?results=15");
    const data = await res.json();
    const usersArr = data.results.map((user) => generateData(user, hideEmail));
    setIsloading(() => false);
    setUsers(() => [...usersArr]);
    setTimer(() => true);
  };

  const setGrid = () => {
    setGridIsVisible((prev) => !prev);
  };

  const refreshHandler = () => {
    setIsloading(() => true);
    setTimer(() => false);
    setTimeout(() => {
      getUsers();
      setTimeout(() => {
        setIsloading(() => false);
        setTimer(() => true);
      }, 500);
    }, 1000);
  };

  useEffect(() => {
    setIsloading(() => true);
    getUsers();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Root
          setOnGridIsVisible={setGrid}
          onRefresh={refreshHandler}
          lastUpdate={timer}
        />
      ),
      children: [
        {
          path: "/",
          element: isLoading ? (
            <Loader />
          ) : (
            <HomePage onGridIsVisible={gridIsVisible} users={users} />
          ),
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        { path: "/users/:user", element: <UserDisplayPage /> },
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
