import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import usePostApi from '../../utils/usePostApi';
import { Path } from '../../utils/apiService';
import { useRouter } from 'next/router';
import Loader from '../Common/Loader';

const ForgotPasswordFrom = () => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    isLoading: forgotPasswordLoading,
    error: forgotPasswordError,
    data: forgotPasswordData,
    sendHTTPPostRequest: forgotPasswordApi,
  } = usePostApi();

  const successHandler = (data) => {
    if (data.ok) {
      router.push('/reset-password');
    }
  };

  const errorHandler = (error) => {
    if (error) {
      setErrorMsg(error.response.data.error.message);
    }
  };

  const onSubmit = (item) => {
    forgotPasswordApi(Path.forgotPassword, item, successHandler, errorHandler);
  };

  return (
    <>
      <div className="form-container">
        <div className="wrapper">
          <div className="title title-login ">
            <span>Forgot your password?</span>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="description">Enter your email recover your account</p>

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
              <input
                placeholder="email"
                type="text"
                {...register('email', {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
            </div>

            {errors.email && errors.email.type === 'required' && (
              <p className="message message--error">This field is required</p>
            )}

            {errors.email && errors.email.type === 'pattern' && (
              <p className="message message--error">
                Please write a valid email
              </p>
            )}

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className="button" type="submit">
                {forgotPasswordData ? <Loader /> : 'Submit'}
              </button>
            </div>
            <div className="signup-link">
              <Link href="/register"> Login</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordFrom;
