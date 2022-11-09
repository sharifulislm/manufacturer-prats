import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Pages/Share/Loading/Loading';
import Allusers from './Allusers';

const Makeadmin = () => {
    const{data: users,isLoading,refetch} =useQuery('users', () => fetch('http://localhost:5000/user',{
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
        <h2 className='text-2xl'> aLL USERS {users?.length} </h2>

        <div class="overflow-x-auto">
<table class="table w-full">

<thead>
  <tr>
    <th></th>
    <th>Name</th>
    <th>Job</th>
    <th>Favorite Color</th>
  </tr>
</thead>
<tbody>
{
users?.map(user => <Allusers key={user._id} user={user} refetch={refetch}></Allusers>)
}
 

</tbody>
</table>
</div>
        
    </div>
    );
};

export default Makeadmin;