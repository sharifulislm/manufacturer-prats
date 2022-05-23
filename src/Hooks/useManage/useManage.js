import  { useEffect, useState } from 'react';

const useManage = () => {
    const [item, setItem] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/myitem')
        .then(res => res.json())
        .then(data => setItem(data));
        
    }, []);

    return [item,setItem];
};

export default useManage;