import React, { useState } from 'react';

const AdminLogin = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (form.username === 'admin' && form.password === '1234') {
      setLoading(true);
      localStorage.setItem('admin_token', 'true');

      // Simulate loading delay
      setTimeout(() => {
        window.location.href = '/admin/dashboard'; // Navigate after 2 sec
      }, 2000);
    } else {
      alert('❌ Invalid credentials');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h3 className="text-center mb-4">Admin Login</h3>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-warning mb-3" role="status" />
          <p>Logging in...</p>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="btn btn-warning w-100">Login</button>
        </form>
      )}
    </div>
  );
};

export default AdminLogin;
