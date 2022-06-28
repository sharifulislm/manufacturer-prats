import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
// import StarRating from './StarRating';

const AddReview = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);



    const[user]=useAuthState(auth)
    console.log(user.photoURL);
    const handlereview = event => { 
        event.preventDefault();
        const Products = {
            name:user.displayName,
            rating:rating,
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
            console.log(data);
            if(data){
                toast.success('Doctor added successfully');
                event.target.reset();
            }
          
    })
        
    }

    return (
        <div>
   <h1 className='text-xl text-center mb-3'> Add your Review {user.displayName}</h1>

   <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star text-4xl">&#9733;</span>
            </button>
          );
        })}
      </div>

        <form className='' onSubmit={handlereview}>
 
        <input className='input mb-2 input-bordered w-full max-w-xs' type="text" value={user?.displayName}  name='name' placeholder='name' required readOnly/>
         <br></br>
           <textarea className='input mb-2 input-bordered w-full max-w-xs' type="text"  name='description' placeholder='feedback' />
           <br/>
           
           <input className="btn btn-accent w-full max-w-xs  " type="submit" value="Add Review"/>
         
       </form>
     
 </div>
    );
};

export default AddReview;