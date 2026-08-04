"use client";

import { motion } from "framer-motion";

type NavbarProps = {
  active: string;
  setActive: (value: string) => void;
};

export default function Navbar({ active, setActive }: NavbarProps) {
  return (
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

    <div className="flex items-center overflow-x-auto text-zinc-400">

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
  );
}