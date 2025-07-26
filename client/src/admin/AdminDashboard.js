// src/admin/AdminDashboard.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import ContactMessages from './ContactMessages';
import PropertyList from './PropertyList';
import AddProperty from '../pages/AddProperty';
import Inquiries from './Inquiries';




const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="p-4 flex-grow-1" style={{ width: '100%' }}>
        <Routes>
          <Route path="/" element={<Navigate to="contacts" />} />
          <Route path="contacts" element={<ContactMessages />} />
          <Route path="properties" element={<PropertyList />} />
          <Route path="add-property" element={<AddProperty />} />
          <Route path="inquiries" element={<Inquiries />} />

        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
