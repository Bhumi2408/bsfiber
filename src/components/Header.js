"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { images, navLinks } from "@/data/site";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] backdrop-blur-md transition-all duration-200 ${
          sticky
            ? "h-[70px] bg-white/75 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
            : "h-[70px] bg-white/20 md:h-[90px]"
        }`}
      >
        <div className="mx-auto flex h-full items-center justify-between px-[18px] md:px-[35px]">
          <a href="#" className="block">
            <Image
              src={images.logo}
              alt="BS Fiber"
              width={300}
              height={300}
              priority
              className={`w-auto transition-all duration-200 ${sticky ? "max-h-[60px]" : "max-h-[60px] md:max-h-[90px]"}`}
            />
          </a>

          <nav className="flex items-center">
            <ul className="hidden gap-[25px] md:flex">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className={`text-base font-bold uppercase leading-[1.3] transition-colors ${
                      sticky ? "text-gold hover:text-[#282828]" : "text-[#e8e8e8] hover:text-gold"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              aria-label="Menu"
              onClick={() => setMenuOpen(true)}
              className={`cursor-pointer p-2.5 text-xl md:hidden ${sticky ? "text-[#534545]" : "text-white"}`}
            >
              <i className="fas fa-bars" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile off-canvas menu */}
      <div
        className={`fixed inset-0 z-[200] flex flex-col items-center justify-center gap-5 bg-[rgba(18,21,25,0.85)] backdrop-blur-md transition-all duration-300 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <button
          aria-label="Close"
          onClick={() => setMenuOpen(false)}
          className="absolute right-6 top-6 cursor-pointer text-[26px] text-white"
        >
          <i className="fas fa-times" />
        </button>
        {navLinks.map((l) => (
          <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="text-xl font-semibold text-white">
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
