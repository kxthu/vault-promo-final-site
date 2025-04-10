import React, { useState } from 'react';
import VaultWeeklyDashboard from './VaultWeeklyDashboard';
import VaultCodeEntryGame from './VaultCodeEntryGame';

const App = () => {
  const [view, setView] = useState('dashboard');

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex justify-center gap-6 p-6 bg-zinc-900 border-b border-zinc-700">
        <button
          onClick={() => setView('dashboard')}
          className={`px-6 py-2 text-lg rounded ${view === 'dashboard' ? 'bg-yellow-400 text-black' : 'bg-gray-700'}`}
        >
          View Dashboard
        </button>
        <button
          onClick={() => setView('game')}
          className={`px-6 py-2 text-lg rounded ${view === 'game' ? 'bg-green-400 text-black' : 'bg-gray-700'}`}
        >
          Code Entry Game
        </button>
      </div>
      {view === 'dashboard' && <VaultWeeklyDashboard />}
      {view === 'game' && <VaultCodeEntryGame />}
    </div>
  );
};

export default App;
// App.js goes here
