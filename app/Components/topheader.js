'use client';
import { useEffect, useState } from 'react';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import Navbar from './navbar';

export default function TopHeader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-black mx-auto">
      <div
  className={`hidden lg:flex text-sm text-white bg-black py-4 px-5 md:px-10 flex-col md:flex-row justify-between items-center gap-2 md:gap-4
    transition-transform duration-300 ease-step-start z-50 border-b border-[#5d5d5d] ${
      hidden ? '-translate-y-full' : 'translate-y-0'
    }`}>
        {/* Contact Info Left */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-center md:text-left">
          <div className="flex items-center space-x-1 justify-center">
            <MdEmail className="text-[#4183BF]" />
            <span>info@sss-lcs.com</span>
          </div>
          <div className="flex items-center space-x-1 justify-center">
            <MdLocationOn className="text-[#4183BF]" />
            <span className="max-w-xs md:max-w-full">
              Prince Turki Al-Awwal Rd, Signature Center 2 – 2nd Floor, Riyadh 11536, KSA
            </span>
          </div>
        </div>

        {/* Phone Right */}
        <div className="text-[#4183BF] font-bold">
          <FaPhoneAlt className="inline mr-1" />
          +966 (11) 207-9557
        </div>
      </div>

      <Navbar />
    </div>
  );
}