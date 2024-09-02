import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NextPage from "./pages/NextPage";
import Form from "./pages/Form";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import WhatsAppButton from "./components/Whatsapp";
function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col scroll-smooth text-gray-700">
       
        <Navbar/>
        <div className="flex-grow z-0 mt-2">
          <Routes>
            <Route path="/form" element={<Form />} />
            <Route path="/next" element={<NextPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer/>
        <ToastContainer/>
        <WhatsAppButton/>
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
