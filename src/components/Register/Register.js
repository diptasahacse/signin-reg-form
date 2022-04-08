import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import auth from '../../firebase.init'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

const Register = () => {
    const [name, setName] = useState('');
    const [userEmail, setuserEmail] = useState('');
    const [userPassword, setuserPassword] = useState('');
    const [successMessage, setsuccessMessage] = useState('');
    
    const navigate = useNavigate()
    const userRegisterHandler = (event) => {
        event.preventDefault();

        createUserWithEmailAndPassword(auth, userEmail, userPassword)
            .then((result) => {
                sendEmailVerification(auth.currentUser)
                .then(()=>{
                    setsuccessMessage('Verification email sent to your  email. please verify It.')
                });
            })
            .catch(error => {
                console.log("Something went wrong")
            })


    }
    const userEmailHandler = (event) => {
        setuserEmail(event.target.value)


    }
    const userPasswordHandler = (event) => {
        setuserPassword(event.target.value)


    }
    return (
        <div className='login-form vh-100'>
            <div className="container">
                <div className='shadow login-container-box overflow-hidden'>
                    <div className="row">
                        <div className="col-md-4">
                            <div className='p-4 h-100 d-flex justify-content-center align-items-center'>
                                <div className='text-light'>
                                    <h3>Nice to meet you :)</h3>
                                    <p>Just register to join with us</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 bg-white">
                            <div className='p-4'>
                                <div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h3>Register</h3>
                                        <Link className='nav-link' to='/login'>

                                            <FontAwesomeIcon className='new-account-link me-1' icon={faArrowRight} />
                                            <span className='new-account-link'>Already Have Account..?</span>
                                        </Link>
                                    </div>
                                    <div className='d-flex justify-content-around my-3'>
                                        <button className='btn btn-primary rounded-pill btn-sm'>
                                            <span>Facebook</span>
                                        </button>
                                        <button className='btn btn-secondary rounded-pill btn-sm'>
                                            <span>Github</span>
                                        </button>
                                        <button className='btn btn-danger rounded-pill btn-sm'>
                                            <span>Google</span>
                                        </button>

                                    </div>
                                    <p className='text-center'>
                                        <small >Or Register with email</small>
                                    </p>
                                    <div>
                                        <Form onSubmit={userRegisterHandler}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Full Name"

                                                >
                                                    <Form.Control type="text" placeholder="Full Name" />
                                                </FloatingLabel>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Email address"

                                                >
                                                    <Form.Control onBlur={userEmailHandler} type="email" placeholder="name@example.com" />
                                                </FloatingLabel>
                                                <Form.Text className="text-muted">
                                                    We'll never share your email with anyone else.
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Password"

                                                >
                                                    <Form.Control onBlur={userPasswordHandler} type="password" placeholder="Password" />
                                                </FloatingLabel>
                                            </Form.Group>
                                            {
                                                successMessage ? <p className='text-success'>{successMessage}</p> : ""
                                            }
                                            <Button size='sm' variant="primary" type="submit">
                                                Register
                                            </Button>
                                        </Form>
                                    </div>

                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Register;