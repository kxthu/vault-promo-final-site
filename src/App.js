import React, { useState } from 'react';
import VaultWeeklyDashboard from './VaultWeeklyDashboard';
import VaultCodeEntryGame from './VaultCodeEntryGame';

const App = () => {
  const [view, setView] = useState('dashboard');

  return (
    <div className="min-h-screen text-white">
      <div className="flex justify-center gap-4 p-6 bg-black border-b-4 border-yellow-400">
        <button
          onClick={() => setView('dashboard')}
          className={`px-6 py-2 text-lg rounded-full font-bold uppercase tracking-wide ${
            view === 'dashboard' ? 'bg-yellow-400 text-black glow' : 'bg-gray-800'
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setView('game')}
          className={`px-6 py-2 text-lg rounded-full font-bold uppercase tracking-wide ${
            view === 'game' ? 'bg-green-400 text-black glow' : 'bg-gray-800'
          }`}
        >
          Enter Code
        </button>
      </div>

      {view === 'dashboard' && <VaultWeeklyDashboard />}
      {view === 'game' && <VaultCodeEntryGame />}
    </div>
  );
};

export default App;
// App component will be styled
