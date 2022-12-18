import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Path } from '../../utils/apiService';
import usePostApi from '../../utils/usePostApi';
import { useSelector } from 'react-redux';
import { token } from '../../utils/config';
import { useRouter } from 'next/router';
import Loader from '../Common/Loader';

const ChangePassword = ({ showPasswordModal, setShowPasswordModal }) => {
  const [errorMsg, setErrorMsg] = useState([]);
  const [sucessMsg, setSucessMsg] = useState([]);
  const router = useRouter();
  const userDetails = useSelector((state) => state.user.userDetails);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {
    isLoading: changePasswordApiLoading,
    error: changePasswordApiError,
    data: changePasswordApiData,
    sendHTTPPostRequest: changePasswordApi,
  } = usePostApi();

  const successHandler = (data) => {
    setSucessMsg('Password Change Sucessfully');
    setErrorMsg(null);
    setTimeout(function () {
      setShowPasswordModal(false);
    }, 2000);
  };

  const errorHandler = (error) => {
    if (error) {
      setErrorMsg(error.response.data.error.message);
      setSucessMsg(null);
    }
  };

  const handleClose = () => {
    setShowPasswordModal(false);
  };

  const onSubmit = (item) => {
    changePasswordApi(
      Path.changePassword,
      item,
      userDetails.jwt,
      successHandler,
      errorHandler
    );
  };
  return (
    <>
      <div
        className={`reveal-overlay ${
          showPasswordModal ? 'fade-in mui-enter mui-enter-active' : ''
        }`}
        style={{ display: `${showPasswordModal ? 'block' : 'none'}` }}
      >
        <div
          className={`reveal bounce-in-out ${
            showPasswordModal ? 'scale-in-up mui-enter mui-enter-active' : ''
          }`}
          id="chg-pass-form"
          data-reveal
          data-close-on-click="true"
          data-animation-in="scale-in-up"
          data-animation-out="scale-out-down"
          style={{ display: `${showPasswordModal ? 'block' : 'none'}` }}
        >
          <div className="large-12 columns">
            <div className="pass-form_tit-container">
              <h4>Password Settings</h4>
              <span>Change Old Password</span>
            </div>
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

            <p
              style={{
                display: 'flex',
                justifyContent: 'center',
                color: 'green',
                marginTop: '10px',
                marginBottom: 0,
              }}
            >
              {sucessMsg}
            </p>
            <div className="large-12 columns mar_top_10">
              <label>
                Current Password
                <input
                  type="password"
                  placeholder="Password"
                  {...register('currentPassword', {
                    required: true,
                    minLength: {
                      value: 6,
                      message: 'Password minimum be 6 digits',
                    },
                  })}
                />
                {errors.currentPassword &&
                  errors.currentPassword.type === 'required' && (
                    <p className="error-message">This field is required</p>
                  )}
                {errors.currentPassword &&
                  errors.currentPassword.type === 'minLength' && (
                    <p className="error-message">
                      {errors.currentPassword?.message}
                    </p>
                  )}
              </label>
              <label>
                New password
                <span>(Please Enter Your New Password- min 6 chars)</span>
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
                {errors.password && errors.password.type === 'required' && (
                  <p className="error-message">This field is required</p>
                )}
                {errors.password && errors.password.type === 'minLength' && (
                  <p className="error-message">{errors.password?.message}</p>
                )}
              </label>
              <label>
                Re-Type Password<span>(Re-Type Your New Password)</span>
                <input
                  type="password"
                  placeholder="Password"
                  {...register('passwordConfirmation', {
                    required: true,
                    minLength: {
                      value: 6,
                      message: 'Password minimum be 6 digits',
                    },
                  })}
                />
                {errors.passwordConfirmation &&
                  errors.passwordConfirmation.type === 'required' && (
                    <p className="error-message">This field is required</p>
                  )}
                {errors.passwordConfirmation &&
                  errors.passwordConfirmation.type === 'minLength' && (
                    <p className="error-message">
                      {errors.passwordConfirmation?.message}
                    </p>
                  )}
              </label>

              <button className="green_button_full" type="submit">
                {changePasswordApiData?.user.confirmed ? <Loader /> : 'Update'}
              </button>
            </div>
          </form>

          <button
            className="close-button"
            data-close
            aria-label="Close reveal"
            type="button"
            onClick={handleClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
