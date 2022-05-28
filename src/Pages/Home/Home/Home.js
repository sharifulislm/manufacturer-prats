import React from 'react';
import Banner from '../Benner/Banner';
import BussinessSummary from '../BussinessSummary/BussinessSummary';
import Reveiws from '../Reveiws/Reveiws';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <Service></Service>
            <BussinessSummary></BussinessSummary>
            <Reveiws></Reveiws>
          
            
        </div>
    );
};

export default Home;