import React from 'react';
import heroAps from '../../assets/more apps.png'
const Hero = () => {
    return (
        <div className="hero my-8 bg-gray-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={heroAps}
                    className="max-w-lg rounded-lg"
                />
                <div>
                    <h1 className="text-3xl font-bold"> <span className='text-indigo-500 text-4xl'>Find</span>, <span className='text-emerald-400'>Explore</span> & Download Your Favorite Apps </h1>
                    <p className="py-6 text-gray-400">
                        Explore top-rated apps across multiple categories. Find the perfect app for work, learning, health, and entertainment—all in one place.
                    </p>
                    <button className="btn btn-primary">Explore Apps</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;