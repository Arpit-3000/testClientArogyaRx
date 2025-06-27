import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const developers = [
    {
        name: "Shivam Kumar",
        role: "Frontend Developer",
        image: "https://avatars.githubusercontent.com/u/145675379?v=4",
        bio: "Specializes in React and Node.js with years of experience in building healthcare applications. Passionate about creating seamless user experiences.",
        email: "shivamkumar27052003@gmail.com",
        phone: "+91 8791762374",
        github: "https://github.com/Shivamkumar2705",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        name: "Abhay Kumar",
        role: "Fullstack Developer",
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
        email: "yashguar9758@gmail.com",
        phone: "+91 9758123595",
        github: "https://github.com/The-YashGaur",
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
            className={`py-12 sm:py-20 bg-white dark:bg-gray-900 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {developers.map((dev, index) => (
                        <div 
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-700/50 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-600/50 transition-shadow duration-300"
                        >
                            <div className="relative h-56 sm:h-64 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/50 dark:to-teal-900/50 flex items-center justify-center">
                                {dev.image ? (
                                    <img 
                                        src={dev.image} 
                                        alt={dev.name}
                                        className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-md"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/150?text=No+Image';
                                        }}
                                    />
                                ) : (
                                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700 flex items-center justify-center shadow-md">
                                        <span className="text-gray-500 dark:text-gray-400 text-lg font-medium">
                                            {dev.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="p-5 sm:p-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-1">{dev.name}</h3>
                                <p className="text-teal-600 dark:text-teal-400 mb-3 sm:mb-4">{dev.role}</p>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">{dev.bio}</p>
                                
                                <div className="space-y-2 sm:space-y-3">
                                    <div className="flex items-center">
                                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400 mr-2 sm:mr-3" />
                                        <a 
                                            href={`mailto:${dev.email}`} 
                                            className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 text-sm sm:text-base transition-colors"
                                        >
                                            {dev.email}
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400 mr-2 sm:mr-3" />
                                        <a 
                                            href={`tel:${dev.phone}`} 
                                            className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 text-sm sm:text-base transition-colors"
                                        >
                                            {dev.phone}
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex mt-4 sm:mt-6 space-x-3 sm:space-x-4">
                                    <a 
                                        href={dev.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                        aria-label={`${dev.name}'s GitHub profile`}
                                    >
                                        <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </a>
                                    <a 
                                        href={dev.linkedin} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
                                        aria-label={`${dev.name}'s LinkedIn profile`}
                                    >
                                        <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
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