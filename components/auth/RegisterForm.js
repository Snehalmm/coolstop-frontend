import { useState } from "react";
import { useForm } from "react-hook-form";
import usePostApi from "../../utils/usePostApi";
import { useDispatch, useSelector } from "react-redux";
import { Path } from "../../utils/apiService";
import { useRouter } from "next/router";
import { token } from "../../utils/config";
import { userActions } from "../../stores/slices/userSlice";
import Loader from "../common/Loader";
import { saveToStorage } from "../../utils/storage";

const registerForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [errorMsg, setErrorMsg] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {
    isLoading: signupApiLoading,
    error: signupApiError,
    data: signupApiData,
    sendHTTPPostRequest: signupApi,
  } = usePostApi();

  const successHandler = (data) => {
    if (router.query.name == "checkout") {
      router.push("/checkout");
      saveToStorage("userDetails", data);
      dispatch(userActions.adduser(data));
    } else {
      saveToStorage("userDetails", data);
      dispatch(userActions.adduser(data));
      router.push("/my-account");
    }
    // if (data.user && data.jwt.length > 0) {
    //   localStorage.setItem('userDetails', JSON.stringify(data));
    //   dispatch(userActions.adduser(data));
    //   router.push('/my-account');
    // }
  };

  const errorHandler = (error) => {
    if (error) {
      setErrorMsg(error.response.data.error.message);
    }
  };

  const submitFrom = (item) => {
    signupApi(Path.signup, item, token, successHandler, errorHandler);
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Signup Form</span>
          </div>
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

          <form onSubmit={handleSubmit(submitFrom)}>
            <div style={{ display: "flex", gap: "10px" }}>
              <div>
                <label>First Name</label>
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="First Name"
                  {...register("firstname", {
                    required: true,
                    pattern: /^[A-Za-z]+$/,
                  })}
                />
                {errors.firstname && errors.firstname.type === "required" && (
                  <p className="error-message">This field is required</p>
                )}

                {errors.firstname && errors.firstname.type === "pattern" && (
                  <p className="error-message"> Allow only alphabets</p>
                )}
              </div>

              <div>
                <label>Last Name</label>
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Last Name"
                  {...register("lastname", {
                    required: true,
                    pattern: /^[A-Za-z]+$/,
                  })}
                />
                {errors.lastname && errors.lastname.type === "required" && (
                  <p className="error-message">This field is required</p>
                )}

                {errors.lastname && errors.lastname.type === "pattern" && (
                  <p className="error-message"> Allow only alphabets</p>
                )}
              </div>
            </div>

            <div class="field-wrap">
              <label>Username</label>
              <input
                autoComplete="off"
                type="text"
                placeholder="Username"
                {...register("username", {
                  required: true,
                  minLength: {
                    value: 3,
                    message: "Username must be 3 charater",
                  },
                })}
              />
              {errors.username && errors.username.type === "required" && (
                <p className="error-message">This field is required</p>
              )}

              {errors.username && errors.username.type === "minLength" && (
                <p className="error-message">{errors.username?.message}</p>
              )}
            </div>

            <div class="field-wrap">
              <label>Email</label>
              <input
                autoComplete="off"
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />

              {errors.email && errors.email.type === "required" && (
                <p className="error-message">This field is required</p>
              )}

              {errors.email && errors.email.type === "pattern" && (
                <p className="error-message">Please write a valid email</p>
              )}
            </div>

            <div class="field-wrap">
              <label>Contact Number</label>
              <input
                maxLength="10"
                autoComplete="off"
                type="tel"
                placeholder="Contact Number"
                {...register("contactNo", {
                  required: true,
                  pattern:
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                })}
              />
              {errors.contactNo && errors.contactNo.type === "required" && (
                <p className="error-message">This field is required</p>
              )}

              {errors.contactNo && errors.contactNo.type === "pattern" && (
                <p className="error-message">
                  Please write a valid contact number
                </p>
              )}
            </div>

            <div class="field-wrap">
              <label>Password</label>
              <input
                autoComplete="off"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "password must be 6 digits",
                  },
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <p className="error-message">This field is required</p>
              )}

              {errors.password && errors.password.type === "minLength" && (
                <p className="error-message">{errors.password?.message}</p>
              )}
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              {signupApiLoading ? (
                <Loader height={50} width={50} />
              ) : (
                <button className="button" type="submit">
                  {" "}
                  Signup
                </button>
              )}
            </div>

            {/* <div className="signup-link">
              Are you already a member?
              <Link href="/register" as="/register">
                {" "}
                Login
              </Link>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default registerForm;
