import axios from 'axios';
import React, { useState } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';



const Manageitems = () => {
    const [user] = useAuthState(auth);

    const [Images,setImages]=useState("");
    const [supplierName,setsupplierName]=useState("");
    const [Price,setPrice]=useState("");
    const [quantity,setquantity]=useState("");
    const [Description,setDescription]=useState("");


    const handlePlaceOrder = event =>{
        event.preventDefault();
      
        const email = user.email;
        const name = user.displayName;
      
            const myItem = {Images,supplierName,quantity,Description,Price,email,name } ;
            
        
    
        axios.post('http://localhost:5000/manageitem',myItem)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                console.log('Your Item is successfully added')
                toast('Your Item is successfully added  !!!');
                event.target.reset();
               
            }
        })
    }
    return (
        <div className='w-50 mx-auto'>
       <h1 className='text-center mb-2 mt-1'> Wellcome  {user.displayName}</h1>

       <h3 className='text-center mb-1'> Please add new item </h3>
     
        <form onSubmit={handlePlaceOrder}>

            <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled/>
            <br />
            <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
         <br/>
           
            <input className='w-100 mb-2' onChange={(e)=> {setImages(e.target.value)}} type="text"  placeholder='Images url' />
            <br />
            <input className='w-100 mb-2' onChange={(e)=> {setquantity(e.target.value)}} type="number" name="quantity" placeholder='quantity' required />
            <br />
            <input className='w-100 mb-2' onChange={(e)=> {setDescription(e.target.value)}} type="text" name="Description" placeholder='Description' required />
            <br />
            <input className='w-100 mb-2' onChange={(e)=> {setPrice(e.target.value)}} type="number" name="Price" placeholder='Price' required />
            <br />
            <input className='w-100 mb-2' onChange={(e)=> {setsupplierName(e.target.value)}} type="text" name="supplierName" placeholder='supplierName' required />
            <br />
            <input className='btn text-center m-auto mx-auto  btn-primary' type="submit" value="Add you item" />
        </form>


      
    </div>
    );
};

export default Manageitems;