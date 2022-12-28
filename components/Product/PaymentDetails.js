import { useEffect, useState } from "react";
import OrderSummary from "./OrderSummary";
import { cartActions } from "../../stores/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromStorage, getFromStorage } from "../../utils/storage";
import { useRouter } from "next/router";
import useRazorpay from "react-razorpay";
import axios from "axios";
import { serverUrl } from "../../utils/config";
import ConfirmationModel from "../Modal/ConfirmationModel";

const PaymentDetails = () => {
  const Razorpay = useRazorpay();
  const dispatch = useDispatch();
  const router = useRouter();
  const [showModel, setShowModel] = useState(false);
  const userDetails = useSelector((state) => state.user.userDetails);

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

  const onPayClick = () => {
    const options = {
      key: process.env.RAZOR_PAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: orderDetails?.data?.amount,
      currency: orderDetails?.data?.currency,
      name: "Test Corp.",
      description: "Test Transaction",
      order_id: orderDetails?.data?.id,
      handler: async function (response) {
        const data = {
          orderCreationId: orderDetails?.data?.id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
          date: orderDetails?.data?.created_at.toString(),
          paymentMode: "online",
          paymentStatus: "paid",
        };

        const result = await axios({
          method: "post",
          url: `${serverUrl}/api/payment/success`,
          headers: {
            Authorization: `Bearer ${userDetails.jwt}`,
          },
          data: data,
        });
        if (result.status === 200) {
          router.push("/confirmation");
        } else {
          router.push("/payment-error");
        }
        // if (result.data.success) {
        //   setCookie('user', result?.data.data.package.type);
        //   localStorage.setItem(
        //     'accessToken',
        //     JSON.stringify(result?.data.data.accessToken)
        //   );
        //   localStorage.setItem(
        //     'refreshToken',
        //     JSON.stringify(result?.data?.data.refreshToken)
        //   );
        //   refetch();
        //   router.replace('/pricing');
        // }
      },
      prefill: {
        name: userDetails.user.firstname.concat(
          " ",
          userDetails?.user?.lastname
        ),
        email: userDetails.user.email,
        contact: userDetails.user.contactNo,
      },
      notes: {
        address: "test at Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const offPayClick = () => {
    setShowModel(true);
    // router.push("/confirmation");
  };

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
                    <span style={{ fontSize: "20px" }}>Billing Address </span>
                    <p style={{ margin: "10px 0", fontSize: "16px" }}>
                      {userDetails?.user?.billingAddress?.address1}
                    </p>
                    <p style={{ margin: "10px 0", fontSize: "16px" }}>
                      {userDetails?.user?.billingAddress?.address2}
                    </p>
                    <p style={{ margin: "10px 0", fontSize: "16px" }}>
                      {userDetails?.user?.billingAddress?.townOrCity}
                    </p>
                    <p style={{ margin: "10px 0", fontSize: "16px" }}>
                      {userDetails?.user?.billingAddress?.state}
                    </p>
                    <p style={{ margin: "10px 0", fontSize: "16px" }}>
                      {userDetails?.user?.billingAddress?.postcode}
                    </p>
                  </div>
                </div>
                <div className="pay-method-src">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M22 4h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm0 13.5c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-6.5h20v6.5zm0-9.5h-20v-1.5c0-.276.224-.5.5-.5h19c.276 0 .5.224.5.5v1.5zm-9 6h-9v-1h9v1zm-3 2h-6v-1h6v1zm10-2h-3v-1h3v1z" />
                  </svg>
                  <div className="method-src-det">
                    <span style={{ fontSize: "20px" }}>Shipping Address</span>
                    <p style={{ margin: "10px 0", fontSize: "16px" }}>
                      {userDetails?.user?.shippingAddress?.address1}
                    </p>
                    <p style={{ margin: "10px 0", fontSize: "16px" }}>
                      {userDetails?.user?.shippingAddress?.address2}
                    </p>
                    <p style={{ margin: "10px 0", fontSize: "16px" }}>
                      {userDetails?.user?.shippingAddress?.townOrCity}
                    </p>
                    <p style={{ margin: "10px 0", fontSize: "16px" }}>
                      {userDetails?.user?.shippingAddress?.state}
                    </p>
                    <p style={{ margin: "10px 0", fontSize: "16px" }}>
                      {userDetails?.user?.shippingAddress?.postcode}
                    </p>
                  </div>
                </div>
                <div className="pay-method-src">
                  <div className="method-src-det">
                    <span style={{ fontSize: "20px" }}>
                      Select Your Payment Mode
                    </span>
                    <form>
                      <div className="payment-option" onClick={onPayClick}>
                        <input
                          type="radio"
                          id="online-payment"
                          name="payment-mode"
                        />{" "}
                        <label for="online-payment" className="on-payment">
                          Online{" "}
                        </label>
                      </div>
                      <div className="payment-option" onClick={offPayClick}>
                        <input
                          type="radio"
                          id="offline-payment"
                          name="payment-mode"
                        />
                        <label for="offline-payment" className="off-payment">
                          Offline
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bwcart-right">
            <div className="bwcart-right-nest">
              <OrderSummary buttonText={""} />
            </div>
          </div>
        </div>
      </section>
      {showModel && <ConfirmationModel setShowModel={setShowModel} />}
    </>
  );
};

export default PaymentDetails;
