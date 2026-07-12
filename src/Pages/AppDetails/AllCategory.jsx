import React from 'react';
import AllCategoryCard from './AllCategoryCard';

const AllCategory = ({apps}) => {
    // console.log(apps);
    return (
        <div>
            <h1 className='text-3xl my-4'>All Category</h1>
            <div className='grid grid-cols-4 gap-4 my-8'>
                {
                    apps.map(allApps=><AllCategoryCard key={allApps.id} allApps={allApps}></AllCategoryCard>)
                }
            </div>
        </div>
    );
};

export default AllCategory;