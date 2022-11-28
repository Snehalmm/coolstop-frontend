import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Path } from '../../utils/apiService';
import usePostApi from '../../utils/usePostApi';
import { useRouter } from 'next/router';

const login = () => {
  const [errorMsg, setErrorMsg] = useState([]);
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {
    isLoading: loginLoading,
    error: loginError,
    data: loginData,
    sendHTTPPostRequest: loginApi,
  } = usePostApi();

  const successHandler = (data) => {
    if (data.jwt.length > 0 && data.user) {
      localStorage.setItem('userDetails', JSON.stringify(data));
      router.push('/');
    }
  };

  const errorHandler = (error) => {
    if (error) {
      setErrorMsg(error.response.data.error.message);
    }
  };

  const onSubmit = (item) => {
    loginApi(Path.login, item, successHandler, errorHandler);
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Login Form</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p
              style={{
                display: 'flex',
                justifyContent: 'center',
                color: 'red',
                marginTop: '10px',
                marginBottom: 0,
              }}
            >
              {errorMsg}
            </p>
            <div className="row">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Email or Phone"
                {...register('identifier', {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
            </div>
            {errors.identifier && errors.identifier.type === 'required' && (
              <p className="error-message">This field is required</p>
            )}

            {errors.identifier && errors.identifier.type === 'pattern' && (
              <p className="error-message">Please write a valid email</p>
            )}

            <div className="row">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                {...register('password', {
                  required: true,
                  minLength: {
                    value: 6,
                    message: 'Password minimum be 6 digits',
                  },
                })}
              />
            </div>
            {errors.password && errors.password.type === 'required' && (
              <p className="error-message">This field is required</p>
            )}

            {errors.password && errors.password.type === 'minLength' && (
              <p className="error-message">{errors.password?.message}</p>
            )}

            <div className="pass">
              <Link href="forgot-password">Forgot password? </Link>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className="button" type="submit">
                Login
              </button>
            </div>

            <div className="signup-link">
              Not a member? <Link href="/register"> Signup now</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default login;
