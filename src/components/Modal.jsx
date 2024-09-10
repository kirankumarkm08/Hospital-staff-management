"use client";

import React, { useState } from "react";
import Signup from "@/components/signUp";
import Button from "./button";
import { IoIosClose } from "react-icons/io";
import Login from "@/components/Login";

const Modal = ({ onClose }) => {
  const [visible, Setvisible] = useState(false);
  return (
    <div>
      <div className="fixed z-50 w-full inset-0  ">
        <div className="flex  flex-col justify-center items-center h-screen backdrop-blur-sm relative">
          <div className="max-w-[400px] w-[400px] min-h-[500px] max-h-screen     py-10   rounded-lg backdrop-blur-lg shadow-2xl border-2 bg-slate-100 ">
            <div className="">
              <Button className="absolute end-0 px-2 mb-20 " onClick={onClose}>
                <IoIosClose className="text-[40px]" />
              </Button>
            </div>
            <div className="">{visible ? <Signup /> : <Login />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
