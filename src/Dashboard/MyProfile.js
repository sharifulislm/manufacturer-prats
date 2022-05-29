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
            photoURLs:event.target.photourl.value,
            EditBio:event.target.EditBio.value,
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
                     {user.photoURL ? <input className='input mb-2 input-bordered w-full max-w-xs' type="text" name='photourl' placeholder='Photo url'/> : 
                    
                     <input className='input mb-2 input-bordered w-full max-w-xs' type="text" value={user?.photoURL}  name='photourl' placeholder='Photo url'/> }
                     {/* <input className='input mb-2 input-bordered w-full max-w-xs' type="text" value={user?.photoURL}  name='photourl' placeholder='Photo url'/> */}
                <br/>
                <input className='input mb-2 input-bordered w-full max-w-xs' type="text"  name='education' placeholder='education' />
                <br/>
                <input className='input mb-2 input-bordered w-full max-w-xs' type="text"  name='EditBio' placeholder='Edit Bio' />
                <br/>
                <textarea className='input mb-2 input-bordered w-full max-w-xs' type="text"  name='about' placeholder='about' />
                <br/>
                
                <input className="btn btn-accent w-full max-w-xs  " type="submit" value="Add about Yourself"/>
              
            </form>
          
      </div>

     

      </div>
    );
};

export default MyProfile;