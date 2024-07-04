import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import './styles/login.css'

const Login = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  const { handleSubmit, register, reset } = useForm();

  const submit = async (data) => {
    await useAuth('/users/login', data);
    reset({
      email: '',
      password: '',
    });
    setToken(localStorage.getItem('token'));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken();
  };

  return (
    <div className='login-container'>
      {token ? (
        <button className='logout-button' onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <div className='login-form-container'>
          <h2>Welcome! Enter your email and password to continue</h2>
          <div className='login-test-data'>
            <h3>Test data</h3>
            <p>
              <i className='fas fa-envelope'></i> john@gmail.com
            </p>
            <p>
              <i className='fas fa-lock'></i> john1234
            </p>
          </div>
          <form className='login-form' onSubmit={handleSubmit(submit)}>
            <div className='login-input-group'>
              <label htmlFor='email'>Email</label>
              <input {...register('email')} id='email' type='email' />
            </div>
            <div className='login-input-group'>
              <label htmlFor='password'>Password</label>
              <input {...register('password')} id='password' type='password' />
            </div>
            <button className='login-button'>Login</button>
          </form>
          <p>
            Don't have an account? <Link to='/register'>Sign up</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
