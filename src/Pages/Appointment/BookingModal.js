import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment

    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value
        console.log(_id, name, slot)
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-sm" />
                        <select name='slot' className="select select-bordered w-full max-w-sm">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-sm" />
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered w-full max-w-sm" />
                        <input type="text" name='phone' placeholder="Your Contact Number" className="input input-bordered w-full max-w-sm" />
                        <input type="submit" value='Submit' className="btn btn-accent w-full max-w-sm text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;