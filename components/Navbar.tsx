"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 relative">

        {/* Logo (center on mobile, left on desktop) */}
        <h1 className="font-bold text-gradient text-lg absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          Naimur Rahman
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-gray-300 text-md ml-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition"
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://t.me/naimurrah"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 px-4 py-1 rounded-md hover:bg-purple-700 transition"
          >
            Telegram
          </a>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-200 text-2xl ml-auto"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-300 bg-black/30 backdrop-blur-md border-t border-white/10 text-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-white transition"
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://t.me/naimurrah"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-purple-600 px-4 py-2 rounded-md text-center hover:bg-purple-700 transition"
          >
            Telegram
          </a>
        </div>
      )}
    </nav>
  );
}