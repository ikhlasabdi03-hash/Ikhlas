"use client";

import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

const currently = [
  {
    label: "Listening",
    title: "Disillusioned",
    subtitle: "Daniel Caesar",
    link: "https://open.spotify.com/intl-id/track/1gUyF1kls2Q5MkuAi9djjx?si=4b38663d37704bd1",
    action: "Listen on Spotify ↗",
  },
  {
    label: "Reading",
    title: "The Song of Achilles",
    subtitle: "Madeline Miller",
    link: "https://www.goodreads.com/book/show/13623848-the-song-of-achilles",
    action: "View on Goodreads ↗",
  },
  {
    label: "Watching",
    title: "The Odyssey",
    subtitle: "Christopher Nolan",
    link: "https://boxd.it/9l3uR",
    action: "View on Letterboxd ↗",
  },
];

export default function Currently() {
  return (
    <FadeUp>
      <section
        id="currently"
        className="mx-auto max-w-6xl px-8 py-32"
      >
        <motion.h2
          className="text-center text-4xl font-bold"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Currently
        </motion.h2>

        <div className="mt-16 flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4">
          {currently.map((item) => (
            <div
              key={item.label}
              className="group min-w-[240px] snap-start"
            >
              <div className="relative h-[220px] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-zinc-500">
                
                {/* Decorative Circle */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-zinc-800 transition-transform duration-700 group-hover:scale-150" />

                <div className="relative flex h-full flex-col justify-between">
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                    {item.label}
                  </p>

                  <div>
                    <h3 className="text-xl font-medium text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-zinc-400">
                      {item.subtitle}
                    </p>
                  </div>

                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-xs text-zinc-500 transition-colors hover:text-white"
                  >
                    {item.action}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeUp>
  );
}
