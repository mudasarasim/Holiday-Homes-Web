import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import './Footer.css'; // Optional: for additional styling

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5" style={{borderRadius: '40px 40px 0px 0px'}}>
    
      {/* Footer Main */}
      <Container className="mt-5">
        <Row className="mb-4">
          <Col md={3} className="mb-4 mb-md-0">
            <img src="img/logo.png" alt="Logo" height="80" />
            <p className="mt-2">Your premier destination for luxury stays in Dubai.</p>
            <div className="d-flex gap-3 icons">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </Col>

          <Col md={3}>
            <h6><strong>Company</strong></h6>
            <ul className="list-unstyled">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h6><strong>Support</strong></h6>
            <ul className="list-unstyled">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Safety</a></li>
              <li><a href="#">Cancellation</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Submit Review</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h6><strong>Legal</strong></h6>
            <ul className="list-unstyled">
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Guidelines</a></li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col className="text-center py-3 border-top">
            © 2025 Ever Season Holidayhomes. All rights reserved.
          </Col>
        </Row>
      </Container>

      {/* WhatsApp Chat Button */}
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1030 }}>
  <a
    href="https://wa.me/97142502914"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }}
  >
    <Button
      variant="warning"
      className="d-flex align-items-center gap-2"
      style={{
        borderRadius: '30px',
        background: 'orange',
        color: 'white',
        border: 'none',
      }}
    >
      <FaWhatsapp />
      Chat on WhatsApp
    </Button>
  </a>
</div>
    </footer>
  );
};

export default Footer;
