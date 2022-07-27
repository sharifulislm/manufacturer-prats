import React from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../Hooks/useUsers';
import Dashboard from './Dashboard';
import './profile.css';

const Profile = () => {
  const[users]=useUsers([]);
  
  
    // const{photoURL,name,email,education,about}=user;
    // console.log(name);
    return (

 <div>
        {
        users.map((a, index) => 
        
          
        <div class="card mt-10 w-9/12 m-auto bg-base-100 shadow-xl">
        <figure>
        <div class="avatar">
  <div class="w-36 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={a?.photoURL || a?.photoURLs} />
  </div>
</div>

        </figure>
        <div class="card-body">
     
        <Link className='text-center text-blue-700 font-bold' to="/dashbord/myprofile">Update Profile  </Link>
        <small className='text-center'>{a.EditBio}</small>
        <div class="overflow-x-auto">
  <table class="table w-full">
 

    <tbody>
  
      <tr>
 
      <td></td>
   
      </tr>
      <tr>
 
        <td>Name: {a.name}</td>
   
      </tr>

      <tr>
     
        <td>education:{a.education}</td>

      </tr>
 
      <tr>
      <td>email: {a.email}</td>
        
      </tr>
      <tr>
      <td></td>
        
      </tr>
   
    </tbody>
  </table>
  <h5>about {a.about}</h5>
</div>
          <div className="dispaly-none"> 
          <Dashboard  key={a._id} a={a}></Dashboard>
             </div>
         
          <div class="card-actions justify-end">
          
          </div>
        </div>
      </div>

        )
      }
 </div>

    );
};

export default Profile;