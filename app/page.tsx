"use client";

import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#f3f4f6] text-gray-900">

      <Navbar />

      {/* HERO */}
      <section
        id="HOME"
        className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-32 md:pt-24 lg:pt-36 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#f3f4f6] via-[#e5e7eb] to-[#f3f4f6]" />
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,#c8a24a,transparent_55%)]" />

        <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center lg:text-left"
          >
            <p className="text-[#b08d3c] tracking-[0.3em] text-xs md:text-sm uppercase">
              Stationery Trading Company
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 lg:mt-6 leading-tight">
              TANVEER<br />
              STATIONERY<br />
              TRADING CO. L.L.C
            </h1>

            <p className="mt-5 md:mt-6 text-gray-600 max-w-md mx-auto lg:mx-0 text-sm md:text-base">
              Professional stationery solutions that enhance productivity,
              organization, and business communication across corporate
              environments.
            </p>

            <button className="mt-7 md:mt-8 px-7 md:px-8 py-2.5 md:py-3 border border-[#b08d3c] text-[#b08d3c] hover:bg-[#b08d3c] hover:text-white transition">
              Discover More
            </button>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-white/70 backdrop-blur-md border border-gray-200 p-6 md:p-8 lg:p-10 rounded-2xl shadow-sm max-w-xl mx-auto lg:max-w-none"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-[#b08d3c]">
              About Us
            </h2>

            <p className="mt-5 md:mt-6 text-gray-600 leading-relaxed text-sm md:text-base">
              We provide structured stationery solutions for offices,
              schools, and institutions focusing on efficiency and professionalism.
            </p>

            <p className="mt-3 md:mt-4 text-gray-500 text-sm md:text-base">
              Our goal is to support businesses with reliable, high-quality office essentials.
            </p>

            <div className="mt-6 md:mt-8 h-[2px] w-16 md:w-20 bg-[#b08d3c]" />
          </motion.div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="SERVICES" className="py-24 bg-gray-100 px-6">

        <h2 className="text-3xl font-bold text-center text-[#b08d3c]">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14 max-w-6xl mx-auto">

          {[
            { icon: "📎", title: "Office Stationery Supply", desc: "Daily office essentials ensuring smooth workflow." },
            { icon: "🏷️", title: "Corporate Branding", desc: "Customized business stationery solutions." },
            { icon: "📦", title: "Bulk Supply Management", desc: "Efficient procurement for companies." },
            { icon: "🖨️", title: "Printing Services", desc: "High-quality professional printing." },
            { icon: "🎓", title: "School Supplies", desc: "Educational stationery solutions." },
            { icon: "🏢", title: "Office Setup", desc: "Complete startup office setup." }
          ].map((item) => (
            <div key={item.title} className="bg-white p-8 rounded-2xl border hover:border-[#b08d3c]/40 transition">

              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>

            </div>
          ))}

        </div>
      </section>

      {/* PRODUCTS */}
      <section id="PRODUCTS" className="py-24 px-6 bg-gray-50">

        <h2 className="text-3xl font-bold text-center text-[#b08d3c]">
          Our Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-14 max-w-7xl mx-auto">

          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl bg-white shadow-sm">

              <img
                src={`/products/${i + 1}.png`}
                className="w-full h-32 md:h-40 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 group-hover:bg-black/20 transition" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-[#b08d3c] rounded-full" />

            </div>
          ))}

        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="py-24 px-6 bg-white">

        <h2 className="text-3xl font-bold text-center text-[#b08d3c]">
          Our Location
        </h2>

        <div className="max-w-5xl mx-auto mt-14">

          {/* MAP ONLY */}
          <div className="relative rounded-2xl overflow-hidden border shadow-lg h-[450px]">

            <iframe
              src="https://www.google.com/maps?q=Dubai&output=embed"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />

            {/* Overlay button */}
            <div className="absolute inset-0 flex items-center justify-center">

              <a
                href="https://maps.app.goo.gl/vaANFpBxKrqDUVmd9"
                target="_blank"
                className="px-6 py-3 bg-[#b08d3c] text-white rounded-xl hover:bg-black transition"
              >
                Open in Google Maps
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-24 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f3f4f6] via-[#e5e7eb] to-[#f3f4f6]" />
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,#c8a24a,transparent_55%)]" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-14">

            <h2 className="text-3xl font-bold text-[#b08d3c]">
              Contact Us
            </h2>

            <p className="mt-4 text-gray-600">
              Let’s build something professional together
            </p>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT INFO */}
            <div>

              <h3 className="text-xl font-semibold text-gray-900">
                TANVEER STATIONERY TRADING CO. L.L.C
              </h3>

              <p className="text-gray-600 mt-3">
                Professional stationery & office supply solutions in UAE.
              </p>

              <div className="mt-8 space-y-4 text-gray-600">

                <p>📍 Dubai, United Arab Emirates</p>
                <p>📞 +971 XX XXX XXXX</p>
                <p>✉️ info@tanveerstationery.com</p>
                <p>🕒 Mon - Sat | 9:00 AM - 6:00 PM</p>

              </div>

              <div className="mt-8 h-[2px] w-20 bg-[#b08d3c]" />

            </div>

            {/* RIGHT FORM */}
            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#b08d3c] outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#b08d3c] outline-none"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#b08d3c] outline-none"
                />

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#b08d3c] outline-none resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-[#b08d3c] text-white font-semibold rounded-xl hover:bg-black transition"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}