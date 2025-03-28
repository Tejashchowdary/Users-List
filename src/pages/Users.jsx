import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUserEdit, FaTrashAlt } from "react-icons/fa";

function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const fetchUsers = async (pageNumber) => {
    try {
      const response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`);
      const data = await response.json();
      setUsers(data.data);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      toast.error("Failed to fetch users");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${id}`, { method: "DELETE" });
      if (response.ok) {
        setUsers(users.filter((user) => user.id !== id));
        toast.success("User deleted successfully");
      } else {
        toast.error("Failed to delete user");
      }
    } catch (error) {
      console.log("Error", error);
      toast.error("An error occurred while deleting");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="mt-16 text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text mb-6">
  User List
</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
          >
            <img
              src={user.avatar}
              alt={user.first_name}
              className="w-24 h-24 rounded-full mx-auto border-4 border-blue-300"
            />
            <h3 className="text-lg font-semibold mt-4">{user.first_name} {user.last_name}</h3>
            <p className="text-gray-500">{user.email}</p>

            <div className="mt-4 flex justify-center space-x-3">
              <button
                onClick={() => navigate(`/edit-user/${user.id}`)}
                className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
              >
                <FaUserEdit className="mr-2" /> Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                <FaTrashAlt className="mr-2" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
<div className="flex flex-wrap justify-center mt-6 gap-4">
  <button
    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
    disabled={page === 1}
    className={`px-6 py-3 text-sm sm:text-base rounded-full font-semibold shadow-md transition-all ${
      page === 1
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-blue-500 text-white hover:bg-blue-600 active:scale-95"
    }`}
  >
    ← Previous
  </button>
  
  <span className="px-6 py-3 text-sm sm:text-base bg-gray-100 rounded-full text-gray-700 font-semibold shadow-md">
    Page {page} of {totalPages}
  </span>

  <button
    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
    disabled={page === totalPages}
    className={`px-6 py-3 text-sm sm:text-base rounded-full font-semibold shadow-md transition-all ${
      page === totalPages
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-blue-500 text-white hover:bg-blue-600 active:scale-95"
    }`}
  >
    Next →
  </button>
</div>

    </div>
  );
}

export default Users;
