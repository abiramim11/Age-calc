import React, { useState } from 'react';
import './style.css';

function App() {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    setAge(age);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Age Calculator</h1>
      <input
        type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <button onClick={calculateAge} style={{ marginLeft: '10px', padding: '10px', fontSize: '16px' }}>
        Calculate Age
      </button>
      {age !== null && (
        <div style={{ marginTop: '20px', fontSize: '20px' }}>
          <p>Your age is: {age} years</p>
        </div>
      )}
    </div>
  );
}

export default App;
