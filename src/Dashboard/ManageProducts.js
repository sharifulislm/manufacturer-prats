import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Pages/Share/Loading/Loading';
import ProductRow from './ProductRow';
import Modal from './Modal';

const ManageProducts = () => {
    const [deleteingprosucts ,setDeleteingProducts]= useState(null);
    const {data: products, isLoading, refetch} = useQuery('products', ()=> fetch('https://rocky-thicket-49136.herokuapp.com/service' , {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

     if(isLoading){
         return <Loading></Loading>
     }
    return (
        <div>
        <h2 className='text-center text-2xl'> mange Doctor {products.length}</h2>

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
      products.map((product,index) => <ProductRow key={product._id}
      product={product} refetch={refetch} 
       index={index} setDeleteingdoctor={setDeleteingProducts}></ProductRow> )
  }

  </tbody>
  </table>


</div>
{deleteingprosucts && <Modal
deleteingprosucts={deleteingprosucts}
refetch={refetch}
setDeleteingProducts={setDeleteingProducts}
>
</Modal>}
        
    </div>
    );
};

export default ManageProducts;