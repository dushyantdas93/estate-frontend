import Home from "./routes/Home.jsx";
import { Layout, RequireAuth } from "./routes/Layout.jsx";
import ListPage from "./routes/ListPage.jsx";
import SinglePage from "./routes/SinglePage.jsx"; // Uncommented this line
import LoginPage from "./routes/Login.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./routes/ProfilePage.jsx";
import { useState } from "react";
import { Register } from "./routes/Register.jsx";
import ProfileUpdatePage from "./routes/profileUpdatePage.jsx";
import NewPostPage from "./routes/NewPostPage.jsx";

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
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
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
