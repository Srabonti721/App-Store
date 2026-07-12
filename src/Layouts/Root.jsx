import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';
import Loading from '../Context/Loading';

const Root = () => {
    const { state } = useNavigation()
    return (

        <div>
            <div className='container mx-auto '>
                <Navbar></Navbar>
                <main>
                    {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
                </main>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;