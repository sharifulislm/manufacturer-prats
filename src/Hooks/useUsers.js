import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useUsers = () => {
    const [users,setUsers]=useState([]);
    const [user] = useAuthState(auth);
    const [isLoading,setLoading]=useState(false);

  
  useEffect(() => {
  if(user){
   fetch(`http://localhost:5000/users?email=${user.email}`)
   .then(res => res.json())
   .then(data =>{
    setLoading(true);
    setUsers(data)
 
   });
  }
  },[user])
    return [users,isLoading];
};

export default useUsers;