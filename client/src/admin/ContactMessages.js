import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://everseasonholidayhomes.com/api/contact')
      .then(res => {
        setTimeout(() => {
          setMessages(res.data);
          setLoading(false);
        }, 1500); // 1.5 seconds delay
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h3>Contact Messages</h3>

      {loading ? (
        <div className="text-center mt-4">
          <div className="spinner-border text-warning" role="status" />
          <p className="mt-2">Loading messages...</p>
        </div>
      ) : (
        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>Name</th><th>Email</th><th>Phone</th><th>Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, i) => (
              <tr key={i}>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.phone}</td>
                <td>{msg.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContactMessages;
