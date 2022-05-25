import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useProduct from '../../../Hooks/useProduct';

// import useService from '../../../Hooks/UseService';


const Purchase = () => {
const {serviceId}=useParams();
const [service]=useProduct(serviceId)
const [user] = useAuthState(auth);

const { description,name,images,price,supplierName,availableQuantity,quantity} =service;
console.log(service);
const handlePlaceOrder = event => {
    event.preventDefault();
    const order = {
        email:user.email,
        service: service.name,
        sericeId: serviceId,
        address: event.target.addrsess.value,
        phone: event.target.phone.value,
        quantity: event.target.quantity.value
        
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


// start oder frome \
// const { register, formState: { errors }, handleSubmit } = useForm();


// const onSubmit = async data => {
//      console.log(data);
    
//    }
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
    {/* <p> {description.slice(0, 100)}...</p> */}
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
        
          <div className='w-2/4'>
              <h1 className='text-xl text-center'>Purchase</h1>

              <form className='' onSubmit={handlePlaceOrder}>
              <input className='input mb-2 input-bordered w-full max-w-xs' type="number" value={user.quantity} name='quantity' placeholder='quantity' required />
              <br></br>
                <input className='input mb-2 input-bordered w-full max-w-xs' type="text" value={user?.displayName}  name='name' placeholder='name' required readOnly/>
                <br/>
                <input className='input mb-2 input-bordered w-full max-w-xs' type="email" value={user?.email}  name='email' placeholder='email' required readOnly />
                <br/>
                <input className='input mb-2 input-bordered w-full max-w-xs' type="text"  value={service.name} name='service' placeholder='service' required />
                <br/>
                <input className='input mb-2 input-bordered w-full max-w-xs' type="text"  value={user.address} name='addrsess' placeholder='addrsess' required  autoComplete='off'/>
                <br/>
                <input className='input mb-2 input-bordered w-full max-w-xs' type="text" value={user.phone} name='phone' placeholder='phone' required />
                <br/>
                <input className='btn btn-primary' type="submit" value=" Order" />

            </form>

          {/* <form onSubmit={handleSubmit(onSubmit)}>

<div className="form-control w-full max-w-xs">
<div>
<label className="label">
<span className="text-center">quantity</span>


</label>
<input type="number" placeholder="quantity"
className="input input-bordered w-full max-w-xs"
{...register("image",
{
required: {
 value: true,
 message: 'Name is required'
},
pattern: {
    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    message: 'error message' 
  }

})} />
</div>
<br></br>
    
<label className="label">
<span className="label-text">Name</span>


</label>
<input type="text" placeholder="name"
className="input input-bordered w-full max-w-xs"
{...register("name",
{
   required: {
     value: true,
     message: 'Name is required'
   },

})}


/>
    <label className="label">
    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


</label>

</div>
<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Email</span>


</label>
<input type="email" placeholder="email"
className="input input-bordered w-full max-w-xs"
{...register("email",
{
   required: {
     value: true,
     message: 'email is required'
   },
pattern: {
  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
  message: 'error message' 
}
})}


/>
    <label className="label">
    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
     {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

</label>

</div>



  <input className='btn w-full max-w-xs text-white' type="submit" value="Add doctor" />
</form> */}
          </div>
        </div>
      </div>
    );
};

export default Purchase;