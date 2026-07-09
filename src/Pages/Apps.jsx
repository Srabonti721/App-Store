import React from 'react';
import TrendingApps from '../Components/TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';
import Slider from '../Components/Slider/Slider';

const Apps = () => {
      const apps = useLoaderData();  
    return (
        <div className='w-11/12 mx-auto'>
            <section>
                <TrendingApps apps={apps}></TrendingApps>
            <Slider></Slider>
            </section>
        </div>
    );
};

export default Apps;