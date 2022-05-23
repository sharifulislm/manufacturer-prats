
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link,useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
import useInventory from '../../Hooks/useInventory';
// import auth from '../firebase.init';
import './Inventory.css';

const Inventory = () => {
    const {inventoryId} = useParams();
 
    const [service] = useInventory(inventoryId);
   
    // const [quantitys,setquantity] =useState({})
    // console.log(quantitys);

    // const [user] =useAuthState(auth)
    const { description,name,images,price,supplierName,quantity} =service;
  

    // const [quantitys, setQuantity] = useState([]);
    // console.log(quantity);

    // const navigate = useNavigate();
  


    // const Handlequantiy = event => {
    //     event.preventDefault();
    //     const quantity ={
    //      quantiy : event.target.quantity.value 
    //     }
   
    //     axios.post('http://localhost:5000/quantity',quantity)
    //     .then(response =>{
    //         const {data} = response;
    //         if(data.insertedId){
    //             toast('Your quantity has been increased !!!');
    //             event.target.reset();
    //         }
    //     })
    // }
    const Updatequantiy = event => {
        event.event.preventDefault();
        const quantity = event.target.quantity;
        // const newQuantity =parseInt(quantity -1);
        // const items = {newQuantity}
        // console.log(Updatequantiy);
        // let updateItemQuantiy = parseFloat(+ quantity) + parseFloat(event.target.quantity.value)
        // let updateQuantiyItem = event.target.quantity.value;
        // const quantity =event.target.quantity.value;
        // onChange={(e)=> {setquantity(e.target.value)}}
        const newItem = {description,name,images,price,supplierName,quantity:quantity}
        // setQuantity(newItem)
    
        

        //  send data to the server
        const url = `http://localhost:5000/inventory/${inventoryId}`;
            fetch(url ,  {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newItem)
            })
            .then(res => res.json())
            .then (data => {
                console.log('success', data);
                alert('update succesfully');
              
            })

         
            
      


    }



    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <img className='w-100 p-1 rounded' src={images} alt="" />

                </div>
                <div className='col-12 col-lg-6 p2'>
                    <h3>{name} </h3>
                    <p> {description}</p>
                  
                    <h6>Price: {price}</h6>
                    <h6>Supplier : {supplierName}</h6>
                    <h4>quantity: {quantity} </h4>
                    <div>
                     <button  style={{background:'#03ab4f'}}>Deliverd</button>  <Link className='btn-manag' style={{background: '#04366b'}} to='/ManageInventory'>  Manage Inventories</Link>
                    </div>
                    <br/>
                   <Form onSubmit={Updatequantiy}>
                   <input placeholder='quantity' type="text" name='quantity' /> 
                   
                   <button className='ms-1' style={{background: '#00c7bd'}}> Restock</button>

                   </Form>
                    
                    

                  


                </div>


            </div>
        
       
        </div>
    );
};

export default Inventory;