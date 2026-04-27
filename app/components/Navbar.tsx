"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setVisible(true); // show again on scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // AUTO HIDE AFTER 2 SECONDS
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
    setVisible(true); // show when user interacts
  };

  const menu = ["HOME", "SERVICES", "PRODUCTS", "LOCATION", "CONTACT"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500
      ${visible ? "translate-y-0" : "-translate-y-full"}
      ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl py-3 border-b border-yellow-500/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* LOGO */}
        <div
          className={`flex items-center rounded-xl px-3 py-2 transition-all duration-500 ${
            scrolled
              ? "bg-white/90 shadow-lg"
              : "bg-black/5 border border-black/10"
          }`}
        >
          <Image src="/logo1.png" alt="Logo" width={110} height={110} />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-sm font-semibold uppercase tracking-wider">
          {menu.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`relative group transition ${
                scrolled ? "text-white" : "text-black"
              }`}
            >
              <span className="group-hover:text-[#b08d3c] transition">
                {item}
              </span>

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#b08d3c] transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className={`md:hidden text-3xl ${
            scrolled ? "text-white" : "text-black"
          }`}
          onClick={() => {
            setOpen(!open);
            setVisible(true);
          }}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 mx-4 rounded-2xl bg-black/90 backdrop-blur-xl border border-yellow-500/20 py-8 flex flex-col items-center gap-6 text-white uppercase tracking-widest">
          {menu.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="hover:text-yellow-400"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}