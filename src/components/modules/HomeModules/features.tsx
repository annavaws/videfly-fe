import { nunito } from "@/styles/fonts";
import React from "react";

const Features = () => {
  return (
    <div className="p-10 px-24 relative min-h-screen bg-white justify-center items-center">
      Features
      <div className={`text-5xl ${nunito.className}`}>
        Bagaimana Videfly Membantu Bisnismu?
      </div>
      <div className={`text-md ${nunito.className}`}>
        Lebih Efisien, Lebih Mudah, Hasil Maksimal!
      </div>
      <div className="flex flex-wrap"></div>
    </div>
  );
};

export default Features;
