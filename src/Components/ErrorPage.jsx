import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='w-11/12 mx-auto text-center space-y-4'>
            <img className='w-full' src="https://syhzhuelbxgnhopnwjgc.supabase.co/storage/v1/object/public/media/blog/404_page_cover.jpg" alt="" />
            <Link className='btn btn-secondary ' to={'/'}>Go To Home</Link>
        </div>
    );
};

export default ErrorPage;