import React from 'react';
import { useInView } from 'react-intersection-observer';

const DevHeader = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section 
            ref={ref}
            className={`py-16 sm:py-20 bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-600 dark:to-blue-700 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="container mx-auto px-4 sm:px-6 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                    Meet Our Team
                </h1>
                <div className="w-20 sm:w-24 h-1 bg-white/90 dark:bg-white/80 mx-auto mb-6 sm:mb-8"></div>
                <p className="text-lg sm:text-xl text-white/90 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
                    The brilliant minds behind Arogya RX who are revolutionizing healthcare technology.
                </p>
            </div>
        </section>
    );
};

export default DevHeader;