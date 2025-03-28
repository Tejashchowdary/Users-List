import { Link, useNavigate } from "react-router-dom";
import { FaUsers, FaBars, FaTimes } from "react-icons/fa"; // Icons
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
 
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  
  

  return (
    
    <nav className="bg-blue-700 text-white py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/users" className="flex items-center space-x-2 text-xl font-bold">
          <FaUsers className="text-2xl" />
          <span>USERS-LIST</span>
        </Link>
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="hidden md:flex space-x-4">
          <Link
            to="/users"
            className="px-4 py-2 bg-white text-blue-700 rounded-lg hover:bg-gray-200 transition"
          >
            Home
          </Link>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 text-white py-4">
          <div className="flex flex-col items-center space-y-3">
            <Link
              to="/users"
              className="px-4 py-2 bg-white text-blue-700 rounded-lg hover:bg-gray-200 transition w-4/5 text-center"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition w-4/5"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
