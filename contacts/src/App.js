import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

function App() {
  const [refresh, setRefresh] = useState(0);

  const handleContactAdded = () => {
    setRefresh(r => r + 1);
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Contact Book</h1>
              <ContactForm onContactAdded={handleContactAdded} />
            </div>
          </div>
          <div className="card shadow-sm">
            <div className="card-body">
              <ContactList refresh={refresh} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
