import React from 'react';
// Make sure to install lucide-react: npm install lucide-react
import { FlaskConical, FileText, User } from 'lucide-react';

// Define the data for the steps
const stepsData = [
  {
    icon: <FlaskConical className="w-8 h-8 text-blue-500" />, // Icon for the first step
    description: 'Search for tests and packages and seamlessly book a home sample collection.', // Description for the first step
  },
  {
    icon: <FileText className="w-8 h-8 text-blue-500" />, // Icon for the second step
    description: 'We will send a certified professional to your place to assist you with the sample collection.', // Description for the second step
  },
  {
    icon: <User className="w-8 h-8 text-blue-500" />, // Icon for the third step
    description: 'We will email you the reports. You can also access your reports within your account on the Practo app.', // Description for the third step
  },
];

/**
 * Middletwo Component
 * Displays a "How it works?" section with three steps in cards.
 */
function Middletwo() {
  return (
    // Outer container for the section with padding
    <div className="py-12 bg-white font-sans">
      {/* Inner container to center content */}
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
          How it works?
        </h2>

        {/* Grid container for the steps cards */}
        {/* Uses grid layout, adjusts columns for different screen sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Map through the steps data to render each card */}
          {stepsData.map((step, index) => (
            // Individual card container
            <div
              key={index} // Unique key for each card
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon container */}
              <div className="mb-4 p-3 bg-blue-50 rounded-full inline-block">
                {step.icon} {/* Render the icon */}
              </div>
              {/* Description text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description} {/* Render the description */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Export the component for use in other parts of the application
export default Middletwo;
