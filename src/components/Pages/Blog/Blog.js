import React from 'react';

const Blog = () => {
    return (
        <div className='container p-3'>
            <div className='content-box'>
                <h1 className='text-center mt-3'> Difference between javascript and nodejs </h1>
                <p className='text-center'> JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use. </p>
            </div>
            <div className='content-box'>
                <h4 className='text-center mt-3'>When should you use nodejs and when should you use mongodb </h4>
                <p className='text-center'> MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias.

NodeJS's responsibilty is especially to execute your application. </p>
            </div>
            <div className='content-box'>
                <h1 className='text-center mt-3'>Differences between sql and nosql databases. </h1>
                <p className='text-center'>
Difference between SQL and NoSQL
Prerequisites – SQL, NoSQL 
When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision. </p>
            </div>
            <div className='content-box'>
                <h1 className='text-center mt-3'>What is the purpose of jwt and how does it work </h1>
                <p className='text-center'>
                
JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.. </p>
            </div>
            
        </div>
    );
};

export default Blog;