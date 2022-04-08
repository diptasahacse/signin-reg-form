import React from 'react';
import NavBar from '../NavBar/NavBar';

const Header = ({userPresent,registerUserHandler}) => {
    return (
        <div>
            <NavBar registerUserHandler={registerUserHandler} userPresent={userPresent}></NavBar>
            
        </div>
    );
};

export default Header;