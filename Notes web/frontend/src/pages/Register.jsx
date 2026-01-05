import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authAPI } from "../services/api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!agreedToTerms) {
      setError("Please agree to the Terms of Service");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await authAPI.register(username, email, password, confirmPassword);
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">📝 Register</h1>
          <p className="text-gray-600">Create your account to get started</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {success}
          </div>
        )}

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Full Name Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
            />
            <p className="text-xs text-gray-500 mt-1">
              Must include uppercase, lowercase, number, and special character
            </p>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
            />
          </div>

          {/* Terms Checkbox */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
            <span className="text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-pink-600 hover:underline font-medium">
                Terms of Service
              </a>
            </span>
          </label>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 rounded-lg font-semibold hover:from-pink-700 hover:to-rose-700 transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center border-t border-gray-200 pt-6 mt-6">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-pink-600 hover:text-pink-700 transition hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;