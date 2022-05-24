import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Purchase = () => {
    const { id} = useParams();
const [service, setService]=useState([]);

useEffect(() => {
    fetch(`data.json${id}`)
    .then(res => res.json())
    .then(data => setService(data))
},[]);
    return (
        <div>
            <h1>tis is purchase {id}</h1>
            {
                service.map((services) =><h1>{services.name}</h1> )
            }
        </div>
    );
};

export default Purchase;