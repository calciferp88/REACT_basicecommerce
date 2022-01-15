import React from 'react';
// css
import './style.css';

// routing
import { NavLink } from 'react-router-dom';

function Pagenotfound() {
    return (
        <>
            <div className="notFound">
                <h1>404</h1>
                <h2>OOPS! Something is Misssing</h2>
                <p>The page you request could not be found. We're working on it</p>
                <h3>Go back<NavLink to='/' exact className='link'> Home</NavLink> ? </h3>
            </div>
        </>
    )
}

export default Pagenotfound;
