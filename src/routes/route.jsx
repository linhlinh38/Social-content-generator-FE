/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import Loadable from "./loadable";
import MainLayout from "../layout/MainLayout";
const Post = Loadable({
  loader: () => import("../pages/post"),
});
const Scratch = Loadable({
  loader: () => import("../pages/scratch"),
});
const Inspired = Loadable({
  loader: () => import("../pages/inspire"),
});
const Login = Loadable({
  loader: () => import("../pages/auth/login"),
});
const Service = Loadable({
  loader: () => import("../pages/services"),
});
const Profile = Loadable({
  loader: () => import("../pages/profile"),
});
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/services',
        element: Service,
      },
      {
        path: "/profile",
        element: Profile,
      },
      {
        path: "/scratch",
        element: Scratch,
      },
      {
        path: "/scratch/:id",
        element: Post,
      },
      {
        path: "/inspire",
        element: Inspired,
      },
      {
        index: true,
        element: Login,
      },
    ],
  },

  //   {
  //     path: "403",
  //     element: Unauthorized,
  //   },

  {
    path: "/*",
    element: <div>Not Found</div>,
  },
]);
