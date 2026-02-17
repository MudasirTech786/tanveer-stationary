"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Product = {
  name: string;
  price: number;
  image: string;
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const handleOrder = () => {
    const phone = "923006182939"; // Replace with your WhatsApp number
    const message = `Hello Tanveer Stationary,
I want to order:

Product: ${product.name}
Price: Rs ${product.price}

Please confirm availability.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white/70 backdrop-blur-lg rounded-3xl p-4 shadow-xl flex flex-col items-center"
    >
      <div className="w-full h-48 relative rounded-2xl overflow-hidden mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      <h2 className="text-lg md:text-xl font-semibold text-gray-800 text-center">
        {product.name}
      </h2>
      <p className="text-green-600 font-bold mt-1 text-center">Rs {product.price}</p>

      <button
        onClick={handleOrder}
        className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full w-full transition transform hover:scale-105 shadow-lg"
      >
        Order on WhatsApp
      </button>
    </motion.div>
  );
}
