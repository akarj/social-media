import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login/Login";
import RegisterPage from "./pages/Register/RegisterPage";
import ProfilePage from "./pages/profile/ProfilePage";
import Homepage from "./pages/Homepage/Homepage";
import { AuthContext } from "./context/AuthContext";

export default function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Homepage /> : <RegisterPage />}
        ></Route>
        <Route path="login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="register"
          element={user ? <Navigate to="/" /> : <RegisterPage />}
        />
        {/* 
        Profile page issue still */}
        <Route path="profile/:username" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}
