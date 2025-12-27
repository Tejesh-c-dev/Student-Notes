import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Quiz from "./pages/Quiz";
import PYQs from "./pages/PYQs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/pyqs" element={<PYQs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
