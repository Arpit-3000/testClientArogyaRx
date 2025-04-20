import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingBasket } from 'react-icons/fa'; // Example Icon

const Midi = () => {

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animation of children
        delayChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };


  return (
    <motion.section
      className="bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-16 sm:py-24 text-gray-900 overflow-hidden" // Added gradient, increased padding
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Trigger animation when in view
      viewport={{ once: true, amount: 0.3 }} // Animate once, when 30% visible
    >
      <div className="container mx-auto text-center px-4">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-700 mb-5" // Slightly increased bottom margin
          variants={itemVariants}
        >
          Shop. Benefit. Evolve.
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto" // Darker gray, increased bottom margin
          variants={itemVariants}
        >
          Welcome! We bring the pharmacy to your fingertips. Hover over the wellness horizons with our quality healthcare every step of the way!
        </motion.p>

        <motion.button
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out inline-flex items-center gap-2 group" // Changed color, added font-semibold, flex utils, gap, group
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -2 }} // More pronounced hover
          whileTap={{ scale: 0.95 }}
        >
          <FaShoppingBasket className="transition-transform duration-300 group-hover:rotate-[-5deg]" /> {/* Added icon with hover effect */}
          Shop Medicines
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Midi;