import React from 'react';
import { FlaskConical, FileText, User } from 'lucide-react';

const stepsData = [
  {
    icon: <FlaskConical className="w-8 h-8 text-blue-500 animate-float" />,
    description: 'Search for tests and packages and seamlessly book a home sample collection.',
  },
  {
    icon: <FileText className="w-8 h-8 text-blue-500 animate-float delay-100" />,
    description: 'We will send a certified professional to your place to assist you with the sample collection.',
  },
  {
    icon: <User className="w-8 h-8 text-blue-500 animate-float delay-200" />,
    description: 'We will email you the reports. You can also access your reports within your account on the Practo app.',
  },
];

function Middletwo() {
  return (
    <div className="py-16  font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 tracking-tight">
          How it works?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 bg-blue-100 rounded-full shadow-md">
                {step.icon}
              </div>
              <p className="text-gray-700 text-base font-medium leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Middletwo;
