import React from 'react';
import { Link } from 'react-router';

const AllCategoryCard = ({allApps}) => {
        const {id, thumbnail, name, category} = allApps;
    return (
            <div className="hero bg-gray-100 ">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={thumbnail}
      className="rounded-lg shadow-2xl w-[100px] h-[100px]"
    />
    <div>
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="py-2">
     {category}
      </p>
      <Link to={`/appsDetails/${id}`} className="underline text-blue-900">view Details</Link>
    </div>
  </div>
</div>
    );
};

export default AllCategoryCard;