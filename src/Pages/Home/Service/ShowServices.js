import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowServices = ({services}) => {
    const { _id,description,name,images,price,supplierName,quantity,availableQuantity} =services;

    const navitate =useNavigate();
    const navigateServiceId = _id => {
      navitate(`/purchase/${_id}`);
    }
  
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={images} alt="Shoes" /></figure>
        <h2 class="card-title text-center m-auto">{name}</h2>
        <div class="card-body mx-0  ">
       
            <div className=''>
            <h5 class="mt-0 pt-0">Avilable Quantity: {availableQuantity}</h5>
        
          <h5 class="m-0 p-0">Quantity: {quantity}</h5>
          </div>
          <div>
        
          <p className='float-right text-xl bg-secondary'>Price: {price}$</p>
          </div>

        
          <h6> {description.slice(0, 75)}...</h6>
          <div class="card-actions justify-end">
            <button onClick={()=> navigateServiceId(_id)} class="btn text-white btn-primary m-auto">purchase</button>
          </div>
        </div>
      </div>
    );
};

export default ShowServices;