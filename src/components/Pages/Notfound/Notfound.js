import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css';

const Notfound = () => {
    return (
      <div className='container'>
            <div className='text-center'>

<h1 className='text-danger text-center mt-5 mb-2'>Oops! That page can't be found  </h1>
<p className='text-center'>Unfortunately, something went wrong and this page does not exist. Try using the search or return to the previous page.</p>


<Link className='back-btn' to='/'>Go Back to Home</Link>
</div>
<div className='Notfound'>

</div>
      </div>
    );
};

export default Notfound;