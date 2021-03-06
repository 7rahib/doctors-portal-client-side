import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-12'>
            <InfoCard bgCard="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening hours" img={clock}></InfoCard>
            <InfoCard bgCard="bg-accent" cardTitle="Visit our locations" img={marker}></InfoCard>
            <InfoCard bgCard="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact us now" img={phone}></InfoCard>
        </div>
    );
};

export default Info;