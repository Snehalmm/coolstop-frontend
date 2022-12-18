import { useEffect, useState } from "react";
import OrderSummary from "./OrderSummary";
import { cartActions } from "../../stores/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromStorage, getFromStorage } from "../../utils/storage";

const PaymentDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    deleteFromStorage("products");
    deleteFromStorage("relatedProducts");
    dispatch(cartActions.updateProduct(null));
    dispatch(cartActions.addCartDetails({}));
  }, []);

  useEffect(() => {
    const getorderDetails = getFromStorage("orderDetails");
    dispatch(cartActions.saveOrderDetails(getorderDetails));
  }, []);

  const orderDetails = useSelector((state) => {
    return state.cart.orderDetails;
  });

  return (
    <>
      <section className="grid-container">
        <div className="bwcart-main-con">
          <div className="bwcart-left">
            <div className="ctc-cart-con">
              <div className="ctc-tit-con">
                <svg viewBox="0 0 32 32">
                  <path d="M 2 5 L 2 21 L 30 21 L 30 5 Z M 5.914063 7 L 26.089844 7 C 26.03125 7.160156 26 7.328125 26 7.5 C 26 8.328125 26.671875 9 27.5 9 C 27.671875 9 27.839844 8.96875 28 8.914063 L 28 17.089844 C 27.839844 17.03125 27.671875 17 27.5 17 C 26.671875 17 26 17.671875 26 18.5 C 26 18.671875 26.03125 18.839844 26.089844 19 L 5.914063 19 C 5.96875 18.839844 6 18.671875 6 18.5 C 6 17.671875 5.328125 17 4.5 17 C 4.328125 17 4.160156 17.03125 4 17.089844 L 4 8.914063 C 4.160156 8.96875 4.328125 9 4.5 9 C 5.328125 9 6 8.328125 6 7.5 C 6 7.328125 5.96875 7.160156 5.914063 7 Z M 16 9 C 13.789063 9 12 10.789063 12 13 L 12 14 L 12.203125 14 C 12.652344 15.710938 14.144531 17 16 17 C 17.855469 17 19.347656 15.710938 19.796875 14 L 20 14 L 20 13 C 20 10.789063 18.210938 9 16 9 Z M 16 11 C 17.191406 11 18 11.808594 18 13 C 18 14.191406 17.191406 15 16 15 C 14.808594 15 14 14.191406 14 13 C 14 11.808594 14.808594 11 16 11 Z M 9 11.5 C 8.171875 11.5 7.5 12.171875 7.5 13 C 7.5 13.828125 8.171875 14.5 9 14.5 C 9.828125 14.5 10.5 13.828125 10.5 13 C 10.5 12.171875 9.828125 11.5 9 11.5 Z M 23 11.5 C 22.171875 11.5 21.5 12.171875 21.5 13 C 21.5 13.828125 22.171875 14.5 23 14.5 C 23.828125 14.5 24.5 13.828125 24.5 13 C 24.5 12.171875 23.828125 11.5 23 11.5 Z M 2 22 L 2 24 L 3.003906 24 C 3.003906 24 17.339844 23.960938 27.746094 26.71875 L 29 27.046875 L 29 22 L 27 22 L 27 23.089844 C 26.839844 23.03125 26.671875 23 26.5 23 C 25.824219 23 25.230469 23.457031 25.050781 24.109375 C 14.777344 21.988281 3.011719 22 3 22 Z" />
                </svg>
                <div className="ctc-tit">
                  <h2>Payment Method</h2>
                </div>
              </div>

              <div className="pay-method-frm">
                <div className="payment-method-order-id-container">
                  <dd>
                    Your Order ID
                    <span>{orderDetails?.id}</span>
                  </dd>
                </div>
              </div>

              <div className="pay-method-grid-main">
                <div className="pay-method-src">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M22 4h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm0 13.5c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-6.5h20v6.5zm0-9.5h-20v-1.5c0-.276.224-.5.5-.5h19c.276 0 .5.224.5.5v1.5zm-9 6h-9v-1h9v1zm-3 2h-6v-1h6v1zm10-2h-3v-1h3v1z" />
                  </svg>
                  <div className="method-src-det">
                    <span>Cards (Credit/Debit)</span>
                    <p>Visa, Mastercard, Diners Club, Rupay, Amex</p>
                  </div>
                </div>
                <div className="pay-method-src">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M2.9 9.1h18.2c.5 0 .9-.4.9-.9 0-.4-.3-.7-.6-.9l-9-4.1c-.2-.1-.5-.1-.7 0L2.5 7.4c-.4.1-.6.6-.5 1 .1.4.5.7.9.7zM4 19c-.5 0-.9.4-.9.9s.4.9.9.9h15.9c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-.2v-7.3h.5c.4 0 .8-.4.8-.9s-.4-.9-.8-.9H4c-.4 0-.8.4-.8.9s.4.9.8.9h.3V19H4zm2.1-7.3h2.7V19H6.1v-7.3zm4.5 0h2.7V19h-2.7v-7.3zm4.6 0h2.7V19h-2.7v-7.3z" />
                  </svg>
                  <div className="method-src-det">
                    <span>Net Banking</span>
                    <p>All Indian Banks</p>
                  </div>
                </div>
                <div className="pay-method-src">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="m10.6 22 .7-6.2 3.6-3.2L12 8.7l.7-6.2 7.8 10.7-9.9 8.8zm-.5-13.5-5-6.8L3 21.1l6.3-5.6 3.6-3.2-2.8-3.8z" />
                  </svg>
                  <div className="method-src-det">
                    <span>UPI</span>
                    <p>Gpay, PhonePe, BHIM, Paytm</p>
                  </div>
                </div>
                <div className="pay-method-src">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M3.5 2.4C2.1 2.4 1 3.5 1 4.9v14.8c0 1 .8 1.9 1.9 1.9h17.4c1 0 1.9-.8 1.9-1.9v-3.2h.2c.4 0 .6-.3.6-.6V11c0-.4-.3-.6-.6-.6h-.2V6.8h-2.3V3c0-.2-.1-.3-.2-.5-.1-.1-.3-.2-.5-.2l-15.7.1zm0 1.3h14.4v2.4H3.5c-.6 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zM2.3 7.1c.3.2.7.3 1.2.3h17.4v2.9h-2.1c-1.7 0-3 1.4-3 3.1 0 1.7 1.4 3.1 3 3.1h2.1v3.2c0 .3-.2.6-.6.6H2.9c-.3 0-.6-.2-.6-.6V7.1zm16.5 4.5h2.9v3.6h-2.9c-1 0-1.7-.8-1.7-1.8s.7-1.8 1.7-1.8zm.2.9c-.5 0-.9.4-.9.9s.4.9.9.9.9-.4.9-.9-.4-.9-.9-.9z" />
                  </svg>
                  <div className="method-src-det">
                    <span>Wallet</span>
                    <p>Amazon Pay, Paytm, PhonePe & More</p>
                  </div>
                </div>
                <div className="pay-method-src">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M14.2 1.5c-1 0-1 1.5 0 1.5h5.6c.7 0 1.2.6 1.2 1.2V9c0 1 1.5 1 1.5 0V4.2c0-1.4-1.2-2.6-2.6-2.6l-5.7-.1zM4.1 1.5c-1.4 0-2.6 1.2-2.6 2.6V9c0 1 1.5 1 1.5 0V4.2C3 3.6 3.5 3 4.1 3h5.6c1 0 1-1.5 0-1.5H4.1zM2.3 14.2c-.4 0-.8.4-.8.8v4.9c0 1.4 1.2 2.6 2.6 2.6h5.6c1 0 1-1.5 0-1.5H4.1c-.6 0-1.1-.6-1.1-1.2v-4.9c0-.4-.4-.7-.7-.7zM21.7 14.2c-.4 0-.8.4-.8.8v4.9c0 .6-.5 1.1-1.1 1.1h-5.6c-1 0-1 1.5 0 1.5h5.6c1.4 0 2.6-1.2 2.6-2.6V15c0-.5-.3-.8-.7-.8zM2.3 11.2c-1 0-1 1.5 0 1.5h19.4c1 0 1-1.5 0-1.5H2.3z" />
                  </svg>
                  <div className="method-src-det">
                    <span>Scan and Pay</span>
                    <p>Using Gpay, Paytm, PhonePe & More</p>
                  </div>
                </div>
                <div className="pay-method-src">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      fill="#F06321"
                      d="M7.4 5.5C12.7.3 19-1.1 21.6 2.5c2.5 3.6.3 10.7-4.9 15.9-5.3 5.3-11.7 6.6-14.3 3-2.5-3.5-.3-10.7 5-15.9"
                    />
                    <path
                      fill="#AE282E"
                      d="M10.9 2.7c-.6.4-1.2.9-1.7 1.5C4.5 8.7 2.6 15 4.9 18.1c2.4 3.1 8 2 12.7-2.6 2.5-2.5 4.2-5.3 4.9-8 .2-2-.1-3.7-1-5-1.9-2.8-6.3-2.6-10.6.2"
                    />
                    <path
                      fill="#FFF"
                      d="M17.5 3.3v.1c0 .7-.4 1.5-1.1 2.2-1 1-2.4 1.4-3 .8-.7-.6-.3-2 .8-3.1 1.1-1 2.5-1.4 3-.8.2.3.3.5.3.8m-4 17.7c-2.5 1.9-5 2.8-7.5 2.4 1 0 1.9-1.1 2.6-2.7.7-1.6 1.1-3 1.4-4.4.5-2.2.5-3.7.3-4.1-.4-.5-1.4-.4-2.4.2-.5.3-1.2.1-.4-.9.8-1 4.1-3.4 5.3-3.8 1.2-.3 2.7.2 2.2 1.6-.3 1.1-4.9 13-1.5 11.7"
                    />
                  </svg>
                  <div className="method-src-det">
                    <span>ICICI Bank PayLater</span>
                  </div>
                </div>
                <div className="pay-method-src">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fillRule="evenodd" clipRule="evenodd">
                      <path
                        fill="#EE3362"
                        d="M1.3 19.8c-.6 0-.8-.3-.8-.8V5.9c0-.6.3-.8.8-.8h2.6c.5 0 .8.2.8.8v10.2"
                      />
                      <path
                        fill="#111333"
                        d="m1.3 3.9 15.8 5.7c.7.3.8.5.8 1.1v2.6c0 .6-.1.8-.8 1.1L1.3 20.1c-.3.1-.8 0-.8-.5v-3c0-.7.2-.9.8-1.1l11-3.5-11-3.7C.7 8.1.5 7.9.5 7.2V4.4c0-.6.4-.7.8-.5z"
                      />
                      <path
                        fill="#EE3362"
                        d="m6.9 3.9 15.8 5.7c.7.3.8.5.8 1.1v2.6c0 .6-.1.8-.8 1.1L6.9 20.1c-.3.1-.8 0-.8-.5v-3c0-.7.2-.9.8-1.1l11-3.5L7 8.3c-.7-.2-.9-.4-.9-1.1V4.4c0-.6.4-.7.8-.5z"
                      />
                    </g>
                  </svg>
                  <div className="method-src-det">
                    <span>LazyPay</span>
                    <p>Pay later with no extra cost</p>
                  </div>
                </div>
                <div className="pay-method-src">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      fill="#6E7BF2"
                      d="M12 23.5c-2.1 0-4.3-.6-6.1-1.7L13.6.5c1.4.2 2.7.6 3.9 1.3 5.6 3.1 7.6 10.1 4.6 15.7-2 3.7-5.9 6-10.1 6z"
                    />
                    <path
                      fill="#4285F4"
                      d="M8 11.9c0-.2 0-.4-.1-.6H5.3v1.1h1.6c-.1.4-.3.7-.6.9l.8.7h.1c.5-.5.8-1.2.8-2.1"
                    />
                    <path
                      fill="#34A853"
                      d="M5.3 14.7c.8 0 1.4-.3 1.9-.7l-.9-.7c-.3.2-.6.3-1 .3-.7 0-1.4-.5-1.6-1.2l-.9.7c.5 1 1.4 1.6 2.5 1.6"
                    />
                    <path
                      fill="#FBBC05"
                      d="M3.7 12.4c-.1-.2-.1-.4-.1-.6 0-.2 0-.4.1-.6l-.9-.7c-.4.8-.4 1.7 0 2.5l.9-.6"
                    />
                    <path
                      fill="#EB4335"
                      d="M5.3 10.1c.4 0 .8.1 1.1.4l.8-.8C6.7 9.3 6 9 5.3 9c-1.1 0-2.1.6-2.5 1.6l.9.7c.2-.7.9-1.2 1.6-1.2"
                    />
                    <path
                      fill="#FFF"
                      d="M12.5 12.1v2.1h-.7V9.1h1.7c.4 0 .8.1 1.1.4.6.5.6 1.5.1 2.1l-.1.1c-.3.3-.7.4-1.1.4h-1zm0-2.4v1.8h1.1c.2 0 .5-.1.7-.3.3-.3.4-.9 0-1.2-.2-.2-.4-.3-.7-.3h-1.1zm4.2.9c.5 0 .9.1 1.2.4.3.3.4.6.4 1.1v2.1h-.6v-.5c-.3.4-.6.6-1.1.6-.4 0-.7-.1-1-.3-.3-.2-.4-.5-.4-.9 0-.3.1-.7.4-.9.3-.2.6-.3 1.1-.3.3 0 .7.1 1 .2V12c0-.2-.1-.4-.3-.6-.2-.2-.4-.2-.6-.2-.4 0-.7.2-.9.5l-.6-.4c.3-.5.8-.7 1.4-.7zm-.9 2.5c0 .2.1.3.2.4.1.1.3.2.5.2.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7-.2-.2-.5-.2-.9-.2-.2 0-.5.1-.7.2 0 .1-.1.2-.1.4zm6.1-2.4-2.2 5H19l.8-1.8-1.4-3.3h.7l1 2.5 1-2.5.8.1z"
                    />
                  </svg>
                  <div className="method-src-det">
                    <span>Google Pay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bwcart-right">
            <div className="bwcart-right-nest">
              <OrderSummary buttonText={"Pay Now"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentDetails;
