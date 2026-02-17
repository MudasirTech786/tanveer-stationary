"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-poster.jpg"
        className="absolute w-full h-full object-cover"
      >
        <source src="/stationary-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center px-4 md:px-0"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Elevate Your Creativity
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Premium Stationery for Schools, Offices & Artists
        </p>

        <Link
          href="/products"
          className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-lg shadow-xl transition transform hover:scale-105"
        >
          Explore Collection
        </Link>
      </motion.div>
    </section>
  );
}
