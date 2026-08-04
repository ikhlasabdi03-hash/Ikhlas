"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

type NavbarProps = {
  active: string;
  setActive: (value: string) => void;
};

const navItems = [
  ["Home", "home"],
  ["Profile", "profile"],
  ["Social Media", "links"],
  ["Films", "films"],
  ["Bookshelf", "bookshelf"],
  ["Greek Corner", "greek"],
];

export default function Navbar({ active, setActive }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8 sm:py-5">

          {/* Logo */}
          <h1>
            <a
              href="#home"
              onClick={() => {
                setActive("home");
                setOpen(false);
              }}
              className="font-bold transition hover:text-white"
            >
              Ιχλας
            </a>
          </h1>

          {/* Mobile section indicator */}
          <div className="ml-auto mr-4 text-sm text-zinc-400 md:hidden">
            {active === "home" && "Home"}
            {active === "profile" && "Profile"}
            {active === "links" && "Social Media"}
            {active === "films" && "Films"}
            {active === "bookshelf" && "Bookshelf"}
            {active === "greek" && "Greek Corner"}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-zinc-300 transition hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden items-center text-zinc-400 md:flex">
            {navItems.map(([label, id], index) => (
              <div key={id} className="flex items-center">
                {index > 0 && (
                  <span className="h-5 border-l border-zinc-700" />
                )}

                <a
                  href={`#${id}`}
                  onClick={() => setActive(id)}
                  className={`relative px-4 py-2 transition ${
                    active === id
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {label === "Greek Corner" ? "Greek" : label}

                  {active === id && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute bottom-[-4px] left-4 right-4 h-[2px] rounded-full bg-white"
                    />
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile floating dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed right-4 top-[72px] z-40 w-56 overflow-hidden rounded-xl border border-zinc-800/50 bg-zinc-950/70 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col py-2">
              {navItems.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => {
                    setActive(id);
                    setOpen(false);
                  }}
                  className={`px-5 py-3 text-sm transition ${
                    active === id
                      ? "bg-zinc-800/70 text-white"
                      : "text-zinc-400 hover:bg-zinc-900/50 hover:text-white"
                  }`}
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