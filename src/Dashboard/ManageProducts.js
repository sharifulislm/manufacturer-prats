import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Pages/Share/Loading/Loading';
import ProductRow from './ProductRow';
// import Modal from './Modal';

const ManageProducts = () => {
    // const [deleteingprosucts ,setDeleteingProducts]= useState([]);
    const [ serviceS , setService] = useState(null);
    const {data: service, isLoading, refetch} = useQuery('service', ()=> fetch('http://localhost:5000/service' , {
      headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
  }).then(res => res.json()));

   if(isLoading){
       return <Loading></Loading>
   }

    return (
        <div>
        <h2 className='text-center text-2xl'> mange Doctor {service.length}</h2>

        <div class="overflow-x-auto">
<table class="table w-full">

<thead>

  <tr>
    <th></th>
    <th>images</th>
    <th>name</th>
    <th>availableQuantity</th>
    <th>price</th>
  
  </tr>
</thead>
<tbody>
  {
      service.map((service,index) => <ProductRow key={service._id}
      service={service} 
      refetch={refetch}
       index={index} setService={setService}></ProductRow> )
  }

  </tbody>
  </table>


</div>
{/* {service && <Modal
service={service}

setService={setService}
>
</Modal>} */}
        
    </div>
    );
};

export default ManageProducts;