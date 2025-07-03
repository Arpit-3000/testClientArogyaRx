import React from 'react';
import { Mail } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Email = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-gray-900 dark:bg-gray-800 py-12">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-2xl font-semibold text-white mb-4">
                    {t('email.title')}
                </h2>
                <p className="text-gray-300 dark:text-gray-400 mb-6">
                    {t('email.subtitle')}
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md mx-auto">
                    <div className="relative w-full sm:w-auto">
                        <input
                            type="email"
                            placeholder={t('email.placeholder')}
                            className="w-full px-10 py-3 rounded-md border border-gray-700 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                        />
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                    </div>
                    <button 
                        className="bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 text-white px-6 py-3 rounded-md transition-colors duration-300 w-full sm:w-auto font-medium"
                    >
                        {t('email.buttonText')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Email;