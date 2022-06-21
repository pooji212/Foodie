import React from 'react'
import { useForm } from 'react-hook-form';
import { GrClose } from 'react-icons/gr'
import "./Login.css";
function Login() { 
  const {register,handleSubmit,formState : {errors}} = useForm();
  const onFormSubmit = (userData) => 
  {
    console.log(userData)
    // navigate('/home');
  }
  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit(onFormSubmit)}>
        <div className='d-flex justify-content-between'>
          <h3>Login</h3>
          <div className="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"><GrClose /></span>
          </div>
        </div>        

        <div className='form-group'>
          <input type="email" id="loginemail" className="form__input" autoComplete="off" placeholder=" " {...register("email", { required: "true" })} />
          <label htmlFor="loginemail" className="form__label">Email</label>
          {errors.email?.type === "required" && <span className='text-danger d-flex flex-start p-0'>*Email is required</span>}
        </div>

        <div className='form-group'>
          <input type="password" id="loginpassword" className="form__input" autoComplete="off" placeholder=" " {...register("password", { required: "true" })} />
          <label htmlFor="loginpasword" className="form__label">Password</label>
          {errors.password?.type === "required" && <span className='text-danger d-flex flex-start p-0'>*Password is required</span>}
        </div>

        <div className="mt-2">
          <span><a href='/'>Forgot Password?</a></span>
        </div>

        <div className='form-group'>
          <input type='submit' className='signupBtn btn btn-success' value='LOGIN' />
        </div>
      </form>
      <hr/>
      <div>New to Zomato? <span data-bs-toggle="modal" data-bs-target="#signupModal" className='create_acc'>Create Account</span></div>
    </div>
  )
}

export default Login

