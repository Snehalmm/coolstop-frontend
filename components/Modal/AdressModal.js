import React from 'react';
import { useForm } from 'react-hook-form';

const AdressModal = ({ adressModal, setAdressModal, name }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitAdress = (data) => {
    setAdressModal(false);
  };
  // const closeModel = () => {
  //   setAdressModal(false);
  // };

  return (
    <>
      <div
        className={`reveal-overlay ${
          adressModal ? 'fade-in mui-enter mui-enter-active' : ''
        }`}
        style={{ display: `${adressModal ? 'block' : 'none'}` }}
      >
        <form onSubmit={handleSubmit(submitAdress)}>
          <div
            className={`reveal large bounce-in-out ${
              adressModal ? 'scale-in-up mui-enter mui-enter-active' : ''
            }`}
            id="chg_bill_add"
            data-reveal
            data-close-on-click="true"
            data-animation-in="scale-in-up"
            data-animation-out="scale-out-down"
            style={{ display: `${adressModal ? 'block' : 'none'}` }}
          >
            <div classname="large-12 columns">
              <div classname="pass-form_tit-container">
                <h4>{name}</h4>
              </div>
            </div>

            <div classname="large-12 columns nopadding mar_top_10">
              <div classname="large-6 medium-6 small-12 columns">
                <label>
                  Full Name/Company Name*
                  <input
                    type="text"
                    {...register('name', { required: true })}
                    autocomplete="off"
                  />
                </label>
                {errors.name && errors.name.type === 'required' && (
                  <p className="error-message">This field is required</p>
                )}
              </div>
              <div classname="large-6 medium-6 small-12 columns">
                <label>
                  Mobile Number*
                  <input
                    maxLength="10"
                    autoComplete="off"
                    type="tel"
                    {...register('contactNo', {
                      required: true,
                      pattern:
                        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                    })}
                  />
                </label>
                {errors.contactNo && errors.contactNo.type === 'required' && (
                  <p className="error-message">This field is required</p>
                )}

                {errors.contactNo && errors.contactNo.type === 'pattern' && (
                  <p className="error-message">
                    Please write a valid contact number
                  </p>
                )}
              </div>
              <div classname="large-6 medium-6 small-12 columns">
                <label>
                  Email Address*
                  <input
                    type="email"
                    {...register('email', { required: true })}
                    autoComplete="off"
                  />
                </label>
                {errors.email && errors.email.type === 'required' && (
                  <p className="error-message">This field is required</p>
                )}
              </div>
              <div classname="large-6 medium-6 small-12 columns">
                <label>
                  Flat/House No./Floor/Building Name*
                  <input
                    type="text"
                    {...register('houseNo', { required: true })}
                    autoComplete="off"
                  />
                </label>
                {errors.houseNo && errors.houseNo.type === 'required' && (
                  <p className="error-message">This field is required</p>
                )}
              </div>
              <div classname="large-6 medium-6 small-12 columns">
                <label>
                  Road Name,Area,Colony*
                  <input
                    type="text"
                    {...register('townOrCity', { required: true })}
                    autoComplete="off"
                  />
                </label>
                {errors.townOrCity && errors.townOrCity.type === 'required' && (
                  <p className="error-message">This field is required</p>
                )}
              </div>
              <div classname="large-6 medium-6 small-12 columns">
                <label>
                  Landmark
                  <input
                    type="text"
                    {...register('landmark')}
                    autoComplete="off"
                  />
                </label>
              </div>
              <div className="large-6 medium-6 small-12 columns">
                <label>
                  Pin Code*
                  <input
                    type="number"
                    {...register('postcode', { required: true })}
                    autoComplete="off"
                  />
                </label>
                {errors.postcode && errors.postcode.type === 'required' && (
                  <p className="error-message">This field is required</p>
                )}
              </div>
            </div>

            <div className="large-12 columns">
              <button className="green_button_full" type="submit">
                Update
              </button>
            </div>

            <button
              className="close-button"
              data-close
              aria-label="Close reveal"
              type="button"
              onClick={() => setAdressModal(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdressModal;
