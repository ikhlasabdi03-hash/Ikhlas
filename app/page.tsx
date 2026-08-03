"use client";

import { useEffect, useState } from "react";


import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Social from "./components/Social";
import Films from "./components/Films";
import Bookshelf from "./components/Bookshelf";
import Greek from "./components/Greek";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";


export default function Home() {
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive("home");
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">

  <div className="stars" />
<div className="star left-[12%] top-[18%] h-[2px] w-[2px]" />
<div className="star left-[70%] top-[22%] h-[3px] w-[3px]" />
<div className="star left-[85%] top-[60%] h-[2px] w-[2px]" />
<div className="star left-[30%] top-[75%] h-[2px] w-[2px]" />
<div
  className="star left-[55%] top-[35%] h-[2px] w-[2px]"
  style={{ animationDelay: "1.2s" }}
/>
  <div className="relative z-10">


<Navbar active={active} setActive={setActive} />

<Hero />
<Profile />
<Social />
<Films />
<Bookshelf />
<Greek />
<Footer />
<BackToTop />

</div>
    </main>
  );
}