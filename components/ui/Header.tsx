"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-xl bg-[#434242] text-white p-4 flex justify-between items-center relative">
      <img
        src="images/HeaderIcon.png"
        className="h-12 w-auto"
        alt="Header Logo"
      />
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="w-6 h-0.5 bg-white mb-1" />
        <div className="w-6 h-0.5 bg-white mb-1" />
        <div className="w-6 h-0.5 bg-white" />
      </div>
      <nav className="hidden md:block">
        <ul className="flex gap-4 mr-6">
          {["Home", "Profile", "Skills", "Works", "Contact"].map((name) => {
            const path = name === "Home" ? "/" : `/${name.toLowerCase()}`;
            return (
              <li key={name}>
                <Link href={path} className="hover:underline">
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#434242] text-white md:hidden z-10">
          <ul className="flex flex-col p-4 space-y-2">
            {["Home", "Profile", "Skills", "Works", "Contact"].map((name) => {
              const path = name === "Home" ? "/" : `/${name.toLowerCase()}`;
              return (
                <li key={name}>
                  <Link href={path} className="hover:underline">
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
