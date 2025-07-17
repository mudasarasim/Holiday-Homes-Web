import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const Sidebar = () => {
  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, logout',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('admin_token');
        Swal.fire('Logged out!', 'You have been logged out.', 'success').then(() => {
          window.location.href = '/admin/login';
        });
      }
    });
  };

  return (
    <div className="bg-dark text-white vh-100 p-3" style={{ width: '250px' }}>
      <h4 className="mb-4 text-center">
        <i className="fas fa-tools me-2"></i>Admin Panel
      </h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <NavLink
            to="/admin/dashboard/contacts"
            className="nav-link text-white"
            activeclassname="active"
          >
            <i className="fas fa-envelope me-2"></i> Contact Messages
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            to="/admin/dashboard/properties"
            className="nav-link text-white"
            activeclassname="active"
          >
            <i className="fas fa-building me-2"></i> Listed Properties
          </NavLink>
        </li>
        <li className="nav-item mt-4">
          <button className="btn btn-outline-light w-100" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt me-2"></i> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
