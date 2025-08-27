import React from "react";

const MyClasses = () => {
  // ড্যামি ডেটা: ট্রেইনারের ক্লাস সমূহ
  const classes = [
    { id: 1, name: "Yoga Basics", schedule: "Mon, Wed, Fri - 7:00 AM" },
    { id: 2, name: "HIIT Training", schedule: "Tue, Thu - 6:00 PM" },
    { id: 3, name: "Strength Training", schedule: "Sat - 10:00 AM" },
  ];

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">My Classes</h2>
      <table className="min-w-full bg-gray-50">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Class Name</th>
            <th className="py-2 px-4 border-b">Schedule</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls) => (
            <tr key={cls.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{cls.name}</td>
              <td className="py-2 px-4 border-b">{cls.schedule}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
