import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '.././../Pages/Share/Loading/Loading';
import { AiFillPhone } from "react-icons/ai";
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51L1to7J1QcFK6tYmFmB2qfZC7B6h2al8rpq63079ha9wiOjTGU9l44jAUq5pZQY3xgeUPYbEsGUVazIE1mt4DDIc00HHx0QNLa');
const Payment = () => {
    const{id} = useParams();
    const url = `https://rocky-thicket-49136.herokuapp.com/order/${id}`;
    const {data: order, isLoading} = useQuery(['order',id], () => fetch(url,{
        method: 'GET',
        headers:{
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      }).then(res => res.json()));
      if(isLoading){
         return <Loading></Loading>
      }

    return (
        <div className=' mx-auto'>
        <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div class="card-body">
                <p className="text-success font-bold">Hello, {order.name}</p>
                <h2 class="card-title"> address {order.address}</h2>
                <p>Your Total Payment Please pay: ${order.price}</p>
                <p>Phone:<AiFillPhone></AiFillPhone> {order.phone}</p>
            </div>
        </div>
        <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div class="card-body">
             <Elements stripe={stripePromise}>
                 <CheckoutForm order={order}/>
            </Elements>
            </div>
        </div>
    </div>
    );
};

export default Payment;