import { nunito, poppins } from "@/styles/fonts";
import React from "react";
import Image from "next/image";
const Tutorial = () => {
  return (
    <div className="p-10 px-24 relative min-h-screen bg-blue-200 justify-center items-center text-black">
      <div className="flex flex-col space-y-4 justify-center items-center">
        <div>Tutorial</div>
        <div className={`text-5xl ${nunito.className}`}>
          Buat Konten Menarik Untuk Bisnismu
        </div>
        <div className={`text-5xl ${nunito.className}`}>
          Dalam 3 Langkah Mudah!
        </div>
      </div>
      <div className="flex flex-col lg:flex-row pt-20 px-10">
        <div className="w-1/2 justify-center flex">
          <Image
            src="/assets/mockup-tutorial.png"
            alt="mockup-tutorial"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col w-1/2 space-y-4 justify-center items-center">
          <div className="p-2 rounded-3xl border border-gray-200 hover:border-purple-800">
            <div
              className={`text-lg font-semibold ${poppins.className} hover:text-purple-800`}
            >
              Step 1 - Masukkan URL
            </div>
            <div className={`text-md ${poppins.className}`}>
              Cukup Tempelkan tautan produk atau bisnis Anda, dan sistem kami
              akan secara otomatis mengambil informasi penting untuk memulai.
            </div>
          </div>
          <div className="p-2 rounded-3xl border border-gray-200 hover:border-purple-800">
            <div
              className={`text-lg font-semibold ${poppins.className} hover:text-purple-800`}
            >
              Step 2 - Konfirmasi Informasi & Personalisasi
            </div>
            <div className={`text-md ${poppins.className}`}>
              Periksa detail produk yang diambil, tambahkan sentuhan unik, dan
              pilih gaya yang sesuai dengan brand Anda.
            </div>
          </div>
          <div className="p-2 rounded-3xl border border-gray-200 hover:border-purple-800">
            <div
              className={`text-lg font-semibold ${poppins.className} hover:text-purple-800`}
            >
              Step 3 - Generate & Dapatkan Hasilnya
            </div>
            <div className={`text-md ${poppins.className}`}>
              Dalam hitungan detik, dapatkan konten bisnis yang siap
              digunakan—efektif, menarik, dan profesional!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
