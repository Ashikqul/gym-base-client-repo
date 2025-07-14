import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setLoading(true);
    signIn(email, password)
      .then(() => {
        Swal.fire("Success!", "Logged in successfully", "success");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || "Invalid email or password");
        Swal.fire("Failed!", err.message || "Invalid email or password", "error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    googleSignIn()
      .then(() => {
        Swal.fire("Success!", "Logged in with Google", "success");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Failed!", err.message, "error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login to GymBase</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 mt-1 border rounded focus:outline-none focus:ring focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 mt-1 border rounded focus:outline-none focus:ring focus:border-green-500"
            />
          </div>
          

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 font-semibold text-white ${loading ? "bg-gray-400" : "bg-green-600"} rounded hover:bg-green-700 transition`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="flex items-center justify-center gap-2">
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 text-gray-800 border rounded hover:bg-gray-200 transition"
          >
            <FcGoogle className="text-xl" />
            <span>Google Sign In</span>
          </button>
        </div>

        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-600 hover:underline">
            Register now
          </Link>
        </p>

        {error && <p className="text-sm text-red-500 text-center">{error}</p>}
      </div>
        <div className="w-full md:w-1/2 hidden md:block">
          <img
            src="https://quanticalabs.com/wp_themes/gymbase/files/2020/03/image_04-320x320.jpg"
            alt="Login"
            className="h-full w-full object-cover"
          />
        </div>
    </div>
  );
};

export default Login;
