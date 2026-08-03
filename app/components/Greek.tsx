"use client";

import { motion } from "framer-motion";
import FadeUp from "./FadeUp";
export default function Greek() {

  return (
<FadeUp>
<section
  id="greek"
  className="mx-auto max-w-6xl px-8 py-32"
>
  <motion.h2
  className="text-center text-4xl font-bold"
  animate={{ y: [0, -8, 0] }}
  transition={{ duration: 3, repeat: Infinity, ease:"easeInOut" }}
>
  Greek Corner
</motion.h2>

<div className="mt-16 grid gap-6 md:grid-cols-3">

  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-zinc-900/60 hover:shadow-[0_0_35px_rgba(255,255,255,0.08)]">
    <h3 className="text-2xl">
      ⚔ Achilles
    </h3>

    <p className="mt-3 text-zinc-400">
      The greatest warrior of the Greeks.
      A story about glory, fate, and mortality.
    </p>
  </div>


  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-zinc-900/60 hover:shadow-[0_0_35px_rgba(255,255,255,0.08)]">
    <h3 className="text-2xl">
      🛡 Hector
    </h3>

    <p className="mt-3 text-zinc-400">
      The heart of Troy.
      A prince, warrior, and protector.
    </p>
  </div>


  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-zinc-900/60 hover:shadow-[0_0_35px_rgba(255,255,255,0.08)]">
    <h3 className="text-2xl">
      🦉 Athena
    </h3>

    <p className="mt-3 text-zinc-400">
      Wisdom, strategy, and courage.
    </p>
  </div>

</div>

</section>
</FadeUp>
  );
}