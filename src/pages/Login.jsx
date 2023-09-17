import React from "react";
import Navigation from "../components/Navigation";

const Login = () => {
  return (
    <div className="h-screen w-full bg-[url('https://www.ghibli.jp/gallery/chihiro032.jpg')] bg-cover">
      <div className="h-full w-full backdrop-brightness-[80%]">

        <div className="h-full w-full flex items-center justify-center ">
          <div className="flex flex-col px-32 py-32 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 space-y-10">
            <div>
              <h1 className="text-5xl text-white text-center">Welcome back,</h1>
            </div>
            <div className="flex flex-col space-y-5">
              <input
                type="text"
                name=""
                id=""
                className="px-7 py-3 text-black rounded-md"
                placeholder="Enter your E-mail"
              />
              <input
                type="text"
                name=""
                id=""
                className="px-7 py-3 text-black rounded-md"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex flex-col space-y-5">
              <button className="px-5 py-3 rounded-sm text-white bg-black">
                Login
              </button>
              <button className="px-5 py-3 rounded-sm text-white bg-black">
                Sign Up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;
