"use client";

import { useEffect, useState } from "react";

const words = [
  "Reading myths...",
  "Watching films...",
  "Listening to music...",
  "Learning medicine...",
  "Dreaming of Ithaca...",
];

export default function TypingText() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let current = 0;

    const typing = setInterval(() => {
      setDisplay(words[index].slice(0, current + 1));
      current++;

      if (current === words[index].length) {
        clearInterval(typing);

        setTimeout(() => {
          setIndex((prev) => (prev + 1) % words.length);
          setDisplay("");
        }, 1500);
      }
    }, 70);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <p className="mt-2 h-8 text-xl text-zinc-400">
      {display}
      <span className="animate-pulse">|</span>
    </p>
  );
}