import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ShopingInstruction from "./ShopingInstruction";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../stores/slices/cartSlice";
import { toIndianCurrency } from "../../utils/services";
import useGetApi from "../../utils/useGetApi";
import Loader from "../Common/Loader";
import { Path } from "../../utils/apiService";
import Image from "next/image";
import { token } from "../../utils/config";

import {
  deleteFromStorage,
  getFromStorage,
  saveToStorage,
} from "../../utils/storage";

const OrderSummary = ({
  buttonText,
  // setDiscountAmt,
  // discountAmt,
  // setCheckValue,
  // checkValue,
}) => {
  const [isCode, setIsCode] = useState({});
  const [showCoupan, setShowCoupan] = useState(false);
  const [localShowCoupan, setLocalShowCoupan] = useState(false);
  const [checkCode, setCheckCode] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [sucessMessage, setSuccessMessage] = useState("");
  const [checkExpirayDate, setCheckExpirayDate] = useState(null);
  const [checkCartAmt, setCheckCartAmt] = useState(null);
  const [finalAmt, setFinalAmt] = useState(null);
  const [discountAmt, setDiscountAmt] = useState(null);
  const [checkValue, setCheckValue] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const getorderDetails = getFromStorage("orderDetails");
    dispatch(cartActions.saveOrderDetails(getorderDetails));
    let getProducts = localStorage.getItem("products");
    dispatch(cartActions.updateProduct(JSON.parse(getProducts)));
    let getDiscountDetails = localStorage.getItem("discountDetails");
    dispatch(cartActions.discountDetails(JSON.parse(getDiscountDetails)));
    let getShowCoupan = getFromStorage("showCoupan");
    setShowCoupan(getShowCoupan);
    let getDiscountAmt = getFromStorage("discountAmt");
    setDiscountAmt(getDiscountAmt);
  }, []);

  const userDetails = useSelector((state) => state.user.userDetails);
  const totalProductCount = useSelector((state) => state.cart.totalProducts);
  const productDetails = useSelector((state) => {
    return state.cart.items;
  });
  const cartDetails = useSelector((state) => {
    return state.cart.cartDetails;
  });

  const orderDetails = useSelector((state) => {
    return state.cart.orderDetails;
  });
  const discountDetails = useSelector((state) => {
    return state.cart.discountDetails;
  });

  const handleClick = async () => {
    if (userDetails !== null && Object.keys(userDetails).length > 0) {
      router.push("/checkout");
    } else {
      router.push(
        {
          pathname: "/login",
          query: { name: "checkout" },
        },
        "/register"
      );
    }
  };
  const continueClick = () => {
    router.push("/products");
  };

  useEffect(() => {
    if (productDetails?.length) {
      let totalItems = 0;
      productDetails.forEach((product) => {
        totalItems = totalItems + +product.qty;
      });
      dispatch(cartActions.updateTotalProducts(totalItems));
    }
  }, [productDetails]);

  const getDiscountCode = (e) => {
    const code = {
      [e.target.name]: e.target.value,
    };
    setIsCode(code);
  };
  const {
    isLoading: getdiscountCodeLoding,
    error: getdiscountCodeError,
    data: getdiscountCodeData,
    sendHTTPGetRequest: getdiscountCodeAPI,
  } = useGetApi();

  let currentDate = new Date().toJSON().slice(0, 10);
  const successHandler = (data) => {
    setCheckCode(data.data[0]?.attributes.code === isCode?.discountCode);
    setCheckExpirayDate(currentDate <= data.data[0]?.attributes.validTill);
    setCheckCartAmt(
      cartDetails.totalAmt >= data.data[0]?.attributes.cartMinAmt
    );

    console.log(
      "data",
      data.data[0]?.attributes.code === isCode?.discountCode,
      currentDate <= data.data[0]?.attributes.validTill,
      data.data[0]?.attributes.cartMinAmt <= cartDetails.totalAmt
    );

    // if (data.data[0]?.attributes.code === isCode?.discountCode) {
    // }
    // if (cartDetails.totalAmt >= data.data[0]?.attributes.cartMinAmt) {
    //   setErrorMessage(
    //     `Minimum Cart Amount ₹ ${discountDetails[0]?.attributes?.cartMinAmt}`
    //   );
    //   setTimeout(() => {
    //     setErrorMessage(" ");
    //   }, 2000);
    // }
    // if (currentDate <= data.data[0]?.attributes.validTill) {
    //   setErrorMessage("This Coupan is Expired");
    // }
    if (
      data.data[0]?.attributes.code === isCode?.discountCode &&
      data.data[0]?.attributes.validTill >= currentDate &&
      data.data[0]?.attributes.cartMinAmt <= cartDetails.totalAmt
    ) {
      setShowCoupan(true);
      setSuccessMessage("Coupan Applied!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      dispatch(cartActions.discountDetails(data.data));
      localStorage.setItem("discountDetails", JSON.stringify(data.data));
    } else {
      if (data.data[0]?.attributes.code !== isCode?.discountCode) {
        setErrorMessage("Invalid code");
      }
      if (data.data[0]?.attributes.cartMinAmt >= cartDetails.totalAmt) {
        setErrorMessage(
          `Minimum Cart Amount ₹ ${data.data[0]?.attributes?.cartMinAmt}`
        );
        setTimeout(() => {
          setErrorMessage(" ");
        }, 2000);
      }
      if (data.data[0]?.attributes.validTill <= currentDate) {
        setErrorMessage("This Coupan is Expired");
      }
    }
  };

  const getValidCode = (code) => {
    getdiscountCodeAPI(
      `${Path.getDiscountCode}?filters[code]=${code.discountCode}`,
      token,
      successHandler
    );
  };

  useEffect(() => {
    if (discountDetails?.length) {
      // setCheckCode(
      //   discountDetails[0]?.attributes.code === isCode?.discountCode
      // );
      // setCheckExpirayDate(
      //   currentDate <= discountDetails[0]?.attributes.validTill
      // );
      // setCheckCartAmt(
      //   cartDetails.totalAmt >= discountDetails[0]?.attributes.cartMinAmt
      // );
      setCheckValue(discountDetails[0]?.attributes.value);
    }
    // if (discountDetails?.length === 0) {
    //   setErrorMessage("Invalid Code");
    //   setSuccessMessage("");
    // } else {
    //   setSuccessMessage("Coupan Applied!");
    //   setTimeout(() => {
    //     setSuccessMessage("");
    //   }, 3000);
    //   setErrorMessage("");
    // }
  }, [discountDetails]);
  useEffect(() => {
    if (showCoupan) {
      setDiscountAmt(Math.round(cartDetails.totalAmt * (checkValue / 100)));
      setShowCoupan(true);
    }
    // if (discountDetails?.length > 0) {
    //   if (!checkCode && !showCoupan) {
    //   }
    //   if (!checkCartAmt && !showCoupan) {
    //     setErrorMessage(
    //       `Minimum Cart Amount ₹ ${discountDetails[0]?.attributes?.cartMinAmt}`
    //     );
    //     setTimeout(() => {
    //       setErrorMessage(" ");
    //     }, 2000);
    //   }
    //   if (!checkExpirayDate && !showCoupan) {
    //     setErrorMessage("This Coupan is Expired");
    //   }
    // }

    // if (showCoupan) {
    //   setSuccessMessage("Coupan Applied!");
    //   setTimeout(() => {
    //     setSuccessMessage("");
    //   }, 3000);

    //   setErrorMessage("");
    // }
    if (
      discountDetails?.length > 0 &&
      cartDetails?.totalAmt < discountDetails[0]?.attributes?.cartMinAmt
    ) {
      setErrorMessage(
        `Minimum Cart Amount ₹ ${discountDetails[0]?.attributes?.cartMinAmt}`
      );
      setTimeout(() => {
        setErrorMessage("   ");
      }, 2000);
      setShowCoupan(false);
      dispatch(cartActions.discountDetails({}));
      localStorage.removeItem("discountDetails");
      deleteFromStorage("showCoupan");
      deleteFromStorage("discountAmt");
    }
  }, [discountDetails, checkValue, cartDetails]);

  useEffect(() => {
    if (showCoupan) {
      saveToStorage("showCoupan", showCoupan);
    }
    if (discountAmt) {
      saveToStorage("discountAmt", discountAmt);
    }
    setFinalAmt(
      discountDetails?.length > 0
        ? cartDetails.totalAmt - discountAmt
        : cartDetails.totalAmt
    );
  }, [discountAmt, discountDetails, cartDetails, showCoupan]);

  useEffect(() => {
    if (productDetails?.length) {
      const subTotal = productDetails
        .reduce((total, item) => total + item.total, 0)
        .toFixed(2);
      dispatch(
        cartActions.addCartDetails({
          subTotal: subTotal,
          finalAmt: finalAmt,
        })
      );
    }
    // if (productDetails?.length === 0) {

    if (totalProductCount === 0) {
      dispatch(cartActions.discountDetails({}));
      localStorage.removeItem("discountDetails");
      // document.getElementById("discountInput").value = "";
      deleteFromStorage("showCoupan");
      deleteFromStorage("discountAmt");
      // document.getElementById("discountInput").value = "";
      // setErrorMessage("");
      setSuccessMessage("");
    }

    // }
  }, [productDetails, finalAmt]);

  const removeHandle = () => {
    setShowCoupan(false);
    document.getElementById("discountInput").value = "";
    dispatch(cartActions.discountDetails({}));
    localStorage.removeItem("discountDetails");
    deleteFromStorage("showCoupan");
    deleteFromStorage("discountAmt");
  };

  return (
    <>
      <div className="bwcart-right">
        <div className="bwcart-right-nest">
          <div className="bd-right-grey-main">
            <div className="bw-right-title">
              <h2>Order Summary</h2>
            </div>

            <div className="bw-right-itm-ship">
              <span className="itmname">
                Sub Total (
                <span>
                  {productDetails === null ? 0 : productDetails?.length} items
                </span>
                )
              </span>
              <span className="itmprice">
                ₹{" "}
                {toIndianCurrency(
                  cartDetails?.subTotal
                    ? cartDetails?.subTotal
                    : orderDetails?.data?.amount
                )}
              </span>
              <span className="itmname">Shipping & Handling</span>
              <span className="itmprice">₹ {toIndianCurrency(0)}</span>
              {showCoupan && discountDetails?.length && (
                <>
                  <span className="itmname">
                    Discount Amount (USE CODE :{" "}
                    {discountDetails.length &&
                      discountDetails[0]?.attributes.code}{" "}
                    )
                  </span>
                  <span className="itmprice">
                    ₹ {toIndianCurrency(discountAmt)}
                    {"  "}
                    <span className="remove-icon" onClick={removeHandle}>
                      <Image
                        src="/images/crosssignimg.jpeg"
                        height="25"
                        width="25"
                        alt="crossImg"
                      />
                    </span>
                  </span>
                </>
              )}
            </div>

            <div className="bw-right-tot-pri">
              <span className="itmname">
                Total Cost <sub>(Inclusive of all Taxes)</sub>
              </span>
              <span className="itmprice">
                ₹{" "}
                {toIndianCurrency(
                  cartDetails?.totalAmt
                    ? showCoupan
                      ? finalAmt
                      : cartDetails?.totalAmt
                    : orderDetails?.data?.amount
                )}
              </span>
            </div>

            {router.asPath == "/cart" && (
              <div className="bw-right-coup-shi">
                <div className="r-inpu-con">
                  <span className="inpu-titl">Enter Discount Code</span>
                  <div className="input-group">
                    <input
                      type="text"
                      id="discountInput"
                      name="discountCode"
                      onChange={getDiscountCode}
                      disabled={
                        router.asPath == "/cart" && productDetails?.length < 0
                      }
                      className={`input-group-field ${
                        router.asPath == "/cart" &&
                        productDetails >= 0 &&
                        "disabled-button"
                      }`}
                    />
                    <div className="input-group-button">
                      <button
                        type="submit"
                        onClick={() => getValidCode(isCode)}
                        disabled={
                          router.asPath == "/cart" && productDetails?.length < 0
                        }
                        defaultValue={
                          discountDetails !== null &&
                          discountDetails[0]?.attributes.code
                        }
                        className={`inpu-butn ${
                          router.asPath == "/cart" && productDetails >= 0
                            ? "disabled-button"
                            : ""
                        }`}
                      >
                        {getdiscountCodeLoding ? (
                          <Loader />
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 34.2 34.2"
                          >
                            <path d="M31.1 0H3C1.4 0 0 1.3 0 3v28.2c0 1.7 1.3 3 3 3h28.2c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3.1-3zm-7.4 17.3l-6.6 6.6c-.1.1-.3.1-.4 0l-1.1-1.1c-.1-.1-.1-.3 0-.4l4.3-4.3h-8.5c-.2 0-.3-.1-.3-.3v-1.5c0-.2.1-.3.3-.3h8.5l-4.3-4.3c-.1-.1-.1-.3 0-.4l1.1-1.1c.1-.1.3-.1.4 0l6.6 6.6c.1.2.1.4 0 .5z" />
                          </svg>
                        )}
                        {/* <svg viewBox="0 0 24 24">
                          <path
                            fill-rule="evenodd"
                            d="M 20 12 C 20 16.417969 16.417969 20 12 20 C 7.582031 20 4 16.417969 4 12 C 4 7.582031 7.582031 4 12 4 C 13.113281 4 14.167969 4.238281 15.132813 4.648438 L 12.628906 7.324219 L 20.121094 7.074219 L 19.484375 0 L 17.273438 2.359375 C 15.710938 1.5 13.914063 1 12 1 C 5.925781 1 1 5.925781 1 12 C 1 18.074219 5.925781 23 12 23 C 18.074219 23 23 18.074219 23 12 Z"
                          />
                        </svg> */}
                      </button>
                    </div>
                  </div>
                </div>
                {showCoupan &&
                discountDetails !== null &&
                discountDetails.length > 0 ? (
                  <span className="success-message">{sucessMessage}</span>
                ) : (
                  <span className="error-message">{errorMessage}</span>
                )}{" "}
              </div>
            )}
            <div className="bw-right-chk-batn">
              {buttonText == "" ? (
                <></>
              ) : (
                <button
                  onClick={handleClick}
                  disabled={
                    router.asPath == "/cart" && productDetails?.length < 0
                  }
                  className={
                    router.asPath == "/cart" &&
                    productDetails >= 0 &&
                    "disabled-button"
                  }
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M 13.619141 1.7519531 C 13.319328 1.7000156 13 1.9189844 13 2.2714844 L 13 4 L 10 4 C 9.448 4 9 4.448 9 5 C 9 5.552 9.448 6 10 6 L 13 6 L 13 7.7285156 C 13 8.1975156 13.568391 8.4316094 13.900391 8.0996094 L 16.423828 5.5761719 C 16.741828 5.2571719 16.741828 4.7418281 16.423828 4.4238281 L 13.900391 1.8984375 C 13.817391 1.8154375 13.719078 1.7692656 13.619141 1.7519531 z M 4.0742188 2.0039062 L 3.0039062 2.0078125 C 2.4519063 2.0108125 2.0058125 2.4616719 2.0078125 3.0136719 C 2.0108125 3.5656719 2.4616719 4.0108125 3.0136719 4.0078125 L 4.0839844 4.0039062 L 7.5117188 11.908203 L 6.3144531 13.824219 C 5.9144531 14.464219 5.8937656 15.272641 6.2597656 15.931641 C 6.6257656 16.590641 7.3221719 17 8.0761719 17 L 19 17 C 19.552 17 20 16.552 20 16 C 20 15.448 19.552 15 19 15 L 8.0761719 15 L 8.0117188 14.882812 L 9.1875 13 L 16.521484 13 C 17.247484 13 17.916578 12.606656 18.267578 11.972656 L 21.896484 5.4414062 C 22.164484 4.9594062 21.989812 4.3500312 21.507812 4.0820312 C 21.024812 3.8130313 20.416438 3.9877031 20.148438 4.4707031 L 16.521484 11 L 9.2851562 11 L 5.9296875 3.234375 C 5.6186875 2.486375 4.8852187 1.9999062 4.0742188 2.0039062 z M 8 18 A 2 2 0 0 0 6 20 A 2 2 0 0 0 8 22 A 2 2 0 0 0 10 20 A 2 2 0 0 0 8 18 z M 18 18 A 2 2 0 0 0 16 20 A 2 2 0 0 0 18 22 A 2 2 0 0 0 20 20 A 2 2 0 0 0 18 18 z" />
                  </svg>{" "}
                  {buttonText}
                </button>
              )}
            </div>
            {router.asPath == "/cart" && (
              <div className="bw-right-chk-batn">
                <button onClick={continueClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19.16 21.94h4.51l-9.83-9.83 9.83-9.83h-4.51l-9.85 9.83 9.85 9.83zm-8.94 0h4.51L4.9 12.11l9.85-9.83h-4.53L.39 12.11l9.83 9.83z" />
                  </svg>{" "}
                  Continue Shopping
                </button>
              </div>
            )}
          </div>

          {Object.keys(cartDetails).length > 0 && <ShopingInstruction />}
        </div>
      </div>
    </>
  );
};

export default OrderSummary;

{
  /* <div className="bw-right-coup-shi">
  <div class="r-inpu-con">
    <div class="input-group">
      <div className="foot-area">
        <div className="r-inpu-con foot2">
          <span className="inpu-titl">Enter Discount Code</span>
          <span className="inpnewlet">
            <form>
              <input type="text" id="emailValue" />

              <button>
                {getdiscountCodeLoding ? (
                  <Loader />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 34.2 34.2"
                  >
                    <path d="M31.1 0H3C1.4 0 0 1.3 0 3v28.2c0 1.7 1.3 3 3 3h28.2c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3.1-3zm-7.4 17.3l-6.6 6.6c-.1.1-.3.1-.4 0l-1.1-1.1c-.1-.1-.1-.3 0-.4l4.3-4.3h-8.5c-.2 0-.3-.1-.3-.3v-1.5c0-.2.1-.3.3-.3h8.5l-4.3-4.3c-.1-.1-.1-.3 0-.4l1.1-1.1c.1-.1.3-.1.4 0l6.6 6.6c.1.2.1.4 0 .5z" />
                  </svg>
                )}
              </button>
            </form>
          </span>
          <span class="input-group-button">
            <button type="submit" class="inpu-butn">
              <svg viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M 20 12 C 20 16.417969 16.417969 20 12 20 C 7.582031 20 4 16.417969 4 12 C 4 7.582031 7.582031 4 12 4 C 13.113281 4 14.167969 4.238281 15.132813 4.648438 L 12.628906 7.324219 L 20.121094 7.074219 L 19.484375 0 L 17.273438 2.359375 C 15.710938 1.5 13.914063 1 12 1 C 5.925781 1 1 5.925781 1 12 C 1 18.074219 5.925781 23 12 23 C 18.074219 23 23 18.074219 23 12 Z"
                />
              </svg>
            </button>
          </span>

          <div className="input-group">
                    <input
                      className="input-group-field"
                      type="text"
                      name="discountCode"
                      onChange={getDiscountCode}
                      // readOnly={
                      //   getdiscountCodeData?.data?.length >= 0 ? true : false
                      // }
                    />

                    <div className="input-group-button">
                      <button
                        type="submit"
                        className="inpu-butn"
                        onClick={() => getValidCode(isCode)}
                      >
                        {getdiscountCodeLoding ? (
                          <Loader />
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 34.2 34.2"
                          >
                            <path d="M31.1 0H3C1.4 0 0 1.3 0 3v28.2c0 1.7 1.3 3 3 3h28.2c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3.1-3zm-7.4 17.3l-6.6 6.6c-.1.1-.3.1-.4 0l-1.1-1.1c-.1-.1-.1-.3 0-.4l4.3-4.3h-8.5c-.2 0-.3-.1-.3-.3v-1.5c0-.2.1-.3.3-.3h8.5l-4.3-4.3c-.1-.1-.1-.3 0-.4l1.1-1.1c.1-.1.3-.1.4 0l6.6 6.6c.1.2.1.4 0 .5z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
        </div>
      </div>
    </div>
  </div>
</div>; */
}
