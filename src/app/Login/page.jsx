"use client";

import React from "react";
import { useform } from "react-hook-form";

const login = () => {
  const { register, handleSubmit } = useform();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="bg-black">
      <form>sbhh</form>
    </div>
  );
};

export default login;
