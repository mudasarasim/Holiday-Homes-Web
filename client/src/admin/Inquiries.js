// src/admin/Inquiries.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Inquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5001/api/inquiry')
      .then(res => {
        setInquiries(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching inquiries:', err);
        setError('Failed to load inquiries.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-3">📨 Inquiries</h3>

      {loading ? (
        <div className="text-center py-4">
          <div className="spinner-border text-primary" />
          <p className="mt-3">Loading inquiries...</p>
        </div>
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : inquiries.length === 0 ? (
        <div className="alert alert-info">No inquiries received yet.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inq, idx) => (
                <tr key={idx}>
                  <td>{inq.name}</td>
                  <td>{inq.email}</td>
                  <td>{inq.phone}</td>
                  <td>{inq.message}</td>
                  <td>{new Date(inq.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Inquiries;
