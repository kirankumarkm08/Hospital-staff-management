import React from "react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import Button from "@/components/Button ";

const DoctorCard = ({ results }) => {
  return (
    <div>
      <div className=" h-fit w-[300px]  bg-black/15 rounded-lg">
        <div className="p-10 flex flex-col  items-center">
          <Image
            src={results.image}
            alt=""
            width={250}
            height={300}
            className="w-[200px] h-[300px] bg-transparent  "
          />
          <h1 className="text-xl flex justify-center font-bold rounded-full">
            {" "}
            Dr.{results.name}
          </h1>
          <h1>{results.specialization}</h1>
          <h1>{results.years} years of expirieances</h1>
          <div className="flex gap-2 items-center ">
            <h1 className="font-bold">Ratings :{results.ratings} </h1>
            <IoIosStar className="text-yellow-500 text-[15px]" />
          </div>
          <Button className="bg-blue-500 w-full px-2 py-1 m-1  ">
            <div className="">
              <h1 className="text-[20p] font-bold">Book an appointment</h1>
              <h1 className="text-[15px]">with Dr.{results.name}</h1>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
