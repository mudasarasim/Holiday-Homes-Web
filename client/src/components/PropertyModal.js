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

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, email, propertyType, location } = form;
    if (!name || !phone || !email || !propertyType || !location) {
      return Swal.fire('Missing Fields', 'Please fill all fields.', 'warning');
    }

    setLoading(true);

    try {
      await axios.post('https://everseasonholidayhomes.com/api/property', {
        name,
        phone,
        email,
        property_type: propertyType,
        location,
      });

      Swal.fire({
        icon: 'success',
        title: 'Property Listed',
        text: 'Your property has been successfully submitted!',
        confirmButtonColor: '#ffc107',
      });

      setForm({
        name: '',
        phone: '',
        email: '',
        propertyType: '',
        location: '',
      });

      document.getElementById('propertyModalCloseBtn')?.click();
    } catch (err) {
      console.error('❌ Error submitting property:', err);
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: err?.response?.data?.error || 'Something went wrong. Please try again!',
        confirmButtonColor: '#dc3545',
      });
    } finally {
      setLoading(false);
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
            <h5 className="modal-title" id="propertyModalLabel">
              List Your Property
            </h5>
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
              {/* Name, Phone, Email */}
              {['name', 'phone', 'email'].map((field, idx) => (
                <div className="mb-3" key={idx}>
                  <label className="form-label">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    className="form-control"
                    name={field}
                    placeholder={`Enter your ${field}`}
                    value={form[field]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}

              {/* Property Type */}
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

              {/* Location */}
              <div className="mb-3">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  placeholder="Enter the property location"
                  value={form.location}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit */}
              <div className="text-end">
                <button type="submit" className="btn btn-warning" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
