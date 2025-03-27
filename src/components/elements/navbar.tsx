import React from "react";
import Image from "next/image";
import { poppins } from "@/styles/fonts";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav
      className={` ${poppins.className} flex items-center p-4 bg-white text-[#545454] text-md`}
    >
      <div className="flex w-1/6 justify-center">
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

      <ul className="flex w-4/6 justify-evenly">
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

      <div className="flex w-1/3 justify-center space-x-4">
        <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:scale-105 duration-150 transition-all ease-in-out cursor-pointer">
          Masuk
        </button>
        <button className="px-4 py-2 bg-gradient-to-bl from-[#7F52FF] to-[#FB8570] text-white rounded-lg hover:scale-105 transform duration-150 transition-all ease-in-out cursor-pointer">
          Buat Video
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
