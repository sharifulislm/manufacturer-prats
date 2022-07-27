import React, { useEffect, useState } from 'react';
import ShowAllreveiw from './ShowAllreveiw';


const AllReveiw = () => {
    const [ reveiw , setReveiw] = useState([]);
    // console.log(service);
    
    useEffect(() => {
     fetch('https://rocky-thicket-49136.herokuapp.com/reviews')
     .then(res=> res.json())
     .then(data => setReveiw(data))
    
    
    
    } ,[])
    

    return (
        <div>
                <div><h1 className='text-5xl  m-auto text-center'>Reveiw</h1>
            <div className='m-auto w-64 mt-3 mb-2 h-1 bg-primary'></div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 '>
            {
                reveiw.map(reveiws=><ShowAllreveiw key={reveiws._id} reveiws={reveiws}></ShowAllreveiw>)
            }
            </div>
        </div>
    );
};

export default AllReveiw;