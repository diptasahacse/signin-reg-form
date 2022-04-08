import React from 'react';
import NavBar from '../NavBar/NavBar';

const Header = ({userPresent}) => {
    return (
        <div>
            <NavBar userPresent={userPresent}></NavBar>
            
        </div>
    );
};

export default Header;