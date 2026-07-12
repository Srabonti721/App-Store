import React from 'react';
import TrendingApps from '../Components/TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';
import Slider from '../Components/Slider/Slider';
import Productivity from '../Components/productivity/Productivity';
import Health from '../Components/Health/Health';
import Education from '../Components/Education/Education';
import AllCategory from './AppDetails/AllCategory';
import { Helmet } from 'react-helmet-async';

const Apps = () => {
    const apps = useLoaderData();
  
    return (
    
        <div className='w-11/12 mx-auto'>
                <Helmet>
            <title>AppStore || apps</title>
        </Helmet>
            <section className='my-8'>
                <h2 className='text-2xl font-semibold'>Slider</h2>
                <Slider></Slider>
            </section>
            <section>
                <TrendingApps apps={apps}></TrendingApps>
            </section>
            <section>
                <Productivity apps={apps}></Productivity>
                <Health apps={apps}></Health>
                <Education apps={apps}></Education>
            </section>
            <AllCategory apps={apps}></AllCategory>
        </div>
    );
};

export default Apps;