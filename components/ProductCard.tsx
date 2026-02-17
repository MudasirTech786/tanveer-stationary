"use client";

import Image from "next/image";

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
    const phone = "92XXXXXXXXXX"; // Replace with your WhatsApp number

    const message = `Hello Tanveer Stationary,
I want to order:

Product: ${product.name}
Price: Rs ${product.price}

Please confirm availability.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 hover:scale-105 transition duration-300">
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={300}
        className="rounded-xl"
      />

      <h2 className="text-xl font-semibold mt-3">{product.name}</h2>
      <p className="text-green-600 font-bold">Rs {product.price}</p>

      <button
        onClick={handleOrder}
        className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl w-full"
      >
        Order on WhatsApp
      </button>
    </div>
  );
}
