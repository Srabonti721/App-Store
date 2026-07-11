import React from 'react';
import { Link } from 'react-router';

const CategoryCard = ({Categories}) => {
    
    return (
        <div>
    <div className="card bg-conic-180 from-indigo-100 via-indigo-50 to-indigo-100 shadow-lg">
  <figure className="px-10 pt-10">
    <img
      src={Categories.image}
      alt="Shoes"
      className="rounded-xl w-[150px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{Categories.name}</h2>
    <p>{Categories.Description}</p>
    <div className="card-actions">
      <Link to={`/apps`} className="btn btn-primary">View Apps</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CategoryCard;