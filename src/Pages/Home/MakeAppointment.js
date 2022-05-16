import React from 'react';
import doctor from '../../assets/images/doctor.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center bg-MakeAppointment-pattern px-12'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-10'>
                <h3 className='text-xl text-primary font-semibold p-4'>Appointment</h3>
                <h2 className="text-3xl text-white p-4">Make an appointment today</h2>
                <p className='text-white p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam. Quo neque esse temporibus placeat perspiciatis voluptate, distinctio labore soluta blanditiis quos enim nobis minima! Aperiam illo quas architecto. Reprehenderit.</p>
                <div className='p-4'>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>

            </div>
        </section>
    );
};

export default MakeAppointment;