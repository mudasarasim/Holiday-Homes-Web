import React from 'react';
import './Home.css'; // Custom styles for positioning and responsiveness
import videoBg from '../assets/banner-video.mp4'; // Make sure the video exists at this path

const Home = () => {
  return (
    <>
      <div className="banner-container">
        <video className="banner-video" autoPlay muted loop>
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="banner-content text-white">
          <h1 className="display-4 fw-bold">Discover Luxury Stays in Dubai</h1>
          <p className="lead">Explore our exclusive properties and experience premium hospitality.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
