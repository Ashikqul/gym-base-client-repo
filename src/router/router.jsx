import { createBrowserRouter } from "react-router"; // ✅ ঠিক করা হলো

import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import AllTrainers from "../pages/AllTrainers/AllTrainers";
import TrainerInfo from "../pages/TrainerInfo/TrainerInfo";
import Booking from "../pages/TrainerInfo/Booking";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import FeaturedClasses from "../pages/Home/FeaturedClasses/FeaturedClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/trainers",
        Component: AllTrainers,
      },
      {
        path: "/trainer/:trainerId",
        Component: TrainerInfo,
      },
      {
        path: "/booking/:trainerId", 
        Component: Booking,
      },
      {
        path: "/featured", 
        Component: FeaturedClasses,
      },
      {
        path: "/login", 
        Component: Login,
      },
      {
        path: "/register", 
        Component: Register,
      },
    ],
  },
]);
