"use client";

import React, { useState } from "react";
import Link from "next/link";
// import { navLinks } from "@/Constants";
import { usePathname } from "next/navigation";
import Login from "@/components/signUp";
import Button from "@/components/button";
import Modal from "@/components/Modal";

const NavBar = () => {
  const navLinks = [
    {
      label: "home",
      route: "/",
    },
    {
      label: "Appointments",
      route: "/Appointment",
    },
    {
      label: "Health Blog",
      route: "/Healthblog",
    },
    {
      label: "Reviews",
      route: "/Reviews",
    },
  ];

  const pathname = usePathname();
  const [visible, Setvisible] = useState(false);
  return (
    <div className="fixed z-50 w-full  border-b ">
      <div className=" flex text-black bg-white items-center  justify-between px-10 py-5   ">
        <div className="">
          <Link href="/" className="font-bold text-[25px]">
            Stay Healthy
          </Link>
        </div>

        <div className="flex gap-5 text-[20px] items-center  text-black hidden lg:inline-flex">
          {Array.isArray(navLinks) &&
            navLinks.map((item) => {
              const isActive = pathname === item.route;
              return (
                <Link
                  className={
                    isActive
                      ? "underline my-1 decoration-purple-500 font-semibold  "
                      : "hover:text-purple-500 "
                  }
                  href={item.route}
                  key={item.route}
                >
                  {" "}
                  {item.label}
                </Link>
              );
            })}
          <div className=""></div>
          <Button
            className=" rounded text-[20px] text-white bg-purple-500 px-4 py-1 hover:bg-purple-700 "
            onClick={() => {
              Setvisible(true);
            }}
          >
            SignIn
          </Button>
          {visible ? (
            <Modal
              onClose={() => {
                Setvisible(false);
              }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
