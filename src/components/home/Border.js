import React from 'react';
import { Instagram, Twitter, Github, Linkedin } from 'lucide-react';

const Border = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-8">
                
                {/* Arogya Info */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4 tracking-wide">AROGYA RX</h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                        Meet Arogya RX! We&apos;re here to revolutionize healthcare and bring your clinic experience online with ease and trust.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        {[
                            { name: 'About Us', href: '/about' },
                            { name: 'Event Calendar', href: '/events' },
                            { name: 'Contact Us', href: '/contact' },
                            {name: 'Developer Details', href: '/devl'}
                        ].map((link, idx) => (
                            <li key={idx}>
                                <a
                                    href={link.href}
                                    className="hover:text-blue-500 transition-all duration-300 hover:pl-1"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                    <ul className="space-y-3 text-sm">
                        {[
                            { icon: <Instagram className="w-4 h-4" />, name: 'Instagram', href: 'https://instagram.com' },
                            { icon: <Twitter className="w-4 h-4" />, name: 'Twitter', href: 'https://twitter.com' },
                            { icon: <Github className="w-4 h-4" />, name: 'GitHub', href: 'https://github.com' },
                            { icon: <Linkedin className="w-4 h-4" />, name: 'LinkedIn', href: 'https://linkedin.com' },
                        ].map((social, idx) => (
                            <li key={idx}>
                                <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-blue-500 transition-all duration-300"
                                >
                                    {social.icon}
                                    {social.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Meet Us */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                    <ul className="text-sm space-y-2 text-gray-400">
                        <li>📞 +91 9758123585</li>
                        <li>🌐 ArogyaRx</li>
                        <li>🏢 ArogyaRx</li>
                        <li>📍 Allahbad, 140041</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-6 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} HealthSaathi. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Border;
