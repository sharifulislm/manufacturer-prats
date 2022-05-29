import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import useMyorder from '../Hooks/useMyorder';



const Dashboard = () => {
  const [user] = useAuthState(auth);

  const [order] =useMyorder([])
  const [admin] = useAdmin(user)

    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          {/* <!-- Page content here --> */}
         
 
         
          <Outlet></Outlet>
       
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
           
            <li><Link to="/dashbord/Profiles">Profile 
          
<div class="avatar pl-1">
  <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={user.photoURL} />
  </div>
  </div></Link></li>
            {/* <li><Link to="/dashbord/myorders">My Orders <span className='text-blue-500'>({order.length})</span></Link></li> */}
            <li><div class="indicator">
  <span class="indicator-item badge badge-secondary mt-6 pl-1">{order.length}</span> 
  <Link to="/dashbord/myorders">My Orders</Link>
</div></li>
            <li><Link to="/dashbord/addreview">Add Reviews</Link></li>
            
       {
         admin && 
         <>
         <li><Link to="/dashbord/makeadmin">Make Admin {admin.length}</Link></li>
         <li><Link to="/dashbord/addproduct">add product {admin.length}</Link></li>
         <li><Link to="/dashbord/manageorder">Manage Orders {admin.length}</Link></li>
         <li><Link to="/dashbord/ManageProducts">Manage Products {admin.length}</Link></li>
        
        </>
       }
          </ul>
        
        </div>
        <div>
        
        </div>
      </div>
    );
};

export default Dashboard;