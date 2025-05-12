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
            className={`py-20 bg-gradient-to-r from-teal-500 to-blue-600 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h1>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
                <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
                    The brilliant minds behind Arogya RX who are revolutionizing healthcare technology.
                </p>
            </div>
        </section>
    );
};

export default DevHeader;