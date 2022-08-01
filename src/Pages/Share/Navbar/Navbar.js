
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './navbar.css';


const Navbar = () => {
  const [user] = useAuthState(auth);
  
  const Logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };



  const menuItems = <> 
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/AllReveiw">Review</Link></li>
              <li><Link to="/contact">Contact</Link></li>
        
              <li><Link to="/dashbord/Profiles">Dashboard</Link></li>
             
              {/* {
                user &&   
              } */}
              <li className='mr-5 text-blod btn btn-ghost visible sm:invisible'> {user ?<button className="" onClick={Logout} className="btn btn-ghost">Sign Out</button>
                  

              :<Link className='text-bold ' to="/Login">Login</Link> }</li>
  </>


    return (
        <div className="navbar bg-base-100 sticky text-bold p-0 ">
          
        <div className="navbar">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 font-bold text-xl rounded-box w-52">
                  {menuItems}
            </ul>
    
          </div>
          <a className="btn btn-ghost normal-case text-xl"></a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-bold text-xl">
           {menuItems}

          </ul>
 
          
    
        </div>
        <div className='navbar-end'>
        <label tabindex="0" for="my-drawer-2" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
     
        </div>
       
      </div>
    );
};

export default Navbar;