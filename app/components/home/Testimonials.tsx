"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '@/data/testimonials';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 90 : -90,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 90 : -90,
    }),
  };

  return (
    <section className="testimonials py-16 bg-gray-100 dark:bg-gray-800">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        Lo que dicen nuestros clientes
      </motion.h2>
      <div className="relative max-w-3xl mx-auto">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center"
          >
            <p className="comment text-lg mb-4">&quot;{TESTIMONIALS[currentIndex].comment}&quot;</p>
            <p className="author font-semibold">- {TESTIMONIALS[currentIndex].name}, {TESTIMONIALS[currentIndex].title}</p>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-300 dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors z-20"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors z-20"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;