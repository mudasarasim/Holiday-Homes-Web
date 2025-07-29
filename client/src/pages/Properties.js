import React, { useState, useEffect } from 'react';
import './Contact.css';
import videoBg from '../assets/banner-video.mp4';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('https://everseasonholidayhomes.com/api/property/all') // replace with your actual API URL
      .then(res => setProperties(res.data))
      .catch(err => console.error('Failed to load properties:', err));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="ms-breadcrumb m-b-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="row ms_breadcrumb_inner">
                <div
                  className="col-md-12 col-sm-12 back"
                  style={{
                    background:
                      'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("img/bg.jpeg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    padding: '80px 0',
                    textAlign: 'center',
                  }}>
                  <h2>Our Properties</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <section className="py-5 px-3 px-md-5">
        <h1 className="mb-4 fw-bold text-dark text-center colour">Featured <span>Properties</span></h1>
        <p className='text-center mb-5'>Discover our handpicked selection of the most exclusive properties in Dubai</p>
        <div className="row g-4">
          {properties.map((property) => (
            <div className="col-md-4" key={property.id}>
              <Link to={`/property-detail/${property.id}`} style={{ textDecoration: 'none' }}>
                <div className="card border-0 shadow rounded-4 overflow-hidden property-card">
                  <div className="position-relative">
                    <img
                      src={`https://everseasonholidayhomes.com/uploads/properties/${property.image}`}
                      alt={property.title}
                      className="w-100"
                      style={{ height: '270px', objectFit: 'cover' }}
                    />
                    <span className="badge">{property.tag}</span>
                  </div>
                  <div className="p-3">
                    <h5 className="fw-semibold">{property.title}</h5>
                    <div className="d-flex align-items-center text-muted mt-2">
                      <FaStar className="me-2 text-warning" />
                      <span className="me-2">{property.location}</span>
                      <span className="ms-auto">&rarr;</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Properties;
