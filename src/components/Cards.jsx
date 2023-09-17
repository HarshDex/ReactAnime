import React from "react";

const Cards = () => {
  return (
    <>
      <div className="h-[600px] w-[500px] flex flex-col rounded-md shadow-lg ">
        <div className="bg-blue-500 w-full overflow-hidden">
          <img
            src="https://www.ghibli.jp/images/chihiro.jpg"
            className="w-full h-full"
            alt="Image"
          />
        </div>
        <div className=" text-black w-full whitespace-nowrap py-5 mt-auto">
          <h1 className="text-center text-4xl">Attack On Titan</h1>
        </div>
      </div>
    </>
  );
};

export default Cards;
