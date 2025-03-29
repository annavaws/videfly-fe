import React, { useState } from "react";
import Image from "next/image";
import { nunito, poppins } from "@/styles/fonts";
interface Product {
  id: string;
  name: string;
  link: string;
  image: string;
}

const LiveDemo = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Product | null>(null);
  const products: Product[] = [
    {
      id: "produk1",
      name: "Emina Bright Stuff Moisturizing Cream",
      link: "https://example.com/produk1",
      image: "/assets/product.png",
    },
    {
      id: "produk2",
      name: "Headphone Bluetooth Soundcore Space One",
      link: "https://example.com/produk2",
      image: "/assets/product.png",
    },
    {
      id: "produk3",
      name: "Pashmina Voal Premium Size 180 x 70cm",
      link: "https://example.com/produk3",
      image: "/assets/product.png",
    },
  ];

  const handleSelect = (product: Product) => {
    setSelectedOption(product);
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen">
      <div className="relative bg-gradient-to-tl from-[#F1EDFD] to-[#7261EF] min-h-screen flex justify-center items-center py-20">
        <div className="w-[85%]">
          <div className="bg-white rounded-2xl flex flex-col md:flex-row relative shadow-lg h-[640px]">
            {/* Left Part */}
            <div className="absolute md:hidden justify-end items-end right-0 overflow-clip pb-20">
              {/* Logo Image behind the Live Demo image */}
              <Image
                src="/assets/substract-o.png"
                alt="logo-o"
                width={200}
                height={200}
                className="absolute -top-10 object-contain"
              />
              <Image
                src="/assets/mockup.png"
                alt="mockup"
                width={180}
                height={180}
                className="relative object-contain"
              />
            </div>
            <div className="pt-32 md:pt-10 flex flex-col w-full md:w-9/12 lg:w-7/12 p-4 md:p-10 space-y-6">
              <div
                className={`text-sm ${poppins.className} flex w-fit items-center space-x-2 border rounded-full p-1 px-2 border-[#703BE7]`}
              >
                <span>
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.74999 2.66667C9.83154 2.66667 9.91204 2.68509 9.98547 2.72054C10.0589 2.75599 10.1234 2.80757 10.1741 2.87142L10.2142 2.92992L11.8392 5.63826C11.8924 5.72706 11.9191 5.82926 11.916 5.93275C11.9129 6.03624 11.8803 6.13668 11.8219 6.22217L11.7785 6.27796L7.15812 11.4417C7.07233 11.5292 6.96992 11.5987 6.85691 11.6462C6.7439 11.6936 6.62256 11.718 6.49999 11.7179C6.28333 11.7179 6.07479 11.6421 5.89874 11.492L5.82562 11.4238L1.22145 6.27796C1.15219 6.20068 1.10658 6.10512 1.09006 6.00266C1.07355 5.90019 1.08681 5.79514 1.12829 5.70001L1.16079 5.63771L2.79283 2.91746L2.82749 2.86871C2.85229 2.83787 2.88045 2.80989 2.91145 2.7853L2.95966 2.75063L3.00733 2.72355L3.03441 2.71109L3.06691 2.69755L3.12595 2.68021L3.18662 2.66938L3.24999 2.66667H9.74999ZM4.93674 4.80246C4.8136 4.72872 4.66623 4.70687 4.52699 4.7417C4.38775 4.77654 4.26803 4.86522 4.19412 4.98826L3.86912 5.52992L3.83662 5.59276C3.79516 5.68835 3.78216 5.79387 3.79916 5.89667C3.81617 5.99947 3.86246 6.09519 3.93249 6.17234L5.01583 7.36401L5.06458 7.41167C5.16484 7.49747 5.29299 7.54372 5.42494 7.54172C5.55689 7.53973 5.68357 7.48963 5.7812 7.40084L5.82833 7.35209C5.91413 7.25182 5.96037 7.12368 5.95838 6.99173C5.95638 6.85978 5.90629 6.73309 5.81749 6.63546L5.00445 5.74171L5.12254 5.54509L5.15233 5.4893C5.20676 5.36828 5.21488 5.23149 5.17514 5.10489C5.1354 4.97828 5.05057 4.87067 4.93674 4.80246Z"
                      fill="#703BE7"
                    />
                    <path
                      d="M9.74999 2.66667C9.83154 2.66667 9.91204 2.68509 9.98547 2.72054C10.0589 2.75599 10.1234 2.80757 10.1741 2.87142L10.2142 2.92992L11.8392 5.63826C11.8924 5.72706 11.9191 5.82926 11.916 5.93275C11.9129 6.03624 11.8803 6.13668 11.8219 6.22217L11.7785 6.27796L7.15812 11.4417C7.07233 11.5292 6.96992 11.5987 6.85691 11.6462C6.7439 11.6936 6.62256 11.718 6.49999 11.7179C6.28333 11.7179 6.07479 11.6421 5.89874 11.492L5.82562 11.4238L1.22145 6.27796C1.15219 6.20068 1.10658 6.10512 1.09006 6.00266C1.07355 5.90019 1.08681 5.79514 1.12829 5.70001L1.16079 5.63771L2.79283 2.91746L2.82749 2.86871C2.85229 2.83787 2.88045 2.80989 2.91145 2.7853L2.95966 2.75063L3.00733 2.72355L3.03441 2.71109L3.06691 2.69755L3.12595 2.68021L3.18662 2.66938L3.24999 2.66667H9.74999ZM4.93674 4.80246C4.8136 4.72872 4.66623 4.70687 4.52699 4.7417C4.38775 4.77654 4.26803 4.86522 4.19412 4.98826L3.86912 5.52992L3.83662 5.59276C3.79516 5.68835 3.78216 5.79387 3.79916 5.89667C3.81617 5.99947 3.86246 6.09519 3.93249 6.17234L5.01583 7.36401L5.06458 7.41167C5.16484 7.49747 5.29299 7.54372 5.42494 7.54172C5.55689 7.53973 5.68357 7.48963 5.7812 7.40084L5.82833 7.35209C5.91413 7.25182 5.96037 7.12368 5.95838 6.99173C5.95638 6.85978 5.90629 6.73309 5.81749 6.63546L5.00445 5.74171L5.12254 5.54509L5.15233 5.4893C5.20676 5.36828 5.21488 5.23149 5.17514 5.10489C5.1354 4.97828 5.05057 4.87067 4.93674 4.80246Z"
                      fill="url(#paint0_linear_19_60)"
                      fill-opacity="0.34"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_19_60"
                        x1="6.4997"
                        y1="2.66667"
                        x2="6.4997"
                        y2="11.7179"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="text-[#703BE7]">Live Demo</span>
              </div>
              <div
                className={`${nunito.className} font-bold flex flex-col space-y-2 text-xl md:text-3xl lg:text-5xl`}
              >
                <span>Coba Fitur URL to Video </span>
                <span className="bg-gradient-to-r from-[#703BE7] to-[#FFA899] text-transparent bg-clip-text">
                  Tanpa Biaya!
                </span>
              </div>
              <div
                className={`text-sm md:text-base text-[#545454] ${poppins.className} flex flex-col`}
              >
                <span>Masukkan URL, ubah jadi video dalam hitungan detik.</span>
                <span>Mudah dan gratis!</span>
              </div>

              <div
                className={`text-xs md:text-sm flex flex-row space-x-4 pt-2 md:pt-10 ${poppins.className}`}
              >
                {/* Dropdown */}
                <div className="relative w-full">
                  <div
                    className="p-2 w-full justify-between flex rounded-xl border border-[#703BE7] cursor-pointer"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                  >
                    <span>
                      {selectedOption
                        ? selectedOption.link
                        : "Pilih Link URL Product"}
                    </span>
                    <span
                      className={`flex items-center ${
                        isDropdownOpen
                          ? "rotate-180 transition-all duration-150"
                          : ""
                      }`}
                    >
                      {/* Arrow for dropdown */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.293 5.293a1 1 0 0 1 1.414 0L8 7.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z" />
                      </svg>
                    </span>
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute z-10 bg-white border border-gray-100 w-full mt-3 rounded-lg shadow-lg">
                      {products.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center p-2 py-3 hover:bg-gray-100 cursor-pointer hover:rounded-lg"
                          onClick={() => handleSelect(product)}
                        >
                          <div className="flex rounded-lg overflow-clip mr-3">
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={50}
                              height={50}
                            />
                          </div>

                          <div className="flex flex-col text-xs md:text-sm w-full">
                            <span className="font-medium truncate">
                              {product.name}
                            </span>
                            <span className="text-[#545454] truncate">
                              {product.link}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* Button */}
                <button className="px-3 md:px-6 py-2 bg-[#703BE7] text-white rounded-lg hover:scale-105 transform duration-150 transition-all ease-in-out cursor-pointer">
                  Analisa
                </button>
              </div>
            </div>
            <div className="hidden md:flex relative w-full md:w-6/12  justify-end items-center overflow-clip order-1 md:order-2">
              {/* Logo Image behind the Live Demo image */}
              <Image
                src="/assets/substract-o.png"
                alt="logo-o"
                width={520}
                height={520}
                className="absolute -top-10 md:w-[520] md:-top-10 object-contain"
              />
              <Image
                src="/assets/mockup.png"
                alt="mockup"
                width={500}
                height={500}
                className="absolute md:w-[520] md:top-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;
