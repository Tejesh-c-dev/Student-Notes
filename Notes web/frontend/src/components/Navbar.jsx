import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold text-white">NotesApp</div>

        {/* Navigation Links */}
        <div className="flex gap-8 items-center">
          <Link to="/">
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition font-medium">Home</button>
          </Link>

          <Link to="/notes">
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition font-medium">Notes</button>
          </Link>

          <Link to="/quiz">
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition font-medium">Quiz</button>
          </Link>

          <Link to="/pyqs">
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition font-medium">PYQs</button>
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-4 items-center">
          <Link to="/login">
            <button className="px-6 py-2 text-indigo-600 bg-white font-medium rounded-lg hover:bg-indigo-50 transition-colors duration-200">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="px-6 py-2 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors duration-200 border-2 border-white">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
