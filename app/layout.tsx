import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        {children}

        <Footer />

        {/* ✅ TOASTER (GLOBAL) */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              borderRadius: "12px",
              background: "#111",
              color: "#fff",
              padding: "12px 16px",
            },
            success: {
              iconTheme: {
                primary: "#b08d3c",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ff4d4f",
                secondary: "#fff",
              },
            },
          }}
        />

      </body>
    </html>
  );
}