import React from 'react';
import TrendingAppsCard from './TrendingAppsCard';

const TrendingApps = ({ apps }) => {
    const trendingApps = apps  
.sort((a, b) => b.rating - a.rating)
  .slice(0, 4);
  
    return (
        <div>
            <div className='my-4'>
                <h1 className='text-2xl font-semibold'> 🔥 Trending Apps</h1>
                <p className='text-gray-500'>Discover the most popular and highly rated apps that users love.</p>
            </div>
                   <div className='my-8 grid grid-cols-4 gap-4'>
                    {
                        trendingApps.map(data => <TrendingAppsCard key={data.id} data={data}></TrendingAppsCard>)
                    }
                </div>

        </div>
    );
};

export default TrendingApps;