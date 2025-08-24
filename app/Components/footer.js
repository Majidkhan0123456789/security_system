"use client";
import { useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa"; 
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-white mx-auto text-[#000000] py-8 md:px-8 px-5 lg:px-14">
      {/* Main footer content */}
      <div className="flex flex-col lg:flex-row justify-between items-start mb-6 w-full">
        {/* Left section - Brand info */}
        <div className="mb-6 md:mb-0 w-full lg:w-auto">
          <div className="text-xl font-bold whitespace-nowrap flex justify-center lg:justify-start w-full">
            <Image
              src="/footer_logo.png"
              alt="Logo"
              width={130}
              height={40}
              className="md:h-[40px] md:w-auto h-14 w-32"
            />
          </div>
          <div className="py-4 text-center hidden lg:block">
            <p className="text-sm lg:text-base font-oswald">
              We Are SSS Engineers and Technicians' ... A Distinctive Pole
              <br />
              And High Ranking Institution Which Is Attracting Clients' Views
              <br />
              Day By Day And Its Platform Of Services Is Progressively
              <br />
              Getting Wider.
            </p>
          </div>

          {/* Desktop social icons */}
          <div className="text-[#000000] lg:block hidden text-lg font-oswald mt-4">
            <div className="flex space-x-4 justify-center">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-white transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-white transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="hover:text-white transition" />
              </a>
            </div>
          </div>
        </div>

      {/* Accordion for Mobile & Tablet */}
<div className="w-full block lg:hidden">
  {/* Accordion - Menu */}
  <div className="border-t border-gray-300 py-3">
    <button
      className="w-full flex justify-between items-center font-semibold font-oswald text-base md:text-lg"
      onClick={() => toggleSection("menu")}
    >
      <span>Menu</span>
      <FaChevronDown
        className={`transition-transform duration-300 ${
          openSection === "menu" ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        openSection === "menu" ? "max-h-96 mt-2" : "max-h-0"
      }`}
    >
      <div className="grid grid-cols-1 gap-x-4 py-2">
        <div className="space-y-2">
          <a href="/" className="font-oswald text-sm block">
            Home
          </a>
          <a href="/about" className="font-oswald text-sm block">
            About Us
          </a>
          <a href="/services" className="font-oswald text-sm block">
            Services
          </a>
          <a href="/contacts" className="font-oswald text-sm block">
            Contacts
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Accordion - Contact */}
  <div className="border-t border-b border-gray-300 py-3">
    <button
      className="w-full flex justify-between items-center font-semibold font-oswald text-base md:text-lg"
      onClick={() => toggleSection("contact")}
    >
      <span>Contact</span>
      <FaChevronDown
        className={`transition-transform duration-300 ${
          openSection === "contact" ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        openSection === "contact" ? "max-h-96 mt-2" : "max-h-0"
      }`}
    >
      <div className="space-y-2 pt-2">
        <span className="block font-oswald text-[#58b0ec] text-md">
          +966 (11) 207-9557
        </span>
        <span className="block font-oswald text-[#8d8d8d] text-sm">
          Prince Turki Al-Awwal Rd, Signature Center 2 – 2nd Floor,
          <br />
          P.O. Box: 64006, Riyadh 11536, KSA
        </span>
        <span className="block font-oswald text-sm">info@sss-lcs.com</span>
      </div>
    </div>
  </div>
</div>
        {/* Desktop View - Static Menu & Contact (Shown only on lg+) */}
        <div className="hidden lg:flex gap-24">
          {/* Menu */}
          <div>
            <h3 className="text-xl font-semibold font-oswald mb-4 text-center">
              Menu
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <a href="/" className="font-oswald text-sm block">Home</a>
                <a href="/about" className="font-oswald text-sm block">About Us</a>
              </div>
              <div className="space-y-2">
                <a href="/services" className="font-oswald text-sm block">Services</a>
                <a href="/contacts" className="font-oswald text-sm block">Contacts</a>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold font-oswald mb-4 text-center">Contact</h3>
            <div className="space-y-2">
              <span className="block font-oswald text-[#58b0ec] text-md">
                +966 (11) 207-9557
              </span>
              <span className="block font-oswald text-[#8d8d8d] text-sm">
                Prince Turki Al-Awwal Rd, Signature Center 2 – 2nd Floor,
                <br />
                P.O. Box: 64006, Riyadh 11536, KSA
              </span>
              <span className="block font-oswald text-sm">info@sss-lcs.com</span>
            </div>
          </div>
        </div>

        {/* Mobile Social Icons (only on small screens) */}
        <div className="text-[#000000] block w-full lg:hidden text-lg font-oswald mt-6">
          <div className="flex space-x-4 justify-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-white transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-white transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-4" />

      {/* Copyright */}
      <div className="text-center font-medium md:text-base text-sm font-oswald">
        © {new Date().getFullYear()} Security System Solution. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;