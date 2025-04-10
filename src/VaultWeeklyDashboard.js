import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const VaultWeeklyDashboard = () => {
  const [dayOfWeek, setDayOfWeek] = useState(new Date().getDay());
  const [revealedDigits, setRevealedDigits] = useState([]);
  const [participants, setParticipants] = useState(0);
  const [jackpot, setJackpot] = useState(1000);
  const [code, setCode] = useState('123456');

  useEffect(() => {
    const digitsToReveal = Math.min(dayOfWeek, 4);
    const revealed = code.slice(0, digitsToReveal).split('');
    setRevealedDigits(revealed);
    setParticipants(87); // Optional: replace with real logic
    const startDate = new Date('2025-04-07');
    const now = new Date();
    const weeksPassed = Math.floor((now - startDate) / (7 * 24 * 60 * 60 * 1000));
    setJackpot(1000 + weeksPassed * 1000);
  }, [dayOfWeek]);

  const remainingDigits = 6 - revealedDigits.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex flex-col items-center justify-center p-10">
      <motion.h1
        className="text-5xl font-extrabold text-yellow-400 mb-6 tracking-wide uppercase"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        Rob the Vault
      </motion.h1>

      <div className="text-6xl font-black text-green-400 mb-10 drop-shadow-lg">
        💰 ${jackpot.toLocaleString()}
      </div>

      <div className="flex gap-6 mb-8 flex-wrap justify-center">
        <div className="bg-zinc-800 rounded-xl p-6 text-center w-72 shadow-md border border-green-500">
          <h2 className="text-xl font-semibold mb-2">📆 Days
// VaultWeeklyDashboard.js goes here
