import React, { useRef } from 'react';

const UploadPrescription = () => {
    const fileInputRef = useRef(null);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log('Prescription selected:', file.name);
            // Add logic to upload or preview
        }
    };

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 py-8 sm:py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            {/* Left: Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <img
                    src="/path/to/your/prescription-image.png"
                    alt="Prescription Illustration"
                    className="max-w-full h-auto rounded-lg shadow-lg dark:shadow-gray-700/50"
                    loading="lazy"
                />
            </div>

            {/* Right: Upload Section */}
            <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-lg shadow-md dark:shadow-gray-700/50 w-full max-w-md transition-all duration-300">
                {/* Hidden File Input */}
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".jpg,.jpeg,.png,.pdf"
                />

                {/* Tab Header */}
                <div className="bg-black dark:bg-gray-900 text-white dark:text-gray-100 px-4 py-2 rounded-t-md w-fit mb-3 sm:mb-4">
                    Order with Prescription
                </div>

                {/* Upload Box */}
                <div
                    onClick={handleUploadClick}
                    className="border-2 border-dashed border-green-400 dark:border-green-500 bg-green-100/50 dark:bg-green-900/20 text-center p-5 sm:p-6 mb-3 sm:mb-4 cursor-pointer rounded-lg hover:bg-green-200/50 dark:hover:bg-green-800/30 transition-colors duration-200"
                >
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <svg
                            className="h-8 w-8 text-green-600 dark:text-green-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                        </svg>
                        <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
                            Click to upload prescription
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                            JPG, PNG, or PDF (Max. 5MB)
                        </span>
                    </div>
                </div>

                {/* Or Separator */}
                <div className="flex items-center my-3 sm:my-4">
                    <hr className="flex-grow border-gray-300 dark:border-gray-600" />
                    <span className="mx-3 text-gray-400 dark:text-gray-500 text-sm">OR</span>
                    <hr className="flex-grow border-gray-300 dark:border-gray-600" />
                </div>

                {/* Link Input */}
                <input
                    type="text"
                    placeholder="Enter Prescription Link"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-100 dark:bg-gray-700 dark:text-gray-100 mb-3 sm:mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                />

                {/* Upload Button */}
                <button
                    onClick={handleUploadClick}
                    type="button"
                    className="bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white font-medium py-2.5 px-6 rounded flex items-center justify-center w-full transition-colors duration-300 shadow-sm hover:shadow-md"
                >
                    <svg
                        className="h-5 w-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16V4m0 0l-4 4m4-4l4 4m4 4v8m0 0l-4-4m4 4l4-4"
                        />
                    </svg>
                    Upload File
                </button>
            </div>
        </div>
    );
};

export default UploadPrescription;