import  { useEffect, useState } from 'react';

const useInventory = inventoryId => {
    const [service, setService] = useState({});
   

    useEffect( () =>{
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setService(data));

    }, [inventoryId]);
    return [service]
}
export default useInventory;