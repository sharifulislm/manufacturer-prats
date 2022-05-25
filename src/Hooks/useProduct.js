import  { useEffect, useState } from 'react';

const useProduct = serviceId => {
    const[service,setService] =useState({})
    useEffect(() => {
        const url = `http://localhost:5000/purchase/${serviceId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setService(data));
    },[serviceId])
    return [service];
};

export default useProduct;