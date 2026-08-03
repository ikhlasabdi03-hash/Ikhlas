"use client";

import { FaInstagram, FaSpotify, FaGoodreads, FaTiktok, FaDiscord } from "react-icons/fa";
import { SiLetterboxd } from "react-icons/si";
import { motion } from "framer-motion";
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import FadeUp from "./FadeUp";
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
const elsewhereLinks = [
  ...socialLinks,
  {
    name: "TikTok",
    icon: <FaTiktok />,
    username: "@axcvu",
    url: "https://www.tiktok.com/@axcvu?_r=1&_t=ZS-98XpDe4Nis8",
  },
   {
    name: "Discord",
    icon: <FaDiscord />,
    username: "@imelabe",
    url: "https://discord.com/users/956750391238881291",
  },
];
export default function Social() {
  return (

<FadeUp>
<section
  id="links"
  className="mx-auto max-w-5xl px-8 py-32"
>

<motion.h2
  className="mb-12 text-center text-4xl font-bold"
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  Social Media
</motion.h2>

<div className="grid gap-6 md:grid-cols-2">
  {elsewhereLinks.map((social) => (
    <a
      key={social.name}
      href={social.url}
      className="rounded-2xl border border-zinc-800 p-6 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-white"
    >
      <h3 className="flex items-center gap-3 text-2xl">
        {social.icon}
        {social.name}
      </h3>

      <p className="mt-2 text-zinc-400">
        {social.username}
      </p>
    </a>
  ))}
</div>

</section>

<div className="-mt-5 pb-10 flex justify-center">
  <a
    href="#films"
    className="animate-bounce text-5xl text-zinc-500 transition hover:text-white"
  >
    <HiOutlineArrowLongDown />
  </a>
</div>

</FadeUp>

  );
}