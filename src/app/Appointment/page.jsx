"use client";

import React from "react";
import Image from "next/image";
import Doctor from "/public/Doctor.png";
import { BsSearch } from "react-icons/bs";
import Button from "@/components/button";
import DoctorCard from "@/components/DoctorCard";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosStar } from "react-icons/io";
import Doctor1 from "/public/doctor.jpeg";

const Appointment = () => {
  const doctor = [
    {
      name: "Jiao Yang",
      specialization: "Dentist",
      years: 9,
      ratings: "5",
      icon: IoIosStar,
      image: Doctor1,
    },
    {
      name: "Shang Hai",
      specialization: "Cardiologist",
      years: 27,
      ratings: "4.5",
      icon: IoIosStar,
      image: Doctor1,
    },
    {
      name: "Xiang Li",
      specialization: "Gynecologist",
      years: 11,
      ratings: "4",
      icon: IoIosStar,
      image: Doctor1,
    },
  ];
  const route = useRouter();

  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    route.push(`/doctor?search=${value}`);
  }

  return (
    <div className="min-h-screen pt-20 w-full">
      <div className="flex justify-center">
        <div className="flex flex-col items-center my-10 gap-10">
          <h1 className="text-5xl font-bold">Find a Doctor at your ease</h1>
          <Image src={Doctor} width={300} height={200} alt="doc" className="" />
          <div className="flex w-full items-center gap-3">
            <form
              className="w-full flex mx-5 items-center justify-center gap-3"
              onSubmit={handleSubmit}
            >
              <input
                type="search"
                className="w-full border-2 px-2 py-1"
                placeholder="Search here..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button className="flex items-center">
                <BsSearch className="text-3xl" />
              </Button>
            </form>
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="text-2xl font-bold flex justify-center">
              Available Doctor&apos;s
            </h1>
            <div className="grid grid-cols-3 gap-5">
              {doctor.map((items, index) => (
                <div className="py-2" key={index}>
                  <DoctorCard results={items} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
