import React, { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2"; // যদি দরকার হয়, না থাকলেও চলে

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill in both fields.",
        width: "70vw",
        customClass: { popup: "my-swal-popup" },
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please enter a valid email.",
        width: "70vw",
        customClass: { popup: "my-swal-popup" },
      });
      return;
    }

    setLoading(true);

    try {
      // এখানে তোমার API কল বা ডেটা সাবমিট কোড যাবে
      // উদাহরণ স্বরূপ শুধু delay দিয়ে success দেখাচ্ছি
      await new Promise((res) => setTimeout(res, 1000));

      Swal.fire({
        icon: "success",
        title: "Subscribed!",
        text: `Thank you, ${name}, for subscribing.`,
        width: "70vw",
        customClass: { popup: "my-swal-popup" },
      });

      setName("");
      setEmail("");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Subscription failed. Please try again.",
        width: "70vw",
        customClass: { popup: "my-swal-popup" },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-[#28282A] rounded shadow-md mt-10 text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#59B42D] text-white py-2 rounded hover:bg-black transition"
        >
          {loading ? "Subscribing..." : "Subscribe Now"}
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
