import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card sm:max-w-sm lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.review}</p>
                <div className='flex items-center justify-center mt-5'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <p className='text-xl'>{review.name}</p>
                        <p>{review.address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;