import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Authentication = () => {
    return (
         <div>
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
             </div>
            <Footer></Footer>
        </div>
    );
};

export default Authentication;