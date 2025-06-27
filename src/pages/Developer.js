import React from 'react';
import DevHeader from '../components/developer/DevHeader';
import DeveloperCards from '../components/developer/DeveloperCards';

const Developer = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            {/* Add mt-16 or mt-20 depending on your navbar height (typically 4rem/16 or 5rem/20) */}
            <div className="pt-12 sm:pt-20"> 
                <DevHeader />
                <DeveloperCards />
            </div>
        </div>
    )
}

export default Developer;