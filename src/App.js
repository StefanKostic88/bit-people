import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App(props) {
  console.log(props);

  const [gridIsVisible, setGridIsVisible] = useState(false);
  const setGrid = (val) => {
    setGridIsVisible((prev) => !prev);
    console.log("signal");
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root setOnGridIsVisible={setGrid} />,
      children: [
        { path: "/", element: <HomePage onGridIsVisible={gridIsVisible} /> },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
