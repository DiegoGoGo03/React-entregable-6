import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import './styles/register.css'

const Register = () => {

  const {handleSubmit, register, reset } = useForm()

  const submit = data => {
    useAuth('/users', data)
    reset({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      phone: "",
    })
  }

  return (
    <div className="register__container">
      <form onSubmit={handleSubmit(submit)} className="register__form">
        <h2>Register</h2>
        <div className="form__group">
          <label htmlFor="firstName">First Name</label>
          <input {...register('firstName')} id='firstName' type="text" />
        </div>
        <div className="form__group">
          <label htmlFor="lastName">Last Name</label>
          <input {...register('lastName')} id='lastName' type="text" />
        </div>
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input {...register('email')} id='email' type="email" />
        </div>
        <div className="form__group">
          <label htmlFor="password">Password</label>
          <input {...register('password')} id='password' type="password" />
        </div>
        <div className="form__group">
          <label htmlFor="phone">Phone</label>
          <input {...register('phone')} id='phone' type="number" />
        </div>
        <button className="form__submit">Submit</button>
      </form>
    </div>
  )
}

export default Register
