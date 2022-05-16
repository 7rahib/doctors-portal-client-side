import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-hero-pattern">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='grid sm:grid-col-1 lg:grid-col-5'>
                    <img src={chair} className="sm:max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='px-6 my-5'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;