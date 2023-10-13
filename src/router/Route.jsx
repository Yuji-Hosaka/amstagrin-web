import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import FollowerPage from "../pages/FollowerPage";
import FollowingPage from "../pages/FollowingPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import Authenticated from "../features/auth/Authenticated";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Authenticated>
        <Layout />,
      </Authenticated>
    ),

    children: [
      { path: "", element: <HomePage /> },
      { path: "follower", element: <FollowerPage /> },
      { path: "following", element: <FollowingPage /> },
      { path: "profile/:profileId", element: <ProfilePage /> },
    ],
  },
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />,
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: '/register',
    element: (
      <RegisterPage/>
    )
  }
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
