// components/Midinext.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';


const Midinext = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    
    const primaryColor = 'text-teal-500'; 
    const gradientFrom = 'from-teal-500'; 
    const gradientTo = 'to-green-500';   
    const underlineBg = 'bg-teal-500';  

    return (
        <section
            ref={ref}
            className={`
                bg-white py-24
                transition-all duration-1000 ease-out
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
        >
            <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8 max-w-3xl">

                <ShieldCheckIcon 
                    className={`w-16 h-16 mx-auto mb-6 ${primaryColor}`} 
                    aria-hidden="true"
                />

                
                <h2 className={`text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}>
                    Providing best medical services
                </h2>

                
                <div className={`w-24 h-1 ${underlineBg} mx-auto mb-8`}></div> 

                
                <p className="text-xl text-gray-600 leading-relaxed">
                    World-class care for everyone. Our health system offers unmatched, expert healthcare.
                </p>

           
                <div className="mt-10">
                    <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                        Learn More
                    </button>
                </div>
              
            </div>
        </section>
    );
};

export default Midinext;