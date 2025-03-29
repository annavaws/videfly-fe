import { nunito, poppins } from "@/styles/fonts";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Last = () => {
  return (
    <div className="py-12 px-8 lg:p-20 lg:px-32 relative min-h-screen bg-gray-100 justify-center items-center">
      <div className="flex flex-col w-full bg-white shadow-lg rounded-2xl justify-center items-center p-4 px-6 md:p-8 md:px-12 lg:p-12 lg:px-16">
        <div className="flex flex-col space-y-6 justify-center items-center text-center">
          <div
            className={`text-xl md:text-3xl lg:text-5xl ${nunito.className} font-bold`}
          >
            Lebih Produktif, Lebih Untung, Hasil Hemat!
          </div>
          <div
            className={`text-sm md:text-base ${poppins.className} text-[#545454]`}
          >
            Jangan tunggu lagi! Buat video pakai Videfly sekarang, biar cepat,
            untung besar, dan hemat!
          </div>
          <div>
            <button
              className={`${poppins.className} flex items-center justify-center px-7 py-2 bg-gradient-to-r from-[#7F52FF] to-[#FB8570] text-white rounded-xl hover:opacity-90 transform duration-150 transition-all ease-in-out cursor-pointer`}
            >
              <div className="font-semibold text-sm md:text-base lg:text-lg">
                Buat Video
              </div>
              <div className="ml-5">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_19_486)">
                    <path
                      d="M2 12.5C2 14.5767 2.61581 16.6068 3.76957 18.3335C4.92332 20.0602 6.5632 21.406 8.48182 22.2007C10.4004 22.9955 12.5116 23.2034 14.5484 22.7982C16.5852 22.3931 18.4562 21.3931 19.9246 19.9246C21.3931 18.4562 22.3931 16.5852 22.7982 14.5484C23.2034 12.5116 22.9955 10.4004 22.2007 8.48182C21.406 6.5632 20.0602 4.92332 18.3335 3.76957C16.6068 2.61581 14.5767 2 12.5 2C9.71523 2 7.04451 3.10625 5.07538 5.07538C3.10625 7.04451 2 9.71523 2 12.5ZM6.5 11.75H15.6125L11.4275 7.54445L12.5 6.5L18.5 12.5L12.5 18.5L11.4275 17.4296L15.6125 13.25H6.5V11.75Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_19_486">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-between pt-12 md:pt-16 lg:pt-20 w-full">
          <div className="flex flex-col items-center space-y-4 md:space-y-8 lg:space-y-12 flex-1">
            <div
              className={`text-xl md:text-5xl lg:text-7xl font-bold ${nunito.className} bg-gradient-to-r from-[#703BE7] to-[#FFA899] text-transparent bg-clip-text `}
            >
              70 %
            </div>
            <div
              className={`text-center text-xs md:text-base font-medium text-[#545454] ${poppins.className}`}
            >
              Produktivitas meningkat
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1 border-l border-gray-300 mx-4 h-full"></div>
          </div>

          <div className="flex flex-col items-center space-y-4 md:space-y-8 lg:space-y-12 flex-1">
            <div
              className={`text-xl md:text-5xl lg:text-7xl font-bold ${nunito.className} bg-gradient-to-r from-[#703BE7] to-[#FFA899] text-transparent bg-clip-text `}
            >
              50 %
            </div>
            <div
              className={`text-center text-xs md:text-base font-medium text-[#545454] ${poppins.className}`}
            >
              Kenaikan ROI
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1 border-l border-gray-300 mx-4 h-full"></div>
          </div>

          <div className="flex flex-col items-center space-y-4 md:space-y-8 lg:space-y-12 flex-1">
            <div
              className={`text-xl md:text-5xl lg:text-7xl font-bold ${nunito.className} bg-gradient-to-r from-[#703BE7] to-[#FFA899] text-transparent bg-clip-text `}
            >
              20 X
            </div>
            <div
              className={`text-center text-xs md:text-base font-medium text-[#545454] ${poppins.className}`}
            >
              Lebih Hemat
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full py-18 justify-between gap-4">
        <div
          className={`md:-1/3 flex items-center text-sm md:text-base lg:text-lg font-medium text-[#545454] ${poppins.className}`}
        >
          Platform yang didukung:
        </div>
        <div className="md:w-2/3 flex justify-center items-center h-full">
          <div className="w-full  flex justify-center items-center py-10">
            <Marquee speed={50} gradient={false} loop={0} direction="left">
              <div className="flex items-center space-x-16">
                <Image
                  src="/assets/brands/tokopedia.png"
                  alt="Brand 1"
                  width={80}
                  height={32}
                  className="object-contain ml-16"
                />
                <Image
                  src="/assets/brands/sociolla.png"
                  alt="Brand 2"
                  width={80}
                  height={32}
                  className="object-contain"
                />
                <Image
                  src="/assets/brands/shopee.png"
                  alt="Brand 3"
                  width={80}
                  height={32}
                  className="object-contain"
                />
                <Image
                  src="/assets/brands/tiktok.png"
                  alt="Brand 4"
                  width={100}
                  height={32}
                  className="object-contain"
                />
                <Image
                  src="/assets/brands/beauty_haul.png"
                  alt="Brand 5"
                  width={80}
                  height={32}
                  className="object-contain"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
