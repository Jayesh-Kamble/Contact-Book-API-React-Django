import React, { useEffect, useState } from 'react';

function ContactList({ refresh }) {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', email: '', phone: '', address: '' });
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchContacts = () => {
    setLoading(true);
    setError(null);
    fetch('https://contactsapp.pythonanywhere.com/api/contacts/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setContacts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchContacts();
  }, [refresh]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) return;
    try {
      const response = await fetch(`https://contactsapp.pythonanywhere.com/api/contacts/${id}/`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete contact');
      fetchContacts();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEditClick = (contact) => {
    setEditingId(contact.id);
    setEditForm({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      address: contact.address,
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://contactsapp.pythonanywhere.com/api/contacts/${editingId}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editForm),
      });
      if (!response.ok) throw new Error('Failed to update contact');
      setEditingId(null);
      setEditForm({ name: '', email: '', phone: '', address: '' });
      fetchContacts();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({ name: '', email: '', phone: '', address: '' });
  };

  return (
    <div>
      <h2 className="mb-3">Contact List</h2>
      {loading && <div className="alert alert-info">Loading...</div>}
      {error && <div className="alert alert-danger">Error: {error}</div>}
      {!loading && !error && (
        <ul className="list-group">
          {Array.isArray(contacts) && contacts.length > 0 ? (
            contacts.map(contact => (
              <li key={contact.id} className="list-group-item">
                {editingId === contact.id ? (
                  <form onSubmit={handleEditSubmit} className="mb-2">
                    <div className="row g-2">
                      <div className="col-md-3">
                        <input type="text" name="name" className="form-control" value={editForm.name} onChange={handleEditChange} required />
                      </div>
                      <div className="col-md-3">
                        <input type="email" name="email" className="form-control" value={editForm.email} onChange={handleEditChange} required />
                      </div>
                      <div className="col-md-2">
                        <input type="text" name="phone" className="form-control" value={editForm.phone} onChange={handleEditChange} required />
                      </div>
                      <div className="col-md-3">
                        <input type="text" name="address" className="form-control" value={editForm.address} onChange={handleEditChange} required />
                      </div>
                    </div>
                    <div className="mt-2">
                      <button type="submit" className="btn btn-success btn-sm me-2">Save</button>
                      <button type="button" className="btn btn-secondary btn-sm" onClick={handleCancelEdit}>Cancel</button>
                    </div>
                  </form>
                ) : (
                  <>
                    <strong>{contact.name}</strong><br />
                    <span className="text-muted">Email:</span> {contact.email}<br />
                    <span className="text-muted">Phone:</span> {contact.phone}<br />
                    <span className="text-muted">Address:</span> {contact.address}<br />
                    <button className="btn btn-warning btn-sm me-2 mt-2" onClick={() => handleEditClick(contact)}>Edit</button>
                    <button className="btn btn-danger btn-sm mt-2" onClick={() => handleDelete(contact.id)}>Delete</button>
                  </>
                )}
              </li>
            ))
          ) : (
            <li className="list-group-item">No contacts found.</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
