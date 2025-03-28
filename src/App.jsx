import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Users from "./pages/Users"; 
import EditUser from "./pages/EditUser";
import ProtectedRoute from "./routes/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-4">
      <ToastContainer autoClose={3000} />
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/edit-user/:id" element={<ProtectedRoute><EditUser /></ProtectedRoute>} />
        <Route
    path="/users"
    element={
      <ProtectedRoute>
        <Users />
      </ProtectedRoute>
    }
  />

        </Routes>
        
      </div>
    </div>
  );
}

export default App;
