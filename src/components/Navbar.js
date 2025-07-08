import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Collapse from 'bootstrap/js/dist/collapse';
import PropertyModal from './PropertyModal'; // ✅ import modal component
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const collapseRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleNavLinkClick = () => {
    if (collapseRef.current && window.innerWidth < 992) {
      const bsCollapse = Collapse.getInstance(collapseRef.current) || new Collapse(collapseRef.current, { toggle: false });
      bsCollapse.hide();
    }
  };

  return (
    <>
      <nav style={{ height: '100px' }} className="navbar navbar-expand-lg navbar-light shadow-sm py-0">
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

          <div
            style={{ background: 'white', padding: '10px' }}
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
            ref={collapseRef}
          >
            <ul className="navbar-nav me-3">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link fw-bold ${isActive ? 'text-warning' : 'text-dark'}`
                  }
                  onClick={handleNavLinkClick}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/our-services"
                  className={({ isActive }) =>
                    `nav-link fw-bold ${isActive ? 'text-warning' : 'text-dark'}`
                  }
                  onClick={handleNavLinkClick}
                >
                  Our Services
                </NavLink>
              </li>

              {/* ✅ Modal Triggers */}
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link fw-bold text-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#propertyModal"
                  onClick={handleNavLinkClick}
                >
                  List Your Property
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link fw-bold text-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#propertyModal"
                  onClick={handleNavLinkClick}
                >
                  Long Stays
                </button>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/property-management"
                  className={({ isActive }) =>
                    `nav-link fw-bold ${isActive ? 'text-warning' : 'text-dark'}`
                  }
                  onClick={handleNavLinkClick}
                >
                  Property Management
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `nav-link fw-bold ${isActive ? 'text-warning' : 'text-dark'}`
                  }
                  onClick={handleNavLinkClick}
                >
                  Blog
                </NavLink>
              </li>
            </ul>

            <Link to="/contact" className="btn btn-outline-warning" onClick={handleNavLinkClick}>
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* ✅ Include the modal */}
      <PropertyModal />
    </>
  );
};

export default Navbar;
