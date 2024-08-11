"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/Constants";
import { usePathname } from "next/navigation";
import Login from "@/components/login";
import Button from "@/components/button";

const NavBar = () => {
  const pathname = usePathname();
  const [visible, Setvisible] = useState(false);
  return (
    <div className="fixed z-50 w-full ">
      <div className=" flex text-black bg-white items-center  justify-between px-10 py-5   ">
        <div className="">
          <Link href="/" className="font-bold text-[25px]">
            Stay Healthy
          </Link>
        </div>

        <div className="flex gap-5 text-[20px] items-center  text-black hidden lg:inline-flex">
          {navLinks.map((item) => {
            const isActive = pathname === item.route;
            return (
              <Link
                className={
                  isActive
                    ? "underline my-1 decoration-purple-500  "
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
          <Link
            href="/Login"
            className=" rounded text-[20px] text-white bg-purple-500 px-4 py-1 hover:bg-purple-700 "
          >
            SignIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
