import { NextSeo } from "next-seo";
import ForgotPasswordFrom from "../components/auth/ForgotPasswordFrom";

const ForgotPassword = () => {
  return (
    <>
      <NextSeo title="Forgot password" description="Some content " />
      <ForgotPasswordFrom />
    </>
  );
};

export default ForgotPassword;
