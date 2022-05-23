import React from 'react';
import useManage from '../../../Hooks/useManage/useManage';
import MangeProduct from './MangeProduct';

const ManageItem = () => {
    const [item, setItem] = useManage();
    
    return (
        <div className='Container container '>
        <div className='serviceName m-auto mt-5 mb-5'>
        <h1 className='text-center '> Product IC</h1>
        <div className='aline-boxs mb-4'></div>
       
        </div>
        <div className='row d-flex justify-content-center'>
               {
                item.slice(0, 4).map((product) => <MangeProduct key={product._id} product={product}></MangeProduct> )

            }
        </div>
        </div>
    );
};

export default ManageItem;