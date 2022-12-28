import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import usePostApi from "../../utils/usePostApi";

const ConfirmationModel = ({ setShowModel }) => {
  const router = useRouter();
  const orderDetails = useSelector((state) => {
    return state.cart.orderDetails;
  });
  const userDetails = useSelector((state) => state.user.userDetails);

  const {
    isLoading: offlinePaymentLoading,
    error: offlinePaymentError,
    data: offlinePaymentData,
    sendHTTPPostRequest: offlinePaymentAPI,
  } = usePostApi();

  const successHandler = (data) => {
    if (data.status === "200") {
      router.push("/confirmation");
    } else {
      router.push("/payment-error");
    }
  };

  const confirmClick = () => {
    const data = {
      orderCreationId: orderDetails?.data?.id,
      date: orderDetails?.data?.created_at.toString(),
      paymentMode: "offline",
      paymentStatus: "unpaid",
    };
    offlinePaymentAPI(
      `/api/payment/success`,
      data,
      userDetails.jwt,
      successHandler
    );

    // if (result.status === 200) {
    //   router.push("/confirmation");
    // } else {
    //   router.push("/payment-error");
    // }
    // router.push("/confirmation");
  };
  const closeModel = () => {
    setShowModel(false);
  };
  return (
    <>
      <div id="id01" className="modal">
        {/* <span
          onclick="document.getElementById('id01').style.display='none'"
          className="close"
          title="Close Modal"
        >
          ×
        </span> */}
        <form className="modal-content" action="/action_page.php">
          <div className="container">
            <h1>Confirmation</h1>
            <p>Are you sure confirm your order?</p>

            <div className="clearfix">
              <button
                type="button"
                className="cancelbtn"
                onClick={confirmClick}
              >
                Yes
              </button>
              <button type="button" className="deletebtn" onClick={closeModel}>
                No
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ConfirmationModel;
