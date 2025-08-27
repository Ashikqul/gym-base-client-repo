import React from "react";

const Bookings = () => {
  // ড্যামি ডেটা: ট্রেইনারের বুকিং
  const bookings = [
    { id: 1, member: "John Doe", className: "Yoga Basics", date: "2025-08-28" },
    { id: 2, member: "Jane Smith", className: "HIIT Training", date: "2025-08-29" },
    { id: 3, member: "Bob Johnson", className: "Strength Training", date: "2025-08-30" },
  ];

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Bookings</h2>
      <table className="min-w-full bg-gray-50">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Member Name</th>
            <th className="py-2 px-4 border-b">Class</th>
            <th className="py-2 px-4 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{booking.member}</td>
              <td className="py-2 px-4 border-b">{booking.className}</td>
              <td className="py-2 px-4 border-b">{booking.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
