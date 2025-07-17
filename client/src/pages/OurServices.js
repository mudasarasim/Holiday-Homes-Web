import React from 'react';
import './Contact.css';
import { FaUserTie, FaClipboardCheck, FaKey, FaWrench } from 'react-icons/fa';
import banner from '../assets/banner-video.mp4'; // Or use a static image

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="position-relative">
        <video
          className="w-100"
          autoPlay
          muted
          loop
          playsInline
          style={{ height: '400px', objectFit: 'cover' }}
        >
          <source src={banner} type="video/mp4" />
        </video>
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        >
          <h1 className="text-white fw-bold display-4">Our Services</h1>
        </div>
      </div>

      {/* About Services Section */}
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2 className="fw-bold text-dark mb-3">
              OUR <span className="text-warning">SERVICES</span>
            </h2>
            <p className="text-muted">
              We make a promise to landlords who choose us for property management:
              We take the weight off your shoulders – from tenant search and sign-up, to inventory and ongoing issue handling.
              Our dedicated, RERA-qualified Property Managers are carefully selected and highly trusted by clients and tenants alike.
            </p>
            <ul className="list-unstyled mt-4">
              <li className="mb-3 d-flex">
                <FaUserTie className="text-warning me-3 mt-1" />
                <span>Professional property managers (RERA certified)</span>
              </li>
              <li className="mb-3 d-flex">
                <FaClipboardCheck className="text-warning me-3 mt-1" />
                <span>Tenant screening and legal documentation</span>
              </li>
              <li className="mb-3 d-flex">
                <FaKey className="text-warning me-3 mt-1" />
                <span>Seamless handover and key management</span>
              </li>
              <li className="mb-3 d-flex">
                <FaWrench className="text-warning me-3 mt-1" />
                <span>Maintenance and 24/7 tenant support</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <img src='img/bg.jpeg' className="img-fluid rounded-4 shadow" alt="Our Services" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
