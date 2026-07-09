import React from 'react';
import { IoIosStarHalf, IoMdStar } from 'react-icons/io';
import { MdOutlineFileDownload } from 'react-icons/md';

const TrendingAppsCard = ({ data }) => {
    const { thumbnail, name, rating, downloads, category } = data;
    console.log(data);
    return (
        <div className="card bg-gray-200 shadow-lg">
            <figure>
                <img className='w-full h-[200px] object-cover'
                    src={thumbnail}
                    alt="thumbnail" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <div className='flex gap-1'>
                    <IoMdStar size={22} className='text-amber-300' />
                    <IoMdStar size={22} className='text-amber-300' />
                    <IoMdStar size={22} className='text-amber-300' />
                    <IoIosStarHalf size={20} className='text-amber-300' />
                    <p className='text-blue-400 text-xl'>{rating}</p>
                </div>
                <div className='flex gap-2'>
                    <MdOutlineFileDownload size={24} /> <h2 >{downloads} M Downloads</h2>
                </div>

                <div className="card-actions justify-end">
                    <div className=" badge border-blue-500">{category} </div>
                    <div className=" badge border-amber-500">View Details </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingAppsCard;