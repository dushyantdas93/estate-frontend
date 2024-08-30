import Home from "./routes/Home.jsx";
import Layout from "./routes/Layout.jsx";
import ListPage from "./routes/ListPage.jsx";
import SinglePage from "./routes/SinglePage.jsx"; // Uncommented this line
import LoginPage from "./routes/Login.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./routes/ProfilePage.jsx";
import { useState } from "react";
import RegisterPage from "./routes/RegisterPage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
