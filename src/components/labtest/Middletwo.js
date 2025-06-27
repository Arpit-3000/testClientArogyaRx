import React from 'react';
import { FlaskConical, FileText, User, ChevronRight } from 'lucide-react';

const stepsData = [
  {
    icon: <FlaskConical className="w-8 h-8" />,
    title: "Book Your Test",
    description: 'Search for tests and packages and seamlessly book a home sample collection.',
    color: "blue",
    step: "1"
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Sample Collection",
    description: 'We send a certified professional to your place for sample collection.',
    color: "green",
    step: "2"
  },
  {
    icon: <User className="w-8 h-8" />,
    title: "Get Results",
    description: 'Receive reports via email or access them in your account on our app.',
    color: "purple",
    step: "3"
  },
];

const getColorClasses = (color) => {
  const colors = {
    blue: {
      bg: "bg-blue-100 dark:bg-blue-900/20",
      text: "text-blue-600 dark:text-blue-400",
      border: "border-blue-200 dark:border-blue-800"
    },
    green: {
      bg: "bg-green-100 dark:bg-green-900/20",
      text: "text-green-600 dark:text-green-400",
      border: "border-green-200 dark:border-green-800"
    },
    purple: {
      bg: "bg-purple-100 dark:bg-purple-900/20",
      text: "text-purple-600 dark:text-purple-400",
      border: "border-purple-200 dark:border-purple-800"
    }
  };
  return colors[color] || colors.blue;
};

function Middletwo() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            How It Works?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Simple steps to get your diagnostic tests done from the comfort of your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {stepsData.map((step, index) => {
            const colorClasses = getColorClasses(step.color);
            return (
              <div
                key={index}
                className={`group relative bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 border ${colorClasses.border} flex flex-col items-center text-center`}
              >
                {/* Step Number */}
                <div className={`absolute -top-4 -left-4 w-8 h-8 flex items-center justify-center rounded-full ${colorClasses.bg} ${colorClasses.text} font-bold text-sm`}>
                  {step.step}
                </div>

                {/* Icon */}
                <div className={`mb-4 p-4 rounded-full ${colorClasses.bg} shadow-inner group-hover:animate-float`}>
                  <div className={colorClasses.text}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className={`text-xl font-semibold mb-3 ${colorClasses.text}`}>
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Learn More */}
                <button className={`mt-auto flex items-center text-sm font-medium ${colorClasses.text} hover:underline`}>
                  Learn more <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-12 lg:mt-16 text-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
            Book a Test Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Middletwo;