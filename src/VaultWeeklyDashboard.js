import React, { useEffect, useState } from 'react';

const VaultWeeklyDashboard = () => {
  const [dayOfWeek, setDayOfWeek] = useState(new Date().getDay());
  const [revealedDigits, setRevealedDigits] = useState([]);
  const [participants, setParticipants] = useState(87);
  const [jackpot, setJackpot] = useState(1000);
  const [code, setCode] = useState('738251');

  useEffect(() => {
    const digitsToReveal = Math.min(dayOfWeek, 4);
    const revealed = code.slice(0, digitsToReveal).split('');
    setRevealedDigits(revealed);

    const startDate = new Date('2025-04-07');
    const now = new Date();
    const weeksPassed = Math.floor((now - startDate) / (7 * 24 * 60 * 60 * 1000));
    setJackpot(1000 + weeksPassed * 1000);
  }, [dayOfWeek]);

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
