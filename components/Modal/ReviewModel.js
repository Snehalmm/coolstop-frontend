import Image from "next/image";
import { useState } from "react";
import usePostApi from "../../utils/usePostApi";
import { useForm } from "react-hook-form";
import { Path } from "../../utils/apiService";
import StarRating from "../Product/StarRating";

const ReviewModel = (props) => {
  const [qualityRating, setQualityRating] = useState(0);
  const [MoneyRating, setMoneyRating] = useState(0);
  const [styleRating, setStyleRating] = useState(0);

  const qualityHandleChange = (value) => {
    setQualityRating(value);
  };
  const moneyHandleChange = (value) => {
    setMoneyRating(value);
  };
  const styleHandleChange = (value) => {
    setStyleRating(value);
  };

  // const totalRating = qualityRating + MoneyRating + styleRating;
  // const rating = Math.round(totalRating / 3);

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
    item["rating"] = 5;
    let payload = {
      data: item,
    };
    writeReviewApi(Path.writeReview, payload);
  };

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
              {...register("name", { required: true })}
              placeholder="Enter Your Name"
              autocomplete="off"
            />

            {errors.name && errors.name.type === "required" && (
              <p className="error-message">This field is required</p>
            )}

            <label>City</label>
            <input
              type="text"
              {...register("city", { required: true })}
              placeholder="Enter Your City"
              autocomplete="off"
            />

            {errors.city && errors.city.type === "required" && (
              <p className="error-message">This field is required</p>
            )}

            <label>Your Review Title</label>
            <input
              type="text"
              {...register("reviewTitle")}
              placeholder="Enter Your Review Title"
              autocomplete="off"
            />

            <label>Please Enter Your Comment</label>
            <textarea
              placeholder="Enter Your Comments"
              rows="4"
              {...register("reviewComment", { required: true })}
              required
              autocomplete="off"
            ></textarea>
            {errors.reviewComment &&
              errors.reviewComment.type === "required" && (
                <p className="error-message">This field is required</p>
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
                    value={MoneyRating}
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
              <button className="button_med" onClick={closeModel}>
                Submit
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
