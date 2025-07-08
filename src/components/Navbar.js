// components/Navbar.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  

  // Check login status on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav style={{height: '100px'}} className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-0">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <img src={logo} alt="Logo" height="100" width="130" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav me-3">
            {[
              { path: '/', label: 'Home' },
              { path: '/properties', label: 'Properties' },
              { path: '/about', label: 'About' },
              { path: '/property-management', label: 'Property Management' },
              { path: '/our-services', label: 'Our Services' },
       
            ].map((link, i) => (
              <li className="nav-item" key={i}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link fw-bold ${isActive ? 'text-warning' : 'text-dark'}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
              
            ))}
          </ul>

         <Link to={'/contact'} className="btn btn-outline-warning">
              Contact Us
            </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
