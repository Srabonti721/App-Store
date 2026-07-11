import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

const Reviews = ({ review }) => {
    const [selectedRating, setSelectedRating] = useState(0);
    const { comment, rating, user } = review;
 const handleReview = e =>{
    e.preventDefault();
    const review = e.target.review.value;
    console.log(review);

 }
    return (
        <form onSubmit={handleReview}>
            <div className='bg-purple-50 shadow-lg rounded-2xl p-8 my-5'>
                <h2 className='text-xl font-semibold'>Submit Your Review</h2>
                <div className='flex gap-2 my-4 '>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <button
                            key={item}
                            onClick={() => setSelectedRating(item)}
                        >
                            {item <= selectedRating ? (
                                <FaStar size={25} className="text-yellow-400" />
                            ) : (
                                <FaRegStar size={25} />
                            )}
                        </button>
                    ))}
                </div>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-sm">Your Reviews</legend>
                    <textarea required name='review' className="textarea h-24 w-full" placeholder="Your Reviews"></textarea>
                </fieldset>
                <button className='btn btn-primary my-4 px-8'>Submit</button>
            </div>
        </form>
    );
};

export default Reviews;