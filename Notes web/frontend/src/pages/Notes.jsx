const Notes = () => {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-8">
        
        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search notes..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-indigo-500
                       placeholder-gray-400"
          />
        </div>
  
        {/* Heading */}
        <div className="max-w-4xl mx-auto mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Highly Recommended Notes
          </h1>
        </div>
  
        {/* Notes Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          <div className="p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Note Title 1
            </h2>
            <p className="text-sm text-gray-600">
              Brief description of Note 1.
            </p>
          </div>
  
          <div className="p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Note Title 2
            </h2>
            <p className="text-sm text-gray-600">
              Brief description of Note 2.
            </p>
          </div>
  
          <div className="p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Note Title 3
            </h2>
            <p className="text-sm text-gray-600">
              Brief description of Note 3.
            </p>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default Notes;
  