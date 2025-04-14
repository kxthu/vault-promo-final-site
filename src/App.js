import React, { useState } from 'react';
import VaultWeeklyDashboard from './components/VaultWeeklyDashboard';
import VaultCodeEntryGame from './VaultCodeEntryGame';
import './App.css'; // Make sure you import CSS for styling

const App = () => {
  const [view, setView] = useState('dashboard');

  return (
    <div className="app-container">
      <div className="vault-header">
        <h1 className="glow-text">💰 Rob The Vault 💰</h1>
        <div className="nav-buttons">
          <button className="button" onClick={() => setView('dashboard')}>
            Dashboard
          </button>
          <button className="button" onClick={() => setView('game')}>
            Enter Code
          </button>
        </div>
      </div>
      <div className="vault-content">
        {view === 'dashboard' ? <VaultWeeklyDashboard /> : <VaultCodeEntryGame />}
      </div>
    </div>
  );
};

export default App;
