import React, { use, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';

const Reviews = ({ review }) => {
    const {user,} = use(AuthContext);
    const [selectedRating, setSelectedRating] = useState(0);
    const [userReview, setUserReview] = useState('');
 const handleReview = e =>{
    e.preventDefault();
    const review = e.target.review.value;
    
    setUserReview(review)

 }
    return (
        <div>
        <form onSubmit={handleReview}>
            <div className='bg-purple-50 shadow-lg rounded-2xl p-8 my-5'>
                <h2 className='text-xl font-semibold'>Submit Your Review</h2>
                <div className='flex gap-2 my-4 ' name='rating'>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <button
                        type='button'
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
{
    userReview && <>
    <div className='bg-green-100 p-8 my-6 shadow-sm rounded-xl' > 
        <div className='flex items-center gap-4'>
            <img src={user?.photoURL} alt="" />
            <h2>{user&&user.displayName}</h2>
        </div>
        <p className='text-gray-500'>{user?.email}</p>
    <h2>Review : {userReview}</h2>
    </div>
    </>
}
        </div>
    );
};

export default Reviews;