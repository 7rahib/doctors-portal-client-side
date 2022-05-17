import React from 'react';

const BookingCard = ({ service, setTreatment }) => {
    const { name, slots } = service

    return (
        <div className="card sm:max-w-sm lg:max-w-lg shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {slots.length ?
                        <span>{slots[0]}</span> :
                        <span>Try another day</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label disabled={slots.length === 0} onClick={() => setTreatment(service)} htmlFor="booking-modal" className="btn btn-secondary bg-gradient-to-r from-secondary to-primary text-white uppercase">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;