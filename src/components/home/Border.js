import React from 'react';
import { Instagram, Twitter, Github, Linkedin } from 'lucide-react';

const Border = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* HealthSaathi Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">HEALTHSAATHI</h3>
                    <p className="text-sm">
                        Meet HealthSaathi! We&apos;re here to revolutionize healthcare and bring your clinic experience online.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">QUICK LINKS</h3>
                    <ul className="text-sm space-y-2">
                        <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                        <li><a href="/events" className="hover:text-blue-400 transition-colors">Event Calendar</a></li>
                        <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">SOCIAL LINK</h3>
                    <ul className="text-sm space-y-2">
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center">
                                <Instagram className="mr-2 w-4 h-4" /> Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center">
                                <Twitter className="mr-2 w-4 h-4" /> Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center">
                                <Github className="mr-2 w-4 h-4" /> GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center">
                                <Linkedin className="mr-2 w-4 h-4" /> LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Meet Us */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">MEET US</h3>
                    <ul className="text-sm space-y-2">
                        <li>+91 123456789</li>
                        <li>HealthSaathi.com</li>
                        <li>HealthSaathi Solutions Pvt. Ltd.</li>
                        <li>Punjab, 140041</li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-6 text-sm">
                &copy; 2025 HealthSaathi. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Border;
