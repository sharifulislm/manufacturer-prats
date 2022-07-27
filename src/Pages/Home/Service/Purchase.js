import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import useProduct from '../../../Hooks/useProduct';




const Purchase = () => {
const {serviceId}=useParams();
const [service]=useProduct(serviceId)
const [user] = useAuthState(auth);
const [quantityErorr, setQuantityErorr] = useState('');
const [quantityvalue,setQuantityvalue ] = useState('');
const [quantitys, setquantitys] = useState('')
const { description,name,images,price,availableQuantity,quantity} =service;


const totalPrice  = quantityvalue * price;

useEffect(()=> {
  if(quantitys > availableQuantity ){
    return setQuantityErorr('sorry not availabe');
  }else if(quantitys <= quantity){
    return setQuantityErorr('minimum quantity');
  }else if(quantitys > 100){
      setQuantityErorr('')
      setQuantityvalue(quantitys)
  }

},[quantitys])



const handlePlaceOrder = event => { 
    event.preventDefault();
    const order = {
        name:user.displayName,
        email:user.email,
        sericeId: serviceId,
        price:totalPrice,
        address: event.target.addrsess.value,
        phone: event.target.phone.value,
        quantity:quantityvalue
      
        
    }
    console.log(order);
    axios.post('https://rocky-thicket-49136.herokuapp.com/order', order)
    .then(response => {
        const {data} = response;
        if(data.insertedId){
            toast('your order is booked');
            event.target.reset();
        }
    })
    
}






    return (
 
 <div className='grid grid-cols-2 gap-4 max-w-7xl mx-auto px-12  mt-4 mb-4'>

  <div className='grid grid-cols-2 mt-3 mb-2 ' >
  <div className='w-full'> <figure><img className='w-full' src={images} alt="" /></figure></div>
<div className='mx-auto ml-2 pt-5'>
<h2 class="card-title ">{name}</h2>

<h6 className='mt-2 mb-1'> {description?.slice(0, 90)}...</h6>

      
          <div>
          <small className=' text-sm'> <span className='text-base font-bold'>Required: </span>{quantity} pcs</small>
          <small className=' text-sm'>  <span className='text-base font-bold'>Available: </span>{availableQuantity} pcs</small>
        
          </div>
          <p className=' text-xl mt-2'> <span className='text-xl font-bold'>Price: </span> {price}$</p>
        
</div>
  </div>

  <div className='text-right border-2 p-7 rounded-lg mt-3 mb-2'>
    <h1 className='text-xl text-center mb-2'>PLEASE ORDER </h1>
   <>
   <form className='' onSubmit={handlePlaceOrder}>
        
        <input   onChange={ (event) => setquantitys(event.target.value) }  className='input mb-2 input-bordered w-full' type="text"  placeholder='quantity'/>
        <br></br>
       <p className='text-red-500'>{quantityErorr}</p>
          <input className='input mb-2 input-bordered w-full ' type="text" value={user?.displayName}  name='name' placeholder='name' required readOnly/>
          <br/>
          <input className='input mb-2 input-bordered w-full ' type="email" value={user?.email}  name='email' placeholder='email' required readOnly />
       
    
          <br/>
          <input className='input mb-2 input-bordered w-full ' type="text"   name='addrsess' placeholder='addrsess' required  autoComplete='off'/>
          <br/>
          <input className='input mb-2 input-bordered w-full ' type="text"  name='phone' placeholder='phone' required />
          <br/>
          
          <input className="btn btn-accent w-full   " type="submit" value="please Order"/>
        
      </form>
   </>

  </div>

 </div>

    );
};

export default Purchase;