"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#f3f4f6] text-gray-900">

      <Navbar />

      {/* HERO */}
      <section id="HOME" className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-32 md:pt-24 lg:pt-36 relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#f3f4f6] via-[#e5e7eb] to-[#f3f4f6]" />
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,#c8a24a,transparent_55%)]" />

        <div className="relative w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center lg:text-left"
          >
            <p className="text-[#b08d3c] tracking-[0.3em] text-sm uppercase">
              Stationery Trading Company
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
              TANVEER<br />
              STATIONERY<br />
              TRADING CO. L.L.C
            </h1>

            <p className="mt-6 text-gray-600 max-w-md mx-auto lg:mx-0">
              Professional stationery solutions for corporate and business environments.
            </p>

            <button className="mt-8 px-8 py-3 border border-[#b08d3c] text-[#b08d3c] hover:bg-[#b08d3c] hover:text-white transition">
              Discover More
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-white/70 backdrop-blur-md border border-gray-200 p-8 rounded-2xl"
          >
            <h2 className="text-xl font-semibold text-[#b08d3c]">About Us</h2>

            <p className="mt-6 text-gray-600">
              We provide structured stationery solutions for offices, schools, and businesses.
            </p>

            <div className="mt-6 h-[2px] w-16 bg-[#b08d3c]" />
          </motion.div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="SERVICES" className="py-24 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center text-[#b08d3c]">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14 max-w-6xl mx-auto">
          {/* (keep your existing services here) */}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="PRODUCTS" className="py-24 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-[#b08d3c]">
          Our Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-14 max-w-7xl mx-auto">
          {/* (your images here) */}
        </div>
      </section>

      {/* LOCATION */}
      <section id="LOCATION" className="py-24 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-[#b08d3c]">
          Our Location
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mt-14 max-w-7xl mx-auto">
          {/* map + info */}
        </div>
      </section>

      {/* CONTACT */}
      <section id="CONTACT" className="py-24 bg-black text-white text-center">
        <h2 className="text-3xl font-bold text-[#b08d3c]">
          Contact Us
        </h2>
      </section>

    </main>
  );
}