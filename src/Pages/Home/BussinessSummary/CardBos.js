import React from 'react';
import { Link } from 'react-router-dom';

const CardBos = () => {
    return (
        <>
        <div class="card lg:card-side bg-base-100 p-12 mt-4 mb-3 shadow-xl">

  <div class="card-body">
    <h2 class="card-title text-4xl text-blue-500">Have any question about us or get a <br></br>
     products request ?
     </h2>
    <p className='text-xl'>Don not hesitate to contact us.</p>
    <div class="card-actions justify-end">
    <h1>  <button class="btn btn-primary text-white mr-8">Request for quote</button>
    <Link to="/contact"><button class="btn btn-black text-white"> Contact us</button> </Link> </h1>
    </div>
  </div>
</div>
        </>
    );
};

export default CardBos;