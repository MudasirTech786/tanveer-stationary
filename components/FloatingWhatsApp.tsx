"use client";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/92XXXXXXXXXX"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-2xl text-white"
    >
      <MessageCircle size={28} />
    </a>
  );
}
