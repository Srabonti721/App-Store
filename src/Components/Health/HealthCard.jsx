import React from 'react';
import { IoIosStarHalf, IoMdStar } from 'react-icons/io';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-router';

const HealthCard = ({ Health }) => {
  const {id, thumbnail, name, rating, downloads, category } = Health;
  // console.log(data);

  return (
    <><Link to={`/appsDetails/${id}`}>
        <div className="card bg-pink-50  shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={thumbnail}
          alt="Shoes"
          className="rounded-xl w-full h-48 object-cover" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {name}</h2>
        <div className='flex gap-1'>
          <IoMdStar size={22} className='text-amber-300' />
          <IoMdStar size={22} className='text-amber-300' />
          <IoMdStar size={22} className='text-amber-300' />
          <IoIosStarHalf size={20} className='text-amber-300' />
          <p className='text-blue-400 text-xl'>{rating}</p>
        </div>
        <div className='flex gap-2'>
          <button className='btn border-blue-400'>
            <MdOutlineFileDownload size={24} />{downloads} M Downloads
          </button>
        </div>
      </div>
    </div>
    </Link></>
  );
};

export default HealthCard;