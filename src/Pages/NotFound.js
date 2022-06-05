import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='Notfound hero min-h-screen'>

<Link to="/" className=' bg-black p-5 text-white text-3xl'> go back to home </Link>
            
        </div>
    );
};

export default NotFound;