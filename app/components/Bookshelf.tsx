"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import FadeUp from "./FadeUp";
const books = [
  {
    title: "The Song of Achilles",
    author: "Madeline Miller",
    cover: "/books/The_Song_of_Achilles_cov.jpg",
    status: "Currently Reading",
  },
  {
    title: "Mythology",
    author: "Edith Hamilton",
    cover: "/books/mythology2.jpg",
    status: "Up Next",
  },
  {
    title: "Circe",
    author: "Madeline Miller",
    cover: "/books/circe.jpg",
    status: "Wishlist",
  },
];
export default function Bookshelf() {
  return (
  <FadeUp>
<section
  id="bookshelf"
  className="mx-auto max-w-6xl px-8 py-32"
>
  <motion.h2
  className="text-center text-4xl font-bold"
  animate={{ y: [0, -8, 0] }}
  transition={{ duration: 3, repeat: Infinity, ease:"easeInOut" }}
>
  Bookshelf
</motion.h2>

  <div className="mt-16 flex gap-6 overflow-x-auto pb-4">
  {books.map((book) => (
    <div key={book.title} className="min-w-[180px]">
      <div className="relative h-[270px] w-[180px] overflow-hidden rounded-xl">
  <Image
    src={book.cover}
    alt={book.title}
    fill
  className="object-cover transition-all duration-500 hover:scale-105 hover:-rotate-2"
  />
</div>

      <h3 className="mt-4 font-semibold">
        {book.title}
      </h3>

      <p className="text-sm text-zinc-400">
        {book.author}
      </p>

      <p className="mt-2 text-xs uppercase tracking-widest text-zinc-500">
  {book.status}
</p>

    </div>
  ))}

</div>

<div className="mt-12 text-center">
    <a
      href="https://www.goodreads.com/user/show/94772283-abe"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-zinc-700 px-6 py-3 transition hover:border-white hover:bg-white hover:text-black"
    >
      View my Goodreads ↗
    </a>
  </div>
  </section>

  <div className="-mt-12 pb-10 flex justify-center">
    <a
      href="#greek"
      className="animate-bounce text-5xl text-zinc-500 transition hover:text-white"
    >
      <HiOutlineArrowLongDown />
    </a>
  </div>

</FadeUp>
  );
}