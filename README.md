

# Student Management System

A **Student Management System** built with a modern tech stack that includes **React (Vite)**, **Supabase**, **Node.js**, and **Express.js**. This application allows users to manage students and provides user authentication with protected routes.

## Live Links

- **Frontend**: [instinctive-frontend.onrender.com](https://instinctive-frontend.onrender.com/)
- **Backend**: [backend-36ys.onrender.com](https://backend-36ys.onrender.com/)

---

## Features

### User Authentication
- **Sign Up**: Register a new account.
- **Login**: Authenticate users with valid credentials.
- **Profile Management**: Access user-specific data with a protected `/profile` route.
- **Logout**: Securely log out from the session.

### Student Management
- **Add Student**: Create new student records.
- **View All Students**: Fetch all student details.
- **Get Student by ID**: Fetch specific student details by their ID.
- **Update Student**: Modify student details.
- **Delete Student**: Remove student records.

---

## Tech Stack

### Frontend
- **React**: Used for building the user interface.
- **Vite**: A fast and modern build tool.
- **Supabase**: Used for real-time data synchronization and backend services.

### Backend
- **Node.js**: JavaScript runtime for server-side logic.
- **Express.js**: Lightweight framework for building REST APIs.

---

## API Endpoints

### User Routes
| Method | Endpoint         | Description                     | Authentication |
|--------|------------------|---------------------------------|----------------|
| POST   | `/api/signup`     | Register a new user             | No             |
| POST   | `/api/login`      | Login an existing user          | No             |
| GET    | `/api/profile`    | Fetch user profile data         | Yes            |
| POST   | `/api/logout`     | Logout the user                 | No             |

### Student Routes
| Method | Endpoint          | Description                     | Authentication |
|--------|-------------------|---------------------------------|----------------|
| POST   | `/api/students`    | Add a new student               | Yes            |
| GET    | `/api/students`    | Fetch all students              | Yes            |
| GET    | `/api/students/:id`| Fetch a student by ID           | Yes            |
| PUT    | `/api/students/:id`| Update student details          | Yes            |
| DELETE | `/api/students/:id`| Delete a student                | Yes            |

---

## Installation and Setup

### Prerequisites
- **Node.js** (version 16+)
- **npm** or **yarn**
- Environment variables configured in `.env` for:
  - `SUPABASE_URL`
  - `SUPABASE_KEY`
  - `JWT_SECRET`

### Clone the Repository

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. The app will run at `http://localhost:5173`.

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and configure the following:
   ```
   SUPABASE_URL=https://your-supabase-url
   SUPABASE_KEY=your-supabase-key
   JWT_SECRET=your-secret-key
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. The server will run at `http://localhost:8000`.

---

## How It Works

### Authentication Flow
1. **Sign Up**: New users register with `/api/signup`.
2. **Login**: Users receive a JWT upon logging in, which is stored securely.
3. **Protected Routes**: Middleware (`authMiddleware`) ensures only authenticated users can access certain endpoints like `/profile`.

### CRUD Operations
1. **Add a Student**: Users can add new students via a POST request to `/api/students`.
2. **View Students**: Fetch all students or a specific one using GET requests.
3. **Update/Delete Students**: Modify or delete records using PUT/DELETE requests.

---

## Deployment

### Frontend
The frontend is deployed on [Render](https://render.com/) and is accessible via [instinctive-frontend.onrender.com](https://instinctive-frontend.onrender.com/).

### Backend
The backend is deployed on [Render](https://render.com/) and is accessible via [backend-36ys.onrender.com](https://backend-36ys.onrender.com/).

---

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes. Ensure you adhere to the coding standards of the project.

---

## License
This project is licensed under the [MIT License](LICENSE).

