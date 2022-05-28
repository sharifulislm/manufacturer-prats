import React from 'react';

const ProductRow = ({index,product,refetch,setDeleteingProducts}) => {
    const { name,images,price,availableQuantity} =product;

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
        <label  onClick={() => setDeleteingProducts(product)} for="deletemodal" class="btn btn-xs btn-error modal-button">delete</label>
          
        
        </td>
      </tr>
    );
};

export default ProductRow;