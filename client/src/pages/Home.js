import React from 'react';
import './Home.css';
import videoBg from '../assets/banner-video.mp4';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';


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
      <div className="banner-container">
        <video className="banner-video" autoPlay muted loop>
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="banner-content text-white">
          <h1 className="display-4 fw-bold color"><span>Discover</span> Luxury Stays in <span>Dubai</span></h1>
          <p className="lead">Explore our exclusive properties and experience premium hospitality.</p>
          <div className='mt-4'>
            <Link to={'/properties'} style={{ color: 'white' }} className='btn btn-warning btn-lg'>Our Properties</Link>
            <Link to={'/contact'} className='btn btn-outline-warning btn-lg' style={{ marginLeft: '18px' }}>Get in Touch</Link>
          </div>
        </div>
      </div>

      {/* === Featured Properties === */}
      <section className="py-5 px-3 px-md-5">
        <h1 className="mb-4 fw-bold text-dark text-center colour">Featured <span> Properties</span></h1>
        <p className='text-center mb-5'>Discover our handpicked selection of the most exclusive properties in Dubai</p>
        <div className="row g-4">
          {properties.map((property) => (
            <div className="col-md-4" key={property.id}>
              <Link to={'/property-detail'} style={{ textDecoration: 'none' }}>
                <div className="card border-0 shadow rounded-4 overflow-hidden property-card">
                  <div className="position-relative">
                    <video className="w-100" autoPlay muted loop style={{ height: '270px' }}>
                      <source src={videoBg} type="video/mp4" />
                    </video>
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Link className='btn btn-warning btn-lg mt-5 px-5 text-light'>View All</Link>
        </div>
      </section>

      {/* === Why Choose Us Section === */}
      <section className="why-choose-us py-5 bg-light px-3 px-md-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-dark">
            Why <span className="text-warning">Choose</span> Us
          </h1>
          <p className="text-muted">
            Discover what makes us the top choice for luxury stays in Dubai.
          </p>
        </div>

        <div className="row g-4 text-center">
          {[
            {
              icon: 'bi-gem',
              title: 'Premium Properties',
              desc: 'We offer handpicked, high-end apartments and villas tailored to your luxury needs.',
              color: 'primary',
            },
            {
              icon: 'bi-shield-check',
              title: 'Trusted & Secure',
              desc: 'Book with confidence. Your safety, privacy, and satisfaction are our top priorities.',
              color: 'success',
            },
            {
              icon: 'bi-headset',
              title: '24/7 Support',
              desc: 'Our team is available around the clock to assist you before, during, and after your stay.',
              color: 'danger',
            },
          ].map((item, i) => (
            <div className="col-md-4" key={i}>
              <div className="p-4 border rounded-4 shadow-sm bg-white h-100 hover-up transition">
                <div
                  className={`d-inline-flex align-items-center justify-content-center bg-${item.color} bg-opacity-10 text-${item.color} rounded-circle mb-3`}
                  style={{ width: 70, height: 70 }}
                >
                  <i className={`bi ${item.icon} fs-2`}></i>
                </div>
                <h5 className="fw-semibold">{item.title}</h5>
                <p className="text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  );
};

export default Home;
