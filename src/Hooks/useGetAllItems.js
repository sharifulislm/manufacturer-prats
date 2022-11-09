import { useEffect, useState } from 'react';

const useGetAllItems = () => {
    const [ service , setService] = useState([]);
    const [Loading,setLoading] = useState(true)
    // console.log(service);
    
    
    const fethItems = () => {
        fetch("http://localhost:5000/service")
    
        .then((res) => res.json())
        .then((data) => {
            setLoading(false);
         setService(data)
        
        })
    }    
    useEffect(() => {
        fethItems()
    
    } ,[])
    return [service,Loading]


};

export default useGetAllItems;