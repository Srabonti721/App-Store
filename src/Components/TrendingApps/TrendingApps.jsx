import React from 'react';
import TrendingAppsCard from './TrendingAppsCard';

const TrendingApps = ({ apps }) => {
    const filterData = apps.filter(user => user.rating == 4.8);
    // console.log(filterData);
    return (
        <div>
            <div className='my-4'>
                <h1 className='text-2xl font-semibold'> 🔥 Trending Apps</h1>
                <p className='text-gray-500'>Discover the most popular and highly rated apps that users love.</p>
            </div>
                   <div className='my-8 grid grid-cols-4 gap-4'>
                    {
                        filterData.map(data => <TrendingAppsCard key={data.id} data={data}></TrendingAppsCard>)
                    }
                </div>

        </div>
    );
};

export default TrendingApps;