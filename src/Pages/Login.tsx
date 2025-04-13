import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/hero_background.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profile");
    } catch (err: any) {
      setError("Failed to log in. Please check your credentials.");
    }
  };

  return (
    <div className="hero-section flex flex-col md:flex-row">
      {/* Form container */}
      <div className="form-container flex-1 flex justify-center items-center p-6 bg-white">
        <div className="max-w-md w-full mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
          <h2 className="text-2xl font-bold mb-4">Log In</h2>
          {error && <p className="text-red-500 mb-1">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white p-2 rounded cursor-pointer"
            >
              Log In
            </button>
          </form>

          {/* Redirect to Signup page */}
          <p className="mt-4 text-sm">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>

      {/* Background Image Container */}
      {/* <div
        className="image-container hidden md:block flex-1 bg-cover bg-left relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> */}
      {/* </div> */}
    </div>
  );
}
