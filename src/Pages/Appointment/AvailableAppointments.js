import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingCard from './BookingCard';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-28 px-12'>
            <h4 className='text-xl text-secondary font-semibold text-center'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <BookingCard
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></BookingCard>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;