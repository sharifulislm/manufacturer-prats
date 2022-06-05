import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({index,service,setService,refetch}) => {
    const { _id,name,images,price,availableQuantity} = service;


    
    const handlOrderDelete = _id =>{
      const proceed = window.confirm('Are you sure you want to delete?');
      if(proceed){
          console.log('deleting user with id, ', _id);
          const url = `http://localhost:5000/service/${_id}`;
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
                  setService(null)
                  // const remaining = service.filter(user => user._id !== _id);
                  // setService(remaining);
              
                  refetch()
                  toast('Successfuly Deleted')
              }
          })
      }
  }


    return (
        <tr>
        <th>{index + 1}</th>
        <td>  
                    <div class="avatar">
  <div class="w-16 rounded">
    <img src={images} alt={name} />
  </div>
</div>

</td>
        <td>{name}</td>
        <td>{availableQuantity}</td>
        <td>{price}</td>
       
        <td>
        <label  onClick={() => handlOrderDelete(_id)} for="deletemodal" class="btn btn-xs btn-error modal-button">delete</label>
          
        
        </td>
      </tr>
    );
};

export default ProductRow;