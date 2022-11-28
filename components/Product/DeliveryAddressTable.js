import OrderInstructions from './OrderInstructions';
import OrderSummary from './OrderSummary';
import usePostApi from '../../utils/usePostApi';
import { Path } from '../../utils/apiService';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { States } from '../../utils/data/states';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const DeliveryAddressTable = () => {
  const router = useRouter();
  const [attribute, setAttribute] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const cartItems = useSelector((state) => {
    return state.cart.items;
  });
  const cartDetails = useSelector((state) => {
    return state.cart.cartDetails;
  });
  const userDetails = useSelector((state) => state.user.users.userDetails.user);
  const {
    isLoading: createOrderLoading,
    error: createOrderError,
    data: createOrderData,
    sendHTTPPostRequest: createOrderApi,
  } = usePostApi();

  let createObj = {};
  const findArray = [];
  cartItems.map((item) => {
    createObj = {
      itemName: item.name,
      itemAmt: item.csp,
      quantity: item.qty,
      product: item.id,
    };

    findArray.push(createObj);
  });

  const onSubmit = (data) => {
    console.log('data', data);
    localStorage.setItem('billingaddress', JSON.stringify(data));
    // if (getAddress) {

    let orderData = {
      data: {
        emailId: userDetails?.email,
        amount: Math.floor(cartDetails.totalAmt),
        paymentStatus: 'unpaid',
        paymentMode: null,
        orderStatus: 'pending',
        shippedDate: null,
        itemDetails: findArray,
        billingAddress: {
          houseNo: data.cshouseno,
          address: data.csadr1,
          townOrCity: data.cscity,
          country: data.cscountry,
          postcode: data.cspostcode,
        },
        shippingAddress: {
          houseNo: data.cbhouseno ? data.cbhouseno : data.cshouseno,
          address: data.cbadr1 ? data.cbadr1 : data.csadr1,
          townOrCity: data.cbcity ? data.cbcity : data.cscity,
          country: data.cbcounty ? data.cbcounty : data.cscountry,
          postcode: Number(data.cbpostcode)
            ? Number(data.cbpostcode)
            : Number(data.cspostcode),
        },
        users_permissions_user: userDetails?.id,
      },
    };
    createOrderApi(Path.order, orderData);
    router.push('/payment-method');
    // }
  };

  const checkHandler = (e) => {
    if (!e.target.checked) {
      setAttribute(true);
      document.getElementById('billingdiv').style.display = 'block';
    } else {
      document.getElementById('billingdiv').style.display = 'none';
    }
  };
  return (
    <>
      <section className="grid-container">
        <div className="bwcart-main-con">
          <div className="bwcart-left">
            <div className="ctc-cart-con">
              <div className="ctc-tit-con">
                <svg viewBox="0 0 24 24">
                  <path d="M 12 1 C 8.686 1 6 3.686 6 7 C 6 11.286 12 18 12 18 C 12 18 18 11.286 18 7 C 18 3.686 15.314 1 12 1 z M 12 4.8574219 C 13.184 4.8574219 14.142578 5.816 14.142578 7 C 14.142578 8.183 13.183 9.1425781 12 9.1425781 C 10.817 9.1425781 9.8574219 8.184 9.8574219 7 C 9.8574219 5.816 10.816 4.8574219 12 4.8574219 z M 4.8007812 15 L 2 22 L 22 22 L 19.199219 15 L 16.8125 15 C 16.3275 15.731 15.840578 16.408 15.392578 17 L 17.847656 17 L 19.046875 20 L 4.953125 20 L 6.1523438 17 L 8.6074219 17 C 8.1594219 16.408 7.6725 15.731 7.1875 15 L 4.8007812 15 z" />
                </svg>
                <div className="ctc-tit">
                  <h2>Delivery Address</h2>
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="ckh-frm-con">
                  <div className="ckh-frm-1">
                    <label htmlFor="cspostcode">Postcode</label>
                    <input
                      type="text"
                      id="cspostcode"
                      // readOnly
                      {...register('cspostcode', {
                        required: true,
                      })}
                    />
                    <span className="form-error">
                      Please enter your post code
                    </span>
                  </div>

                  <div className="ckh-frm-2">
                    <label htmlFor="cshouseno">
                      Organisation / House Name / No.
                    </label>
                    <input
                      type="text"
                      id="cshouseno"
                      {...register('cshouseno', {
                        required: true,
                      })}
                    />
                    {errors.cshouseno &&
                      errors.cshouseno.type === 'required' && (
                        <span className="error-message">
                          Please enter your house or office number/name
                        </span>
                      )}
                  </div>

                  <div className="ckh-frm-3">
                    <label htmlFor="csadr1">Address</label>
                    <input
                      type="text"
                      id="csadr1"
                      {...register('csadr1', {
                        required: true,
                      })}
                    />
                    {errors.cshouseno &&
                      errors.cshouseno.type === 'required' && (
                        <span className=" error-message">
                          Please enter your address.
                        </span>
                      )}
                  </div>

                  <div className="ckh-frm-4">
                    <label htmlFor="cscity">Town or City</label>
                    <input
                      type="text"
                      id="cscity"
                      {...register('cscity', {
                        required: true,
                      })}
                    />
                    {errors.cscity && errors.cscity.type === 'required' && (
                      <span className=" error-message">
                        Please enter your city
                      </span>
                    )}
                  </div>

                  <div className="ckh-frm-5">
                    <label htmlFor="cscountry">State</label>
                    <select
                      id="cscountry"
                      {...register('csstate', {
                        required: true,
                      })}
                    >
                      <option></option>
                      {States.map((state, index) => (
                        <option value={state.state_id} key={index}>
                          {state.state_name}
                        </option>
                      ))}
                    </select>

                    {errors.csstate && errors.csstate.type === 'required' && (
                      <span className=" error-message">
                        Please select your State
                      </span>
                    )}
                  </div>

                  <div className="ckh-frm-5">
                    <label htmlFor="cscountry">County</label>
                    <input
                      type="text"
                      id="cscountry"
                      {...register('cscountry', {
                        required: true,
                      })}
                    />
                    {errors.cscountry &&
                      errors.cscountry.type === 'required' && (
                        <span className=" error-message">
                          Please enter your county
                        </span>
                      )}
                  </div>

                  <div className="ckh-frm-6">
                    <label htmlFor="csfname">First Name</label>
                    <input
                      type="text"
                      id="csfname"
                      {...register('csfname', {
                        required: true,
                      })}
                    />
                    {errors.csfname && errors.csfname.type === 'required' && (
                      <span className=" error-message">
                        Please enter your first name
                      </span>
                    )}
                  </div>

                  <div className="ckh-frm-7">
                    <label htmlFor="cslname">Last Name</label>
                    <input
                      type="text"
                      id="cslname"
                      {...register('cslname', {
                        required: true,
                      })}
                    />
                    {errors.cslname && errors.cslname.type === 'required' && (
                      <span className=" error-message">
                        Please enter your last name
                      </span>
                    )}
                  </div>

                  <div className="ckh-frm-8">
                    <label htmlFor="rmail">
                      Email{' '}
                      <span>(your account will be created after checkout)</span>
                    </label>
                    <input
                      type="email"
                      id="rmail"
                      {...register('email', {
                        required: true,
                        pattern:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                    {errors.email && errors.email.type === 'required' && (
                      <span className=" error-message">
                        Please enter your email address
                      </span>
                    )}
                    {errors.email && errors.email.type === 'pattern' && (
                      <p className="error-message">
                        Please write a valid email
                      </p>
                    )}
                  </div>

                  <div className="ckh-frm-9">
                    <label htmlFor="cscontactno">Delivery Contact No.</label>
                    <input
                      type="text"
                      maxLength="10"
                      autoComplete="off"
                      id="cscontactno"
                      {...register('cscontactno', {
                        required: true,
                        pattern:
                          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                      })}
                    />
                    {errors.cscontactno &&
                      errors.cscontactno.type === 'required' && (
                        <span className=" error-message">
                          Please enter your Delivery Contact No.
                        </span>
                      )}
                    {errors.cscontactno &&
                      errors.cscontactno.type === 'pattern' && (
                        <span className="error-message">
                          Please write a valid contact number
                        </span>
                      )}
                  </div>
                </div>
                <div id="billingdiv" style={{ display: 'none' }}>
                  <div className="ctc-tit-con">
                    <svg viewBox="0 0 24 24">
                      <path d="M 12 1 C 8.686 1 6 3.686 6 7 C 6 11.286 12 18 12 18 C 12 18 18 11.286 18 7 C 18 3.686 15.314 1 12 1 z M 12 4.8574219 C 13.184 4.8574219 14.142578 5.816 14.142578 7 C 14.142578 8.183 13.183 9.1425781 12 9.1425781 C 10.817 9.1425781 9.8574219 8.184 9.8574219 7 C 9.8574219 5.816 10.816 4.8574219 12 4.8574219 z M 4.8007812 15 L 2 22 L 22 22 L 19.199219 15 L 16.8125 15 C 16.3275 15.731 15.840578 16.408 15.392578 17 L 17.847656 17 L 19.046875 20 L 4.953125 20 L 6.1523438 17 L 8.6074219 17 C 8.1594219 16.408 7.6725 15.731 7.1875 15 L 4.8007812 15 z" />
                    </svg>
                    <div className="ctc-tit">
                      <h2>Billing Address</h2>
                    </div>
                  </div>
                  <div class="ckh-frm-con">
                    <div class="ckh-frm-2">
                      <label for="cbfname">First Name</label>
                      <input
                        type="text"
                        id="cbfname"
                        name="cbfname"
                        {...register('cbfname')}
                        // {...register("cbfname", {
                        //   required: true,
                        // })}
                      />
                      {errors.cbfname && errors.cbfname.type === 'required' && (
                        <span className=" error-message">
                          Please enter your first name
                        </span>
                      )}
                    </div>

                    <div class="ckh-frm-3">
                      <label for="cblname">Last Name</label>
                      <input
                        type="text"
                        id="cblname"
                        name="cblname"
                        {...register('cblname')}
                        // {...register("cblname", {
                        //   required: true,
                        // })}
                      />
                      {/* {errors.cblname && errors.cblname.type === "required" && (
                      <span className=" error-message">
                        Please enter your last name
                      </span>
                    )} */}
                    </div>

                    <div class="ckh-frm-4">
                      <label for="cbcontactno">Delivery Contact No.</label>
                      <input
                        type="text"
                        id="cbcontactno"
                        name="cbcontactno"
                        {...register('cbcontactno')}
                        // {...register("cbcontactno", {
                        //   required: true,
                        // })}
                      />
                      {/* {errors.cbcontactno &&
                      errors.cbcontactno.type === "required" && (
                        <span className=" error-message">
                          Please enter your delivery contact no.
                        </span>
                      )} */}
                    </div>

                    <div class="ckh-frm-5">
                      <label for="cbpostcode">Postcode</label>
                      <input
                        type="text"
                        id="cbpostcode"
                        name="cbpostcode"
                        {...register('cbpostcode')}
                        // {...register("cbpostcode", {
                        //   required: true,
                        // })}
                      />
                      {/* {errors.cbpostcode &&
                      errors.cbpostcode.type === "required" && (
                        <span className=" error-message">
                          Please enter your post code
                        </span>
                      )} */}
                    </div>

                    <div class="ckh-frm-6">
                      <label for="cbhouseno">
                        Organisation / House Name / House No.
                      </label>
                      <input
                        type="text"
                        id="cbhouseno"
                        name="cbhouseno"
                        {...register('cbhouseno')}
                        // {...register("cbhouseno", {
                        //   required: true,
                        // })}
                      />
                      {/* {errors.cbhouseno &&
                      errors.cbhouseno.type === "required" && (
                        <span className=" error-message">
                          Please enter your house or office number/name
                        </span>
                      )} */}
                    </div>

                    <div class="ckh-frm-7">
                      <label for="cbadr1">Address</label>
                      <input
                        type="text"
                        id="cbadr1"
                        name="cbadr1"
                        {...register('cbadr1')}
                        // {...register("cbadr1", {
                        //   required: true,
                        // })}
                      />
                      {/* {errors.cbadr1 && errors.cbadr1.type === "required" && (
                      <span className=" error-message">
                        Please enter your address
                      </span>
                    )} */}
                    </div>

                    <div class="ckh-frm-8">
                      {/* <input type="text" id="cbadr2" name="cbadr2" /> */}
                      <label for="cbcity">Town or City</label>
                      <input
                        type="text"
                        id="cbcity"
                        name="cbcity"
                        {...register('cbcity')}
                        // {...register("cbcity", {
                        //   required: true,
                        // })}
                      />
                      {/* {errors.cbcity && errors.cbcity.type === "required" && (
                      <span className=" error-message">
                        Please enter your city
                      </span>
                    )} */}
                    </div>

                    <div class="ckh-frm-9">
                      <label for="cbcounty">County</label>
                      <input
                        type="text"
                        id="cbcounty"
                        name="cbcounty"
                        {...register('cbcounty')}
                        // {...register("cbcounty", {
                        //   required: true,
                        // })}
                      />
                      {/* {errors.cbcounty && errors.cbcounty.type === "required" && (
                      <span className=" error-message">
                        Please enter your county
                      </span>
                    )} */}
                    </div>
                  </div>
                </div>
                <div className="ckh-frm-10">
                  <label htmlFor="shipping_address">
                    <input
                      type="checkbox"
                      name="shipping_address"
                      id="shipping_address"
                      onChange={checkHandler}
                      defaultChecked
                    />{' '}
                    Billing Address is same as Delivery Address
                  </label>
                  <input
                    name="hdnBUID"
                    type="hidden"
                    id="hdnBUID"
                    defaultValue="0"
                  />
                  <label htmlFor="chktercon">
                    <input
                      type="checkbox"
                      name="chktercon"
                      id="shipping_address"
                      defaultChecked
                    />{' '}
                    I agree to{' '}
                    <a
                      href="#"
                      className="ckhagree"
                      data-toggle="trm-con-modal"
                    >
                      terms & conditions
                    </a>
                  </label>
                  <input
                    name="hdnBUID"
                    type="hidden"
                    id="hdnBUID"
                    defaultValue="0"
                  />
                </div>

                <div className="bw-right-chk-batn">
                  <button id="btnshippingInfo" className="deliveryclassName">
                    <svg viewBox="0 0 24 24">
                      <path d="M 13.619141 1.7519531 C 13.319328 1.7000156 13 1.9189844 13 2.2714844 L 13 4 L 10 4 C 9.448 4 9 4.448 9 5 C 9 5.552 9.448 6 10 6 L 13 6 L 13 7.7285156 C 13 8.1975156 13.568391 8.4316094 13.900391 8.0996094 L 16.423828 5.5761719 C 16.741828 5.2571719 16.741828 4.7418281 16.423828 4.4238281 L 13.900391 1.8984375 C 13.817391 1.8154375 13.719078 1.7692656 13.619141 1.7519531 z M 4.0742188 2.0039062 L 3.0039062 2.0078125 C 2.4519063 2.0108125 2.0058125 2.4616719 2.0078125 3.0136719 C 2.0108125 3.5656719 2.4616719 4.0108125 3.0136719 4.0078125 L 4.0839844 4.0039062 L 7.5117188 11.908203 L 6.3144531 13.824219 C 5.9144531 14.464219 5.8937656 15.272641 6.2597656 15.931641 C 6.6257656 16.590641 7.3221719 17 8.0761719 17 L 19 17 C 19.552 17 20 16.552 20 16 C 20 15.448 19.552 15 19 15 L 8.0761719 15 L 8.0117188 14.882812 L 9.1875 13 L 16.521484 13 C 17.247484 13 17.916578 12.606656 18.267578 11.972656 L 21.896484 5.4414062 C 22.164484 4.9594062 21.989812 4.3500312 21.507812 4.0820312 C 21.024812 3.8130313 20.416438 3.9877031 20.148438 4.4707031 L 16.521484 11 L 9.2851562 11 L 5.9296875 3.234375 C 5.6186875 2.486375 4.8852187 1.9999062 4.0742188 2.0039062 z M 8 18 A 2 2 0 0 0 6 20 A 2 2 0 0 0 8 22 A 2 2 0 0 0 10 20 A 2 2 0 0 0 8 18 z M 18 18 A 2 2 0 0 0 16 20 A 2 2 0 0 0 18 22 A 2 2 0 0 0 20 20 A 2 2 0 0 0 18 18 z" />
                    </svg>{' '}
                    Continue to Payment
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="bwcart-right">
            <div className="bwcart-right-nest">
              <OrderSummary buttonText={'Continue to Payment'} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeliveryAddressTable;
