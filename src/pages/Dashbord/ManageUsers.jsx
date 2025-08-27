import React from "react";

const ManageUsers = () => {
  // এখানে ভবিষ্যতে user list fetch করা যাবে
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "member" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "trainer" },
    { id: 3, name: "Admin User", email: "admin@example.com", role: "admin" },
  ];

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <table className="min-w-full bg-gray-100 rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="py-2 px-4">{user.id}</td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
