import  { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useMyorder =()=>{
    const [order,setOrder]=useState([]);
    const [user] = useAuthState(auth);
  
  useEffect(() => {
  if(user){
   fetch(`http://localhost:5000/orders?email=${user.email}`)
   .then(res => res.json())
   .then(data => setOrder(data));
  }
  },[user])
    return [order];
};

export default useMyorder;