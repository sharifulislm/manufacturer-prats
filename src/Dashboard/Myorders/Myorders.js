import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
// import auth from '../../firebase.init';
import useMyorder from '../../Hooks/useMyorder';
// import Dashboard from '../Dashboard';



const Myorders = () => {

const [order] =useMyorder([])

    return (
        <div>
    

        <div class="overflow-x-auto">
<table class="table w-full">

<thead className='font-bold bg-teal-500'>
  <tr>
    <th>Order</th>
    <th>Product Name</th>
    <th>Transaction id:</th>
  
    <th>quantity </th>
    <th>Status</th>
    {/* <th> Total Price</th> */}
    {/* <th> email</th> */}
    <th>Payment </th>
    <th>Payment </th>
  </tr>
</thead>
<tbody>
    {
        order.map((a, index) => 
            <tr key={a._id}>
            <th>{index + 1}</th>
            <th>{a.product}</th>
            <td className='text-success'>{a.transactionId}
            {(a.price && !a.paid) && <span className='text-success font-bold'> Unpaid</span>}
            </td>
            <td>{a.quantity}</td>
            <td>       {(a.price && a.paid) && <div>
                                    <p><span className='text-success'>Paid</span> </p>
                                  
                                </div> }
                                
                                {(a.price && !a.paid) && <span className='text-success font-bold'> Unpaid</span>}

                                </td>
            <td>{a.price}</td>
            {/* <td>{a.email}</td> */}
            {/* <td><button>delete</button></td> */}
            <td>
            {(a.price && !a.paid) && <Link to={`/dashbord/Payment/${a._id}`}><button className='btn btn-xs btn-success mt-3'>pay</button></Link>}
            {(a.price && a.paid) && <div>
                                    <p><Link className='btn btn-xs btn-primary mt-3 text-white pl-3 font-bold ' to="/dashbord/addreview"> Review</Link> </p>
                                  
                                </div>}</td>
          </tr>
            )
            
    }




 
  


</tbody>
</table>
<div>

</div>
</div>

        
    </div>
    );
};

export default Myorders;