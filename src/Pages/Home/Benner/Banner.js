import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <>
        <div class="hero min-h-screen banner-box">
        <div class="hero-overlay "></div>
        <div class="hero-content text-center text-white">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">NEW TECHNOLOGY AND BUILD</h1>
            <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      </>
    );
};

export default Banner;