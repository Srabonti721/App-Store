import React from 'react';
import HealthCard from './HealthCard';

const Health = ({apps}) => {
     const filterData = apps.filter(data=>data.category === 'Health')
    return (
        <div>
                    <h2 className='text-2xl font-semibold'>Health</h2>
            <div className='my-8 grid grid-cols-3 gap-4'>
                {
                    filterData.map((Health)=><HealthCard key={Health.id} Health={Health}></HealthCard>)
                }
            </div>
        </div>
    );
};

export default Health;