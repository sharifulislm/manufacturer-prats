import React from 'react';
// import { toast } from 'react-toastify';

const Modal = ({service,setService,}) => {
    const {name,_id}=service;

    const hendleDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            console.log('deleting user with id, ', id);
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                  'content-type': 'application/json',
                
                  authorization: `Bearer ${localStorage.getItem('accessToken')}`
              },
             
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    console.log('deleted');
                    const remaining = service.filter(user => user._id !== id);
                    setService(remaining);
                }
            })
        }
    }

    // const hendleDelete = (_id) => {
    //     fetch(`http://localhost:5000/service/${_id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //     .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.deletedCount) {
    //                 console.log(data);
    //                 toast.success(`products: ${name} is deleted.`)
    //                 setDeleteingProducts(null)
    //                 refetch();
    //             }
    //         })
    // }

    return (
        <div>
        <input type="checkbox" id="deletemodal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Are you sure you want to delete {name} </h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div class="modal-action">
            <button onClick={()=> hendleDelete(_id)} class="btn btn-xs btn-error">Delete</button>
              <label for="deletemodal" class="btn btn-xs">cancel</label>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Modal;