import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const handleaddProducts = event => { 
        event.preventDefault();
        const Products = {
            name:event.target.name.value,
            images:event.target.images.value,
            price: event.target.price.value,
            availableQuantity:event.target.availableQuantity.value,
            description:event.target.description.value
          
            
        }
        fetch('https://rocky-thicket-49136.herokuapp.com/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
              
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(Products)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data){
                toast.success('Doctor added successfully');
                event.target.reset();
            }
          
    })
        
    }
    
    return (
        <div>
               <form className='' onSubmit={handleaddProducts}>
        
                  <input className='input mb-2 input-bordered w-full max-w-xs' type="text" name='name' placeholder='name' />
                  <br/>
                  <input className='input mb-2 input-bordered w-full max-w-xs' type="text" name='price' placeholder='price' />
                  <br/>
                  <input className='input mb-2 input-bordered w-full max-w-xs' type="text"   name='availableQuantity' placeholder='availableQuantity'/>
                  <br/>
                  <input className='input mb-2 input-bordered w-full max-w-xs' type="text"  name='images' placeholder='img url' />
                  <br/>
                  <textarea className='input mb-2 input-bordered w-full max-w-xs' type="text"  name='description' placeholder='description' />
                  <br/>
                  
                  <input className="btn btn-accent w-full max-w-xs  " type="submit" value="Add Product"/>
                
              </form>
            
        </div>
    );
};

export default AddProduct;