import React, { useEffect, useState } from 'react';

const ManageOrdders = () => {
    const [ service , setService] = useState([]);
 
    
    // const [deleteOrder, setdeleteOrder] = useState([])
    console.log(service);
    
    useEffect(() => {
     fetch('http://localhost:5000/allorder')
     .then(res=> res.json())
     .then(data => setService(data))
    
    
    
    } ,[])


    const handlOrderDelete = id =>{
      const proceed = window.confirm('Are you sure you want to delete?');
      if(proceed){
          console.log('deleting user with id, ', id);
          const url = `http://localhost:5000/orders/${id}`;
          fetch(url, {
              method: 'DELETE',
              headers: {
                'content-type': 'application/json',
              
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
           
          })
          .then(res => res.json())
          .then(data =>{
              if(data.deletedCount > 0){
                  console.log('deleted');
                  const remaining = service.filter(user => user._id !== id);
                  setService(remaining);
              }
          })
      }
  }


    return (
        <div>
    

        <div class="w-11/12">
<table class="table w-full">

<thead>
  <tr>
    <th>Order</th>
    <th>Name</th>
    <th>Address</th>
  
    <th>quantity </th>
    {/* <th> Phone</th> */}
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
            {/* <td>{a.phone}</td> */}
            <td>{a.email}</td>
            <td><button className='btn btn-xs btn-error modal-button' onClick={() => handlOrderDelete(a._id)}>delete</button></td>
            
            {(a.price && !a.paid) && <span className='text-red-400'>Unpayment</span>}
            {(a.price && a.paid) && <div>
                                    <p><span className='text-success'>Paid</span></p>
                                    
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