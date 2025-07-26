import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Contact.css';
import banner from '../assets/banner-video.mp4';
import BASE_URL from '../config';

const PropertyDetail = () => {
  const { id } = useParams(); // Get property ID from URL
  const [property, setProperty] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Fetch property details
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/property/${id}`);
        const data = await res.json();
        setProperty(data);
      } catch (err) {
        console.error('Failed to load property:', err);
      }
    };
    fetchProperty();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await response.json();
      if (response.ok) {
        alert('Inquiry submitted successfully!');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Failed to submit inquiry: ' + data.message);
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Something went wrong while submitting your inquiry.');
    }
  };

  if (!property) {
    return <div className="text-center py-5">Loading property details...</div>;
  }

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
          <h1 className="text-white fw-bold display-4">{property.title}</h1>
        </div>
      </div>

      {/* Property Info and Inquiry Form */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Inquiry Form */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">Send Inquiry</h2>
            <form onSubmit={handleSubmit} className="border rounded-4 p-4 shadow-sm bg-light">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows="4" className="form-control" required></textarea>
              </div>
              <button type="submit" className="btn btn-warning w-100 text-white">Submit Inquiry</button>
            </form>
          </div>

          {/* Property Image & Info */}
          <div className="col-lg-6">
            <img  
             src={`${BASE_URL}/uploads/properties/${property.image}`}
              alt={property.title}
              className="img-fluid rounded-4 shadow mb-3"
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            />
        
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetail;
