import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isForgot, setIsForgot] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const navigate = useNavigate();

  // Countdown timer effect
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  // Login handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profile");
    } catch (err: any) {
      setError("Failed to log in. Please check your credentials.");
    }
  };

  // Password reset handler
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess("Password reset email sent! Check your inbox.");
      setCooldown(60); // start cooldown
    } catch (err: any) {
      setError("Failed to send reset email. Please check the email address.");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
      {/* Left: Form container */}
      <div className="flex flex-col items-center justify-center p-8 lg:p-12 order-2 lg:order-1">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-stone-900 tracking-tight">
              {isForgot ? "Reset your password" : "Welcome back!"}
            </h1>
            <p className="mt-2 text-stone-600">
              {isForgot
                ? "Enter your email and we’ll send you a reset link."
                : "Log in to continue your culinary journey."}
            </p>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          {!isForgot ? (
            // Login form
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-stone-100 text-stone-900 border-transparent focus:ring-2 focus:ring-amber-600 placeholder-stone-400"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-stone-100 text-stone-900 border-transparent focus:ring-2 focus:ring-amber-600 placeholder-stone-400"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-stone-300 text-amber-600 focus:ring-amber-600 bg-stone-100"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 text-sm text-stone-700"
                  >
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  onClick={() => setIsForgot(true)}
                  className="text-sm font-medium text-stone-500 hover:text-amber-600 transition-colors cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 rounded-lg font-bold text-white bg-amber-600 hover:bg-amber-600/90 focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 cursor-pointer"
              >
                Log in
              </button>
            </form>
          ) : (
            // Forgot password form
            <form onSubmit={handleResetPassword} className="space-y-6">
              <div>
                <input
                  type="email"
                  id="reset-email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-stone-100 text-stone-900 border-transparent focus:ring-2 focus:ring-amber-600 placeholder-stone-400"
                />
              </div>
              <button
                type="submit"
                disabled={cooldown > 0}
                className={`w-full flex justify-center py-3 px-4 rounded-lg font-bold text-white cursor-pointer ${
                  cooldown > 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-amber-600 hover:bg-amber-600/90"
                }`}
              >
                {cooldown > 0 ? `Resend in ${cooldown}s` : "Send Reset Link"}
              </button>

              <p className="text-center text-sm text-stone-600">
                Back to{" "}
                <a
                  onClick={() => {
                    setIsForgot(false);
                    setError("");
                    setSuccess("");
                  }}
                  className="w-full font-medium text-sm text-amber-600 hover:text-amber-500 transition-colors cursor-pointer"
                >
                  Login
                </a>
              </p>
            </form>
          )}

          {!isForgot && (
            <p className="text-center text-sm text-stone-600">
              Don&apos;t have an account?{" "}
              <a
                href="/signup"
                className="font-medium text-amber-600 hover:text-amber-500 transition-colors cursor-pointer"
              >
                Sign up
              </a>
            </p>
          )}
        </div>
      </div>

      {/* Right: Background Image */}
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
