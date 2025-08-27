
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      {user ? (
        <div className="flex items-center gap-4">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-24 h-24 rounded-full border-2 border-green-500"
          />
          <div>
            <p><strong>Name:</strong> {user.displayName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default Profile;
