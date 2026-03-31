"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold text-gradient"
      >
        Frontend Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 mt-4 max-w-xl text-lg"
      >
        Fast, responsive, and visually stunning web applications with React and Next.js. Clean code, modern design, and seamless user experience.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-4 mt-8"
      >
        <a href="#projects">
          <button className="px-6 py-3 rounded-full bg-purple-500 text-white hover:scale-105 transition cursor-pointer">
          View Work
        </button>
        </a>
        
        <a href="#contact">
          <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition cursor-pointer">
          Contact Me
        </button>
        </a>
        
      </motion.div>
    </section>
  );
}