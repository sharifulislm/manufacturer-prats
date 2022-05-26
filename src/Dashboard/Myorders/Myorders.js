import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Pages/Share/Loading/Loading';

const Myorders = () => {
    const {data: Orders, isLoading, refetch} = useQuery('doctors', ()=> fetch('  http://localhost:5000/order' , {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

     if(isLoading){
         return <Loading></Loading>
     }
    return (
        <div>
        <h1> my Orders {Orders.length} </h1>
        {/* const { description,name,images,price,availableQuantity,quantity} =service; */}

        <div class="overflow-x-auto">
<table class="table w-full">

<thead>
  <tr>
    <th></th>
    <th>Name</th>
    <th>Price</th>
    <th> </th>
    <th>Treatment </th>
    <th>Payment </th>
  </tr>
</thead>
<tbody>
    {/* {
        Orders.map((a, index) => 
            <tr key={a._id}>
            <th>{index + 1}</th>
            <th>{a.patientName}</th>
            <td>{a.date}</td>
            <td>{a.slot}</td>
            <td>{a.treatment}</td>
            {(a.price && !a.paid) && <Link to={`/dashbord/Payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
            {(a.price && a.paid) && <div>
                                    <p><span className='text-success'>Paid</span></p>
                                    <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                </div>}
          </tr>
            )
    } */}


 
  


</tbody>
</table>
</div>
        
    </div>
    );
};

export default Myorders;