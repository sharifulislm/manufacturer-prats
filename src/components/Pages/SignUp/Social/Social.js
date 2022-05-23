import React from 'react';
import { Button } from 'react-bootstrap';
import './Social.css';
import { AiFillGoogleCircle } from "react-icons/ai";
import {  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const Social = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate()
const location = useLocation();
let HendelError;
let from = location.state?.from?.pathname || "/";

  if (error) {
    console.log(error)
    HendelError = <div>
        <p className='text-danger'>Error:{error.message}</p>
      </div>
    
  }
  if (loading ) {
   
   
  }
  if(user) {
    console.log(user);
    toast('Sign up successful')
    return (navigate(from, { replace: true }));
  }
 
  
    return (
        <div className='mb-2'>


<Button onClick={()=> signInWithGoogle ()} variant="socialicon w-50 mx-auto d-block mb-2" type="submit">
          <AiFillGoogleCircle></AiFillGoogleCircle>  Continue
          </Button>
            
        </div>
    );
};

export default Social;