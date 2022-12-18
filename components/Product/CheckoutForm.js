import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Path } from "../../utils/apiService";
import { useDispatch } from "react-redux";
import usePostApi from "../../utils/usePostApi";
import { useRouter } from "next/router";
import { userActions } from "../../stores/slices/userSlice";
import {
  deleteFromStorage,
  getFromStorage,
  saveToStorage,
} from "../../utils/storage";

const CheckoutForm = () => {
  const [errorMsg, setErrorMsg] = useState([]);
  const [hide, setHide] = useState(false);
  const [open, setIsOpen] = useState(false);
  const [user, setUser] = useState();
  const router = useRouter();
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

  const openModel = () => {
    setIsOpen(true);
    document.getElementById("fst_login").classList.toggle("is-open");
    document.getElementById("login-btn").classList.toggle("hover");
  };

  const successHandler = (data) => {
    if (data.jwt.length > 0 && data.user) {
      saveToStorage("userDetails", data);
      // router.push('/checkout');
    }
  };

  const errorHandler = (error) => {
    if (error) {
      setErrorMsg(error.response.data.error.message);
    }
  };

  const onSubmit = (item) => {
    loginApi(Path.login, item, successHandler, errorHandler);
    document.getElementById("fst_login").classList.remove("is-open");
    dispatch(userActions.adduser(item));
    setHide(true);
  };

  useEffect(() => {
    if (localStorage) {
      const getLocalState = getFromStorage("userDetails");
      setUser(getLocalState);
    }
    deleteFromStorage("orderDetails");
  }, []);

  return (
    <>
      <section className="grid-container">
        <div className="fst-chk-btt">
          <span className="welcomechkout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 32 32"
            >
              <path d="M 16 5 C 12.144531 5 9 8.144531 9 12 C 9 14.410156 10.230469 16.550781 12.09375 17.8125 C 8.527344 19.34375 6 22.882813 6 27 L 8 27 C 8 24.109375 9.527344 21.59375 11.8125 20.1875 C 12.484375 21.835938 14.121094 23 16 23 C 17.878906 23 19.515625 21.835938 20.1875 20.1875 C 22.472656 21.59375 24 24.109375 24 27 L 26 27 C 26 22.882813 23.472656 19.34375 19.90625 17.8125 C 21.769531 16.550781 23 14.410156 23 12 C 23 8.144531 19.855469 5 16 5 Z M 16 7 C 18.773438 7 21 9.226563 21 12 C 21 14.773438 18.773438 17 16 17 C 13.226563 17 11 14.773438 11 12 C 11 9.226563 13.226563 7 16 7 Z M 16 19 C 16.820313 19 17.601563 19.117188 18.34375 19.34375 C 17.996094 20.308594 17.089844 21 16 21 C 14.910156 21 14.003906 20.308594 13.65625 19.34375 C 14.398438 19.117188 15.179688 19 16 19 Z"></path>
            </svg>{" "}
            Welcome User
          </span>

          <div className="ext-usr-con">
            {user || hide ? (
              " "
            ) : (
              <>
                <span className="ext-us-text">
                  Existing user login <span>for fast checkout</span>
                </span>
                <a
                  className="fstlogbt"
                  type="button"
                  data-toggle="fst_login"
                  id="login-btn"
                  onClick={openModel}
                >
                  Login{" "}
                  <svg
                    height="30"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 26 26"
                  >
                    <path d="M8.2 15.8c-.3-.3-.3-.8 0-1 .3-.3.7-.3 1 0l3.8 4 3.8-4c.3-.3.7-.3 1 0 .3.3.3.8 0 1l-4.3 4.5c-.1.1-.3.2-.5.2s-.4-.1-.5-.2l-4.3-4.5zm9.6-5.6c.3.3.3.8 0 1-.3.3-.7.3-1 0l-3.8-4-3.8 4c-.3.3-.7.3-1 0-.3-.3-.3-.8 0-1l4.3-4.5c.1-.1.3-.2.5-.2s.4.1.5.2l4.3 4.5z"></path>
                  </svg>
                </a>
              </>
            )}

            <div
              className="dropdown-pane has-position-bottom has-alignment-left "
              id="fst_login"
              data-dropdown
              data-auto-focus="true"
              data-close-on-click="true"
              style={{
                top: open ? "411.508px" : "",
                left: open ? "330.375px" : "",
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "red",
                    marginTop: "10px",
                    marginBottom: 0,
                  }}
                >
                  {errorMsg}
                </p>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("identifier", {
                      required: true,
                      pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />
                  {errors.identifier &&
                    errors.identifier.type === "required" && (
                      <p className="error-message">This field is required</p>
                    )}

                  {errors.identifier &&
                    errors.identifier.type === "pattern" && (
                      <p className="error-message">
                        Please write a valid email
                      </p>
                    )}
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
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

                <Link
                  href="/forgot-password"
                  data-open="forg_pass"
                  className="drop-for-pass"
                >
                  Forgot password?{" "}
                </Link>

                <button className="fst-log-but">Submit</button>
                <p className="sec-crt-acc">
                  Don't have an Account?{" "}
                  <Link
                    href="/register"
                    data-toggle="register-form-reveal"
                    aria-controls="register-form-reveal"
                    aria-haspopup="true"
                    tabIndex="0"
                  >
                    Create Account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutForm;
