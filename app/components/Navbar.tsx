"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

type NavbarProps = {
  active: string;
  setActive: (value: string) => void;
};

export default function Navbar({ active, setActive }: NavbarProps) {

  const [open, setOpen] = useState(false);

  return (
    <>
<nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8 sm:py-5">

<h1>
  <a
    href="#home"
    onClick={() => setActive("home")}
    className="font-bold transition hover:text-white"
  >
    Ιχλας
  </a>
</h1>

<button
  onClick={() => setOpen(!open)}
  className="md:hidden text-3xl text-zinc-300"
>
  {open ? <HiOutlineX /> : <HiOutlineMenu />}
</button>

    <div className="hidden md:flex items-center text-zinc-400">

<a
  href="#home"
  onClick={() => setActive("home")}
  className={`relative px-4 py-2 transition ${
    active === "home"
      ? "text-white"
      : "text-zinc-400 hover:text-white"
  }`}
>
  Home

  {active === "home" && (
    <motion.span
      layoutId="navbar-indicator"
      className="absolute left-4 right-4 -bottom-1 h-[2px] rounded-full bg-white"
    />
  )}
</a>

<span className="h-5 border-l border-zinc-700" />

<a
  href="#profile"
  onClick={() => setActive("profile")}
  className={`relative px-4 py-2 transition ${
    active === "profile"
      ? "text-white"
      : "text-zinc-400 hover:text-white"
  }`}
>
  Profile

  {active === "profile" && (
    <motion.span
      layoutId="navbar-indicator"
      className="absolute left-4 right-4 -bottom-1 h-[2px] rounded-full bg-white"
    />
  )}
</a>

<span className="h-5 border-l border-zinc-700" />

<a
  href="#links"
  onClick={() => setActive("links")}
  className={`relative px-4 py-2 transition ${
    active === "links"
      ? "text-white"
      : "text-zinc-400 hover:text-white"
  }`}
>
  Social Media

  {active === "links" && (
    <motion.span
      layoutId="navbar-indicator"
      className="absolute left-4 right-4 -bottom-1 h-[2px] rounded-full bg-white"
    />
  )}
</a>

<span className="h-5 border-l border-zinc-700" />

<a
  href="#films"
  onClick={() => setActive("films")}
  className={`relative px-4 py-2 transition ${
    active === "films"
      ? "text-white"
      : "text-zinc-400 hover:text-white"
  }`}
>
  Films

  {active === "films" && (
    <motion.span
      layoutId="navbar-indicator"
      className="absolute left-4 right-4 -bottom-1 h-[2px] rounded-full bg-white"
    />
  )}
</a>

<span className="h-5 border-l border-zinc-700" />

<a
  href="#bookshelf"
  onClick={() => setActive("bookshelf")}
  className={`relative px-4 py-2 transition ${
    active === "bookshelf"
      ? "text-white"
      : "text-zinc-400 hover:text-white"
  }`}
>
  Bookshelf

  {active === "bookshelf" && (
    <motion.span
      layoutId="navbar-indicator"
      className="absolute left-4 right-4 -bottom-1 h-[2px] rounded-full bg-white"
    />
  )}
</a>

<span className="h-5 border-l border-zinc-700" />

<a
  href="#greek"
  onClick={() => setActive("greek")}
  className={`relative px-4 py-2 transition ${
    active === "greek"
      ? "text-white"
      : "text-zinc-400 hover:text-white"
  }`}
>
  Greek

  {active === "greek" && (
    <motion.span
      layoutId="navbar-indicator"
      className="absolute left-4 right-4 -bottom-1 h-[2px] rounded-full bg-white"
    />
  )}
</a>

</div>

  </div>
</nav>

<AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-[72px] left-0 w-full bg-zinc-950 border-b border-zinc-800 md:hidden z-40"
    >
      <div className="flex flex-col">

        {[
          ["Home", "home"],
          ["Profile", "profile"],
          ["Social Media", "links"],
          ["Films", "films"],
          ["Bookshelf", "bookshelf"],
          ["Greek", "greek"],
        ].map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => {
              setActive(id);
              setOpen(false);
            }}
            className="border-b border-zinc-800 px-6 py-5 text-zinc-300 hover:bg-zinc-900"
          >
            {label}
          </a>
        ))}

      </div>
    </motion.div>
  )}
</AnimatePresence>
</> 
  );
}