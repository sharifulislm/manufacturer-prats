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
    axios.post('http://localhost:5000/order', order)
    .then(response => {
        const {data} = response;
        if(data.insertedId){
            toast('your order is booked');
            event.target.reset();
        }
    })
    
}






    return (
        <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
        <div class="card card-side bg-base-100 shadow-xl w-2/4">
 <div className='w-1/2'> <figure><img  src={images} alt="" /></figure></div>
  <div class="card-body ">
    <h2 class="card-title">{name}</h2>
    <h2 class="card-title">{price}</h2>
    <h5>minimum Quantity: {quantity}</h5>
    <h5> Available Quantity : {availableQuantity}</h5>

    <div class="card-actions justify-end">
    </div>
  </div>
</div>
        
          <div className='w-2/4'>
              <h1 className='text-xl text-center'>Purchase</h1>
 
              <form className='' onSubmit={handlePlaceOrder}>
                
              <input   onChange={ (event) => setquantitys(event.target.value) }  className='input mb-2 input-bordered w-full max-w-xs' type="text"  placeholder='quantity'/>
              <br></br>
             <p className='text-red-500'>{quantityErorr}</p>
                <input className='input mb-2 input-bordered w-full max-w-xs' type="text" value={user?.displayName}  name='name' placeholder='name' required readOnly/>
                <br/>
                <input className='input mb-2 input-bordered w-full max-w-xs' type="email" value={user?.email}  name='email' placeholder='email' required readOnly />
             
          
                <br/>
                <input className='input mb-2 input-bordered w-full max-w-xs' type="text"   name='addrsess' placeholder='addrsess' required  autoComplete='off'/>
                <br/>
                <input className='input mb-2 input-bordered w-full max-w-xs' type="text"  name='phone' placeholder='phone' required />
                <br/>
                
                <input className="btn btn-accent w-full max-w-xs  " type="submit" value="Place Order"/>
              
            </form>


          </div>
        </div>
      </div>
    );
};

export default Purchase;