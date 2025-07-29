import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://everseasonholidayhomes.com/api/property') // ❗ Use HTTP not HTTPS for local
      .then(res => {
        setTimeout(() => {
          setProperties(res.data);
          setLoading(false);
        }, 1000); // optional delay
      })
      .catch(err => {
        console.error('Error fetching properties:', err);
        setError('Failed to load properties. Please try again.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-3">📋 Listed Properties</h3>

      {loading ? (
        <div className="text-center mt-4">
          <div className="spinner-border text-primary" role="status" />
          <p className="mt-2">Loading properties...</p>
        </div>
      ) : error ? (
        <div className="alert alert-danger text-center">{error}</div>
      ) : properties.length === 0 ? (
        <div className="alert alert-info text-center">No properties listed yet.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Type</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((p, i) => (
                <tr key={i}>
                  <td>{p.name}</td>
                  <td>{p.email}</td>
                  <td>{p.phone}</td>
                  <td>{p.property_type}</td>
                  <td>{p.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PropertyList;
