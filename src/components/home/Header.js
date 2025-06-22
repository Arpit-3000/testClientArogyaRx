import React from "react";
import her from "../../assets/her.png";

const Hero = () => {
  return (
    <div className="relative w-full">
      <div
        className="bg-cover bg-center bg-no-repeat w-full min-h-[80vh] pt-[6rem] px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col md:flex-row justify-start items-center"
        style={{ backgroundImage: `url(${her})` }}
      >
        <div className="flex flex-col justify-center items-start gap-6 sm:gap-8 md:gap-10 w-full md:w-[80%] lg:w-[60%]">
          <div className="flex flex-col justify-center items-start space-y-2">
            <h1 className="text-2xl  font-bold sm:text-3xl md:text-4xl lg:text-6xl ">
              Holistic Healthcare
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
              Experience
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

