import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Path } from "../../utils/apiService";
import usePostApi from "../../utils/usePostApi";
import useGetApi from "../../utils/useGetApi";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../stores/slices/userSlice";
import { token } from "../../utils/config";
import Loader from "../Common/Loader";
import {
  saveToStorage,
  getFromStorage,
  deleteFromStorage,
} from "../../utils/storage";
import { BiLockOpenAlt } from "react-icons/Bi";

const login = () => {
  const [errorMsg, setErrorMsg] = useState([]);
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const userDetails = useSelector((state) => state.user.userDetails);

  const dispatch = useDispatch();
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

  const cartItems = useSelector((state) => {
    return state.cart.items;
  });

  const successHandler = (data) => {
    if (router.query.name == "checkout") {
      setUserData(data);
      router.push("/checkout");
      saveToStorage("userDetails", data);
      dispatch(userActions.adduser(data));
    } else {
      setUserData(data);
      saveToStorage("userDetails", data);
      dispatch(userActions.adduser(data));
      router.push("/my-account");
    }
  };
  // const onSuccessHandler = (data) => {
  //   if (data) {
  //     let userObject = { ...userData };
  //     userObject["user"] = data;
  //     saveToStorage("userDetails", userObject);
  //     dispatch(userActions.adduser(userObject));
  //   }
  // };

  const errorHandler = (error) => {
    if (error) {
      setErrorMsg(error.response.data.error.message);
    }
  };

  const onSubmit = (item) => {
    loginApi(Path.login, item, token, successHandler, errorHandler);
  };

  // const {
  //   isLoading: userDataLoading,
  //   error: userDataError,
  //   data: userDatadata,
  //   sendHTTPGetRequest: userDataApi,
  // } = useGetApi();

  // // Function that invokes API call

  // useEffect(() => {
  //   userDataApi(
  //     `/api/users/${userData?.user?.id}?populate=*`,
  //     userData?.jwt,
  //     onSuccessHandler
  //   );
  // }, [userData]);

  return (
    <>
      <div className="form-container">
        <div className="wrapper">
          <div className="title title-login">
            <span>Login Form</span>
          </div>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              color: "red",
              marginTop: "10px",
              marginBottom: 0,
            }}
          >
            {errorMsg}
          </span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              className="row"
              style={{
                margin: "10px 0",
              }}
            >
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                placeholder="Email "
                autocomplete="off"
                {...register("identifier", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
            </div>
            {errors.identifier && errors.identifier.type === "required" && (
              <p className="error-message">This field is required</p>
            )}

            {errors.identifier && errors.identifier.type === "pattern" && (
              <p className="error-message">Please write a valid email</p>
            )}

            <div
              className="row"
              style={{
                margin: "10px 0",
              }}
            >
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                autocomplete="off"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Password minimum be 6 digits",
                  },
                })}
              />
            </div>
            {errors.password && errors.password.type === "required" && (
              <p className="error-message">This field is required</p>
            )}

            {errors.password && errors.password.type === "minLength" && (
              <p className="error-message">{errors.password?.message}</p>
            )}

            <span className="row">
              {loginLoading ? (
                <Loader height={50} width={50} />
              ) : (
                <>
                  <button className="button" type="submit">
                    Log in
                  </button>
                </>
              )}
            </span>
            <span className="fg-pass">
              <Link href="/forgot-password">
                <BiLockOpenAlt /> Forgot your password?
              </Link>
            </span>
          </form>

          <div className="signup-link">
            Not a member? <Link href="/register">Signup now</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
