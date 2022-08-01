import React from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../Hooks/useUsers';
import Dashboard from './Dashboard';
import photo from '../Imge/download (3).jfif';
import './profile.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import UpdateProfile from './UpdateProfile';

const Profile = () => {
  const[users]=useUsers([]);
  const [user] = useAuthState(auth);
  const EmptySpace = <small className=''>Empty Space</small>;
  
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
    <img src={user.photoURL|| a?.photoURL ||photo} />
  </div>
</div>

        </figure>
        <div class="card-body">
        <label for="my-modal-7" class="text-center text-blue-700 font-bold">Update Profile 
  
        </label>
        <input type="checkbox" id="my-modal-7" class="modal-toggle" />
        <UpdateProfile></UpdateProfile>

        <small className='text-center'>{a.EditBio}</small>
        <div class="overflow-x-auto">
  <table class="table w-full">
 

    <tbody>
  
      <tr>
 
      <td></td>
   
      </tr>
      <tr >
 
        <td className='border text-xl'><small className='font-bold text-xl'>Name:</small>  {a.name ||EmptySpace}</td>
        <td className='border text-xl'><small className='font-bold text-xl'>Education: </small> {a.education ||EmptySpace}</td>
   
      </tr>

      <tr>
     
     

      </tr>
 
      <tr >
      <td className='border text-xl'><small className='font-bold text-xl'>email:</small> {a.email ||EmptySpace}</td>
      <td className='border text-xl'><small className='font-bold text-xl'>role: </small>  {a.role ||EmptySpace}</td>
        
      </tr>
      <tr >
      <td className='border text-xl'><small className='font-bold text-xl'>University:</small> {a.University ||EmptySpace}</td>
      <td className='border text-xl'><small className='font-bold text-xl'>Profession: </small>  {a.Profession || EmptySpace}</td>
        
      </tr>
      <tr className='border'>
      <div className='h-auto p-4 text-xl' >
     {a.about||EmptySpace}
      </div>
        
      </tr>
      <tr>
        <td>
     
        </td>
      </tr>
   
    </tbody>
  </table>
 
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