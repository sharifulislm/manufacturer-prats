import axios from 'axios';
import React, { useState } from 'react';
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
// const [quantityvalue,setQuantityvalue ] = useState('');
const [quantitys, setquantitys] = useState('')
const { description,name,images,price,availableQuantity,quantity} =service;

// if(quantitys <= 100){
//   setQuantityErorr('error');
// }else if (quantitys > availableQuantity){
//   setQuantityErorr('error 2');
// }
// else{
//   setQuantityvalue(quantitys);
// }


const handlePlaceOrder = event => { 
    event.preventDefault();
    const order = {
        email:user.email,
        service: service.name,
        sericeId: serviceId,
        address: event.target.addrsess.value,
        phone: event.target.phone.value,
        quantity:quantitys
      
        
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
  <figure><img className='' src={images} alt="" /></figure>
  <div class="card-body ">
    <h2 class="card-title">{name}</h2>
    <h2 class="card-title">{price}</h2>
    <h5>Quantity {quantity}</h5>
    <h5> Available Quantity : {availableQuantity}</h5>

    <div class="card-actions justify-end">
      <button class="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
        
          <div className='w-2/4'>
              <h1 className='text-xl text-center'>Purchase</h1>
 
              <form className='' onSubmit={handlePlaceOrder}>

                

              <input   onChange={ (event) => setquantitys(event.target.value) }  className='input mb-2 input-bordered w-full max-w-xs' type="text"  placeholder='quantity'/>
              <br></br>
          <p>{quantityErorr}</p>
                <input className='input mb-2 input-bordered w-full max-w-xs' type="text" value={user?.displayName}  name='name' placeholder='name' required readOnly/>
                <br/>
                <input className='input mb-2 input-bordered w-full max-w-xs' type="email" value={user?.email}  name='email' placeholder='email' required readOnly />
                <br/>
                <input className='input mb-2 input-bordered w-full max-w-xs' type="text"   name='service' placeholder='service' required />
                <br/>
                <input className='input mb-2 input-bordered w-full max-w-xs' type="text"   name='addrsess' placeholder='addrsess' required  autoComplete='off'/>
                <br/>
                <input className='input mb-2 input-bordered w-full max-w-xs' type="text"  name='phone' placeholder='phone' required />
                <br/>
                
                <input
className="btn btn-accent   w-full max-w-xs  "
type="submit"
value="Place Order"
/>
              
           

            </form>


          </div>
        </div>
      </div>
    );
};

export default Purchase;