import React, { use } from 'react';
import CategoryCard from './CategoryCard';

const appStorePromise = fetch('categories.json').then(res => res.json());

const Categories = () => {
    const appStoreCategories = use(appStorePromise)
    return (
        <div className='my-8 py-8 bg-linear-to-r from-indigo-100 via-purple-100 to-pink-100'>
            <div className='text-center'>
                <h1 className='text-2xl font-semibold mb-4'>Browse Apps by Category {appStoreCategories.length}</h1>
                <p className='text-gray-500'>Explore apps organized into categories to quickly find exactly what you're looking for.</p>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
                {
                    appStoreCategories.map(Categories => <CategoryCard key={Categories.id} Categories={Categories}></CategoryCard>)
                }
            </div>

        </div>
    );
};

export default Categories;