import React from 'react';
import './Mideles.css';


const Middlesection = () => {
    return (
        <div className='container mt-5'>
              <div className='mb-4 serviceName m-auto'>
            <h1 className='text-center'>Servise Truck </h1>
            <div className='aline-boxs'></div>
            {/* <p className='w-50 mb-5 text-center m-auto'>Through our experienced operations team we can handle various kind of supply chain operations and services</p> */}
            </div>
            <div className='row'>

                <div className='col-12 col-lg-6 col-md-6 p-2 '>
        <h3 className='mt-4'>At Warehouse, we provide a unique solution for warehousing space for business and consumers </h3>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>

                </div>
                <div className='col-12 col-lg-6 col-md-6 p-3'>

                    <img className='w-100' src="https://warehouse-admin-dashboard.multipurposethemes.com/images/front-end-img/about-1.jpg" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Middlesection;