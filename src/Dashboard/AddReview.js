import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const AddReview = () => {



    const[user]=useAuthState(auth)
    console.log(user.photoURL);
    const handlereview = event => { 
        event.preventDefault();
        const Products = {
            name:user.displayName,
            email:user.email,
            photoURL:user.photoURL,
            product:event.target.product.value,
            revice:event.target.revice.value,
            description:event.target.description.value
          
            
        }
        fetch('http://localhost:5000/review', {
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
   <h1 className='text-xl text-center mb-3'> Add your Review {user.displayName}</h1>

        <form className='' onSubmit={handlereview}>
 
        <input className='input mb-2 input-bordered w-full max-w-xs' type="text" value={user?.displayName}  name='name' placeholder='name' required readOnly/>
                <br/>
                <input className='input mb-2 input-bordered w-full max-w-xs' type="text" value={user?.photoURL}  name='photourl' placeholder='email' required readOnly />
           <br/>
           <input className='input mb-2 input-bordered w-full max-w-xs' type="text"  name='product' placeholder='Product name' />
           <br/>
           <input className='input mb-2 input-bordered w-full max-w-xs' type="text"  name='revice' placeholder='Rveiw star' />
             
 <br></br>
           <textarea className='input mb-2 input-bordered w-full max-w-xs' type="text"  name='description' placeholder='description' />
           <br/>
           
           <input className="btn btn-accent w-full max-w-xs  " type="submit" value="Add Review"/>
         
       </form>
     
 </div>
    );
};

export default AddReview;