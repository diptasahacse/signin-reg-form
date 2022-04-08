import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NormalNavLink from '../NormalNavLink/NormalNavLink';
import UserNavLink from '../UserNavLink/UserNavLink';

const NavBar = ({userPresent}) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/exercise'>MCQ Exercise</Link>
                        {
                            userPresent ? <UserNavLink ></UserNavLink> : <NormalNavLink></NormalNavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;