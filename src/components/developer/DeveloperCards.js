import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const developers = [
    {
        name: "Shivam Kumar",
        role: "Fullstack Developer",
        image: "https://avatars.githubusercontent.com/u/145675379?v=4",
        bio: "Specializes in React and Node.js with years of experience in building healthcare applications. Passionate about creating seamless user experiences.",
        email: "shivamkumar27052003@gmail.com",
        phone: "+91 8791762374",
        github: "https://github.com/Shivamkumar2705",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        name: "Abhay Kumar",
        role: "Backend Developer",
        image: "https://avatars.githubusercontent.com/u/119209682?v=4",
        bio: "Database and API specialist ensuring our platform is fast, secure, and reliable. Loves solving complex technical challenges.",
        email: "abhay220504.business@gmail.com",
        phone: "+91 8210325981",
        github: "https://github.com/Abhay2004Kumar",
        linkedin: "https://linkedin.com/in/abhay-kumar-74b16124a/"
    },
    {
        name: "Yash Gaur",
        role: "Frontend Developer",
        image: "",
        bio: "Database and API specialist ensuring our platform is fast, secure, and reliable. Loves solving complex technical challenges.",
        email: "alex.johnson@arogyarx.com",
        phone: "+91 7654321098",
        github: "https://github.com/alexjohnson",
        linkedin: "https://linkedin.com/in/alexjohnson"
    }
];

const DeveloperCards = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section 
            ref={ref}
            className={`py-20 bg-white transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {developers.map((dev, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative h-64 bg-gradient-to-r from-blue-100 to-teal-100 flex items-center justify-center">
                                <img 
                                    src={dev.image} 
                                    alt={dev.name}
                                    className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-md"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-1">{dev.name}</h3>
                                <p className="text-teal-600 mb-4">{dev.role}</p>
                                <p className="text-gray-600 mb-6">{dev.bio}</p>
                                
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <Mail className="w-5 h-5 text-gray-500 mr-3" />
                                        <a href={`mailto:${dev.email}`} className="text-gray-700 hover:text-teal-600">
                                            {dev.email}
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="w-5 h-5 text-gray-500 mr-3" />
                                        <a href={`tel:${dev.phone}`} className="text-gray-700 hover:text-teal-600">
                                            {dev.phone}
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex mt-6 space-x-4">
                                    <a 
                                        href={dev.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-gray-900 transition-colors"
                                    >
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a 
                                        href={dev.linkedin} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-blue-700 transition-colors"
                                    >
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DeveloperCards;