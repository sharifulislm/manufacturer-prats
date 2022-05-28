import React from 'react';

const ShowReveiw = ({reveiws}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={reveiws.photoURL} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{reveiws.name}</h2>
          <p>{reveiws.description}</p>
         
        </div>
      </div>
    );
};

export default ShowReveiw;