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
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-4 py-10 bg-gray-50">
            {/* Left: Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <img
                    src="/path/to/your/prescription-image.png" // replace with your actual image path
                    alt="Prescription Illustration"
                    className="max-w-full h-auto rounded-lg shadow-lg"
                />
            </div>

            {/* Right: Upload Section */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                {/* Hidden File Input */}
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".jpg,.jpeg,.png,.pdf"
                />

                {/* Tab Header */}
                <div className="bg-black text-white px-4 py-2 rounded-t-md w-fit mb-4">
                    Order with Prescription
                </div>

                {/* Upload Box */}
                <div
                    onClick={handleUploadClick}
                    className="border border-green-400 bg-green-100 text-center p-6 mb-4 cursor-pointer rounded-lg"
                >
                    Upload Prescription
                </div>

                {/* Or Separator */}
                <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-4 text-gray-400">Or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Link Input */}
                <input
                    type="text"
                    placeholder="Enter Prescription Link"
                    className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100 mb-4"
                />

                {/* Upload Button */}
                <button
                    onClick={handleUploadClick}
                    type="button"
                    className="bg-green-800 hover:bg-green-900 text-white font-semibold py-2 px-6 rounded flex items-center justify-center w-full"
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
