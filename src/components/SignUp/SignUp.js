import React from 'react'
import { useForm } from 'react-hook-form'
import '../Login/Login.css'
import { GrClose } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onFormSubmit = (userData) => {
        console.log(userData)
        // navigate('/home');
    }
    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="d-flex justify-content-between">
                    <h3>Sign Up</h3>
                    <div className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <GrClose />
                        </span>
                    </div>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="signupfullname"
                        className="form__input"
                        autoComplete="off"
                        placeholder=" "
                        {...register('fullName', { required: 'true' })}
                    />
                    <label htmlFor="signupfullname" className="form__label">
                        Full Name
                    </label>
                    {errors.fullName?.type === 'required' && (
                        <span className="text-danger d-flex flex-start p-0">
                            *Name is required
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        id="signupemail"
                        className="form__input"
                        autoComplete="off"
                        placeholder=" "
                        {...register('email', { required: 'true' })}
                    />
                    <label htmlFor="signupemail" className="form__label">
                        Email
                    </label>
                    {errors.email?.type === 'required' && (
                        <span className="text-danger d-flex flex-start p-0">
                            *Email is required
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        id="signuppassword"
                        className="form__input"
                        autoComplete="off"
                        placeholder=" "
                        {...register('password', { required: 'true' })}
                    />
                    <label htmlFor="signuppasword" className="form__label">
                        Password
                    </label>
                    {errors.password?.type === 'required' && (
                        <span className="text-danger d-flex flex-start p-0">
                            *Password is required
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            {...register('agree', { required: 'true' })}
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                            <small>
                                I agree Zomato's{' '}
                                <span
                                    onClick={() => navigate('/policies/general/terms-of-service')}
                                    data-bs-dismiss="modal"
                                    className="terms"
                                >
                                    Terms of Service
                                </span>
                                , <span onClick={() => navigate('/policies/general/privacy-policy')}
                                    data-bs-dismiss="modal"
                                    className="terms">Privacy Policy</span> and{' '}
                                <span onClick={() => navigate('/policies')}
                                    data-bs-dismiss="modal"
                                    className="terms">Content Policies</span>
                            </small>
                        </label>
                        {errors.agree?.type === 'required' && (
                            <span className="text-danger d-flex flex-start p-0">
                                *Agree terms and conditions
                            </span>
                        )}
                    </div>
                </div>

                <div className="form-group">
                    <input
                        type="submit"
                        className="signupBtn btn btn-success"
                        value="Create Account"
                    />
                </div>
            </form>
            <hr />
            <div>
                Already Have an Account?{' '}
                <span
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    className="create_acc"
                >
                    Login
                </span>
            </div>
        </div>
    )
}

export default SignUp
