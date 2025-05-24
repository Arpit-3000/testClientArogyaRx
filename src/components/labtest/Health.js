import React from 'react';

// Local image imports
import FeverImg from '../../assets/labtestimages/f5.png';
import DiabetesImg from '../../assets/labtestimages/f4.png';
import SkinImg from '../../assets/labtestimages/f3.png';
import KidneyImg from '../../assets/labtestimages/f2.png';
import DigestionImg from '../../assets/labtestimages/f1.png';

const healthConcerns = [
  { name: 'Fever', image: FeverImg },
  { name: 'Diabetes', image: DiabetesImg },
  { name: 'Skin', image: SkinImg },
  { name: 'Kidney', image: KidneyImg },
  { name: 'Digestion', image: DigestionImg },
];

const Health = () => {
  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-left text-blue-600 mb-12">
          Find Tests by Health Concern
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {healthConcerns.map((item, index) => (
            <div
              key={index}
              className="bg-white text-black w-60 p-6 rounded-3xl shadow-xl flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-blue-400/50"
            >
              <div className="rounded-full border-4 border-transparent bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 p-1 hover:rotate-1 transition-transform duration-300">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-white"
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-center text-gray-800">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Health;
