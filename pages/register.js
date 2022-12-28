import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import LoginForm from "../components/auth/LoginForm";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();

  return (
    <>
      <NextSeo title="Register" description="Some content " />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: " 0 12%",
        }}
      >
        {/* <div className="vi">
          <LoginForm />
        </div> */}

        <div>
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default Register;
