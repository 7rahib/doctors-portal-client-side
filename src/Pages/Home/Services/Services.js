import React from 'react';
import ServiceCard from '../SeviceCard/ServiceCard';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import teeth from '../../../assets/images/whitening.png';


const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet turpis sem. Cr',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet turpis sem. Cr',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet turpis sem. Cr',
            img: teeth
        }
    ]

    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary uppercase text-xl font-semibold'>Our Services</h3>
                <h2 className='text-3xl'>Services we provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;