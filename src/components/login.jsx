import React from "react";
import { DevTool } from "@hookform/devtools";
import { useform } from "react-hook-form";
import Link from "next/link";
import Button from "./button";

const login = (onClose) => {
  const { register, handleSubmit, control, formState } = useform();
  const { errors } = formState;
  const submit = (data) => {
    console.log(data);
  };
  return (
    <div className="fixed z-50  h-screen w-full">
      <div className=" ">
        <form
          onSubmit={handleSubmit(submit)}
          className="px-10 my-10 flex flex-col gap-2 w-full"
        >
          <h1 className="font-bold justify-center items-center flex">Login</h1>
          <label>Email</label>
          <input
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            className="w-full p-2 text-[15px]"
          />
          <p className="text-red-800">{errors?.email?.message}</p>
          <label>Password</label>
          <input
            {...register("password", {
              required: "Please enter your password",
            })}
            type="password"
            className="w-full p-2 text-[15px]"
          />
          <p className="text-red-800">{errors?.password?.message}</p>
          <button type="submit" className="bg-blue-500 rounded-lg mt-5 p-5">
            Login
          </button>
          <div className="flex items-center gap-2 justify-center">
            <Link
              href="/forgotPassword"
              className="text-[15px] hover:underline decoration-violet-500"
            >
              Forgot Password?
            </Link>
            <Button className="text-[15px]">Create a new Account </Button>
          </div>

          {/* <DevTool control={control} /> */}
        </form>
      </div>
    </div>
  );
};

export default login;
