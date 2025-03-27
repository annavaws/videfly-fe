import React, { useState } from "react";
import Image from "next/image";
import { nunito, poppins } from "@/styles/fonts";

const LiveDemo = () => {
  const [selectedProduct, setSelectedProduct] = useState("");

  return (
    <div className="bg-red-200">
      <div className="relative bg-gradient-to-tl from-[#F1EDFD] to-[#7261EF] min-h-screen flex justify-center items-center">
        <div className="w-[85%]">
          <div className="bg-white rounded-2xl flex flex-row relative shadow-lg h-[640px]">
            <div className="flex flex-col w-1/2 p-10">
              <div className={`text-xl font-${poppins.className}`}>
                Live Demo
              </div>
              <div className={`text-5xl font-${nunito.className}`}>
                Coba Fitur URL to Video{" "}
                <span className="text-gradient">Tanpa Biaya!</span>
              </div>
              <div className={`text-md font-${poppins.className}`}>
                Masukkan URL, ubah jadi video dalam hitungan detik.
              </div>
              <div className={`text-md font-${poppins.className}`}>
                Mudah dan gratis!
              </div>

              <div className="flex flex-row space-x-4">
                {" "}
                <select
                  className="p-2 px-10 rounded-lg border border-[#703BE7]"
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                >
                  <option value="">Pilih Link URL Product</option>
                  <option value="produk1">Produk 1</option>
                  <option value="produk2">Produk 2</option>
                  <option value="produk3">Produk 3</option>
                </select>
                {/* Button */}
                <button className="px-6 py-2 bg-[#703BE7] text-white rounded-lg hover:scale-105 transform duration-150 transition-all ease-in-out cursor-pointer">
                  Analisa
                </button>
              </div>
            </div>
            <div className="relative w-1/2 flex justify-end items-center overflow-clip">
              {/* Logo Image behind the Live Demo image */}
              <Image
                src="/assets/substract-o.png"
                alt="logo-o"
                width={520}
                height={520}
                className="absolute -top-10 object-contain"
              />
              <Image
                src="/assets/mockup.png"
                alt="mockup"
                width={500}
                height={500}
                className="absolute object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;
