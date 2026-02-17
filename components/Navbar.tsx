"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 backdrop-blur-lg bg-white/60 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-purple-700">
          Tanveer Stationary
        </h1>

        <div className="space-x-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/products">Product</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
}
