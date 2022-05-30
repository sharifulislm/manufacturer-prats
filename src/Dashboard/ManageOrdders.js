import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageOrdders = () => {
    const [ service , setService] = useState([]);
    console.log(service);
    
    useEffect(() => {
     fetch('  https://rocky-thicket-49136.herokuapp.com/allorder')
     .then(res=> res.json())
     .then(data => setService(data))
    
    
    
    } ,[])
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
    <th> email</th>
    <th>Payment </th>
  </tr>
</thead>
<tbody>
    {
        service.map((a, index) => 
            <tr key={a._id}>
            <th>{index + 1}</th>
            <th>{a.name}</th>
            <td>{a.address}</td>
            <td>{a.quantity}</td>
            <td>{a.phone}</td>
            <td>{a.email}</td>
            <td><button>delete</button></td>
            
            {(a.price && !a.paid) && <Link to={`/dashbord/Payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
            {(a.price && a.paid) && <div>
                                    <p><span className='text-success'>Paid</span></p>
                                    <p>Transaction id: <span className='text-success'></span></p>
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

export default ManageOrdders;