import React from 'react';
import Banner from '../Banner/Banner';
import FourthSection from '../FourthSection';
import HomeContact from '../HomeContact';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <FourthSection></FourthSection>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <HomeContact></HomeContact>
        </div>
    );
};

export default Home;