import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1nRnCw3Fp4zZCe6a6dxsGv4FpwYVVmI24zJ4qBXJk7Dsd2ntYrfvBHe9I2cL8U9j48GR05Rpo0GIY2X1heHpjB009X3WqG7s');

const Payment = () => {
    const { id } = useParams();
    const url = `https://mysterious-tundra-54205.herokuapp.com/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-2xl text-success text-center'>Payment Process</h3>
            <div className='flex justify-center items-center'>
                <div>
                    <div class="card w-full max-w-lg bg-base-100 shadow-xl my-12">
                        <div class="card-body">
                            <p className="font-bold">Hello, {appointment.patientName}</p>
                            <p class="text-xl">Confirm your appointment of <span className='font-bold'>{appointment.treatment}</span></p>
                            <p>Your Appointment on <span className='text-warning'>{appointment.data}</span> at <span className='text-warning'>{appointment.slot}</span></p>
                            <p>You have to pay <span className='text-success'>${appointment.price}</span></p>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div class="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm appointment={appointment} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;