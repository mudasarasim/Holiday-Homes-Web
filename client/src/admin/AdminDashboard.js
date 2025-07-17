// src/admin/AdminDashboard.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import ContactMessages from './ContactMessages';
import PropertyList from './PropertyList';

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="p-4 flex-grow-1" style={{ width: '100%' }}>
        <Routes>
          <Route path="/" element={<Navigate to="contacts" />} />
          <Route path="contacts" element={<ContactMessages />} />
          <Route path="properties" element={<PropertyList />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
