const Register = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">📝 Register</h1>
                <p className="text-2xl font-bold text-pink-600 mb-6">Coming Soon</p>
                <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-8 mb-8">
                    <p className="text-gray-600 mb-4">Join our community and start learning with us.</p>
                    <div className="flex justify-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                </div>
                <button className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition shadow-md">
                    Notify Me
                </button>
            </div>
        </div>
    )
}

export default Register;