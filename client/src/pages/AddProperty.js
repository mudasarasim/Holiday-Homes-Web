import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddProperty = () => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    tag: '',
    image: null,
  });

  const [properties, setProperties] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [oldImage, setOldImage] = useState(null); // stores previous image for preview
  

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/property/all');
      setProperties(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.location || !formData.tag) {
      Swal.fire('Error', 'All fields are required', 'error');
      return;
    }

    try {
  const data = new FormData();
  data.append('title', formData.title);
  data.append('location', formData.location);
  data.append('tag', formData.tag);
  if (formData.image) data.append('image', formData.image);

  if (editingId) {
    const res = await axios.put(`http://localhost:5001/api/property/update/${editingId}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    Swal.fire('Success', res.data.message, 'success');
  } else {
    const res = await axios.post('http://localhost:5001/api/property/add', data);
    Swal.fire('Success', res.data.message, 'success');
  }

  setFormData({ title: '', location: '', tag: '', image: null });
  setEditingId(null);
  setOldImage(null);
  fetchProperties();
} catch (err) {
  console.error(err);
  Swal.fire('Error', 'Failed to save property', 'error');
}
  }

  const handleEdit = (property) => {
    setFormData({
      title: property.title,
      location: property.location,
      tag: property.tag,
      image: null,
    });
    setEditingId(property.id);
    setOldImage(property.image);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axios.delete(`http://localhost:5001/api/property/delete/${id}`);
        Swal.fire('Deleted!', res.data.message, 'success');
        fetchProperties();
      } catch (err) {
        console.error(err);
        Swal.fire('Error', 'Delete failed', 'error');
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>{editingId ? 'Edit Property' : 'Add New Property'}</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input type="text" className="form-control" name="location" value={formData.location} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Tag</label>
          <input type="text" className="form-control" name="tag" value={formData.tag} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input type="file" className="form-control" name="image" accept="image/*" onChange={handleImageChange} />
        </div>

        {/* Show old image if in edit mode and no new image is selected */}
        {editingId && oldImage && (
          <div className="mb-3">
            <label className="form-label">Current Image</label><br />
            <img
              src={`http://localhost:5001/uploads/properties/${oldImage}`}
              alt="Current"
              width="100"
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          {editingId ? 'Update Property' : 'Add Property'}
        </button>
      </form>

      <hr />
      <h3>All Properties</h3>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Tag</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((prop) => (
            <tr key={prop.id}>
              <td>{prop.title}</td>
              <td>{prop.location}</td>
              <td>{prop.tag}</td>
              <td>
                <img
                  src={`http://localhost:5001/uploads/properties/${prop.image}`}
                  alt={prop.title}
                  width="100"
                />
              </td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(prop)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(prop.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddProperty;
