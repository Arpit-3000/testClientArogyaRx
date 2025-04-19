import React from "react";
import her from "../../assets/her.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full min-h-[80vh] pt-[6rem] px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col md:flex-row justify-start items-center"
      style={{ backgroundImage: `url(${her})` }}
    >
      <div className="flex flex-col justify-center items-start gap-6 sm:gap-8 md:gap-10 w-full md:w-[80%] lg:w-[60%]">
        <div className="flex flex-col justify-center items-start space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold">
            Holistic Healthcare
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold">
            Experience
          </h1>
        </div>
        <button
          onClick={() => navigate("/labs")}
          className="px-8 sm:px-10 md:px-12 lg:px-16 ml-2 sm:ml-4 bg-black text-white py-3 sm:py-4 text-base sm:text-lg lg:text-xl font-semibold rounded-[20px] italic shadow-md hover:shadow-xl hover:scale-[1.05] transition-all duration-300 ease-in-out"
        >
          Book now
        </button>
      </div>
    </div>
  );
};

export default Hero;
