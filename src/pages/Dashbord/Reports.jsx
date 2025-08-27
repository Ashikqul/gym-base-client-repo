import React from "react";

const Reports = () => {
  // এখানে ড্যামি ডেটা ব্যবহার করা হয়েছে
  const reports = [
    { id: 1, title: "Monthly Revenue", value: "$5000" },
    { id: 2, title: "New Members", value: "25" },
    { id: 3, title: "Trainer Bookings", value: "40" },
  ];

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reports.map((report) => (
          <div key={report.id} className="p-4 bg-gray-100 rounded shadow">
            <h3 className="text-lg font-semibold">{report.title}</h3>
            <p className="text-2xl font-bold mt-2">{report.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
