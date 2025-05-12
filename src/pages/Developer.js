import React from 'react';
import DevHeader from '../components/developer/DevHeader';
import DeveloperCards from '../components/developer/DeveloperCards';
import Border from '../components/home/Border';
import Navbar from '../components/home/Navbar';

const Developer = () => {
    return (
        <div className="bg-white">
            <Navbar/>
            <DevHeader />
            <DeveloperCards />
            <Border />
        </div>
    )
}

export default Developer;