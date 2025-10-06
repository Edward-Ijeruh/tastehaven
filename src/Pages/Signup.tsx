import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

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
        password
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
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
      {/* Left column: Form */}
      <div className="flex flex-col items-center justify-center p-8 lg:p-12 order-2 lg:order-1">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-stone-900 tracking-tight">
              Create Account
            </h1>
            <p className="mt-2 text-stone-600">
              Join TasteHaven and start your culinary journey.
            </p>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="User Name (eg. your first name)"
                className="w-full px-4 py-3 rounded-lg bg-stone-100 text-stone-900 border-transparent focus:ring-2 focus:ring-amber-600 focus:border-transparent placeholder-stone-400"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-stone-100 text-stone-900 border-transparent focus:ring-2 focus:ring-amber-600 focus:border-transparent placeholder-stone-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg bg-stone-100 text-stone-900 border-transparent focus:ring-2 focus:ring-amber-600 focus:border-transparent placeholder-stone-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-amber-600 hover:bg-amber-600/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 transition-colors cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-muted-light">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-amber-600 hover:text-amber-600/90 transition-colors cursor-pointer"
            >
              Login
            </a>
          </p>
        </div>
      </div>

      {/* Right column: Image */}
      <div className="hidden lg:block order-1 lg:order-2">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWUoidvgmrfXsy3mgKtCnX5371H-gvb6y0KglBop-3w4hQnfjLS7wwDyrvieZffpsDL0paSK6229nIgxt9CbjevOz_CyLdH45nFp5Aj7KLjWAkv_cRx9khmMsDnGui26OGlGhXxUL2Zkhopf54fd7USRxqBiHXZRqPEjZGUYmcy5LMRxwnzaEj5nnOxiTuZZ6CLVIOuU7_YC4ASrWPsaCj6N3JqxAyrIpUcGaqLiwWVKDIkT5VXU2qwn_6pSgEjjJGkp2P1pAg-DU")`,
          }}
        />
      </div>
    </div>
  );
}
