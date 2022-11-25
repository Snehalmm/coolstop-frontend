import React from "react";

const CheckoutForm = () => {
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
            <span className="ext-us-text">
              Existing user login <span>for fast checkout</span>
            </span>
            <a className="fstlogbt" type="button" data-toggle="fst_login">
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
            <div
              className="dropdown-pane"
              id="fst_login"
              data-dropdown
              data-auto-focus="true"
              data-close-on-click="true"
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
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutForm;
