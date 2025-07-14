import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import FeaturedSection from '../FeaturedSection/FeaturedSection';
import Testimonials from '../Testimonials/Testimonials';
import FatBurningSection from '../FatBurningSection/FatBurningSection';
import TeamSection from '../TeamSection/TeamSection';
import Newsletter from '../Newsletter/Newsletter';
import FeaturedClasses from '../FeaturedClasses/FeaturedClasses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <About></About>

            <FeaturedSection></FeaturedSection>

            <Testimonials></Testimonials>

            <FatBurningSection></FatBurningSection>

        <TeamSection></TeamSection>
< FeaturedClasses></FeaturedClasses>
<Newsletter></Newsletter>
        </div>
    );
};

export default Home;