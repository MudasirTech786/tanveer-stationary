"use client";

import { toast } from "react-hot-toast";
import Image from "next/image";

export const brandedSuccess = (message: string) => {
  toast.custom((t) => (
    <div
      className={`
        ${t.visible ? "animate-enter" : "animate-leave"}
        max-w-md w-full bg-white shadow-2xl rounded-2xl pointer-events-auto
        flex items-center gap-4 p-4 border-l-4 border-green-500
      `}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
        <Image src="/logo.png" alt="logo" width={28} height={28} />
      </div>

      <div className="flex-1">
        <p className="text-green-600 font-semibold text-base">
          Success
        </p>
        <p className="text-gray-600 text-sm">{message}</p>
      </div>
    </div>
  ));
};

export const brandedError = (message: string) => {
  toast.custom((t) => (
    <div
      className={`
        ${t.visible ? "animate-enter" : "animate-leave"}
        max-w-md w-full bg-white shadow-2xl rounded-2xl pointer-events-auto
        flex items-center gap-4 p-4 border-l-4 border-red-500
      `}
    >
      <div className="w-22 h-22 flex items-center justify-center bg-red-100 rounded-full">
        <Image src="/hero-logo.png" alt="logo" width={70} height={70} />
      </div>

      <div className="flex-1">
        <p className="text-red-600 font-semibold text-base">
          Error
        </p>
        <p className="text-gray-600 text-sm">{message}</p>
      </div>
    </div>
  ));
};