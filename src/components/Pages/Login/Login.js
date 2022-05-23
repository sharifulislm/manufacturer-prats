import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../../Loading/Loading';
import './Login.css';

const Login = () => {
    const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
console.log(email,password);

const navigate = useNavigate()
const location = useLocation();
let from = location.state?.from?.pathname || "/";

let HendelError;
const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth );

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if (error ||error1) {
        HendelError = <div>
            <p className='text-danger'>Error:{error?.message} {error1?.message}</p>
          </div>
        
      }
      if (loading || sending) {
        return( <Loading></Loading>)
       
      }
      if(user)
       {
        return (navigate(from, { replace: true }));
      }
     


      const Handelemail = event => {
        const email = event.target.value;
        setEmail(email);
      }
      const HendelPassword = event => {
          const password = event.target.value;
          setPassword(password);
        
      }
      
      const HandelLoginSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
      }

      






    return (
      <div className='container contaner-box'>
          <div className='row '>

              {/* <div className='box-from col-lg-6  col-12'> 
              
              </div> */}
              <div className='m-auto col-lg-4  col-10 from-box mt-5 mb-5'>
                  <p className='text-center'>Sign in with your existing account</p>
       <Form onSubmit={HandelLoginSubmit}> 
  <p className=' input-dst'> Email Address</p>
  <Form.Control onBlur={Handelemail} type="email"  placeholder="email" name='email' />

  <p className='m-0 pt-2 pb-2 input-dst'>Password       
  
   <button  onClick={async () => {
          if(email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
          }else{
            await sendPasswordResetEmail(email);
            toast('Please enter your email address');
          }
           }} className='forgot-btn'> Forgot your password?</button> </p>
  <Form.Control onBlur={HendelPassword} type="password" placeholder="Password" />
 <br/>
 {HendelError}

  <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                Login
            </Button>
            <p className='text-center'>OR</p>
          
<p className='text-center'>Don't have an account? <small><Link to='/SignUp'>Create Account</Link> </small></p>
            
        </Form>
        </div>
        </div>
        </div>
    );
};

export default Login;