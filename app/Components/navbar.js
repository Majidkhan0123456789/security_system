"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/our_team" },
    { name: "Services", path: "/services" },
    { name: "Contacts", path: "/contacts" },
  ];

  return (
    <div className="bg-black text-white sticky top-0 z-40 shadow-md py-4 px-5 md:px-10 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold whitespace-nowrap">
        <Image
          src="/logo.png"
          alt="Logo"
          width={130}
          height={40}
          className="md:h-[40px] md:w-auto h-auto w-32"
        />
      </div>

      {/* Desktop Navigation - only on lg and up */}
      <nav className="hidden lg:flex flex-1 justify-center space-x-6 font-medium font-nunito">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`hover:text-[#4183BF] transition ${
              pathname === link.path
                ? "underline underline-offset-4 decoration-[#4183BF] decoration-2"
                : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Toggle Button - only on small and medium screens */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden block text-white text-2xl"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation - only on small and medium screens */}
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute top-full left-0 w-full flex-col items-start px-5 bg-black space-y-6 py-3 font-medium font-nunito transition-all duration-300 lg:hidden`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`py-2 hover:text-[#4183BF] transition ${
              pathname === link.path
                ? "underline underline-offset-4 decoration-[#4183BF] decoration-2"
                : ""
            }`}
            onClick={() => setMenuOpen(false)} // Close menu on click
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Social Icons - only on large screens */}
      <div className="hidden lg:flex space-x-4 text-[#4183BF] text-lg font-nunito">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="hover:text-white transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-white transition" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="hover:text-white transition" />
        </a>
      </div>
    </div>
  );
}