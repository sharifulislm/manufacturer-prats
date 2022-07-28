import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './navbar.css';

const Navbars = () => {
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
      {user ?<button className=" " onClick={Logout} className="btn btn-ghost">Sign Out</button>
                  

                  :<Link className='text-bold text-xl ' to="/Login">Login</Link> }
      </div>

        
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

    
          </div>
        </div>
      </div>
    );
};

export default Navbars;