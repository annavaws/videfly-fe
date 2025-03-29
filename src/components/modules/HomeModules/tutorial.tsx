import { useState } from "react";
import { nunito, poppins } from "@/styles/fonts";
import React from "react";
import Image from "next/image";

const Tutorial = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Array of images for each step
  const stepImages = [
    "/assets/mockup-tutorial.png",
    "/assets/mockup-tutorial.png",
    "/assets/mockup-tutorial.png",
  ];

  const handleStepClick = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div
      id="cara-kerja"
      className="p-8 px-12 lg:p-10 lg:px-24 relative min-h-screen justify-center items-center text-black pt-8 pb-20"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <div
            className={`text-sm flex w-fit items-center space-x-2 border rounded-full p-1 px-2 border-[#703BE7]`}
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
            <span className="text-[#703BE7]">Tutorial</span>
          </div>
        </div>
        <div
          className={`pt-4 text-center text-xl md:text-3xl lg:text-5xl ${nunito.className} font-bold`}
        >
          Buat Konten Menarik Untuk Bisnismu
        </div>
        <div
          className={`text-center text-xl md:text-3xl lg:text-5xl ${nunito.className} font-bold bg-gradient-to-r from-[#703BE7] to-[#FFA899] text-transparent bg-clip-text`}
        >
          Dalam 3 Langkah Mudah!
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row gap-4 lg:gap-12 pt-6 lg:pt-16 lg:px-10">
        <div className="w-full lg:w-1/2 justify-center flex">
          <Image
            src={stepImages[activeStep - 1]}
            alt="mockup-tutorial"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 space-y-4 justify-center items-center">
          <div
            onClick={() => handleStepClick(1)} // Set active step to 1 on click
            className={`p-3 rounded-3xl border border-gray-200 cursor-pointer shadow ${
              activeStep === 1 ? "border-purple-800" : "hover:border-purple-800"
            }`}
          >
            <div
              className={`w-full h-full text-sm md:text-base lg:text-lg font-semibold py-2 ${
                poppins.className
              } ${
                activeStep === 1
                  ? "bg-gradient-to-r from-[#703BE7] to-[#FFA899] text-transparent bg-clip-text"
                  : "hover:bg-gradient-to-r hover:from-[#703BE7] hover:to-[#FFA899] hover:text-transparent hover:bg-clip-text"
              }`}
            >
              Step 1 - Masukkan URL
              <div
                className={`text-xs md:text-sm font-normal ${poppins.className} text-[#545454]`}
              >
                Cukup Tempelkan tautan produk atau bisnis Anda, dan sistem kami
                akan secara otomatis mengambil informasi penting untuk memulai.
              </div>
            </div>
          </div>

          <div
            onClick={() => handleStepClick(2)} // Set active step to 2 on click
            className={`p-3 rounded-3xl border border-gray-200 cursor-pointer shadow ${
              activeStep === 2 ? "border-purple-800" : "hover:border-purple-800"
            }`}
          >
            <div
              className={`w-full h-full text-sm md:text-base lg:text-lg font-semibold py-2 ${
                poppins.className
              } ${
                activeStep === 2
                  ? "bg-gradient-to-r from-[#703BE7] to-[#FFA899] text-transparent bg-clip-text"
                  : "text-black hover:bg-gradient-to-r hover:from-[#703BE7] hover:to-[#FFA899] hover:text-transparent hover:bg-clip-text"
              }`}
            >
              Step 2 - Konfirmasi Informasi & Personalisasi
              <div
                className={`text-xs md:text-sm font-normal ${poppins.className} text-[#545454]`}
              >
                Periksa detail produk yang diambil, tambahkan sentuhan pribadi,
                dan sesuaikan preferensi untuk memastikan hasil yang menarik.
              </div>
            </div>
          </div>

          <div
            onClick={() => handleStepClick(3)} // Set active step to 3 on click
            className={`p-3 rounded-3xl border border-gray-200 cursor-pointer shadow ${
              activeStep === 3 ? "border-purple-800" : "hover:border-purple-800"
            }`}
          >
            <div
              className={`w-full h-full text-sm md:text-base lg:text-lg font-semibold py-2 ${
                poppins.className
              } ${
                activeStep === 3
                  ? "bg-gradient-to-r from-[#703BE7] to-[#FFA899] text-transparent bg-clip-text"
                  : "text-black hover:bg-gradient-to-r hover:from-[#703BE7] hover:to-[#FFA899] hover:text-transparent hover:bg-clip-text"
              }`}
            >
              Step 3 - Generate & Unduh
              <div
                className={`text-xs md:text-sm font-normal ${poppins.className} text-[#545454]`}
              >
                Klik tombol untuk menghasilkan dan mengunduh konten dalam format
                yang Anda inginkan.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
