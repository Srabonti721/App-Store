import React from 'react';
import Hero from './HomePageComponents/Hero';
import Categories from './HomePageComponents/Categories';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>AppStore || Home</title>
            </Helmet>
            <Hero></Hero>
            <Categories></Categories>
        </div>
    );
};

export default Home;