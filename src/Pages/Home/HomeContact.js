import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const HomeContact = () => {
    return (
        <div className='bg-MakeAppointment-pattern py-10'>
            <div className='text-center my-3'>
                <h4 className='text-xl font-semibold text-primary'>Contact Us</h4>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
            </div>
            <div className='flex justify-center items-center my-10'>
                <div>
                    <input type="email;" placeholder="Email Address" className="input w-full max-w-sm my-2" />
                    <input type="text" placeholder="Subject" className="input w-full max-w-sm my-2" />
                    <textarea className="textarea block w-full my-3" placeholder="Your message"></textarea>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>

            </div>
        </div>
    );
};

export default HomeContact;