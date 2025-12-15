const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            
            {/* Main Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome Back!</h1>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl">
                    Access your notes, take quizzes, and prepare with past year papers all in one place.
                </p>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow border border-gray-100">
                        <h3 className="text-2xl font-bold text-purple-600 mb-2">📝 Notes</h3>
                        <p className="text-gray-600">Organize and access all your study notes easily.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow border border-gray-100">
                        <h3 className="text-2xl font-bold text-pink-600 mb-2">🎯 Quizzes</h3>
                        <p className="text-gray-600">Test your knowledge with interactive quizzes.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow border border-gray-100">
                        <h3 className="text-2xl font-bold text-rose-600 mb-2">📚 PYQs</h3>
                        <p className="text-gray-600">Practice with past year exam papers.</p>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-white rounded-lg shadow-md p-12 mb-20 border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                            <p className="text-4xl font-bold text-purple-600 mb-2">10K+</p>
                            <p className="text-gray-600">Study Notes</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-pink-600 mb-2">500+</p>
                            <p className="text-gray-600">Practice Quizzes</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-rose-600 mb-2">100+</p>
                            <p className="text-gray-600">Past Year Papers</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-lg shadow-lg p-12 mb-20 text-center border border-purple-400">

                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-lg mb-6 opacity-95">Join thousands of students already using our platform</p>
                    <button className="bg-white text-purple-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-50 transition shadow-md">
                        Explore Now
                    </button>
                </div>

                {/* Updates Section */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-20 border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">🎉 Stay Tuned for More Updates</h2>
                    <p className="text-gray-600 mb-4">We're constantly adding new features and content to enhance your learning experience.</p>
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg">
                        <p className="text-sm text-gray-700">Subscribe to get notified about new notes, quizzes, and updates coming soon!</p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-gradient-to-br from-purple-700 to-rose-700 text-white rounded-2xl shadow-lg p-12 text-center border border-purple-600">
                    <h2 className="text-3xl font-bold mb-6">For More Details</h2>
                    <p className="text-lg mb-2">📧 Contact us at:</p>
                    <p className="text-2xl font-bold text-rose-200 mb-6">info@notesapp.com</p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <button className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-2 rounded-lg font-semibold transition shadow-md">
                            Email Us
                        </button>
                        <button className="bg-rose-600 text-white hover:bg-rose-700 px-6 py-2 rounded-lg font-semibold transition shadow-md">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;