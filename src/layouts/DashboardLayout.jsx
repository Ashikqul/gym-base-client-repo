// src/layouts/DashboardLayout.jsx
import { Outlet, NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const DashboardLayout = () => {
  const { user, role, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-bold">
        Loading...
      </div>
    );
  }

  const linkClass = ({ isActive }) =>
    isActive ? "block bg-gray-700 p-2 rounded" : "block p-2";

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-3">
          <NavLink to="/dashboard/profile" className={linkClass}>
            👤 Profile
          </NavLink>

          {role === "admin" && (
            <>
              <NavLink to="/dashboard/manage-users" className={linkClass}>
                👥 Manage Users
              </NavLink>
              <NavLink to="/dashboard/reports" className={linkClass}>
                📊 Reports
              </NavLink>
            </>
          )}

          {role === "trainer" && (
            <>
              <NavLink to="/dashboard/my-classes" className={linkClass}>
                🏋️ My Classes
              </NavLink>
              <NavLink to="/dashboard/bookings" className={linkClass}>
                📅 Bookings
              </NavLink>
            </>
          )}

          {role === "member" && (
            <>
              <NavLink to="/dashboard/my-bookings" className={linkClass}>
                📅 My Bookings
              </NavLink>
              <NavLink to="/dashboard/payments" className={linkClass}>
                💳 Payments
              </NavLink>
            </>
          )}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
