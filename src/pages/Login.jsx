import React from "react";
import Navigation from "../components/Navigation";

const Login = () => {
  return (
    <div className="h-screen w-full bg-[url('https://www.ghibli.jp/gallery/ged025.jpg')] bg-cover ">
      <div className="h-full w-full backdrop-brightness-[80%] p-32 ">
        <div className="h-full w-full flex items-center justify-center">
          {/* <---- Glassmorphsism ----> */}
          <div className="flex flex-col px-5 py-20 sm:px-28 sm:py-28 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 space-y-7 sm:space-y-10">
            <div>
              <h1 className="text-4xl sm:text-5xl text-white text-center">
                Welcome back,
              </h1>
            </div>
            <div className="flex flex-col space-y-5">
              <input
                type="text"
                name=""
                id=""
                className="px-5 py-3 sm:px-7 sm:py-3 text-black rounded-md shadow-lg"
                placeholder="Enter your E-mail"
              />
              <input
                type="text"
                name=""
                id=""
                className="px-5 py-3 sm:px-7 sm:py-3 text-black rounded-md shadow-lg"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex flex-col space-y-5">
              <div className="px-5 py-3 rounded-sm text-white bg-black flex items-center space-x-3 shadow-lg">
                <i class="ri-mail-fill"></i>
                <h1>Sign up with Mail</h1>
              </div>
              <div className="px-5 py-3 rounded-sm text-white bg-black flex items-center space-x-3 shadow-lg">
                <i class="ri-google-fill"></i>
                <h1>Sign up with Google</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
