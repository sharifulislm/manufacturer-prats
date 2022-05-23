import React from 'react';
import './Mangeprodects.css';
import { AiFillDelete } from "react-icons/ai";

const ManageProdects = (props) => {
    // const {id}=services
    const {services, handleRemoveProduct} = props;
 
    const {_id,description,name,images,price,supplierName,quantity} =services;




    return (
        <div className='review-item '>
        <div className='img-box'>
            <img src={images} alt="" />
        </div>
        <div className="review-item-details-container">
            <div className="review-item-details">
                <span>Name:{name}</span>
                <div className='price-box'><p>Price: <span className='orange-color'>${price}</span></p>

                <p><small>Supplier: {supplierName}</small></p>
                <p><small>Quantity: {quantity}</small></p></div>
                <p className="product-name" title={description}>
                   description: { description.length > 20 ? description.slice(0, 90) + '...': description }
                </p>
            </div>
            <div className="delete-container">
                <button onClick={()=>handleRemoveProduct(_id) } className='delete-button'>
                  <AiFillDelete></AiFillDelete>
                </button>
            </div>
        </div>
    </div>
    );
};

export default ManageProdects;