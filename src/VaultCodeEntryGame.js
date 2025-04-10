import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VaultCodeEntryGame = () => {
  const [guess, setGuess] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const correctCode = '123456'; // Replace with real secret

  const handleSubmit = () => {
    if (guess.length === 6) {
      setSubmitted(true);
      setSuccess(guess === correctCode);
      setAnimationKey(prev => prev + 1);
      setGuess('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-zinc-900 text-white flex flex-col items-center justify-center p-10">
      <motion.h2 className="text-4xl font-bold text-yellow-400 mb-8 uppercase tracking-wide" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3 }}>
        Code Entry Game
      </motion.h2>

      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        maxLength={6}
        placeholder="Enter 6-digit code"
        className="text-black text-xl p-4 rounded-md mb-6 w-72 text-center"
      />

      <button
        onClick={handleSubmit}
        className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg text-xl"
      >
        Submit Guess
      </button>

      {submitted && (
        <motion.div
          key={animationKey}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-2xl font-semibold"
        >
          {success ? (
            <motion.div
              className="text-green-400"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              🎉 Congratulations! You cracked the vault!
            </motion.div>
          ) : (
            <span className="text-red-400">❌ Not the code. Try again tomorrow!</span>
          )}
        </motion.div>
      )}

      <div className="mt-12 text-sm text-gray-500">
        📍 Vegas Experience • 16450 San Carlos Blvd, Fort Myers, FL
      </div>
    </div>
  );
};

export default VaultCodeEntryGame;
// VaultCodeEntryGame.js goes here
