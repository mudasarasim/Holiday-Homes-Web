import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5001/api/property')
      .then(res => {
        setTimeout(() => {
          setProperties(res.data);
          setLoading(false);
        }, 1500); // 1.5 sec delay
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h3>Listed Properties</h3>

      {loading ? (
        <div className="text-center mt-4">
          <div className="spinner-border text-warning" role="status" />
          <p className="mt-2">Loading properties...</p>
        </div>
      ) : (
        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>Name</th><th>Email</th><th>Phone</th><th>Type</th><th>Location</th>
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
      )}
    </div>
  );
};

export default PropertyList;
