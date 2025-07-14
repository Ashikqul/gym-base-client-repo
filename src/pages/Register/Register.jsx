import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router";
import Swal from "sweetalert2";
import { FcGoogle, FcBusinessman, FcFeedback, FcPortraitMode, FcKey } from "react-icons/fc";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    if (password.length < 6) {
      return setError("🔒 Password must be at least 6 characters.");
    }

    try {
      setLoading(true);
      const userCredential = await createUser(email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL || null,
      });

      const saveUser = {
        uid: user.uid,
        name,
        email,
        photoURL: photoURL || null,
        role: "member",
      };

      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(saveUser),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to save user.");
      }

      Swal.fire("🎉 Registered!", "Account created successfully", "success");
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError(err.message);
      Swal.fire("❌ Error", err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await googleSignIn();
      const user = result.user;

      const saveUser = {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL || null,
        role: "member",
      };

      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(saveUser),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to save user.");
      }

      Swal.fire("✅ Logged in with Google!", "", "success");
      navigate("/");
    } catch (err) {
      Swal.fire("❌ Google Login Failed", err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left: Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name */}
            <div className="relative">
              <FcBusinessman className="absolute left-3 top-1/2 transform -translate-y-1/2" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FcFeedback className="absolute left-3 top-1/2 transform -translate-y-1/2" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Photo URL */}
            <div className="relative">
              <FcPortraitMode className="absolute left-3 top-1/2 transform -translate-y-1/2" size={20} />
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL (optional)"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FcKey className="absolute left-3 top-1/2 transform -translate-y-1/2" size={20} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 transition"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="my-4 text-center">
            <p className="text-gray-500">OR</p>
          </div>

          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded hover:bg-gray-100 transition"
          >
            <FcGoogle size={24} />
            <span>Continue with Google</span>
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Login here
            </Link>
          </p>

          {error && <p className="text-red-500 text-center mt-3">{error}</p>}
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 hidden md:block">
          <img
            src="https://quanticalabs.com/wp_themes/gymbase/files/2020/03/image_05-320x320.jpg"
            alt="Register"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
