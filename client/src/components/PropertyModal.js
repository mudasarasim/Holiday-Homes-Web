import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const PropertyModal = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://13.201.100.37:5001/api/property', form);

      Swal.fire({
        icon: 'success',
        title: 'Property Listed',
        text: 'Your property has been successfully submitted!',
        confirmButtonColor: '#ffc107'
      });

      setForm({
        name: '',
        phone: '',
        email: '',
        propertyType: '',
        location: '',
      });

      // Close modal (Bootstrap)
      document.getElementById('propertyModalCloseBtn')?.click();
    } catch (err) {
      console.error('❌ Error submitting property:', err);
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'Something went wrong. Please try again!',
        confirmButtonColor: '#dc3545'
      });
    }
  };

  return (
    <div
      className="modal fade"
      id="propertyModal"
      tabIndex="-1"
      aria-labelledby="propertyModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="propertyModalLabel">List Your Property</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              id="propertyModalCloseBtn"
            />
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Property Type</label>
                <input
                  type="text"
                  className="form-control"
                  name="propertyType"
                  placeholder="e.g., Apartment, Villa"
                  value={form.propertyType}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  placeholder="Enter location"
                  value={form.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-end">
                <button type="submit" className="btn btn-warning">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
