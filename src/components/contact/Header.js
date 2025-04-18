import React from 'react';

const Header = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">Contact Us</h2>
                <h3 className="text-3xl font-bold text-green-600 mb-8">Request A Call Back !</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <textarea
                        placeholder="Message......"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-32"
                    ></textarea>
                </div>
                <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors mt-8">
                    Submit
                </button>
            </div>
        </section>
    );
};

export default Header;
