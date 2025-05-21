import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUserEdit } from "react-icons/fa";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });

  useEffect(() => {
  fetch(`https://reqres.in/api/users/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1" // ✅ Required header
    }
  })
    .then((res) => res.json())
    .then((data) => setUser(data.data))
    .catch(() => toast.error("Failed to load user details"));
}, [id]);


  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://reqres.in/api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json",
           "x-api-key": "reqres-free-v1"
         },
        body: JSON.stringify({
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
        }),
      });

      if (response.ok) {
        toast.success("User updated successfully!");
        navigate("/users");
      } else {
        toast.error("Failed to update user");
      }
    } catch (error) {
      console.log("Error", error);
      toast.error("An error occurred while updating user");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <FaUserEdit className="text-4xl text-blue-500 mx-auto" />
          <h2 className="text-2xl font-bold mt-2">Edit User</h2>
          <p className="text-gray-600">Update user details below</p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">First Name</label>
            <input
              type="text"
              name="first_name"
              value={user.first_name}
              onChange={handleChange}
              placeholder="Enter first name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Last Name</label>
            <input
              type="text"
              name="last_name"
              value={user.last_name}
              onChange={handleChange}
              placeholder="Enter last name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition"
          >
            Update User
          </button>

          <button
            type="button"
            onClick={() => navigate("/users")}
            className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
