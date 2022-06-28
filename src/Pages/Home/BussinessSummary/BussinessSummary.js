import React from 'react';
import { FcBusinessman } from "react-icons/fc";
import { GrPerformance } from "react-icons/gr";
import { RiMotorbikeFill } from "react-icons/ri";
import './Bussiness.css';

const BussinessSummary = () => {
    return (


    <div className='mb-20'>
      <div className='text-center text-6xl text-black mb-20 '>
      <p className='text-xl'>BUSINESS SUMMARY </p>
        <h1 className='text-5xl'>Executive summary Of <br></br>the Business Plan</h1>
        {/* <h5 >TRY TO UNDERSTAND USERS EXPECTATION</h5> */}
      </div>
      
      <div class="stats mx-auto text-center m-auto stats-vertical lg:stats-horizontal shadow w-11/12">
  
      <div class="stat text-center">
      <div class="stat-figure text-secondary">
      <RiMotorbikeFill></RiMotorbikeFill>
    </div>
        <div class="stat-title">STOCK</div>
        <div class="stat-value">31K</div>
        <div class="stat-desc">Parts in stock</div>
      </div>
      
      <div class="stat">
      <div class="stat-figure text-secondary">
   <FcBusinessman></FcBusinessman>
    </div>
        <div class="stat-title">CUSTOMERS</div>
        <div class="stat-value">4,200</div>
        <div class="stat-desc">Happy Customers </div>
      </div>
      
      <div class="stat">
      <div class="stat-figure text-secondary">
     <GrPerformance></GrPerformance>
    </div>
        <div class="stat-title">New Registers</div>
        <div class="stat-value">1,200</div>
        <div class="stat-desc">↘︎ 90 (14%)</div>
      </div>
      
    </div>
    </div>
    );
};

export default BussinessSummary;