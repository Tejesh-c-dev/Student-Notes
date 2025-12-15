const Quiz = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">🎯 Quiz</h1>
                <p className="text-2xl font-bold text-blue-600 mb-6">Coming Soon</p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 mb-8">
                    <p className="text-gray-600 mb-4">Test your knowledge with interactive quizzes and get instant feedback.</p>
                    <div className="flex justify-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                </div>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md">
                    Notify Me
                </button>
            </div>
        </div>
    )
}   
export default Quiz;