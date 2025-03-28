import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spline from "@splinetool/react-spline";

function Login() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        toast.success("Login successful!");
        navigate("/users");
      } else {
        setError(data.error || "Invalid email or password.");
      }
    } catch (err) {
      console.log("error", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Spline scene="https://prod.spline.design/jKQr23AhzVaJLzbi/scene.splinecode" />
      </div>

      {/* Overlay to enhance readability */}
      <div className="absolute inset-0 bg-black opacity-10 -z-10"></div>

      {/* Login Form (Removed blur effect) */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 transition transform hover:scale-105 relative z-10">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">Login</h2>
        <div className="w-24 h-1 bg-blue-700 mx-auto mb-5 rounded-full"></div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              autoFocus
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
            <div className="text-right mt-2">
              <button
                type="button"
                className="text-blue-600 hover:underline text-sm"
                onClick={() => toast.info("Forgot Password? Feature coming soon!")}
              >
                Forgot Password?
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <span className="animate-spin border-4 border-white border-t-transparent rounded-full w-5 h-5"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
