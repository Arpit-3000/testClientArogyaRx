// components/Midi.js
import React from 'react';
import { useInView } from 'react-intersection-observer'; // Import hook

// --- IMPORTANT: Replace these with actual imports for your local images ---
import techHealthcareImage from '../assets/images/tech-healthcare-image.jpg'; // Example path
import easyAccessImage from '../assets/images/easy-access-image.jpg';       // Example path
// ---

const Midi = () => {

    // Hook for the first section (Text/Image)
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Hook for the second section (Image/Text)
    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        // Updated background to white, increased vertical padding
        <section className="bg-white py-20">
            {/* Added responsive padding to container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- First Section: Text on Left, Image on Right --- */}
                <div
                    ref={ref1} // Attach ref for scroll animation
                    className={`
                        grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-16 md:mb-20 // Increased gap & bottom margin
                        transition-all duration-1000 ease-out
                        ${inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                    `}
                >
                    {/* Text Content */}
                    <div> {/* Removed text-left, grid handles alignment */}
                        {/* Heading style updated: dark color */}
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">High-End Technology Meets Healthcare</h2>
                         {/* Paragraph style updated: lighter color, larger size */}
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Leveraging cutting-edge medical technology, we offer virtual consultations with accomplished medical professionals.
                        </p>
                        {/* Optional: Add a button or link here */}
                    </div>
                    {/* Image Content */}
                     {/* Image container style updated: rounding, shadow */}
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src={techHealthcareImage} // Use imported image variable
                            alt="High-Tech Healthcare"
                            // Removed rounding from img, parent div handles it. Kept w-full h-auto.
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* --- Second Section: Image on Left, Text on Right --- */}
                <div
                    ref={ref2} // Attach ref for scroll animation
                    className={`
                        grid grid-cols-1 md:grid-cols-2 items-center gap-12 // Increased gap
                        transition-all duration-1000 ease-out delay-200 // Added delay for second section
                        ${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                    `}
                >
                     {/* Image Content (Order reversed for md screens using grid flow) */}
                     {/* Image container style updated: rounding, shadow */}
                    <div className="relative rounded-2xl overflow-hidden shadow-xl md:order-first"> {/* order-first ensures image is left on md+ */}
                        <img
                            src={easyAccessImage} // Use imported image variable
                            alt="Easy Access Healthcare"
                            // Removed rounding from img, parent div handles it. Kept w-full h-auto.
                            className="w-full h-auto"
                        />
                    </div>
                    {/* Text Content */}
                    <div> {/* Removed text-left */}
                        {/* Heading style updated: dark color, consistent size */}
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Easy Accessibility. Anytime, Anywhere.</h2>
                        {/* Paragraph style updated: lighter color, larger size */}
                        <p className="text-lg text-gray-600 leading-relaxed">
                            No more geographical constraints. Get the best healthcare in your hand.
                        </p>
                         {/* Optional: Add a button or link here */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Midi;