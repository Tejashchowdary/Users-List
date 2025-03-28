EmployWise Frontend Assignment 🚀
A React + Vite web application for user authentication, user management (list, edit, delete), and pagination using the Reqres API. The app ensures a seamless and responsive user experience with Tailwind CSS, React Router, and React Toastify for notifications.

🔗 Live Demo: https://users-list-rho-fawn.vercel.app/ 

📌 Features
✅ User Authentication (Login with token storage)
✅ Protected Routes (Restrict unauthorized access)
✅ Paginated User List (Fetched dynamically from Reqres API)
✅ Edit User Details (Update user information)
✅ Delete Users (Remove users from the list)
✅ Logout Functionality (Clears token and redirects to login)
✅ Toast Notifications (Success/Error messages)
✅ Responsive Design (Tailwind CSS for a mobile-friendly UI)

📂 Folder Structure
pgsql
Copy
Edit
📂 src/
 ┣ 📂 components/
 ┃ ┣ 📜 Navbar.jsx
 ┣ 📂 pages/
 ┃ ┣ 📜 Login.jsx
 ┃ ┣ 📜 Users.jsx
 ┃ ┣ 📜 EditUser.jsx
 ┣ 📂 utils/
 ┃ ┣ 📜 auth.js  (Local storage helper)
 ┣ 📜 App.jsx
 ┣ 📜 main.jsx
 ┣ 📜 routes.jsx  (Routing logic)
🚀 Installation & Setup
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/your-username/employwise-frontend.git
cd employwise-frontend
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Run the Project
sh
Copy
Edit
npm run dev
4️⃣ Open in Browser
arduino
Copy
Edit
http://localhost:5173
🛠️ Tech Stack
Frontend: React, Vite, Tailwind CSS

State Management: React Hooks

Routing: React Router

API Integration: Fetch API

UI Components: React Toastify, Framer Motion

🔑 Authentication
Login API:
POST /api/login
Credentials:

json
Copy
Edit
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}
Stores JWT token in local storage for protected routes.

📌 API Endpoints
Get Users: GET /api/users?page=1

Edit User: PUT /api/users/{id}

Delete User: DELETE /api/users/{id}

📷 Screenshots
🚀 Add relevant screenshots here (Login, User List, Edit User, etc.)

🤝 Contributing
Contributions are welcome! If you’d like to improve this project, follow these steps:

Fork the repository

Create a new branch (feature-branch)

Commit your changes

Push to the branch

Create a Pull Request

📜 License
This project is open-source under the MIT License.
