import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Showmyitem from './Showmyitem';

const ManageMyItem = () => {
    const [user]= useAuthState(auth);
    const [myitem, setMyitem]=useState([]);

     useEffect(() => {

         const getItem = async() => {
             const email = user.email;
             const url = `http://localhost:5000/userItem?email=${email}`;
             const {data} = await axios.get(url);
             setMyitem(data);
         }
         getItem();

     } ,[user])
    return (
        <div className='Container container '>
        <div className='serviceName m-auto mt-5 mb-5'>
        <h1 className='text-center '> Welcome : {user.displayName}</h1>
        <h5 className='text-center'>You Have ( {myitem.length } ) Product </h5>
        <div className='aline-boxs w-50 mb-4'></div>
       
        </div>
        <div className='row d-flex justify-content-center'>
           {
                 myitem.map((item) => <Showmyitem key={item._id} item={item}></Showmyitem> )
             }
            
            </div>
        </div>
    );
};

export default ManageMyItem;