import React, { useEffect, useState } from 'react';
import './VaultWeeklyDashboard.css'; // ⬅️ We’ll create this CSS file in Step 2

const VaultWeeklyDashboard = () => {
  const [dayOfWeek, setDayOfWeek] = useState(new Date().getDay());
  const [revealedDigits, setRevealedDigits] = useState([]);
  const [participants, setParticipants] = useState(87);
  const [jackpot, setJackpot] = useState(1000);
  const [code, setCode] = useState('738251');

  useEffect(() => {
    const digitsToReveal = Math.min(dayOfWeek >= 1 && dayOfWeek <= 4 ? dayOfWeek - 1 : 4, 4);
    const revealed = code.slice(0, digitsToReveal).split('');
    setRevealedDigits(revealed);

    let newJackpot = 1000;
    for (let i = 0; i < digitsToReveal; i++) {
      newJackpot *= 0.8;
    }

    setJackpot(Math.floor(newJackpot));
  }, [dayOfWeek, code]);

  return (
    <div className="dashboard-container">
      <div className="panel">
        <h2 className="glow-text">💵 Jackpot</h2>
        <p className="value">${jackpot.toLocaleString()}</p>
      </div>
      <div className="panel">
        <h2 className="glow-text">📅 Days Remaining</h2>
        <p className="value">{Math.max(0, 6 - dayOfWeek)}</p>
      </div>
      <div className="panel">
        <h2 className="glow-text">🔢 Revealed Digits</h2>
        <p className="value" style={{ letterSpacing: '10px' }}>
          {revealedDigits.join(' ')}{' '}
          {Array(6 - revealedDigits.length).fill('_').join(' ')}
        </p>
      </div>
      <div className="panel">
        <h2 className="glow-text">👥 Participants</h2>
        <p className="value">{participants}</p>
      </div>
      <div className="footer">
        📍 Vegas Experience • 16450 San Carlos Blvd, Fort Myers, FL
      </div>
    </div>
  );
};

export default VaultWeeklyDashboard;
