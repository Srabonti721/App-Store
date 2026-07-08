import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {
    return (

        <div>
            <div className='container mx-auto '>
                <Navbar></Navbar>
                <main>
                    <Outlet></Outlet>
                </main>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;