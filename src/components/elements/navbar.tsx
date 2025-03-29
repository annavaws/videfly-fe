import React, { useState } from "react";
import Image from "next/image";
import { poppins } from "@/styles/fonts";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Track if the menu is open

  return (
    <nav
      className={`${poppins.className} flex items-center p-4 bg-white text-[#545454] text-md`}
    >
      {/* logo */}
      <div className="flex w-1/3 lg:w-1/6 justify-center">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={90}
            height={90}
            className="object-contain"
          />
        </Link>
      </div>

      <ul className="hidden lg:flex w-4/6 justify-evenly">
        <li>
          <a href="#fitur-ai">Fitur AI</a>
        </li>
        <li>
          <a href="#cara-kerja">Cara Kerja</a>
        </li>
        <li>
          <a href="#harga">Harga</a>
        </li>
        <li>
          <a href="#support">Support</a>
        </li>
      </ul>

      {/* collapsible menu */}
      {menuOpen && (
        <div className="lg:hidden w-full absolute top-16 left-0 bg-white text-[#545454] shadow-lg z-50">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#fitur-ai">Fitur AI</a>
            </li>
            <li>
              <a href="#cara-kerja">Cara Kerja</a>
            </li>
            <li>
              <a href="#harga">Harga</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
            <button className="px-4 py-2 bg-gradient-to-bl from-[#7F52FF] to-[#FB8570] text-white rounded-lg hover:scale-105 transform duration-150 transition-all ease-in-out cursor-pointer">
              Buat Video
            </button>
          </ul>
        </div>
      )}

      <div className="hidden lg:flex lg:w-2/6 justify-center space-x-4">
        <button className="w-border border-gray-300 px-4 py-2 bg-gray-100 text-black rounded-lg hover:scale-105 duration-150 transition-all ease-in-out cursor-pointer">
          Masuk
        </button>
        <button className="px-4 py-2 bg-gradient-to-bl from-[#7F52FF] to-[#FB8570] text-white rounded-lg hover:scale-105 transform duration-150 transition-all ease-in-out cursor-pointer">
          Buat Video
        </button>
      </div>

      {/* hamburger icon (when screen is equal or smaller than md*/}
      <div className="lg:hidden flex items-center justify-end w-full gap-4">
        <button className="w-border border-gray-300 px-4 py-2 bg-gray-100 text-black rounded-lg hover:scale-105 duration-150 transition-all ease-in-out cursor-pointer">
          Masuk
        </button>
        <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
