import Layout from "../layout/Layout";
import FollowerPage from "../pages/FollowerPage";
import FollowingPage from "../pages/FollowingPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "follower", element: <FollowerPage /> },
      { path: "following", element: <FollowingPage /> },
      { path: "profile/:profileId", element: <ProfilePage /> },
    ],
  },
]);

export default function Route() {
    return <RouterProvider router={router}/>
}
