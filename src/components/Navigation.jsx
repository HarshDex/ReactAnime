import React from "react";

const Navigation = () => {
  return (
    <>
      <div className="hidden h-full w-full bg-transparent ">
        <div className="absolute top-0 right-0 bg-black w-[80%] h-full z-10">
          <div className="h-full w-full ">
            <div>
              <h1 className="text-5xl text-white text-center mt-10">
                React Ghibli
              </h1>
            </div>

            <div className="h-full w-full text-center space-y-16 mt-56">
              <div className="text-white text-4xl">
                <h1>Home</h1>
              </div>
              <div className="text-white text-4xl">
                <h1>Login</h1>
              </div>
              <div className="text-white text-4xl">
                <h1>About</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Code */}

      <header className="hidden bg-black">
        <nav className>
          <div className="w-full flex justify-around py-3">
            <div className="flex text-2xl space-x-10">
              <a href="#" class="group text-white transition duration-300">
                Home
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </a>
              <a href="#" class="group text-white transition duration-300">
                About
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </a>
            </div>

            <div className="flex text-4xl">
              <a href="#" class="group text-white transition duration-300">
                React Ghibli
              </a>
            </div>

            <div className="flex text-2xl">
              <a href="#" class="group text-white transition duration-300">
                Login
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
