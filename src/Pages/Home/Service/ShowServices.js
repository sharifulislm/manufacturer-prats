import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ShowService.css';

const ShowServices = ({services}) => {
    const { _id,description,name,images,price,quantity,availableQuantity} =services;

    const navitate =useNavigate();
    const navigateServiceId = _id => {
      navitate(`/purchase/${_id}`);
    }
    
  
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl mb-6">
        <figure><img className='' src={images} alt="Shoes" /></figure>
       
        <div class="card-body mx-0  ">
        <h2 class="card-title ">{name}</h2>
        <h6> {description.slice(0, 90)}...</h6>
          <div>
          <small className='float-lift text-sm'> <span className='text-base font-bold'>Required: </span>{quantity} pcs</small>
          <small className='float-right text-sm'>  <span className='text-base font-bold'>Available: </span>{availableQuantity} pcs</small>
        
          </div>
          <p className=' text-xl '> <span className='text-xl font-bold'>Price: </span> {price}$</p>
        
       
          <div class="card-actions justify-end">
            <button onClick={()=> navigateServiceId(_id)} class="btn text-white btn-block">Order</button>
          </div>
        </div>
      </div>
    );
};

export default ShowServices;