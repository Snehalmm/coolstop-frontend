import React from 'react';

const ChangePassword = ({ showPasswordModal, setShowPasswordModal }) => {
  const handleClose = () => {
    setShowPasswordModal(false);
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
          <div class="large-12 columns">
            <div class="pass-form_tit-container">
              <h4>Password Settings</h4>
              <span>Change Old Password</span>
            </div>
          </div>

          <div class="large-12 columns mar_top_10">
            <label>
              Old Password
              <input type="password" />
            </label>
            <label>
              New password
              <span>(Please Enter Your New Password- min 8 chars)</span>
              <input type="text" />
            </label>
            <label>
              Re-Type Password<span>(Re-Type Your New Password)</span>
              <input type="text" />
            </label>

            <button class="green_button_full">Update</button>
          </div>

          <button
            class="close-button"
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
