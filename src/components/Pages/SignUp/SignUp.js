import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Loading/Loading';
import './SignUp.css';
import Social from './Social/Social';


const SignUp = () => {

      
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [confirmpass,setConfirmpass]=useState('');
console.log(email,password,confirmpass);

let HendelError;
const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification:true});

const navigate = useNavigate()
const location = useLocation();
let from = location.state?.from?.pathname || "/";

  if (error) {
    console.log(error.message);
    HendelError = <div>
        <p className='text-danger'>Error:{error.message}</p>
        
      </div>
    
  }
  if (loading ) {
    return( <Loading></Loading>)
   
  }
  if(user) {
    toast('Sign up successful')
      return (navigate(from, { replace: true }));

      
  }
 
  const Handelemail = event => {
    const email = event.target.value;
    setEmail(email);
  }
  const HendelPass = event => {
      const password = event.target.value;
      setPassword(password);
  }
  const HandelConfirmPass = event => {
      const ConfiramPassword = event.target.value;
      setConfirmpass(ConfiramPassword);
  }
  




    const handleSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password)
      
        
      }



    return (
        <div className='container contaner-box'>
        <div className='row '>
      

         
            <div className='m-auto col-lg-5  col-10 from-box mt-3 mb-5'>
                <h4 className='text-center'>Create a New account</h4>

                <p className='text-center'>Please provide the following details.</p>
     <Form onSubmit={handleSubmit}> 
<p className=' input-dst'> Email Address</p>
<Form.Control onBlur={Handelemail} type="email"  placeholder="email" name='email' />

<p className='m-0 pt-2 pb-2 input-dst'>New Password </p>
<Form.Control onBlur={HendelPass} type="password" placeholder="New Password" />

<p className='m-0 pt-2 pb-2 input-dst'>Confirm New Password </p>
<Form.Control onBlur={HandelConfirmPass} type="password" placeholder="Confirm New Password" />
<br/>
{HendelError}
<Button  variant="primary w-50 mx-auto d-block mb-2" type="submit">
              SIGNUP
          </Button>
          <p className='text-center'>OR</p>
          <Social></Social>

        


        
<p className='text-center mb-5'>Already have an account? <small> <Link to='/Login'>Login</Link></small></p>
          
      </Form>
      </div>
      </div>
      </div>
    );
};

export default SignUp;