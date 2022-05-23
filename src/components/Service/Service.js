import React from 'react';
import UseProducts from '../../Hooks/UseProducts';
import ProductService from './ProductService';
import './Service.css';

const Service = () => {
    const [products] = UseProducts()
   

    return (
        <div className='Container container '>
            <div className='serviceName m-auto'>
            <h1 className='text-center'>Store Parts</h1>
            <div className='aline-boxs'></div>
            <p className='w-50 mb-5 text-center m-auto'>Through our experienced operations team we can handle various kind of supply chain operations and services</p>
            </div>
            <div className='row d-flex justify-content-center'>
            {
                products.slice(0, 6).map((services) => <ProductService key={services._id} services={services}></ProductService>)

            }
            </div>
            
            
        </div>
    );
};

export default Service;