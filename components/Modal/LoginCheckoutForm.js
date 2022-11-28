import React from "react";

const LoginCheckoutForm = (props) => {
  return (
    <>
      <div
        className={`dropdown-pane ${props.open ? "is-open" : ""}`}
        id="fst_login"
        data-dropdown
        data-auto-focus="true"
        data-close-on-click="true"
        style={{
          top: props.open ? "411.508px" : "",
          left: props.open ? "339.375px" : "",
        }}
      >
        <form>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <a data-open="forg_pass" className="drop-for-pass">
            Forgot Password ?
          </a>
          <button className="fst-log-but">Submit</button>
          <p className="sec-crt-acc">
            Don't have an Account?{" "}
            <a
              href="https://www.coolstop.in/home/login"
              data-toggle="register-form-reveal"
              aria-controls="register-form-reveal"
              aria-haspopup="true"
              tabIndex="0"
            >
              Create Account
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginCheckoutForm;
