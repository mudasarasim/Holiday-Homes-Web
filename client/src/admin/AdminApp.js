// src/admin/AdminApp.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

const isLoggedIn = () => {
  return localStorage.getItem("admin_token") === "true";
};

const AdminApp = () => {
  return (
    <Routes>
      <Route path="login" element={<AdminLogin />} />
      <Route
        path="dashboard/*"
        element={isLoggedIn() ? <AdminDashboard /> : <Navigate to="/admin/login" />}
      />
    </Routes>
  );
};

export default AdminApp;
