import { nunito, poppins } from "@/styles/fonts";
import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <div
      id="fitur-ai"
      className={`${poppins.className} text-center p-10 px-12 lg:px-12 xl:px-24 relative min-h-screen bg-white justify-center items-center pb-32`}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <a
            href="#fitur-ai"
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
            <span className="text-[#703BE7]">Features</span>
          </a>
        </div>

        <div
          className={`pt-4 text-center text-xl md:text-3xl lg:text-5xl ${nunito.className} font-bold`}
        >
          Bagaimana Videfly Membantu Bisnismu?
        </div>
        <div
          className={`text-center text-xl md:text-3xl lg:text-5xl ${nunito.className} font-bold bg-gradient-to-r from-[#703BE7] to-[#FFA899] text-transparent bg-clip-text`}
        >
          Lebih Efisien, Lebih Mudah, Hasil Maksimal!
        </div>
      </div>
      <div className="text-left flex flex-col md:flex-row gap-3 lg:px-9 pt-12 lg:pt-16">
        {/* Item 1 */}
        <div className="flex flex-col bg-[#F5F5F9] rounded-xl p-4 py-6 justify-between">
          <div className="h-[60%] w-full flex justify-center items-center">
            <Image
              src="/assets/ft_mockup1.png"
              alt="mockup"
              width={300}
              height={0}
              className="object-cover"
            />
          </div>
          <div className="space-y-2">
            <div
              className={`${nunito.className} flex font-bold text-base lg:text-xl gap-2 items-center`}
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 13.229C10.1416 13.4609 10.3097 13.6804 10.5042 13.8828C11.7117 15.1395 13.5522 15.336 14.9576 14.4722C15.218 14.3121 15.4634 14.1157 15.6872 13.8828L18.9266 10.5114C20.3578 9.02184 20.3578 6.60676 18.9266 5.11718C17.4953 3.6276 15.1748 3.62761 13.7435 5.11718L13.03 5.85978"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M10.9703 18.14L10.2565 18.8828C8.82526 20.3724 6.50471 20.3724 5.07345 18.8828C3.64218 17.3932 3.64218 14.9782 5.07345 13.4886L8.31287 10.1172C9.74413 8.62761 12.0647 8.6276 13.4959 10.1172C13.6904 10.3195 13.8584 10.539 14 10.7708"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
              <span>Buat Video dari URL</span>
            </div>
            <div className="text-xs md:text-sm text-[#545454] text-left">
              Cukup masukkan tautan produk atau bisnismu, dan Videfly akan
              otomatis mengambil informasi serta menghasilkan video siap pakai.
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col bg-[#F5F5F9] rounded-xl p-4 py-6 justify-between">
          <div className="h-[60%] w-full flex justify-center items-center">
            <Image
              src="/assets/ft_mockup2.png"
              alt="mockup"
              width={300}
              height={0}
              className="object-cover"
            />
          </div>
          <div className="space-y-2">
            <div
              className={`${nunito.className} flex font-bold text-base lg:text-xl gap-2 items-center`}
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 4.5V7.5H4.5V4.5H19.5ZM19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V7.5C3 7.89782 3.15804 8.27936 3.43934 8.56066C3.72064 8.84196 4.10218 9 4.5 9H19.5C19.8978 9 20.2794 8.84196 20.5607 8.56066C20.842 8.27936 21 7.89782 21 7.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM7.5 12V19.5H4.5V12H7.5ZM7.5 10.5H4.5C4.10218 10.5 3.72064 10.658 3.43934 10.9393C3.15804 11.2206 3 11.6022 3 12V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H7.5C7.89782 21 8.27936 20.842 8.56066 20.5607C8.84196 20.2794 9 19.8978 9 19.5V12C9 11.6022 8.84196 11.2206 8.56066 10.9393C8.27936 10.658 7.89782 10.5 7.5 10.5ZM19.5 12V19.5H12V12H19.5ZM19.5 10.5H12C11.6022 10.5 11.2206 10.658 10.9393 10.9393C10.658 11.2206 10.5 11.6022 10.5 12V19.5C10.5 19.8978 10.658 20.2794 10.9393 20.5607C11.2206 20.842 11.6022 21 12 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V12C21 11.6022 20.842 11.2206 20.5607 10.9393C20.2794 10.658 19.8978 10.5 19.5 10.5Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span>Template Siap Pakai</span>
            </div>
            <div className="text-xs md:text-sm text-[#545454] text-left">
              Tak perlu mendesain dari nol! Gunakan beragam template yang bisa
              langsung disesuaikan dengan kebutuhan bisnismu.
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col bg-[#F5F5F9] rounded-xl p-4 py-6 justify-between">
          <div className="h-[60%] w-full flex justify-center items-center">
            <Image
              src="/assets/ft_mockup3.png"
              alt="mockup"
              width={300}
              height={0}
              className="object-cover"
            />
          </div>
          <div className="space-y-2">
            <div
              className={`${nunito.className} flex font-bold text-base lg:text-xl gap-2 items-center`}
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_19_1139)">
                    <path
                      d="M11.8731 22.632L6.73027 23.0777L7.17598 17.9348L17.8731 7.30628C18.0328 7.143 18.2234 7.01326 18.4339 6.92469C18.6444 6.83612 18.8705 6.79049 19.0988 6.79049C19.3272 6.79049 19.5533 6.83612 19.7637 6.92469C19.9742 7.01326 20.1649 7.143 20.3246 7.30628L22.5017 9.50056C22.6624 9.65993 22.7899 9.84953 22.8769 10.0584C22.964 10.2673 23.0088 10.4914 23.0088 10.7177C23.0088 10.944 22.964 11.1681 22.8769 11.377C22.7899 11.5859 22.6624 11.7755 22.5017 11.9348L11.8731 22.632ZM1.44341 6.80913C0.841698 6.70456 0.841698 5.84056 1.44341 5.73599C2.50845 5.5497 3.49404 5.05091 4.27488 4.30305C5.05571 3.55518 5.59652 2.59201 5.82856 1.53599L5.86456 1.36971C5.99484 0.776563 6.8417 0.77142 6.97884 1.36628L7.0217 1.55828C7.26073 2.61029 7.80559 3.5681 8.58771 4.31117C9.36983 5.05425 10.3543 5.54938 11.4171 5.73428C12.0223 5.83713 12.0223 6.70628 11.4171 6.81256C10.3542 6.99703 9.36953 7.49177 8.5871 8.23454C7.80468 8.97731 7.25943 9.93492 7.01998 10.9868L6.97541 11.1806C6.83998 11.7737 5.99313 11.7703 5.86284 11.1754L5.82856 11.0091C5.59629 9.95265 5.05497 8.98914 4.27347 8.24123C3.49198 7.49332 2.50565 6.9948 1.43998 6.80913H1.44341Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_19_1139">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>Edit Cepat & Flexible</span>
            </div>
            <div className="text-xs md:text-sm text-[#545454] text-left">
              Sesuaikan konten dengan mudah menggunakan Quick Edit. Ubah gambar,
              musik, atau elemen lainnya tanpa keahlian editing.
            </div>
          </div>
        </div>
      </div>

      <div className="text-left flex flex-col md:flex-row gap-3 lg:px-9 pt-3">
        {/* Item 4 */}
        <div className="flex flex-col bg-[#F5F5F9] rounded-xl p-4 py-6 justify-between">
          <div className="h-[60%] w-full flex justify-center items-center">
            <Image
              src="/assets/ft_mockup4.png"
              alt="mockup"
              width={500}
              height={0}
              className="object-cover"
            />
          </div>
          <div className="space-y-2">
            <div
              className={`${nunito.className} flex font-bold text-base lg:text-xl gap-2 items-center`}
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 22H2"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M21 22V14.5C21 14.1022 20.842 13.7206 20.5607 13.4393C20.2794 13.158 19.8978 13 19.5 13H16.5C16.1022 13 15.7206 13.158 15.4393 13.4393C15.158 13.7206 15 14.1022 15 14.5V22V5C15 3.586 15 2.879 14.56 2.44C14.122 2 13.415 2 12 2C10.585 2 9.879 2 9.44 2.44C9 2.878 9 3.585 9 5V22V9.5C9 9.10218 8.84196 8.72064 8.56066 8.43934C8.27936 8.15804 7.89782 8 7.5 8H4.5C4.10218 8 3.72064 8.15804 3.43934 8.43934C3.15804 8.72064 3 9.10218 3 9.5V22"
                    stroke="black"
                    stroke-width="1.5"
                  />
                </svg>
              </span>
              <span>Analisis & Rekomendasi Cerdas</span>
            </div>
            <div className="text-xs md:text-sm text-[#545454] text-left">
              Dapatkan insight performa video dengan Videfly Analytics, lengkap
              dengan saran improvement untuk konten yang lebih menarik dan
              efektif.
            </div>
          </div>
        </div>

        {/* Item 5 */}
        <div className="flex flex-col bg-[#F5F5F9] rounded-xl p-4 py-6 justify-between">
          <div className="h-[60%] w-full flex justify-center items-center">
            <Image
              src="/assets/ft_mockup5.png"
              alt="mockup"
              width={500}
              height={0}
              className="object-contain"
            />
          </div>
          <div className="space-y-2">
            <div
              className={`${nunito.className} flex font-bold text-base lg:text-xl gap-2 items-center`}
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 2V4M6 2V4"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.5 8H20.5"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 8H21"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span>Jadwalkan & Posting Otomatis</span>
            </div>
            <div className="text-xs md:text-sm text-[#545454] text-left">
              Hemat waktu dengan integrasi media sosial! Langsung jadwalkan dan
              publikasikan kontenmu ke berbagai platform tanpa perlu pindah
              aplikasi.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
