import React from "react";
import Button from "@/components/button";

const Hero = () => {
  return (
    <div className="min-h-screen justify-center flex flex-col items-center font-bold text-[40px]">
      <h1 className="">Your Health</h1>
      <h1 className="text-purple-600">Our Responsibility</h1>
      <h1 className="text-[10px] font-normal max-w-[700px] justify-centre flex ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsam
        est consequuntur optio numquam at. Obcaecati, beatae pariatur, vel
      </h1>
      <h1 className="text-[10px] font-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque itaque
        dicta animi fugiat
      </h1>
      <Button className="text-white mt-10 bg-purple-500 hover:bg-purple-700 text-[30px] px-5 py-2 rounded-xl">
        Get Started
      </Button>
    </div>
  );
};

export default Hero;
