import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/hero_background.jpg";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        userName: userName,
      });
      navigate("/profile");
    } catch (err: any) {
      setError("Failed to create an account. Please try again.");
    }
  };

  return (
    <div className="hero-section flex flex-col md:flex-row">
      {/* Form container */}
      <div className="form-container flex-1 flex justify-center items-center p-6 bg-white">
        <div className="max-w-md w-full mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
          <h2 className="text-2xl font-bold mb-4">Create Account</h2>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              placeholder="User Name (eg. your first name)"
              className="w-full p-2 border rounded"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
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
              Sign Up
            </button>
          </form>

          {/* Redirect to Login page */}
          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Login here
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
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      </div> */}
    </div>
  );
}
