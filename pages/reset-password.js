import React from "react";
import { useForm } from "react-hook-form";
import usePostApi from "../utils/usePostApi";
import { Path } from "../utils/apiService";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

const ResetPassword = () => {
  const { query } = useRouter();
  const token = query.token;
  //   const email = query.email;
  const code = query.code;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    isLoading: resetPasswordLoading,
    error: resetPasswordError,
    data: resetPasswordData,
    sendHTTPPostRequest: resetPasswordApi,
  } = usePostApi();

  const onSubmit = (item) => {
    (item["code"] = "abcd"), resetPasswordApi(Path.resetpassword, item);
  };

  return (
    <>
      <NextSeo title="reset password" description="Some content " />
      <div className="container">
        <div className="wrapper">
          <h2 className="title">Reset your password</h2>

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
              {/* {errorMsg} */}
            </p>
            <div className="row">
              <i className="fas fa-user"></i>
              <input
                className="form__input"
                type="password"
                defaultValue="0"
                placeholder="Password"
                {...register("password", {
                  required: true,
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <p className="message message--error" style={{ color: "red" }}>
                  This field is required
                </p>
              )}
            </div>

            <div className="row">
              <i className="fas fa-user"></i>
              <input
                className="form__input"
                type="password"
                defaultValue="0"
                placeholder="Confim Password"
                {...register("passwordConfirmation", {
                  required: true,
                })}
              />
              {errors.passwordConfirmation &&
                errors.passwordConfirmation.type === "required" && (
                  <p
                    className="message message--error"
                    style={{ color: "red" }}
                  >
                    This field is required
                  </p>
                )}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button className="button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
