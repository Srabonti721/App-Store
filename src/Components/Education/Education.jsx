import React from 'react';
import EducationCard from './EducationCard';

const Education = ({apps}) => {
     const filterData = apps.filter(data=>data.category === 'Education')
    return (
        <div>
                    <h2 className='text-2xl font-semibold'>Health</h2>
            <div className='my-8 grid grid-cols-3 gap-4'>
                {
                    filterData.map((Education)=><EducationCard key={Education.id} Education={Education}></EducationCard>)
                }
            </div>
        </div>
    );
};

export default Education;