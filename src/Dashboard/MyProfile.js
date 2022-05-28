import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const MyProfile = () => {
    const[user]=useAuthState(auth)
    const email =user.email;
 
    
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
        <div>
        <h1 className='text-xl text-center mb-3'> Add Something your Profile {user.displayName}</h1>
     
             <form className='' onSubmit={handlereview}>
      
             <input className='input mb-2 input-bordered w-full max-w-xs' type="text" value={user?.displayName}  name='name' placeholder='name' required readOnly/>
                     <br/>
                     <input className='input mb-2 input-bordered w-full max-w-xs' type="text" value={user?.email}  name='email' placeholder='email' required readOnly />
                     <br/>
                     <input className='input mb-2 input-bordered w-full max-w-xs' type="text" value={user?.photoURL}  name='photourl' placeholder='Photo url' required readOnly />
                <br/>
                <input className='input mb-2 input-bordered w-full max-w-xs' type="text"  name='education' placeholder='education' />
                <br/>
                <textarea className='input mb-2 input-bordered w-full max-w-xs' type="text"  name='about' placeholder='about' />
                <br/>
                
                <input className="btn btn-accent w-full max-w-xs  " type="submit" value="Add about Yourself"/>
              
            </form>
          
      </div>
    );
};

export default MyProfile;