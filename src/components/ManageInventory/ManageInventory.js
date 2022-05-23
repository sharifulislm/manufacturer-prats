import React from 'react';
import { Link } from 'react-router-dom';
import UseProducts from '../../Hooks/UseProducts';


import ManageProdects from './ManageProdects';
import './Mangeprodects.css'

const ManageInventory = () => {
    // const [item, setItem] = useManage();
    const [products,setProducts] =UseProducts([])
    // const [servise, setServise]=useState([]);


    const handleRemoveProduct = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            console.log('deleting user with id, ',products.id);
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    console.log('deleted');
                    const remaining = products.filter(user => user._id !== id);
                    setProducts(remaining);
                }
            })
        }
    }

    return (
        <div className='prodect-contener container'>
          
         <div className='m-auto text-center mt-3'> <button className='add-btn btn-primary mx-auto'>  <Link  to='/AddItem'>Add new item</Link></button></div>
            
            {
               products.map((services) => <ManageProdects key={services._id} services={services} handleRemoveProduct={handleRemoveProduct} ></ManageProdects>)

            }
        </div>
    );
};

export default ManageInventory;