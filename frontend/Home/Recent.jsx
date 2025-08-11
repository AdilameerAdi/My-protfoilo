import { useState } from "react";
export default function Recent() {
   
  return (
    <>
      <div className="px-4 md:px-8 lg:px-0">
        <div className="text-center">
        <h1 className="capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">My recent <span className="text-[#2dbccb] font-bold"> work</span></h1>
        <p className="mx-4 md:mx-20 lg:mx-40 text-base sm:text-lg md:text-xl leading-relaxed">
          As a Freelance Web Developer and Designer in Pakistan, I have
          successfully delivered numerous professional website projects
          worldwide. Here are a few examples for your review:
        </p>
        </div>
      </div>
     <div className="flex flex-wrap gap-2 md:gap-4 capitalize mt-8 md:mt-12 lg:mt-15 mx-4 md:mx-8 lg:mx-45 justify-center md:justify-between">
  <button className="px-4 md:px-6 py-2 rounded-full border-2 border-[#2dbccb] text-[#2dbccb] font-medium shadow-sm hover:bg-[#2dbccb] hover:text-white hover:shadow-md transition duration-300 text-sm md:text-base">
    All
  </button>
  <button className="px-4 md:px-6 py-2 rounded-full border-2 border-[#2dbccb] text-[#2dbccb] font-medium shadow-sm hover:bg-[#2dbccb] hover:text-white hover:shadow-md transition duration-300 text-sm md:text-base">
    Web Design
  </button>
  <button className="px-4 md:px-6 py-2 rounded-full border-2 border-[#2dbccb] text-[#2dbccb] font-medium shadow-sm hover:bg-[#2dbccb] hover:text-white hover:shadow-md transition duration-300 text-sm md:text-base">
    Logo Design
  </button>
  <button className="px-4 md:px-6 py-2 rounded-full border-2 border-[#2dbccb] text-[#2dbccb] font-medium shadow-sm hover:bg-[#2dbccb] hover:text-white hover:shadow-md transition duration-300 text-sm md:text-base">
    Mobile Apps
  </button>
  <button className="px-4 md:px-6 py-2 rounded-full border-2 border-[#2dbccb] text-[#2dbccb] font-medium shadow-sm hover:bg-[#2dbccb] hover:text-white hover:shadow-md transition duration-300 text-sm md:text-base">
    Graphics Design
  </button>
</div>
<div className="h-[200px] md:h-[250px] lg:h-[300px]">

</div>
  


    </>
  );
}
