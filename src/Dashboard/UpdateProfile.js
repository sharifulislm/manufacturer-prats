import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
    const[user]=useAuthState(auth)
    const email =user.email;

 
    
    const handlereview = event => { 
        event.preventDefault();
        const Products = {
          
            email:user.email,
            name:event.target.name.value,
            photoURL:event.target.photourl.value,
            EditBio:event.target.EditBio.value,
            education:event.target.education.value,
            Profession:event.target.Profession.value,
            University:event.target.University.value,
            about:event.target.about.value
          
            
        }
        fetch(`https://rocky-thicket-49136.herokuapp.com/user/${email}`, {
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
                toast.success('Successfully Updated your Profile');
                event.target.reset();
            }
          
    })
        
    }
    return (
        <div class="modal">
        <div class="modal-box p-8 border-0 ">
     
        <h1 className='text-xl text-center mb-3'> Update your Profile {user.displayName}</h1>
     
             <form className='m-auto mx-auto text-center' onSubmit={handlereview}>
      
             <input className='input  m-auto mb-2 input-bordered w-full ' type="text"  name='name' placeholder='name' />
                     <br/>
              
              
                    
                     <input className='input mb-2 input-bordered w-full ' type="text" name='photourl' placeholder='Photo url'/> 
                     {/* <input className='input mb-2 input-bordered w-full max-w-xs' type="text" value={user?.photoURL}  name='photourl' placeholder='Photo url'/> */}
                <br/>
                <input className='input mb-2 input-bordered w-full ' type="text"  name='education' placeholder='education' />
                <br/>
                <input className='input mb-2 input-bordered w-full ' type="text"  name='University' placeholder='University' />
                <br/>
                <input className='input mb-2 input-bordered w-full ' type="text"  name='Profession' placeholder='Profession' />
                <br/>
                <input className='input mb-2 input-bordered w-full ' type="text"  name='EditBio' placeholder='Edit Bio' />
                <br/>
                <textarea className='input mb-2 input-bordered w-full ' type="text"  name='about' placeholder='about' />
                <br/>
            
                <input className=" w-full btn font-bold  " type="submit" value="Update"/>
  
            </form>
          
 
          <div class="modal-action">
          <label for="my-modal-7" class="btn">
             X
                </label>
          </div>
        </div>
      </div>
    );
};

export default UpdateProfile;