import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({ date, setDate }) => {

    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p>You picked {format(date, 'PP')}.</p>;
    }

    return (
        <div className="hero min-h-screen bg-hero-pattern px-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='grid sm:grid-col-1 lg:grid-col-5'>
                    <img src={chair} className="sm:max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='px-6 my-5'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        footer={footer}
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;