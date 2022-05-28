import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import useUsers from '../Hooks/useUsers';

const MyProfile = () => {
    const[user]=useAuthState(auth)
    const email =user.email;
    const[users]=useUsers([]);
 
    
    const handlereview = event => { 
        event.preventDefault();
        const Products = {
            name:user.displayName,
            email:user.email,
            photoURL:user.photoURL,
            education:event.target.education.value,
            about:event.target.about.value
          
            
        }
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
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
        <div className='flex justify-self-auto'>
        <div className='w-2/6 mr-16'>
        <h1 className='text-xl text-center mb-3'> Add Something your Profile {user.displayName}</h1>
     
             <form className='m-auto mx-auto text-center' onSubmit={handlereview}>
      
             <input className='input  m-auto mb-2 input-bordered w-full max-w-xs' type="text" value={user?.displayName}  name='name' placeholder='name' required readOnly/>
                     <br/>
                     <input className='input mb-2 input-bordered w-full max-w-xs' type="text" value={user?.email}  name='email' placeholder='email' required readOnly />
                     <br/>
                     <input className='input mb-2 input-bordered w-full max-w-xs' type="text" value={user?.photoURL}  name='photourl' placeholder='Photo url'/>
                <br/>
                <input className='input mb-2 input-bordered w-full max-w-xs' type="text"  name='education' placeholder='education' />
                <br/>
                <textarea className='input mb-2 input-bordered w-full max-w-xs' type="text"  name='about' placeholder='about' />
                <br/>
                
                <input className="btn btn-accent w-full max-w-xs  " type="submit" value="Add about Yourself"/>
              
            </form>
          
      </div>
      <div className='w-6/12'>
      <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={users.photoURL} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{users.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      </div>
     

      </div>
    );
};

export default MyProfile;