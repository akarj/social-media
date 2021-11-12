import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import RegisterPage from "./pages/Register/RegisterPage";
import ProfilePage from "./pages/profile/ProfilePage";
import Homepage from "./pages/Homepage/Homepage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<RegisterPage />} />

        <Route path="profile/:username" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}
