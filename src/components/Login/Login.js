import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './Login.css'
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase.init';
const Login = () => {
    const [userEmail, setuserEmail] = useState('');
    const [userPassword, setuserPassword] = useState('');
    const [ErrorMessage, setErrorMessage] = useState('');
    const [SuccessMessage, setSuccessMessage] = useState('');

    const userLoginHandler = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then((result) => {
                if (!result.user.emailVerified) {
                    setErrorMessage("Your account is not verified. please verified")
                }
                else {
                    setSuccessMessage("you are successfully logged in")

                }
            })
            .catch(error => {
                console.log(error.message)
            })


    }
    const forgetPassHandler = () => {
        sendPasswordResetEmail(auth,userEmail)
        .then(()=>{
            setSuccessMessage("Password reset email sent!")

        })
        .catch(error =>{
            setErrorMessage('Something went wrong')

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
                                    <h3>Welcome</h3>
                                    <p>Please login to continue</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 bg-white">
                            <div className='p-4'>
                                <div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h3>Login</h3>
                                        <Link className='nav-link' to='/register'>

                                            <FontAwesomeIcon className='new-account-link me-1' icon={faArrowRight} />
                                            <span className='new-account-link'>Create a new account</span>
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
                                        <small >Or Login with email</small>
                                    </p>
                                    <div>
                                        <Form onSubmit={userLoginHandler}>
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
                                                ErrorMessage ? <p className='text-danger'>{ErrorMessage}</p> : <p className='text-primary'>{SuccessMessage}</p>
                                            }
                                            <div className='d-flex justify-content-between'>
                                                <Button size='sm' variant="primary" type="submit">
                                                    Sign In
                                                </Button>
                                                <button onClick={forgetPassHandler} className='btn btn-link text-decoration-none'><small>Forgot Password..?</small></button>
                                            </div>
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

export default Login;