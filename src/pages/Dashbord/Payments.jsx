import React from "react";

const Payments = () => {
  // ড্যামি ডেটা: পেমেন্ট লিস্ট
  const payments = [
    { id: 1, amount: 50, method: "Credit Card", date: "2025-08-25", status: "Paid" },
    { id: 2, amount: 30, method: "PayPal", date: "2025-08-26", status: "Pending" },
    { id: 3, amount: 40, method: "Credit Card", date: "2025-08-27", status: "Paid" },
  ];

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">My Payments</h2>
      <table className="min-w-full bg-gray-50">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Amount ($)</th>
            <th className="py-2 px-4 border-b">Method</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{payment.amount}</td>
              <td className="py-2 px-4 border-b">{payment.method}</td>
              <td className="py-2 px-4 border-b">{payment.date}</td>
              <td className={`py-2 px-4 border-b font-semibold ${payment.status === "Paid" ? "text-green-600" : "text-red-600"}`}>
                {payment.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
