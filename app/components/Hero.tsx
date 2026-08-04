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
      
         <div className="absolute inset-0 scale-150 rounded-full bg-sky-400/25 blur-[90px]" />

  <h1 className="mt-6 text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:tracking-wider">
    Ιχλας
  </h1>
</div>
      
          <p className="mt-5 text-xl md:text-2xl text-zinc-300">
            Medical Student
          </p>
      
      
      <TypingText />
      
          <p className="mt-4 max-w-xl text-zinc-500 leading-8">
            Movies • Reading • Music • Greek Mythology
          </p>
      
      <div className="mt-10 grid grid-cols-2 gap-8">
      
      </div>
      
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
      

        <div className="hidden md:block space-y-5">
      
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