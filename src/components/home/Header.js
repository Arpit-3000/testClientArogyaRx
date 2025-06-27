import React from "react";
import her from "../../assets/her.png";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image with responsive positioning */}
      <div className="absolute inset-0">
        <img
          src={her}
          alt="Healthcare professionals providing care"
          className="w-full h-full object-cover object-center md:object-[center_top]"
          loading="eager"
        />
      </div>

      {/* Adaptive overlay for light/dark modes */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-white/5 to-transparent dark:from-black/50 dark:via-black/30 dark:to-transparent"></div>

      {/* Content container with responsive spacing */}
      <div className="relative z-10 container mx-auto min-h-[70vh] md:min-h-[80vh] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 flex flex-col justify-center items-start pt-16 pb-12 md:pt-0 md:pb-0">
        <div className="max-w-4xl space-y-3 sm:space-y-4 md:space-y-6">
          {/* Headline with theme-aware colors */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold text-gray-900 dark:text-white leading-tight tracking-tight drop-shadow-sm dark:drop-shadow-md">
            Holistic Healthcare <br className="hidden xs:block" />
            <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h1>

          {/* Supporting text */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl font-medium drop-shadow-sm dark:drop-shadow">
            Personalized care that treats the whole person - body, mind and spirit.
          </p>

          {/* Button group */}
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2 sm:pt-3 md:pt-4">
            <button className="px-6 py-2.5 sm:px-7 sm:py-3 md:px-8 md:py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg shadow-md shadow-blue-500/20 dark:shadow-blue-900/30 text-sm sm:text-base">
              Book an Appointment
            </button>
            <button className="px-6 py-2.5 sm:px-7 sm:py-3 md:px-8 md:py-3 bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling indicator - visible in both modes */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-700 dark:border-white rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;