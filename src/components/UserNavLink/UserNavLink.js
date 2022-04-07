import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../../images/user2.jpg'
import './UserNavLink.css'
const UserNavLink = () => {
    return (
        <>
            <Link className='nav-link' to='/about'>Test</Link>
            <img className='profile-img' src={profileImg} alt="" />
        </>
    );
};

export default UserNavLink;