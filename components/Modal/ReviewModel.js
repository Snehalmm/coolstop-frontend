import Image from "next/image";
import { useEffect, useState } from "react";
import usePostApi from "../../utils/usePostApi";
import { useForm } from "react-hook-form";
import { Path } from "../../utils/apiService";
import StarRating from "../Common/StarRating";
import { useSelector } from "react-redux";
import { token } from "../../utils/config";
import Loader from "../common/Loader";

const ReviewModel = (props) => {
  const [authError, setAuthError] = useState("");
  const [errorHandle, setErrorHandle] = useState(false);
  const [qualityRating, setQualityRating] = useState(0);
  const [moneyRating, setMoneyRating] = useState(0);
  const [styleRating, setStyleRating] = useState(0);
  const userDetails = useSelector((state) => state.user.userDetails);

  const qualityHandleChange = (value) => {
    setQualityRating(value);
  };
  const moneyHandleChange = (value) => {
    setMoneyRating(value);
  };
  const styleHandleChange = (value) => {
    setStyleRating(value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    isLoading: writeReviewLoading,
    error: writeReviewError,
    data: writeReviewData,
    sendHTTPPostRequest: writeReviewApi,
  } = usePostApi();

  const submitReview = (item) => {
    item["products"] = props.data;
    item["qualityRating"] = qualityRating;
    item["moneyRating"] = moneyRating;
    item["styleRating"] = styleRating;
    let payload = {
      data: item,
    };
    writeReviewApi(Path.reviews, payload, userDetails.jwt);

    setTimeout(function () {
      if (authError === "Login Required") {
        props.setIsOpen(false);
      } else {
        props.setIsOpen(false);
      }
    }, 3000);
  };

  useEffect(() => {
    if (writeReviewError?.response.data.error.name === "UnauthorizedError") {
      setAuthError("Login Required");
      props.setIsOpen(true);
    }
  }, [writeReviewError]);

  const closeModel = () => {
    props.setIsOpen(false);
  };

  return (
    <>
      <div
        className={`reveal-overlay ${
          props.isopen ? "scale-in-up mui-enter mui-enter-active" : ""
        }`}
        style={{ display: props.isopen ? "block" : "none", top: "30px" }}
      >
        <div
          className={`small reveal rev-modal-style bounce-in-out ${
            props.isopen ? "scale-in-up mui-enter mui-enter-active" : ""
          } `}
          id="review-form-reveal"
          data-reveal
          data-close-on-click="true"
          data-animation-in="scale-in-up"
          data-animation-out="scale-out-down"
          style={{ display: props.isopen ? "block" : "none", top: "30px" }}
        >
          <h4>Write A Review</h4>
          <span className="retrive-password-text">
            Kindly Submit Your Feedback For The Product
          </span>
          <form onSubmit={handleSubmit(submitReview)}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              autocomplete="off"
              {...register("name", { required: true })}
            />
            {errors.name && errors.name.type === "required" && (
              <p className="error-message">This field is required</p>
            )}

            <label>City</label>
            <input
              type="text"
              placeholder="Enter Your City"
              autocomplete="off"
              {...register("city", { required: true })}
            />

            {errors.city && errors.city.type === "required" && (
              <p className="error-message">This field is required</p>
            )}

            <label>Your Review Title</label>
            <input
              type="text"
              {...register("reviewTitle", { required: true })}
              placeholder="Enter Your Review Title"
              autocomplete="off"
            />
            {errors.reviewTitle && errors.reviewTitle.type === "required" && (
              <p className="error-message">This field is required</p>
            )}

            <label>Please Enter Your Comment</label>
            <textarea
              placeholder="Enter Your Comments"
              rows="4"
              {...register("reviewComment", {
                required: true,
                minLength: {
                  value: 4,
                  message: "reviewComment must be at least 4 characters",
                },
              })}
              autocomplete="off"
            ></textarea>
            {errors.reviewComment &&
              errors.reviewComment.type === "required" && (
                <p className="error-message">This field is required</p>
              )}

            {errors.reviewComment &&
              errors.reviewComment.type === "minLength" && (
                <p className="error-message">{errors.reviewComment?.message}</p>
              )}

            <span className="rev_frm_que">
              How Many Stars Would You Give for the Following?
            </span>

            <div className="modal-rating-cont">
              <div className="modal-rating">
                {" "}
                <span className="rev_cat_tit">Quality:</span>
                <div id="quality_1" style={{ cursor: "pointer" }}>
                  <StarRating
                    count={5}
                    size={25}
                    value={qualityRating}
                    activeColor={"#FFA534"}
                    inactiveColor={"#ddd"}
                    onChange={qualityHandleChange}
                  />
                </div>
              </div>

              <div className="modal-rating">
                {" "}
                <span className="rev_cat_tit">Value For Money:</span>
                <div id="money_1" style={{ cursor: "pointer" }}>
                  <StarRating
                    count={5}
                    size={25}
                    value={moneyRating}
                    activeColor={"#FFA534"}
                    inactiveColor={"#ddd"}
                    onChange={moneyHandleChange}
                  />
                </div>
              </div>

              <div className="modal-rating">
                {" "}
                <span className="rev_cat_tit">Style:</span>
                <div id="style_1" style={{ cursor: "pointer" }}>
                  <StarRating
                    count={5}
                    size={25}
                    value={styleRating}
                    activeColor={"#FFA534"}
                    inactiveColor={"#ddd"}
                    onChange={styleHandleChange}
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                  marginTop: "10px",
                  marginBottom: 0,
                }}
              >
                {authError}
              </p>

              <button className="button_med" type="submit">
                {writeReviewLoading ? <Loader /> : "Submit"}
              </button>
            </div>
          </form>

          <button
            className="close-button"
            data-close
            aria-label="Close reveal"
            type="button"
            onClick={closeModel}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ReviewModel;
