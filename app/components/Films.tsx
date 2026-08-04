"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import FadeUp from "./FadeUp";

export default function Films() {
  const [activeFilm, setActiveFilm] = useState<string | null>(null);

  const films = [
    {
      title: "The Odyssey",
      director: "Christopher Nolan",
      poster: "/films/odyssey.jpg",
      rating: "★★★★★",
      note: "What is home?",
    },
    {
      title: "Before Sunset",
      director: "Richard Linklater",
      poster: "/films/before sunset.webp",
      rating: "★★★★★",
      note: "Do you believe in fate?",
    },
    {
      title: "Whiplash",
      director: "Damien Chazelle",
      poster: "/films/whipash2.jpg",
      rating: "★★★★★",
      note: "What is greatness?",
    },
    {
      title: "Monster",
      director: "Hirokazu Kore-eda",
      poster: "/films/monster.webp",
      rating: "★★★★★",
      note: "Who is the monster?",
    },
    {
      title: "Dead Poets Society",
      director: "Peter Weir",
      poster: "/films/DPS.webp",
      rating: "★★★★★",
      note: "I was good, i was really good",
    },
  ];

  return (
    <FadeUp>
      <section id="films" className="mx-auto max-w-6xl px-8 py-32">

        <motion.h2
          className="text-center text-4xl font-bold"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          Top 5 Movies
        </motion.h2>

        <div className="mt-16 flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4">

          {films.map((film) => {
            const isActive = activeFilm === film.title;

            return (
              <div
                key={film.title}
                className="min-w-[200px] snap-start"
              >

                <div
                  onClick={() =>
                    setActiveFilm(isActive ? null : film.title)
                  }
                  className="group relative h-[300px] w-[200px] cursor-pointer overflow-hidden rounded-xl"
                >

                  <Image
                    src={film.poster}
                    alt={film.title}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-50 ${
                      isActive ? "scale-110 brightness-50" : ""
                    }`}
                  />

                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className={`absolute -left-24 top-0 h-full w-16 rotate-12 bg-white/20 blur-xl transition-all duration-700 group-hover:left-72 ${
                        isActive ? "left-72" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-center bg-black/70 transition-opacity duration-500 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >

                    <p className="px-5 text-center text-xl font-light italic tracking-wide text-white">
                      {film.note}
                    </p>

                    <a
                      href="https://boxd.it/9l3uR"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-6 rounded-full border border-white px-4 py-2 text-sm transition hover:bg-white hover:text-black"
                    >
                      View on Letterboxd ↗
                    </a>

                  </div>

                </div>

                <h3 className="mt-4 font-semibold">
                  {film.title}
                </h3>

                <p className="text-sm text-zinc-400">
                  {film.director}
                </p>

                <p className="mt-2 text-xs tracking-widest text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]">
                  {film.rating}
                </p>

              </div>
            );
          })}

        </div>

        <div className="mt-12 text-center">
          <a
            href="https://boxd.it/9l3uR"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-700 px-6 py-3 transition hover:border-white hover:bg-white hover:text-black"
          >
            View my Letterboxd ↗
          </a>
        </div>

      </section>

      <div className="-mt-12 flex justify-center pb-10">
        <a
          href="#bookshelf"
          className="animate-bounce text-5xl text-zinc-500 transition hover:text-white"
        >
          <HiOutlineArrowLongDown />
        </a>
      </div>

    </FadeUp>
  );
}