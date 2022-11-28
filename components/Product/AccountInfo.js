import React, { useState, useEffect } from 'react';
import AddressBook from './AddressBook';
import MyAccountList from './MyAccountList';
import ChangePassword from '../Modal/ChangePassword';
const AccountInfo = () => {
  const [userDetails, setUserDetails] = useState();
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const handleOpenModal = () => {
    setShowPasswordModal(true);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('userDetails'));
    if (items) {
      setUserDetails(items);
    }
  }, []);

  return (
    <>
      <section className="grid-container">
        <div className="ac-page-lyt">
          <MyAccountList />
          <div className="ac-page-dash-tit">
            <h3 className="dash-tit">Account Dashboard</h3>
          </div>

          <div className="ac-page-accinfo">
            <h3 className="accinfo">Account Information</h3>

            <div className="cont-news-con">
              <div className="ac-cont-info">
                <svg
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <path d="M 3 7 C 1.355469 7 0 8.355469 0 10 L 0 42 C 0 43.644531 1.355469 45 3 45 L 10 45 L 10 43 L 12 43 L 12 45 L 38 45 L 38 43 L 40 43 L 40 45 L 47 45 C 48.644531 45 50 43.644531 50 42 L 50 14 C 50 12.355469 48.644531 11 47 11 L 26 11 L 26 10 C 26 8.355469 24.644531 7 23 7 Z M 3 9 L 23 9 C 23.5625 9 24 9.4375 24 10 L 24 13 L 47 13 C 47.5625 13 48 13.4375 48 14 L 48 42 C 48 42.5625 47.5625 43 47 43 L 42 43 L 42 41 L 36 41 L 36 43 L 14 43 L 14 41 L 8 41 L 8 43 L 3 43 C 2.4375 43 2 42.5625 2 42 L 2 10 C 2 9.4375 2.4375 9 3 9 Z M 13.46875 18 C 10.109375 18.0625 9.703125 20.617188 10.4375 23.5625 C 10.308594 23.644531 10.101563 23.9375 10.15625 24.40625 C 10.257813 25.277344 10.59375 25.480469 10.8125 25.5 C 10.894531 26.3125 11.410156 27.285156 11.6875 27.4375 C 11.6875 28.015625 11.710938 28.457031 11.65625 29.09375 C 10.992188 30.949219 6.207031 30.421875 6 34 L 21 34 C 20.792969 30.421875 16.039063 30.949219 15.375 29.09375 C 15.320313 28.457031 15.34375 28.015625 15.34375 27.4375 C 15.621094 27.285156 16.101563 26.3125 16.1875 25.5 C 16.40625 25.480469 16.742188 25.277344 16.84375 24.40625 C 16.898438 23.9375 16.691406 23.675781 16.5625 23.59375 C 16.914063 22.488281 17.636719 19.042969 15.1875 18.6875 C 14.933594 18.226563 14.308594 18 13.46875 18 Z M 26 22 L 26 24 L 44 24 L 44 22 Z M 26 27 L 26 29 L 44 29 L 44 27 Z M 26 32 L 26 34 L 44 34 L 44 32 Z" />
                </svg>

                <div className="ac-det-wrap">
                  <h3 className="ac-cont-infotit">Contact Information</h3>
                  <div className="ac-cont-usrnm">
                    {userDetails?.user.firstname} &nbsp;
                    {userDetails?.user.lastname}
                  </div>
                  <div className="ac-cont-usrmail">
                    {userDetails?.user.email}
                  </div>
                  <a
                    className="ac-cont-butt"
                    data-toggle="chg-pass-form"
                    onClick={handleOpenModal}
                  >
                    Change Passowrd
                  </a>
                </div>
              </div>

              <div className="ac-newsl">
                <svg
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <path d="M 0.00390625 3 L 0.00390625 35 L 2 35 L 2 5 L 45 5 L 45 3 Z M 4 7 L 4.042969 38.957031 L 30.050781 39 C 30.554688 44.035156 34.835938 48 40 48 C 45.5 48 50 43.5 50 38 C 50 35.765625 49.25 33.707031 48 32.035156 L 48 7 Z M 6 9 L 46 9 L 46 11.34375 C 44.964844 12.246094 30.3125 25.019531 29.042969 26.125 C 27.921875 27.101563 26.78125 27.296875 26.175781 27.296875 C 25.570313 27.296875 24.433594 27.097656 23.3125 26.125 C 22.007813 24.988281 6.453125 11.433594 6.003906 11.042969 Z M 6.007813 13.699219 C 7.710938 15.179688 12.722656 19.550781 17.273438 23.515625 L 6.03125 32.40625 Z M 46 13.996094 L 46 30.027344 C 44.324219 28.761719 42.25 28 40 28 C 34.835938 28 30.554688 31.964844 30.050781 37 L 6.039063 36.960938 L 6.039063 34.953125 L 18.808594 24.851563 C 19.84375 25.757813 21.757813 27.421875 22 27.632813 C 23.523438 28.960938 25.140625 29.296875 26.175781 29.296875 C 27.210938 29.296875 28.828125 28.960938 30.355469 27.632813 C 31.539063 26.601563 43.179688 16.453125 46 13.996094 Z M 40 30 C 44.398438 30 48 33.601563 48 38 C 48 42.398438 44.398438 46 40 46 C 35.601563 46 32 42.398438 32 38 C 32 33.601563 35.601563 30 40 30 Z M 40.046875 32 C 39.761719 32 39.335938 32.140625 39.195313 32.421875 C 39.054688 32.566406 38.984375 32.777344 38.984375 33.058594 L 38.984375 37.019531 L 35.023438 37.019531 C 34.742188 37.019531 34.386719 37.089844 34.246094 37.375 L 34.175781 37.445313 C 33.894531 37.871094 33.960938 38.507813 34.457031 38.859375 C 34.597656 39 34.8125 39.070313 35.09375 39.070313 L 39.054688 39.070313 L 39.054688 43.03125 C 39.054688 43.597656 39.480469 44.019531 40.046875 44.019531 C 40.609375 44.019531 41.03125 43.597656 41.03125 43.03125 L 41.03125 39.070313 L 44.996094 39.070313 C 45.558594 39.070313 45.984375 38.644531 45.984375 38.078125 C 45.984375 37.515625 45.558594 37.09375 44.996094 37.09375 L 40.964844 37.019531 L 40.964844 33.0625 C 40.964844 32.496094 40.539063 32.070313 40.046875 32 Z" />
                </svg>

                <div className="ac-det-wrap">
                  <h3 className="ac-cont-infotit">Newsletter</h3>
                  <p className="ac-newsl-det">
                    You are subscribed to
                    <span className="cm-line-break">
                      "General Subscription"
                    </span>
                  </p>
                  <a className="ac-cont-butt" href="#">
                    Edit
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <AddressBook /> */}
        </div>
      </section>
      {showPasswordModal ? (
        <ChangePassword
          showPasswordModal={showPasswordModal}
          setShowPasswordModal={setShowPasswordModal}
        />
      ) : null}
    </>
  );
};

export default AccountInfo;
