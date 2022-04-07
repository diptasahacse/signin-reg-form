import React from 'react';
import { Link } from 'react-router-dom';

const NormalNavLink = () => {
    return (
        <>
            <Link className='nav-link' to='/about'>About Us</Link>
            <Link className='btn btn-outline-primary rounded-pill btn-sm' to='/login'>Login</Link>
            <Link className='btn btn-danger rounded-pill btn-sm ms-2' to='/register'>Register</Link>
        </>
    );
};

export default NormalNavLink;