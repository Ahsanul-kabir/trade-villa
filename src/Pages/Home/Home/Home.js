import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HighlightProducts from '../HighlightProducts/HighlightProducts';
import OurExprience from '../OurExprience/OurExprience';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <HighlightProducts />
            <OurExprience />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;