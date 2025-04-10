import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VaultCodeEntryGame = () => {
  const [guess, setGuess] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const correctCode = '738251'; // Update this weekly

  const handleSubmit = () => {
    if (guess.length === 6) {
      setSubmitted(true);
      setSuccess(guess === correctCode);
      setAnimationKey(prev => prev + 1);
      setGuess('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
      <motion.h2 className="text-5xl font-extrabold text-yellow-400 glow mb-8 uppercase text-center" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3 }}>
        Crack the Vault
      </motion.h2>

      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        maxLength={6}
        placeholder="Enter 6-digit code"
        className="text-black text-2xl px-6 py-4 rounded-md mb-6 text-center w-72 border-2 border-yellow-400"
      />

      <button
        onClick={handleSubmit}
        className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-xl shadow-lg"
      >
        Submit Guess
      </button>

      {submitted && (
        <motion.div
          key={animationKey}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-3xl font-semibold text-center"
        >
          {success ? (
            <motion.div
              className="text-green-400"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              🎉 You cracked the vault! Collect your reward!
            </motion.div>
          ) : (
            <span className="text-red-400">❌ Not the code. Try again tomorrow!</span>
          )}
        </motion.div>
      )}

      <p className="mt-12 text-sm text-zinc-500">
        📍 Vegas Experience • 16450 San Carlos Blvd, Fort Myers, FL
      </p>
    </div>
  );
};

export default VaultCodeEntryGame;
// Vegas-styled code entry game here
