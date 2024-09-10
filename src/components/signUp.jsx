"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/button";
import { useform } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Signin = () => {
  const { register, handleSubmit, control, formState, watch, reset } = useform({
    defaultValues: {
      email: "",
      password: "",
    },
    social: {
      x: "",
      tg: "",
    },
    phoneNumber: [],
    Phn: [{ number: "" }],
  });
  const { errors, isDirty, isValid, isSubmitSuccessful } = formState;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  const onSubmit = (data) => console.log(data);
  const username = watch("name");
  return (
    <div className=" ">
      <div className="flex items-center justify-center  ">
        <div className="">
          <div className=" flex flex-col  items-center ">
            <h1 className="text-[30px]">Sign up</h1>
            <div className="flex gap-1 capitalize ">
              <h2>already a member ? </h2>
            </div>
            <h1> hey buddy ! {username}</h1>
            <div className="">
              <form
                className=" flex flex-col w-[300px] gap-2 capitalize"
                onSubmit={handleSubmit(onSubmit)}
              >
                <label htmlFor="">select Role</label>
                <select
                  {...register("select role", {
                    required: "please select role",
                  })}
                  className="border-2 px-2"
                  placeholder="select your role"
                  defaultValue={"select role"}
                >
                  <option value="Doctor">Doctor</option>
                  <option value="Admin">Admin</option>
                  <option value="Patient">Patient</option>
                </select>
                <label>Name</label>
                <input
                  {...register("name", {
                    required: "please enter name",
                  })}
                  className=" px-2"
                  placeholder="Enter Your Name"
                />
                <p className="text-red-800">{errors.name?.message}</p>
                <label>Phone Number</label>
                <input
                  {...register("phoneNumber", {
                    required: "please enter phone number",
                  })}
                  placeholder="phoneNumber"
                  className="px-2"
                  type="number"
                />
                <p className="text-red-800">{errors?.phoneNumber?.message}</p>
                <label>Email</label>
                <input
                  {...register("userEmail", {
                    required: "please enter email",
                    validate: {
                      notValid: (data) => {
                        return (
                          data !== "admin.com" || "Please enter a valid email"
                        );
                      },
                      badDomain: (data) => {
                        return (
                          data.endsWith("domain.com") &&
                          "domain gmail is not supported"
                        );
                      },
                    },
                  })}
                  placeholder="Enter your email"
                  className="px-2"
                  type="email"
                />
                <p className="text-red-800">{errors?.userEmail?.message}</p>
                <label>Password</label>
                <input
                  {...register("password", {
                    required: "please enter your password and keep it hidden",
                  })}
                  type="password"
                  placeholder="password"
                  className="px-2"
                />
                <p className="text-red-800">{errors?.password?.message}</p>

                <div className=" flex gap-2 mt-5">
                  <Button
                    type="submit"
                    className={" w-[150px] bg-blue-600 px-4 py-2 rounded-xl"}
                  >
                    {" "}
                    Submit
                  </Button>
                  {/* <Button
                    onClick={setReset}
                    className={"w-[150px] bg-red-600 px-4 py-2 rounded-xl"}
                  >
                    Reset
                  </Button> */}
                </div>
              </form>
              {/* <Button onClick={getval}>get value</Button>
              <Button onClick={setval}>set value</Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
