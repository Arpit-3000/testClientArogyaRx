import React from 'react';
import { useInView } from 'react-intersection-observer';

// Temporarily use public placeholder images
const techHealthcareImage = 'https://via.placeholder.com/600x400?text=Tech+Healthcare';
const easyAccessImage = 'https://via.placeholder.com/600x400?text=Easy+Access';

const Midi = () => {
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section 1 */}
                <div
                    ref={ref1}
                    className={`
                        grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-16 md:mb-20
                        transition-all duration-1000 ease-out
                        ${inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                    `}
                >
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">High-End Technology Meets Healthcare</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Leveraging cutting-edge medical technology, we offer virtual consultations with accomplished medical professionals.
                        </p>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src={techHealthcareImage}
                            alt="High-Tech Healthcare"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Section 2 */}
                <div
                    ref={ref2}
                    className={`
                        grid grid-cols-1 md:grid-cols-2 items-center gap-12
                        transition-all duration-1000 ease-out delay-200
                        ${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                    `}
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-xl md:order-first">
                        <img
                            src={easyAccessImage}
                            alt="Easy Access Healthcare"
                            className="w-full h-auto"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Easy Accessibility. Anytime, Anywhere.</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            No more geographical constraints. Get the best healthcare in your hand.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Midi;
