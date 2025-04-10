import React, { useState } from 'react';

const VaultCodeEntryGame = () => {
  const [guess, setGuess] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const correctCode = '738251';

  const handleSubmit = () => {
    if (guess.length === 6) {
      setSubmitted(true);
      setSuccess(guess === correctCode);
      setGuess('');
    }
  };

  return (
    <div>
      <div className="panel">
        <h2 className="glow-text">🔐 Crack the Vault</h2>
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          maxLength={6}
          placeholder="Enter 6-digit code"
          style={{
            fontSize: '1.5rem',
            padding: '10px',
            borderRadius: '10px',
            border: '2px solid gold',
            textAlign: 'center',
            marginTop: '10px',
            width: '200px'
          }}
        />
        <br />
        <button onClick={handleSubmit} className="button" style={{ marginTop: '15px' }}>
          Submit
        </button>
        {submitted && (
          <div style={{ marginTop: '15px', fontSize: '1.5rem' }}>
            {success ? (
              <span style={{ color: 'greenyellow' }}>🎉 You cracked the vault!</span>
            ) : (
              <span style={{ color: 'red' }}>❌ Wrong code. Try again!</span>
            )}
          </div>
        )}
      </div>
      <p style={{ marginTop: '20px', color: '#aaa' }}>
        📍 Vegas Experience • 16450 San Carlos Blvd, Fort Myers, FL
      </p>
    </div>
  );
};

export default VaultCodeEntryGame;
