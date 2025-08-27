import { createBrowserRouter } from "react-router";

import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import AllTrainers from "../pages/AllTrainers/AllTrainers";
import TrainerInfo from "../pages/TrainerInfo/TrainerInfo";
import Booking from "../pages/TrainerInfo/Booking";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import FeaturedClasses from "../pages/Home/FeaturedClasses/FeaturedClasses";

import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./routes/PrivateRoute";

// Dashboard Pages
import Profile from "../pages/Dashbord/Profile";
import ManageUsers from "../pages/Dashbord/ManageUsers";
import Payments from "../pages/Dashbord/Payments";
import MyBookings from "../pages/Dashbord/MyBookings";
import Bookings from "../pages/Dashbord/Bookings";
import MyClasses from "../pages/Dashbord/MyClasses";
import Reports from "../pages/Dashbord/Reports";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/trainers", Component: AllTrainers },
      { path: "/trainer/:trainerId", Component: TrainerInfo },
      { path: "/booking/:trainerId", Component: Booking },
      { path: "/featured", Component: FeaturedClasses },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "profile", Component: Profile }, // সব ইউজারের জন্য
      { path: "manage-users", Component: ManageUsers }, // Admin
      { path: "reports", Component: Reports }, // Admin
      { path: "my-classes", Component: MyClasses }, // Trainer
      { path: "bookings", Component: Bookings }, // Trainer
      { path: "my-bookings", Component: MyBookings }, // Member
      { path: "payments", Component: Payments }, // Member
    ],
  },
]);
