import React from 'react';

const Blog = () => {
    return (
        <div className='p-12 m-12'>

            <div className='text-center p-10 '>
                <h1 className='text-xl text-blue-600'>How will you improve the performance of a React Application?</h1>
<p>
Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. While this will lead to a faster user interface without specifically optimizing for performance for many cases, there are ways where you can still speed up your React application. This post will go over some useful techniques you can use to improve your React code.</p>

            </div>
            <div className='text-center p-10'>
                <h1  className='text-xl text-blue-600'> What are the different ways to manage a state in a React application?</h1>
                <p> Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose? (Local state
Global state
Server state
URL state)</p>

            </div>
            <div  className='text-center p-10'>
                <h1  className='text-xl text-blue-600'>How does prototypical inheritance work?</h1>
                <p>Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. </p>
            </div>
            <div  className='text-center p-10'>
                <h1  className='text-xl text-blue-600'>What is a unit test? Why should write unit tests?</h1>
                <p>In computer programming, unit testing is a software testing method by which individual units of source code—sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use</p>
            </div>
            
        </div>
    );
};

export default Blog;