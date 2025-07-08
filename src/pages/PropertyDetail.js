import React, { useState } from 'react';
import './Contact.css';
import banner from '../assets/banner-video.mp4'; // Background video

const PropertyDetail = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // You can add API call here
  };

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
          <h1 className="text-white fw-bold display-4">Property Details</h1>
        </div>
      </div>

      {/* Property Info and Inquiry Form */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Form Section */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">Send Inquiry</h2>
            <form onSubmit={handleSubmit} className="border rounded-4 p-4 shadow-sm bg-light">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  className="form-control"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-warning w-100 text-white">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="col-lg-6">
            <img
              src='img/bg.jpeg'
              alt="Property"
              className="img-fluid rounded-4 shadow"
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetail;
