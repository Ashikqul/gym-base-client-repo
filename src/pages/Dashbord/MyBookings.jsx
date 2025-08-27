import React from "react";

const MyBookings = () => {
  // ড্যামি ডেটা: মেম্বারের বুকিং
  const myBookings = [
    { id: 1, trainer: "Alice Johnson", className: "Pilates", date: "2025-08-28" },
    { id: 2, trainer: "Michael Brown", className: "HIIT Training", date: "2025-08-29" },
    { id: 3, trainer: "Sara Lee", className: "Yoga Advanced", date: "2025-08-30" },
  ];

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      <table className="min-w-full bg-gray-50">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Trainer Name</th>
            <th className="py-2 px-4 border-b">Class</th>
            <th className="py-2 px-4 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {myBookings.map((booking) => (
            <tr key={booking.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{booking.trainer}</td>
              <td className="py-2 px-4 border-b">{booking.className}</td>
              <td className="py-2 px-4 border-b">{booking.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
