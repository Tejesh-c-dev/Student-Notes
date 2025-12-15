const Notes = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">📚 Notes</h1>
                <p className="text-2xl font-bold text-purple-600 mb-6">Coming Soon</p>
                <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-8 mb-8">
                    <p className="text-gray-600 mb-4">Access thousands of study notes organized by subject.</p>
                    <div className="flex justify-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                </div>
                <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-md">
                    Notify Me
                </button>
            </div>
        </div>
    )
}
export default Notes;