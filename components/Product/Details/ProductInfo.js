import React, { useState, useEffect } from "react";
import ReviewModel from "../../Modal/ReviewModel";
import EmiView from "../../Modal/EmiView";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { cartActions } from "../../../stores/slices/cartSlice";
import { toIndianCurrency } from "../../../utils/services";
import StarRating from "../StarRating";

const ProductInfo = ({ data, item }) => {
  const router = useRouter();
  const cartItems = useSelector((state) => {
    return state.cart.items;
  });
  const dispatch = useDispatch();

  const [isopen, setIsOpen] = useState(false);
  const [showMe, setShowMe] = useState(false);
  const [count, setCount] = useState(1);

  const openModel = () => {
    setIsOpen(true);
  };
  const toggleHandle = () => {
    setShowMe(true);
  };

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  var mrp = parseInt(data.mrp);
  var csp = parseInt(data.csp);
  const getprice = mrp - csp;
  const getDiscount = Math.round((getprice / mrp) * 100);

  const addItem = () => {
    var cartItemObj = {
      id: item.id,
      slug: data.slug,
      name: data.name,
      csp: data.csp,
      total: count * data.csp,
      mrp: data.mrp,
      image: data.productImages.image.data[0].attributes.url,
      qty: count,
      discountCode: data?.discount_coupon?.data?.attributes.code,
    };
    dispatch(cartActions.addProduct(cartItemObj));

    router.push("/cart");
  };

  return (
    <>
      <div className="pd-top2">
        <div className="prodpg-tit-rev">
          <div className="prodpg-tit">
            <h2>{data.name}</h2>
            <span className="rati-count-text">
              <StarRating
                count={5}
                size={25}
                value={data.reviewStar}
                disabled={true}
                activeColor={"#FFA534"}
                inactiveColor={"#ddd"}
              />
              1 out of 1 customers rated 100%
            </span>
            <span className="prod-code">{data.modelNo}</span>
          </div>

          <div className="prodpg-rev">
            <StarRating
              count={5}
              size={25}
              value={data.reviewStar}
              disabled={true}
              activeColor={"#FFA534"}
              inactiveColor={"#ddd"}
            />
            <p>Rate This Item</p>
            <a
              className="button_sm"
              data-toggle="review-form-reveal"
              onClick={openModel}
            >
              Write a Review
            </a>
          </div>
        </div>

        <div className="prodpg-det-pri">
          <div className="prodpg-det-pri-1">
            <div className="ppg-price-mrp">
              <div className="pri-tag-tit">Mrp</div>
              <s className="ppg-mrp">&#8377;{toIndianCurrency(data.mrp)}</s>
            </div>

            <div className="ppg-price-csp">
              <div className="pri-tag-tit">Csp</div>
              <div className="ppg-csp">&#8377;{toIndianCurrency(data.csp)}</div>
              <div className="dis-badge">
                <span>
                  {Number(getDiscount) < 10 ? `0${getDiscount}` : getDiscount}%{" "}
                  <br />
                  off
                </span>
              </div>
            </div>

            <div className="ppg-pro-hig">
              <span className="pro-high-tit">Product Highlights</span>
              <ul>
                {data.highlights?.map((item, id) => (
                  <li data-icon="▶" key={id}>
                    {item.point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="prodpg-det-pri-2">
            {/* {data?.discount_coupon && (
              <>
                <span className="pro-high-tit">Available Offers</span>
                <div className="ppg-coupon-con">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <path d="M67.5 37.3c-.9 0-1.6.7-1.6 1.6V42c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6v-3.2c0-.8-.7-1.5-1.6-1.5zm0 9.5c-.9 0-1.6.7-1.6 1.6v3.2c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6v-3.2c0-.9-.7-1.6-1.6-1.6zm0 9.6c-.9 0-1.6.7-1.6 1.6v3.2c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6V58c0-.9-.7-1.6-1.6-1.6zm16.2-12.6c.7-.1 1.3-.8 1.3-1.6V29.3c0-.9-.7-1.6-1.6-1.6H16.6c-.9 0-1.6.7-1.6 1.6v12.9c0 .8.5 1.4 1.3 1.6 3.4.7 5.7 4.1 5 7.5-.5 2.5-2.5 4.5-5 5-.8.1-1.3.7-1.3 1.5v12.9c0 .9.7 1.6 1.6 1.6h66.8c.9 0 1.6-.7 1.6-1.6V57.8c0-.8-.5-1.4-1.3-1.6-3.4-.7-5.7-4.1-5-7.5.6-2.5 2.5-4.4 5-4.9zM81.8 59v10.1H69.1v-1.6c0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6v1.6H18.2V59c5-1.8 7.6-7.2 5.8-12.2-1-2.7-3.1-4.9-5.8-5.8V30.9h47.7v1.6c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6v-1.6h12.7V41c-5 1.8-7.6 7.2-5.8 12.2 1 2.7 3.1 4.8 5.8 5.8zM37.3 48.4c2.6 0 4.8-2.1 4.8-4.8s-2.1-4.8-4.8-4.8-4.8 2.1-4.8 4.8c0 2.7 2.1 4.8 4.8 4.8zm0-6.4c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6-1.6-.7-1.6-1.6c0-.8.7-1.6 1.6-1.6zm14.8-2.7L33 58.4c-.6.6-.6 1.6 0 2.2.6.6 1.6.6 2.2 0l19.1-19.1c.6-.6.6-1.6 0-2.2-.6-.6-1.6-.6-2.2 0zM50 51.6c-2.6 0-4.8 2.1-4.8 4.8s2.1 4.8 4.8 4.8 4.8-2.1 4.8-4.8c0-2.7-2.2-4.8-4.8-4.8zm0 6.4c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6c0 .8-.7 1.6-1.6 1.6z" />
                  </svg>
                  <span className="coup-tit">Coupon</span>
                  <span className="coup-code">
                    {data?.discount_coupon?.data?.attributes.code}
                  </span>
                </div>
              </>
            )} */}

            <div className="ppg-emi-con">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path d="M78.4 19.2H68.1v-1.3c0-1.6-1.2-2.9-2.9-2.9s-2.8 1.3-2.8 2.9v1.3H37.5v-1.3c0-1.6-1.2-2.9-2.9-2.9-1.6 0-2.9 1.2-2.9 2.9v1.3H21.5c-4.7 0-8.6 3.8-8.6 8.6v48.6c0 4.7 3.8 8.6 8.6 8.6h57c4.7 0 8.6-3.8 8.6-8.6V27.8c-.1-4.7-3.9-8.6-8.7-8.6zM21.5 25h10.3v1.3c0 1.6 1.2 2.9 2.9 2.9s2.9-1.2 2.9-2.9V25h24.9v1.3c0 1.6 1.2 2.9 2.9 2.9s2.9-1.2 2.9-2.9V25h10.3c1.6 0 2.9 1.2 2.9 2.9v5.8H18.6v-5.8c0-1.7 1.3-2.9 2.9-2.9zm56.9 54.2H21.5c-1.6 0-2.9-1.2-2.9-2.9V39.2h62.7v37.2c0 1.6-1.2 2.8-2.9 2.8zM34.8 45h-7.5c-1.6 0-2.9 1.2-2.9 2.9 0 1.6 1.2 2.9 2.9 2.9h7.6c1.6 0 2.9-1.2 2.9-2.9-.1-1.6-1.3-2.9-3-2.9zm18.9 0h-7.6c-1.6 0-2.9 1.2-2.9 2.9 0 1.6 1.2 2.9 2.9 2.9h7.6c1.6 0 2.9-1.2 2.9-2.9 0-1.6-1.3-2.9-2.9-2.9zm18.9 0H65c-1.6 0-2.9 1.2-2.9 2.9 0 1.6 1.2 2.9 2.9 2.9h7.6c1.6 0 2.9-1.2 2.9-2.9 0-1.6-1.3-2.9-2.9-2.9zM34.8 56.4h-7.5c-1.6 0-2.9 1.2-2.9 2.9 0 1.6 1.2 2.9 2.9 2.9h7.6c1.6 0 2.9-1.2 2.9-2.9-.1-1.6-1.3-2.9-3-2.9zm18.9 0h-7.6c-1.6 0-2.9 1.2-2.9 2.9 0 1.6 1.2 2.9 2.9 2.9h7.6c1.6 0 2.9-1.2 2.9-2.9 0-1.6-1.3-2.9-2.9-2.9zm18.9 0H65c-1.6 0-2.9 1.2-2.9 2.9 0 1.6 1.2 2.9 2.9 2.9h7.6c1.6 0 2.9-1.2 2.9-2.9 0-1.6-1.3-2.9-2.9-2.9zM34.8 67.9h-7.5c-1.6 0-2.9 1.2-2.9 2.9s1.2 2.9 2.9 2.9h7.6c1.6 0 2.9-1.2 2.9-2.9s-1.3-2.9-3-2.9zm18.9 0h-7.6c-1.6 0-2.9 1.2-2.9 2.9s1.2 2.9 2.9 2.9h7.6c1.6 0 2.9-1.2 2.9-2.9s-1.3-2.9-2.9-2.9zm18.9 0H65c-1.6 0-2.9 1.2-2.9 2.9s1.2 2.9 2.9 2.9h7.6c1.6 0 2.9-1.2 2.9-2.9s-1.3-2.9-2.9-2.9z" />
              </svg>
              <span className="emi-tit">
                <strong>Standard EMI</strong> from &#8377;1996/Month.
              </span>
              <br />
              <a
                className="emi-plans"
                data-toggle="emi-modal"
                onClick={toggleHandle}
              >
                View Plans
              </a>
            </div>

            <div className="ppg-warra-con">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path d="M77.8 34.4c-.1-1.8-.1-3.4-.1-5.1 0-1.3-1-2.3-2.3-2.3-9.9-.1-17.5-2.9-23.8-9-.9-.9-2.4-.9-3.2 0-6.2 6.2-13.8 9-23.6 9-1.3 0-2.3 1-2.3 2.3 0 1.6 0 3.3-.1 5.1-.3 16.7-.8 39.4 26.9 49 .3.1.5.1.7.1.3 0 .5-.1.7-.1 27.9-9.6 27.4-32.3 27.1-49zM50.1 78.8C26.3 70.1 26.7 51.2 27 34.6c0-1 .1-2 .1-2.9 9.2-.5 16.7-3.2 23-8.8 6.3 5.5 13.8 8.4 23 8.7 0 .9 0 1.9.1 2.9.3 16.7.6 35.6-23.1 44.3zM58 42.4L46.9 53.6l-4.8-4.8c-.9-.9-2.4-.9-3.3 0-.9.9-.9 2.4 0 3.3l6.4 6.4c.5.5 1 .7 1.6.7.6 0 1.2-.2 1.6-.7l12.8-12.8c.9-.9.9-2.4 0-3.3-.8-.9-2.3-.9-3.2 0z" />
              </svg>
              <span className="warra-tit">
                <strong>Warranty</strong> {data.warranty}
              </span>

              <label>Delivery</label>
              <div className="post-cod-ckh">
                <button>Check</button>
                <input type="text" placeholder="Enter Pincode" />
              </div>
            </div>

            <div className="ppg-add-cart-but">
              <div className="number-input">
                <input
                  className="quantity"
                  min="1"
                  name="quantity"
                  id="counting"
                  value={count}
                  type="number"
                />
                <button onClick={increment} className="plus"></button>
                <button onClick={decrement} className="minus"></button>
              </div>

              <button className="add-cart-but" onClick={addItem}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        {isopen ? (
          <ReviewModel isopen={isopen} setIsOpen={setIsOpen} data={item} />
        ) : null}
        {showMe ? <EmiView showMe={showMe} setShowMe={setShowMe} /> : null}
      </div>
    </>
  );
};

export default ProductInfo;
