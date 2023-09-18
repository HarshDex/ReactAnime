import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

const url =
  "https://studio-ghibli-59a7e-default-rtdb.firebaseio.com/films.json";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async (param) => {
    try {
      const response = await axios.get(param);
      const dataArray = Object.values(response.data);
      setData(dataArray);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="background-image">
          <img src="/src/assets/flat.png" alt="" />
        </div>
        <div className="heading">
          <h1> GhibliFlix</h1>
        </div>
      </div>

      {/* Card section */}

      <section className=" w-full overflow-scroll bg-black pb-10">
        <div className="ml-7 mr-7">
          <div className="w-full flex items-start pt-10 pb-4">
            <h1 className="text-white text-3xl">
              <span className="border-b-2 border-white">Most Popular</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mt-5 ">
            {data &&
              data.map((item, index) => (
                <div
                  key={index}
                  className="rounded-md shadow-lg overflow-hidden bg-gray-50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:shadow-md hover:scale-[110%] transition ease-in delay-5"
                >
                  <div className="h-[200px] overflow-hidden">
                    {/* Replace item.background_image with the correct property */}
                    <img
                      src={item.background_image} // Use the correct property name
                      className="w-full h-full object-cover"
                      alt="Image"
                    />
                  </div>

                  <div className="flex items-center justify-center p-3 ">
                    {/* Replace item.title with the correct property */}
                    <h1 className="text-xl text-center font-bold text-white">
                      {item.title.slice(0, 15)}
                    </h1>
                    {/* <p className="text-gray-600">{item.description}</p> */}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
