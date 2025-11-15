// app/components/home/Hero.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* CSS Fallback Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient-xy opacity-50"></div>

      {/* Placeholder for WebGL effect */}
      <div className="absolute inset-0 z-10 webgl-effect-placeholder"></div>

      <motion.div
        className="hero-content relative z-20 text-center text-white p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-5xl md:text-7xl font-bold mb-4" variants={itemVariants}>
          Guardia Digital
        </motion.h1>
        <motion.p className="text-xl md:text-2xl mb-8" variants={itemVariants}>
          Protegiendo tu presencia digital con tecnología de vanguardia.
        </motion.p>
        <motion.button className="cta-button bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors" variants={itemVariants}>
          Iniciar solicitud
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
