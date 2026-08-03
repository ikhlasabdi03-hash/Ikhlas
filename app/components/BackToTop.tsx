"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-xl backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
    >
      ↑
    </button>
  );
}