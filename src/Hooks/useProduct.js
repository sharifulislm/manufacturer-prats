import  { useEffect, useState } from 'react';

const useProduct = serviceId => {
    const[service,setService] =useState({})
    useEffect(() => {
        const url = `https://rocky-thicket-49136.herokuapp.com/purchase/${serviceId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setService(data));
    },[serviceId])
    return [service];
};

export default useProduct;