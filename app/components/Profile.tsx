"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import FadeUp from "./FadeUp";

export default function Profile() {
  return (
    <FadeUp>
<section
  id="profile"
  className="mx-auto w-full max-w-5xl px-6 py-32"
>
<motion.h2
  className="mb-12 w-full text-center text-4xl font-bold"
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  Profile
</motion.h2>

<div className="flex flex-col items-center">

<div className="md:col-span-2 mb-1 flex justify-center">
  <div className="h-44 w-44 overflow-hidden rounded-full border border-zinc-700 shadow-xl animate-[float_6s_ease-in-out_infinite]">
    <Image
      src="/aku.jpeg"
      alt="Ikhlas"
      width={180}
      height={180}
      className="h-full w-full object-cover transition-all duration-500 hover:scale-105"
    />
  </div>
</div>

<h3 className="mt-6 max-w-full px-4 text-center text-2xl font-bold sm:text-3xl">
  Ikhlas Abdi Bangsa El Kamal
</h3>

  <p className="mt-2 text-zinc-300">
    Medical Student
  </p>

  <p className="mt-1 text-zinc-500">
    Universitas Jenderal Achmad Yani
  </p>

<div className="flex flex-col items-center mt-10 mb-14">

  <p className="text-zinc-500">About Me</p>

  <p className="mt-s max-w-2xl text-center leading-8 text-zinc-300">
Just someone who believes every story leaves something behind, whether it's found in films, books, music, or Greek mythology.
  </p>

</div>

<div className="mt-1 w-full max-w-2xl">

  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
    Interests
  </p>

  <p className="mt- leading-8 text-zinc-300">
    Greek Mythology • Cinema • Books • Music
  </p>

</div>

<div className="mt-4 w-full max-w-2xl">

  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
    Currently Reading
  </p>

  <p className="mt- text-zinc-300">
    📚 The Song of Achilles
  </p>

</div>

<div className="mt-4 w-full max-w-2xl">

  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
    Currently Listening
  </p>

  <p className="mt- text-zinc-300">
    🎵 Disillusioned — Daniel Caesar
  </p>

</div>

<div className="md:col-span-2 mt-10 text-center">


  <blockquote className="mt-5 text-2xl italic leading-relaxed text-zinc-200">
    “We accept the love we think we deserve.”
  </blockquote>

  <p className="mt-1 text-sm text-zinc-500 italic">
    — The Perks of Being a Wallflower
  </p>

</div>

  </div>
</section>

<div className="-mt-20 pb-10 flex justify-center">
  <a
    href="#links"
    className="animate-bounce text-5xl text-zinc-500 transition hover:text-white"
  >
    <HiOutlineArrowLongDown />
  </a>
</div>

</FadeUp>
  );
}