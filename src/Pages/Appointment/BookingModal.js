import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const [user] = useAuthState(auth);
    const { _id, name, slots } = treatment

    const handleBooking = event => {
        event.preventDefault()
        const formattedDate = format(date, 'PP')
        const slot = event.target.slot.value
        console.log(_id, name, slot)

        const booking = {
            treatmentId: _id,
            treatment: name,
            data: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }
        fetch('https://mysterious-tundra-54205.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set on ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already booked this appointment on ${date.booking?.date} at ${data.booking?.slot}`)

                }
                refetch()
                setTreatment(null)
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-sm" />
                        <select name='slot' className="select select-bordered w-full max-w-sm">
                            {
                                slots.map(slot => <option key={slot._id} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-sm" />
                        <input type="email" name='email' disabled value={user?.email || " "} className="input input-bordered w-full max-w-sm" />
                        <input type="text" name='phone' placeholder="Your Contact Number" className="input input-bordered w-full max-w-sm" />
                        <input type="submit" value='Submit' className="btn btn-accent w-full max-w-sm text-white" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;