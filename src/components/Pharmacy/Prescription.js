import React from 'react';
// import { Button } from "@/components/ui/button"  <--- Removed this line

const Prescription = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Image Section (Left on larger screens) */}
                <div className="rounded-lg overflow-hidden shadow-lg">
                    {/* Replace with your actual image path */}
                    <img
                        src="/path/to/your/prescription-image.jpg"
                        alt="Doctor and Patient"
                        className="w-full h-auto rounded-lg"
                    />
                </div>

                {/* Text and Form Section (Right on larger screens) */}
                <div className="text-left">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">Order with Prescription</h2>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="mb-4">
                            <label htmlFor="prescription-upload" className="block text-sm font-medium text-gray-700">
                                Upload Prescription
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-md">
                                <div className="space-y-1 text-center">
                                    {/* You can replace this with a custom upload component if needed */}
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4V24m32-4v-4m0 0H20M12 24c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-4c0-2.21-1.79-4-4-4h-8c-2.21 0-4 1.79-4 4v4z"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <p className="text-sm text-gray-500">
                                        Drag and drop your file here, or click to select file
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                             <input id="prescription-upload" type="file" className="sr-only" />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="prescription-link" className="block text-sm font-medium text-gray-700">
                                Enter Prescription Link
                            </label>
                            <input
                                type="text"
                                id="prescription-link"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="https://your-prescription.com/file"
                            />
                        </div>
                        <div className="mt-6">
                            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">  {/* Changed to a standard button */}
                                <svg
                                    className="mr-2 h-5 w-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 13h6m-3-3v6m5 5H12a2 2 0 01-2-2V5a2 2 0 012-2h7a2 2 0 012 2v7a2 2 0 01-2 2z"
                                    />
                                </svg>
                                Upload File
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prescription;
