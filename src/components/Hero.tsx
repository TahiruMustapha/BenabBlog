import React from "react";
import bannerImg from "../images/bannerImg.jpg";
import Image from "next/image";
const Hero = () => {
  return (
    <div className=" w-full max-h-screen relative">
      <Image
        src={bannerImg}
        alt="banner image"
        className=" w-full max-h-screen object-contain"
      />
      <div className=" absolute text-gray-100 flex items-center justify-center flex-col top-0 w-full h-full bg-black/30 ">
        <h2 className=" text-7xl lg:text-[150px] font-bold">Tailor Smith</h2>
        <p className=" text-xl md:text-2xl lg:text-5xl font-semibold">
          Traveler, Photographer
        </p>
      </div>
      
    </div>
  );
};

export default Hero;
