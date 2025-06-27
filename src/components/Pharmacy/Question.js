import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChevronIcon = ({ isOpen }) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </motion.svg>
);

const Question = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            q: "How does HealthSaathi ensure quality?",
            a: "We source our products directly from manufacturers and authorized dealers. Every product undergoes rigorous quality checks and verification processes before being listed to ensure authenticity and effectiveness.",
        },
        {
            q: "What payment methods are accepted?",
            a: "We accept various payment methods including major credit cards (Visa, Mastercard), debit cards, net banking, UPI, and popular digital wallets for your convenience.",
        },
        {
            q: "What about non-prescription drugs?",
            a: "Yes, we offer a wide range of Over-The-Counter (OTC) medicines, healthcare devices, personal care products, and supplements that do not require a prescription.",
        },
        {
            q: "How to return a product?",
            a: "You can initiate a return within 10 days of delivery through your account dashboard, provided the product is unused and in its original packaging. Please refer to our detailed Return Policy page for specific conditions and procedures.",
        },
        {
            q: "Is my personal information secure?",
            a: "Absolutely. We use industry-standard encryption and security protocols to protect your personal and payment information. Your privacy and security are our top priorities.",
        }
    ];

    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    const answerVariants = {
        collapsed: { opacity: 0, height: 0, y: -10, marginBottom: 0 },
        open: {
            opacity: 1,
            height: 'auto',
            y: 0,
            marginBottom: '1rem',
            transition: {
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1]
            }
        },
    };

    return (
        <motion.section
            className="py-14 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-800 dark:text-teal-500 mb-8 sm:mb-10 text-center">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-3 sm:space-y-4">
                    {faqData.map((item, index) => {
                        const isOpen = index === openIndex;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-none border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-200"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className={`flex justify-between items-center w-full p-4 sm:p-5 text-left transition-colors duration-200 ${isOpen ? 'bg-teal-50 dark:bg-teal-900/30' : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'}`}
                                    aria-expanded={isOpen}
                                >
                                    <span className={`font-medium text-sm sm:text-base md:text-lg ${isOpen ? 'text-teal-700 dark:text-teal-400' : 'text-gray-800 dark:text-gray-200'}`}>
                                        {item.q}
                                    </span>
                                    <ChevronIcon isOpen={isOpen} />
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial="collapsed"
                                            animate="open"
                                            exit="collapsed"
                                            variants={answerVariants}
                                            className="px-4 sm:px-5 text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed overflow-hidden"
                                        >
                                            {item.a}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
};

export default Question;