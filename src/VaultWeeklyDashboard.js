// Vegas-styled dashboard goes hereimport React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const VaultWeeklyDashboard = () => {
  const [dayOfWeek, setDayOfWeek] = useState(new Date().getDay());
  const [revealedDigits, setRevealedDigits] = useState([]);
  const [participants, setParticipants] = useState(112);
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

  const remainingDigits = 6 - revealedDigits.length;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold text-yellow-400 glow mb-8 uppercase text-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        Rob the Vault
      </motion.h1>

      <div className="text-6xl font-black text-green-400 mb-10 drop-shadow-xl">
        💰 ${jackpot.toLocaleString()}
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        <div className="panel w-72">
          <h2 className="text-yellow-300 text-xl mb-2">📆 Days Remaining</h2>
          <p className="text-4xl font-bold">{Math.max(0, 6 - dayOfWeek)}</p>
        </div>
        <div className="panel w-72">
          <h2 className="text-green-300 text-xl mb-2">🔢 Digits Revealed</h2>
          <p className="text-4xl font-bold tracking-widest">
            {revealedDigits.map((d, i) => <span key={i} className="mx-1">{d}</span>)}
            {Array(remainingDigits).fill('_').map((_, i) => <span key={`r${i}`} className="mx-1 text-gray-600">_</span>)}
          </p>
        </div>
        <div className="panel w-72">
          <h2 className="text-purple-300 text-xl mb-2">👥 Participants</h2>
          <p className="text-4xl font-bold">{participants}</p>
        </div>
      </div>

      <p className="mt-10 max-w-2xl text-center text-lg text-zinc-300">
        Spend <span className="text-green-400 font-bold">$20</span> for one guess to crack the 6-digit vault code. One digit revealed daily (Mon–Thu). Final guesses Friday–Sunday!
      </p>

      <p className="mt-6 text-sm text-zinc-500">
        📍 Vegas Experience • 16450 San Carlos Blvd, Fort Myers, FL
      </p>
    </div>
  );
};

export default VaultWeeklyDashboard;
