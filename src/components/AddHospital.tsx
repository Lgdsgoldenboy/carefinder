// src/components/AddHospital.tsx
import React, { useState } from 'react';
import { db } from '../firebaseConfig'; // Ensure this path is correct
import { collection, addDoc } from 'firebase/firestore';

const AddHospital: React.FC = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleAddHospital = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'hospitals'), {
        name,
        location,
      });
      setSuccess('Hospital added successfully!');
      setName('');
      setLocation('');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Add Hospital</h2>
      <form onSubmit={handleAddHospital}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Hospital Name"
          required
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          required
        />
        <button type="submit">Add Hospital</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default AddHospital;
