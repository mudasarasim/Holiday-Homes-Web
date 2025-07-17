import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Contact.css';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('https://everseasonholidayhomes.com/api/contact', form);
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: '✅ Thank you for contacting us. We will get back to you shortly.',
      });
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: '❌ Failed to send your message. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

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
                    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("img/bg.jpeg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    padding: '80px 0',
                    textAlign: 'center',
                  }}
                >
                  <h2>Contact Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Map */}
      <section className="contact-section py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-md-4">
              <div className="contact-box p-4 shadow-sm">
                <i className="fa fa-envelope fa-2x mb-2"></i>
                <h5>Mail</h5>
                <p>info@mivaan.com</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-box p-4 shadow-sm">
                <i className="fa fa-phone fa-2x mb-2"></i>
                <h5>Contact</h5>
                <p>+971 52 635 3298</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-box p-4 shadow-sm">
                <i className="fa fa-map-marker fa-2x mb-2"></i>
                <h5>Address</h5>
                <p>Dubai - United Arab Emirates</p>
              </div>
            </div>
          </div>

          <div className="row align-items-stretch">
            <div className="col-lg-6 mb-4">
              <form onSubmit={handleSubmit} className="p-4 shadow-lg rounded-4 h-100 bg-white">
                <h4 className="mb-4">Send us a message</h4>

                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-4">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="4"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-warning text-light w-100"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="h-100 rounded-4 overflow-hidden shadow-lg">
                <iframe
                  src="https://maps.google.com/maps?q=-12.942227,-38.480291&z=15&output=embed"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0, minHeight: '100%' }}
                  allowFullScreen
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
