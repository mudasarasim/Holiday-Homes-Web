import React from 'react';
import './Home.css';
import videoBg from '../assets/banner-video.mp4';
import { FaStar } from 'react-icons/fa';

const properties = [
  {
    id: 1,
    title: 'Luxurious One-Bedroom Apartment',
    location: 'DUBAI',
    tag: 'Apartment',
    video: '../assets/banner-video.mp4', // Replace with your video/image path
  },
  {
    id: 2,
    title: 'Modern Marina View Studio',
    location: 'DUBAI',
    tag: 'Studio',
    video: '../assets/banner-video.mp4',
  },
  {
    id: 3,
    title: 'Elegant Downtown Condo',
    location: 'DUBAI',
    tag: 'Condo',
    video: '../assets/banner-video.mp4',
  },
];

const Home = () => {
  return (
    <>
      {/* === Banner Section === */}
      <div className="banner-container">
        <video className="banner-video" autoPlay muted loop>
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="banner-content text-white">
          <h1 className="display-4 fw-bold">Discover Luxury Stays in Dubai</h1>
          <p className="lead">Explore our exclusive properties and experience premium hospitality.</p>
        </div>
      </div>

      {/* === Featured Properties === */}
      <section className="py-5 px-3 px-md-5 bg-light">
        <h2 className="mb-4 fw-bold text-dark">Featured Properties</h2>
        <div className="row g-4">
          {properties.map((property) => (
            <div className="col-md-4" key={property.id}>
              <div className="card border-0 shadow rounded-4 overflow-hidden property-card">
                <div className="position-relative">
                  <video className="w-100" style={{height: '250px'}} autoPlay muted loop>
                    <source src={videoBg} type="video/mp4" />
                  </video>
                  <span className="badge bg-primary position-absolute top-2 start-2 m-2 px-3 py-1 rounded-pill">
                    {property.tag}
                  </span>
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
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
