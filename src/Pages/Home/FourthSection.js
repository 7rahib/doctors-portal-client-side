import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const FourthSection = () => {
    return (
        <div className="hero min-h-screen mb-28">
            <div className="hero-content flex-col lg:flex-row">
                <div className='grid sm:grid-cols-1 lg:grid-cols-6'>
                    <img src={treatment} className="sm:max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='px-6 my-5'>
                    <h1 className="text-4xl font-bold ">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default FourthSection;