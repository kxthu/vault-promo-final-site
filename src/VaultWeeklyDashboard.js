import React, { useEffect, useState } from 'react';

const VaultWeeklyDashboard = () => {
  const [dayOfWeek, setDayOfWeek] = useState(new Date().getDay()); // 0 = Sunday, 1 = Monday, ...
  const [revealedDigits, setRevealedDigits] = useState([]);
  const [participants, setParticipants] = useState(87);
  const [jackpot, setJackpot] = useState(1000);
  const [code, setCode] = useState('738251');

  useEffect(() => {
    const digitsToReveal = Math.min(dayOfWeek >= 1 && dayOfWeek <= 4 ? dayOfWeek - 1 : 4, 4); // Mon-Thu reveal 1-4 digits
    const revealed = code.slice(0, digitsToReveal).split('');
    setRevealedDigits(revealed);

    // Jackpot logic: starts at 1000, loses 20% for each digit revealed (max 4)
    let newJackpot = 1000;
    for (let i = 0; i < digitsToReveal; i++) {
      newJackpot *= 0.8;
    }

    setJackpot(Math.floor(newJackpot)); // round down to nearest dollar
  }, [dayOfWeek, code]);

  return (
    <div>
      <div className="panel">
        <h2 className="glow-text">💵 Jackpot</h2>
        <p style={{ fontSize: '2rem', color: 'greenyellow' }}>${jackpot.toLocaleString()}</p>
      </div>
      <div className="panel">
        <h2 className="glow-text">📅 Days Remaining</h2>
        <p style={{ fontSize: '2rem' }}>{Math.max(0, 6 - dayOfWeek)}</p>
      </div>
      <div className="panel">
        <h2 className="glow-text">🔢 Revealed Digits</h2>
        <p style={{ fontSize: '2rem', letterSpacing: '10px' }}>
          {revealedDigits.join(' ')}{' '}
          {Array(6 - revealedDigits.length).fill('_').join(' ')}
        </p>
      </div>
      <div className="panel">
        <h2 className="glow-text">👥 Participants</h2>
        <p style={{ fontSize: '2rem' }}>{participants}</p>
      </div>
      <p style={{ marginTop: '20px', color: '#aaa' }}>
        📍 Vegas Experience • 16450 San Carlos Blvd, Fort Myers, FL
      </p>
    </div>
  );
};

export default VaultWeeklyDashboard;
