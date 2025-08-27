// src/routes/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router";
import useAuth from "../../hook/UseAuth";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth(); // user আছে কিনা চেক

  if (!user) {
    // যদি ইউজার লগইন না থাকে, লগিন পেজে পাঠাবে
    return <Navigate to="/login" replace />;
  }

  // যদি ইউজার আছে, তাহলে children render করবে
  return children;
};

export default PrivateRoute;
