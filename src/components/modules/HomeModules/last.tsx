import { nunito, poppins } from "@/styles/fonts";
import React from "react";

const Last = () => {
  return (
    <div className="p-20 relative min-h-screen bg-gray-100 justify-center items-center">
      <div className="flex flex-col w-full bg-white shadow-lg rounded-2xl justify-center items-center p-12 px-16">
        <div className="flex flex-col space-y-6 justify-center items-center">
          <div className={`text-5xl ${nunito.className}`}>
            Lebih Produktif, Lebih Untung, Hasil Hemat!
          </div>
          <div className={`text-md ${poppins.className}`}>
            Jangan tunggu lagi! Buat video pakai Videfly sekarang, biar cepat,
            untung besar, dan hemat!
          </div>
          <div>
            <button className="px-4 py-2 bg-gradient-to-bl from-[#7F52FF] to-[#FB8570] text-white rounded-lg hover:scale-105 transform duration-150 transition-all ease-in-out cursor-pointer">
              Buat Video
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-between pt-20 w-full">
          <div className="flex flex-col items-center space-y-12 flex-1">
            <div className={`text-5xl ${nunito.className}`}>0 %</div>
            <div className={`text-md ${poppins.className}`}>
              Produktivitas meningkat
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1 border-l border-gray-300 mx-4 h-full"></div>
          </div>

          <div className="flex flex-col items-center space-y-12 flex-1">
            <div className={`text-5xl ${nunito.className}`}>0 %</div>
            <div className={`text-md ${poppins.className}`}>Kenaikan ROI</div>
          </div>

          <div className="flex items-center">
            <div className="w-1 border-l border-gray-300 mx-4 h-full"></div>
          </div>

          <div className="flex flex-col items-center space-y-12 flex-1">
            <div className={`text-5xl ${nunito.className}`}>0 X</div>
            <div className={`text-md ${poppins.className}`}>Lebih Hemat</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row pt-24">
        <div className="">Platform yang didukung</div>
      </div>
    </div>
  );
};

export default Last;
