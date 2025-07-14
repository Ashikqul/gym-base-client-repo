// src/pages/BookingPage.jsx
import React, { useState,  } from "react";
import { useParams, useLocation } from "react-router";
import Swal from "sweetalert2";

const Booking = () => {
  const { trainerId } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const slot = queryParams.get("slot");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBooking = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.phone) {
      Swal.fire({
        icon: "error",
        title: "Missing Info",
        text: "Please fill all required fields.",
      });
      return;
    }

    // Success
    Swal.fire({
      icon: "success",
      title: "Booking Confirmed!",
      text: `Trainer ID: ${trainerId}, Slot: ${slot}`,
    });

    // Clear form
    setFormData({ name: "", phone: "", note: "" });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-[#222224] rounded-lg shadow-md text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Book Trainer</h2>

      <div className="mb-4">
        <p><strong>Trainer ID:</strong> {trainerId}</p>
        <p><strong>Slot:</strong> {slot || "Not selected"}</p>
      </div>

      <form onSubmit={handleBooking} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded px-4 py-2 text-black"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full border border-gray-300 rounded px-4 py-2 text-black"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="note"
          placeholder="Any note (optional)"
          className="w-full border border-gray-300 rounded px-4 py-2 text-black"
          value={formData.note}
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;
