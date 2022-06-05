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

<thead>
  <tr>
    <th>Order</th>
    <th>Name</th>
    <th>Address</th>
  
    <th>quantity </th>
    <th> Phone</th>
    <th> Total Price</th>
    {/* <th> email</th> */}
    <th>Payment </th>
  </tr>
</thead>
<tbody>
    {
        order.map((a, index) => 
            <tr key={a._id}>
            <th>{index + 1}</th>
            <th>{a.name}</th>
            <td>{a.address}</td>
            <td>{a.quantity}</td>
            <td>{a.phone}</td>
            <td>{a.price}</td>
            {/* <td>{a.email}</td> */}
            {/* <td><button>delete</button></td> */}
            
            {(a.price && !a.paid) && <Link to={`/dashbord/Payment/${a._id}`}><button className='btn btn-xs btn-success mt-3'>pay</button></Link>}
            {(a.price && a.paid) && <div>
                                    <p><span className='text-success'>Paid</span><Link className='text-success pl-3 font-bold ' to="/dashbord/addreview">Review</Link> </p>
                                    <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                </div>}
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