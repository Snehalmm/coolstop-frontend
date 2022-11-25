import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import ShopingInstruction from './ShopingInstruction';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../stores/slices/cartSlice';
import { toIndianCurrency } from '../../utils/services';

const OrderSummaryForCart = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const productDetails = useSelector((state) => {
    return state.cart.cartItems;
  });
  const cartDetails = useSelector((state) => {
    return state.cart.cartDetails;
  });

  const handleClick = () => {
    router.push('/checkout');
  };
  const continueClick = () => {
    router.push('/products');
  };
  useEffect(() => {
    let getCardDetails = localStorage.getItem('cartDetails');

    if (productDetails !== null && productDetails?.length > 0) {
      const subTotal = productDetails
        .reduce((total, item) => total + item.total, 0)
        .toFixed(2);

      dispatch(cartActions.addCartDetails({ subTotal: subTotal }));
    }
  }, [productDetails]);

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
                ₹ {toIndianCurrency(cartDetails?.subTotal)}
              </span>
              <span className="itmname">Shipping & Handling</span>
              <span className="itmprice">
                ₹ {toIndianCurrency(cartDetails?.shippingCharge)}
              </span>
            </div>

            <div className="bw-right-tot-pri">
              <span className="itmname">
                Total Cost <sub>(Inclusive of all Taxes)</sub>
              </span>
              <span className="itmprice">
                ₹ {toIndianCurrency(cartDetails?.totalAmt)}
              </span>
            </div>

            <div className="bw-right-chk-batn">
              {/* <Link href="/checkout" as="/checkout"> */}
              <button onClick={handleClick}>
                <svg viewBox="0 0 24 24">
                  <path d="M 13.619141 1.7519531 C 13.319328 1.7000156 13 1.9189844 13 2.2714844 L 13 4 L 10 4 C 9.448 4 9 4.448 9 5 C 9 5.552 9.448 6 10 6 L 13 6 L 13 7.7285156 C 13 8.1975156 13.568391 8.4316094 13.900391 8.0996094 L 16.423828 5.5761719 C 16.741828 5.2571719 16.741828 4.7418281 16.423828 4.4238281 L 13.900391 1.8984375 C 13.817391 1.8154375 13.719078 1.7692656 13.619141 1.7519531 z M 4.0742188 2.0039062 L 3.0039062 2.0078125 C 2.4519063 2.0108125 2.0058125 2.4616719 2.0078125 3.0136719 C 2.0108125 3.5656719 2.4616719 4.0108125 3.0136719 4.0078125 L 4.0839844 4.0039062 L 7.5117188 11.908203 L 6.3144531 13.824219 C 5.9144531 14.464219 5.8937656 15.272641 6.2597656 15.931641 C 6.6257656 16.590641 7.3221719 17 8.0761719 17 L 19 17 C 19.552 17 20 16.552 20 16 C 20 15.448 19.552 15 19 15 L 8.0761719 15 L 8.0117188 14.882812 L 9.1875 13 L 16.521484 13 C 17.247484 13 17.916578 12.606656 18.267578 11.972656 L 21.896484 5.4414062 C 22.164484 4.9594062 21.989812 4.3500312 21.507812 4.0820312 C 21.024812 3.8130313 20.416438 3.9877031 20.148438 4.4707031 L 16.521484 11 L 9.2851562 11 L 5.9296875 3.234375 C 5.6186875 2.486375 4.8852187 1.9999062 4.0742188 2.0039062 z M 8 18 A 2 2 0 0 0 6 20 A 2 2 0 0 0 8 22 A 2 2 0 0 0 10 20 A 2 2 0 0 0 8 18 z M 18 18 A 2 2 0 0 0 16 20 A 2 2 0 0 0 18 22 A 2 2 0 0 0 20 20 A 2 2 0 0 0 18 18 z" />
                </svg>{' '}
                Proceed to Checkout
              </button>
              {/* </Link> */}
            </div>

            <div className="bw-right-coup-shi">
              <div className="r-inpu-con">
                <span className="inpu-titl">Enter Discount Code</span>
                <div className="input-group">
                  <input className="input-group-field" type="text" />
                  <div className="input-group-button">
                    <button type="submit" className="inpu-butn">
                      <svg viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M 20 12 C 20 16.417969 16.417969 20 12 20 C 7.582031 20 4 16.417969 4 12 C 4 7.582031 7.582031 4 12 4 C 13.113281 4 14.167969 4.238281 15.132813 4.648438 L 12.628906 7.324219 L 20.121094 7.074219 L 19.484375 0 L 17.273438 2.359375 C 15.710938 1.5 13.914063 1 12 1 C 5.925781 1 1 5.925781 1 12 C 1 18.074219 5.925781 23 12 23 C 18.074219 23 23 18.074219 23 12 Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bw-right-chk-batn">
                <button onClick={continueClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19.16 21.94h4.51l-9.83-9.83 9.83-9.83h-4.51l-9.85 9.83 9.85 9.83zm-8.94 0h4.51L4.9 12.11l9.85-9.83h-4.53L.39 12.11l9.83 9.83z" />
                  </svg>{' '}
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
          {Object.keys(cartDetails).length > 0 && <ShopingInstruction />}
        </div>
      </div>
    </>
  );
};

export default OrderSummaryForCart;
