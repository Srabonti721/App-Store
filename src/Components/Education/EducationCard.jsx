import React from 'react';
import { IoIosStarHalf, IoMdStar } from 'react-icons/io';
import { MdOutlineFileDownload } from 'react-icons/md';

const EducationCard = ({Education}) => {
      const { thumbnail, name, rating, downloads, category } = Education;
    return (
       <div className="card bg-blue-100 shadow-lg">
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
            </div>
        </div>
    );
};

export default EducationCard;