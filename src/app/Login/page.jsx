import React from "react";

const login = () => {
  return (
    <div className="h-screen w-full backdrop-blur-sm ">
      <div className="flex items-center justify-center h-screen">
        <div className="w-[400px] h-[500px]  rounded-lg backdrop-blur-lg shadow-2xl">
          <div className=" flex flex-col  items-center">
            <h1>Login</h1>
            <form className="px-40 ">
              <div className="w-[300px]">
                <div className="flex justify-around ">
                  <label htmlFor="">UserName</label>
                  <input type="text" placeholder="Username" />
                </div>
                <div className=" flex justify-around ">
                  <label htmlFor=""> password</label>
                  <input type="password" placeholder="Password" />
                </div>
              </div>

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
