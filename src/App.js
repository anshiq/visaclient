import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col text-gray-700">
        <div
          className="fixed z-50 w-full hidden top-0 left-0 p-4 rounded-l"
          id="notification"
        ></div>
        <Navbar/>
        <div className="flex-grow z-0 mt-2">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}



function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
