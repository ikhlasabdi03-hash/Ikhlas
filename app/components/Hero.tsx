"use client";

import Image from "next/image";
import TypingText from "./TypingText";
import { motion } from "framer-motion";

import {
  FaInstagram,
  FaSpotify,
  FaGoodreads,
} from "react-icons/fa";

import { SiLetterboxd } from "react-icons/si";
import { HiChevronDown } from "react-icons/hi2";

const socialLinks = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    username: "@abdiikhlas___",
    url: "https://www.instagram.com/abdiikhlas___?igsh=MTVqamdpMGsyM2gyag%3D%3D&utm_source=qr",
  },
  {
    name: "Spotify",
    icon: <FaSpotify />,
    username: "@Ikhlasabdi",
    url: "https://open.spotify.com/user/9oe53z77xe37mqaex1xt89uev?si=6e380763bee347e5",
  },
  {
    name: "Goodreads",
    icon: <FaGoodreads />,
    username: "@elabe",
    url: "https://www.goodreads.com/user/show/94772283-abe",
  },
  {
    name: "Letterboxd",
    icon: <SiLetterboxd />,
    username: "@elabe",
    url: "https://boxd.it/9l3uR",
  },
];

export default function Hero() {
  return (
    <>
       <section
  id="home"
  className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-12 px-6 pt-36 pb-24 md:flex-row md:items-center md:justify-between md:px-8 md:pt-24"
>
      
       <div className="max-w-xl space-y-6 text-center md:text-left">
      
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Just a little corner of mine.
          </p>
      
<div className="relative inline-block">
  {/* Night mist */}
  <div
    className="
      absolute
      left-1/2
      top-[45%]
      -translate-x-1/2
      -translate-y-1/2
      h-40
      w-56
      md:h-80
      md:w-[520px]
      rounded-full
      bg-gradient-to-r
      from-sky-400/15
      via-cyan-300/10
      to-indigo-500/15
      blur-[100px]
      -z-10
    "
  />

  <motion.h1 
  whileHover={{
  scale: 1.03,
  letterSpacing: "0.04em",
}}
transition={{
  duration: 0.25,
}}
  className="mt-6 text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white transition-all duration-500 hover:scale-105">
    Ιχλας
  </motion.h1>
</div>
      
          <p className="mt-5 text-xl md:text-2xl text-zinc-300">
            Medical Student
          </p>
      
      
      <TypingText />
      
          <p className="mt-4 max-w-xl text-zinc-500 leading-8">
            Movies • Reading • Music • Greek Mythology
          </p>
  
      
      <div className="mt-1 space-y-3 text-center md:text-left text-zinc-400">
      
        <p>
          📚 Currently Reading:
          <span className="text-white"> The Song of Achilles</span>
        </p>
      
        <p>
          🎵 Currently Listening:
          <span className="text-white"> Disillusioned - Daniel Caesar</span>
        </p>
      
      </div>
      
      <div className="mt-10 flex flex-wrap gap-3 text-sm justify-center md:justify-start">
      
        <span className="rounded-full border border-zinc-700 px-4 py-2">
          Medical Student
        </span>
      
        <span className="rounded-full border border-zinc-700 px-4 py-2">
          23
        </span>
      
        <span className="rounded-full border border-zinc-700 px-4 py-2">
          Pisces
        </span>
      
        <span className="rounded-full border border-zinc-700 px-4 py-2">
          INFJ
        </span>
      
        <span className="rounded-full border border-zinc-700 px-4 py-2">
          Indonesia
        </span>
      
      </div>
      
        </div>
      

        <div className="hidden md:flex relative w-[420px] h-[420px] items-center justify-center">

        <motion.div
  animate={{
    opacity: [0.15, 0.25, 0.15],
    scale: [1, 1.05, 1],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    w-[360px]
    h-[360px]
    rounded-full
    bg-gradient-to-br
    from-sky-500/10
    via-cyan-400/5
    to-indigo-500/10
    blur-[90px]
  "
/>

<svg
  className="absolute inset-0 w-full h-full opacity-30"
  viewBox="0 0 420 420"
>
  <line x1="90" y1="90" x2="150" y2="120" stroke="#94a3b8" />
  <line x1="150" y1="120" x2="190" y2="70" stroke="#94a3b8" />
  <line x1="190" y1="70" x2="250" y2="110" stroke="#94a3b8" />
  <line x1="250" y1="110" x2="300" y2="180" stroke="#94a3b8" />

  <line x1="120" y1="250" x2="170" y2="300" stroke="#94a3b8" />
  <line x1="170" y1="300" x2="230" y2="260" stroke="#94a3b8" />
  <line x1="230" y1="260" x2="300" y2="320" stroke="#94a3b8" />
</svg>

{[
  [90,90],
  [150,120],
  [190,70],
  [250,110],
  [300,180],
  [120,250],
  [170,300],
  [230,260],
  [300,320],
].map(([x,y], i) => (
  <motion.div
    key={i}
    animate={{
      opacity:[0.4,1,0.4],
      scale:[1,1.5,1]
    }}
    transition={{
      duration:2 + i*0.2,
      repeat:Infinity,
    }}
    className="absolute h-2 w-2 rounded-full bg-white shadow-[0_0_10px_white]"
    style={{
      left:x,
      top:y,
    }}
  />
))}
      
        {socialLinks.map((social) => (
         <a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between gap-10 border-b border-zinc-800 pb-3 text-zinc-400 transition-all duration-300 hover:border-white hover:text-white"
      >
           <span className="flex items-center gap-3">
        <span className="text-2xl">
          {social.icon}
        </span>
      
        <span>{social.name}</span>
      </span>
      
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        ))}
      
      </div>
      
      </section>

<div className="hidden md:flex -mt-28 pb-10 justify-center">
  <motion.a
    href="#profile"
    animate={{ y: [0, 8, 0] }}
    transition={{
      duration: 1.8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="text-4xl text-zinc-500 transition hover:text-white"
  >
    <HiChevronDown />
  </motion.a>
</div>

    </>
  );
}