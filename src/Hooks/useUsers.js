import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useUsers = () => {
    const [users,setUsers]=useState([]);
    const [user] = useAuthState(auth);
  
  useEffect(() => {
  if(user){
   fetch(`http://localhost:5000/users?email=${user.email}`)
   .then(res => res.json())
   .then(data => setUsers(data));
  }
  },[user])
    return [users];
};

export default useUsers;