import { Link } from "react-router-dom";

const Register = () => {

    
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">📝 Register</h1>
                    <p className="text-gray-600">Create your account to get started</p>
                </div>

                {/* Form */}
                <form className="space-y-5">
                    {/* Full Name Field */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            required
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
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
                        />
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
                        />
                    </div>

                    {/* Terms Checkbox */}
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300" required />
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
            
                        className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 rounded-lg font-semibold hover:from-pink-700 hover:to-rose-700 transition shadow-lg hover:shadow-xl"
                    >
                        Create Account
                    </button>
                </form>

                {/* Login Link */}
                <div className="text-center border-t border-gray-200 pt-6">
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
    )
}

export default Register;