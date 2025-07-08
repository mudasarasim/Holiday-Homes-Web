// components/PropertyModal.js
import React from 'react';

const PropertyModal = () => {
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
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" placeholder="Enter your phone number" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Property Type</label>
                <input type="text" className="form-control" placeholder="e.g., Apartment, Villa" />
              </div>
              <div className="mb-3">
                <label className="form-label">Location</label>
                <input type="text" className="form-control" placeholder="Enter location" />
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
