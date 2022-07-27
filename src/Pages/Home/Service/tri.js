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