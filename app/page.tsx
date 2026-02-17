"use client";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <section className="py-20 px-8 bg-[#f3f4f6]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14 text-purple-700"
        >
          Featured Products
        </motion.h2>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Why Choose Tanveer Stationary?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p>Durable, high-quality stationery products you can trust.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
            <p>Best prices without compromising on quality.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p>Quick WhatsApp order confirmation and speedy delivery.</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-8 bg-[#f3f4f6]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14 text-purple-700"
        >
          Customer Testimonials
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8"
          >
            <p className="italic">
              “Absolutely love the notebooks and pens! Fast WhatsApp order
              confirmation. Highly recommend!”
            </p>
            <h4 className="mt-4 font-bold text-purple-600">– Ayesha K.</h4>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8"
          >
            <p className="italic">
              “Tanveer Stationary is my go-to store for all office supplies.
              Quality and prices are perfect.”
            </p>
            <h4 className="mt-4 font-bold text-purple-600">– Ali R.</h4>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="py-20 px-8 relative text-white bg-gradient-to-r from-purple-600 to-pink-500 text-center rounded-3xl mx-8 md:mx-20 mt-16 shadow-xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Ready to Upgrade Your Stationery?
        </motion.h2>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/products"
          className="bg-white text-purple-700 px-10 py-4 rounded-full font-semibold shadow-lg"
        >
          Browse Collection
        </motion.a>
      </section>
    </main>
  );
}
