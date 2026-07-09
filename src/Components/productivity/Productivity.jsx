import React from 'react';
import ProductivityCard from './ProductivityCard';

const Productivity = ({apps}) => {
        const filterData = apps.filter(data=>data.category === 'Productivity')
//   console.log(filterData);
    return (
        <div>
            <h2 className='text-2xl font-semibold'>Productivity</h2>
            <div className='my-8 grid grid-cols-3 gap-4'>
                {
                    filterData.map((Productivity)=><ProductivityCard key={Productivity.id} Productivity={Productivity}></ProductivityCard>)
                }
            </div>
        </div>
    );
};

export default Productivity;