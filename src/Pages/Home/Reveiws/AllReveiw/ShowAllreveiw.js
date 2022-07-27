import React from 'react';
import StarRaTing from '../StarRaTing';


const ShowAllreveiw = ({reveiws}) => {
    
  
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
        <div class="avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={reveiws.photoURL} />
  </div>
</div>
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{reveiws.name}</h2>
          <p>{reveiws.description}</p>
          <StarRaTing reveiws={reveiws}></StarRaTing>
         
        </div>
      </div>
    );
};

export default ShowAllreveiw;