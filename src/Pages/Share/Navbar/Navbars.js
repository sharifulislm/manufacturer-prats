import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useMyorder from '../../../Hooks/useMyorder';
import './navbar.css';

const Navbars = () => {
  const [order] =useMyorder([])
    const [user] = useAuthState(auth);
    const Logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
      };
    return (
        <div class="navbar bg-primary text-primary-content  mx-auto px-12 ">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl text-blod text-white">parts manufacturer</a>
        </div>
        <div class="flex-none gap-2 ">
        <div class="form-control text-center mx-0 sm:visible invisible">
            <input type="text" placeholder="Search anything" class="input pr-20 input-bordered" />
          </div>
      <div className='sm:visible invisible'>
      {user ?   
      // start condition profile and signOut and signin 
      <div class="dropdown dropdown-end">
   
          {
         user && <>
            <label tabindex="0" class="btn  btn-ghost btn-circle avatar">
       
       <div class="w-10  rounded-full sm:visible invisible">
         <img className='w-full' src={user?.photoURL} />
       </div>
     </label>
         </>
       }
 
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          
      <div className='m-auto '>  
      {
         user && <>
            <label tabindex="0" class="btn  btn-ghost btn-circle avatar">
       
       <div class="w-20  rounded-full sm:visible invisible m-auto">
         <img className='w-full' src={user?.photoURL} />
       </div>
     </label>
         </>
       }
      </div>
      {/* // start condition profile and signOut and signin  */}
      
        <li className=' '>
        <li className='font-bold'><Link to="/dashbord/Profiles">Dashboard</Link></li>
        </li>
        <li className=' ml-10 font-bold'>
                      <Link to="/dashbord/myorders">  My Orders <span class="indicator-item badge badge-secondary ">{order.length}</span> </Link></li>
        <li className='m-auto font-bold'><a onClick={Logout}>Logout</a></li>
      </ul>

    
          </div>
                  

                  :<Link className='text-bold text-xl ' to="/Login">Login</Link> }
      </div>

        
    
        </div>
      </div>
    );
};

export default Navbars;