import React from 'react';
import Benner from '../Benner/Benner';
import ManageItem from '../Pages/ManageItem/ManageItem';
import Middlesection from '../Pages/Middlesection/Middlesection';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Benner></Benner>
            <Service></Service>

            <Middlesection></Middlesection>  
            <ManageItem></ManageItem>         
        </div>
    );
};

export default Home;