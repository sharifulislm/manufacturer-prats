import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import './Additem.css';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
     console.log(data);
     const url = `http://localhost:5000/inventory`;
     fetch(url, {
         method: 'POST',
         headers: {
             'content-type': 'application/json'
         },
         body: JSON.stringify(data)
     })
     .then(res => res.json())
     .then(result => {
         console.log(result);
         toast('Your Item is successfully added  !!!');
      
     })
    };

    return (
        <div className='container'>
           
            <div className='w-50 mx-auto form-box mt-4 mb-2 pb-5'>
            <h2 className='text-center mt-1 pt-1'>Please add  service</h2>
           <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className=' mb-3 ' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <input className='mb-2' placeholder='supplier ' {...register("supplierName")} />
      <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
      <input className='mb-2' placeholder='quantity' type="number" {...register("quantity")} />
      <input className='mb-2' placeholder='Photo url' type="text" {...register("images")} />
      <textarea className='mb-2' placeholder='Description' {...register("description")} />
      <input className='btn-primary' type="submit" value="Add new Item"/>
    </form>
        </div>
        </div>
    );
};

export default AddItem;