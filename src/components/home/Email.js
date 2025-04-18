import React from 'react';
import { Mail } from "lucide-react"

const Email = () => {
    return (
        <section className="bg-gray-900 py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-semibold text-white mb-4">SUBSCRIBE TO OUR NEWSLETTER</h2>
                <p className="text-gray-300 mb-6">Exclusive Offer Previews, Announcements, and More.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md mx-auto">
                    <div className="relative w-full sm:w-auto">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 rounded-md border border-gray-700 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                    <button className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition-colors w-full sm:w-auto">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Email;
