import React, { useState } from 'react';
import VaultWeeklyDashboard from './VaultWeeklyDashboard';
import VaultCodeEntryGame from './VaultCodeEntryGame';

const App = () => {
  const [view, setView] = useState('dashboard');

  return (
    <div>
      <h1 className="glow-text" style={{ fontSize: '3rem', marginTop: '1rem' }}>
        💰 Rob The Vault 💰
      </h1>
      <div style={{ margin: '20px' }}>
        <button className="button" onClick={() => setView('dashboard')}>
          Dashboard
        </button>
        <button className="button" onClick={() => setView('game')}>
          Enter Code
        </button>
      </div>
      {view === 'dashboard' ? <VaultWeeklyDashboard /> : <VaultCodeEntryGame />}
    </div>
  );
};

export default App;
