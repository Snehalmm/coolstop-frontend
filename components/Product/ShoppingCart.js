import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../stores/slices/cartSlice";
import { toIndianCurrency } from "../../utils/services";
import OrderSummary from "./OrderSummary";
import { serverUrl } from "../../utils/config";
import { useEffect } from "react";
import Link from "next/link";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => {
    return state.cart.items;
  });
  const incrementCartItem = (slug, qty) => {
    const newQty = qty + 1;
    dispatch(
      cartActions.updateProductQty({ slug: slug, qty: newQty, sign: "plus" })
    );
  };

  const decrementCartItem = (slug, qty) => {
    if (qty > 1) {
      const newQty = qty - 1;
      dispatch(
        cartActions.updateProductQty({ slug: slug, qty: newQty, sign: "minus" })
      );
    }
  };
  const removeItem = (slug) => {
    dispatch(cartActions.removeProduct({ slug: slug }));
    // dispatch(cartActions.discountDetails({}));
    // localStorage.removeItem("discountDetails");
  };
  useEffect(() => {
    localStorage.removeItem("orderDetails");
  }, []);

  return (
    <>
      <section className="grslug-container">
        <div className="bwcart-main-con">
          <div className="bwcart-left">
            <div className="fd-cart-con">
              <div className="ctc-tit-con">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.9 100">
                  <path d="M66.1 18.1l-.6 10.3 15.3.7V3.9c0-1.3-.9-2.3-2.2-2.4L55.4 0c-1.3-.1-2.4.9-2.5 2.2l-.5 7.5 6.5.3c4.2.2 7.4 3.9 7.2 8.1zm-5.9 10.1l.5-10.3c.1-1.4-.9-2.4-2.2-2.5L52 15l-14.8-.8c-1.3-.1-2.4.9-2.5 2.2l-.6 10.4 17.1.8 9 .6zM90.3 36c-.5-.7-1.4-1.2-2.2-1.2l-64.8-3.3-1.8-11.8c-.2-1.5-1.6-2.6-3.1-2.6H3.1c-1.7 0-3.1 1.4-3.1 3.1s1.4 3.1 3.1 3.1h12.6l8.2 54.2c.4 2.5 1.6 4.6 3.2 6.3-1.8 1.7-2.8 4.1-2.8 6.8 0 5.3 4.3 9.5 9.5 9.5s9.5-4.3 9.5-9.5c0-1.2-.2-2.3-.6-3.4H65c-.4 1.1-.6 2.2-.6 3.4 0 5.3 4.3 9.5 9.5 9.5 5.3 0 9.5-4.3 9.5-9.5 0-5.3-4.3-9.5-9.5-9.5H35.2c-2.6 0-4.9-1.9-5.3-4.5l-.7-4.9h39.9c9.2 0 17.1-6.5 18.7-15.7l3.1-17.5c.1-.8-.1-1.8-.6-2.5zM33.8 93.9c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4c-.1 1.9-1.7 3.4-3.4 3.4zm43.4-3.3c0 1.9-1.5 3.4-3.4 3.4s-3.4-1.5-3.4-3.4 1.5-3.4 3.4-3.4c1.8 0 3.4 1.5 3.4 3.4z" />
                </svg>
                <div className="ctc-tit">
                  <h2>Shopping Cart</h2>
                </div>
              </div>
              {(cartItems == null || cartItems?.length === 0) && (
                <div className="ctc-tit empaty-message">
                  <h2>Your Cart is empty.</h2>
                </div>
              )}
              {cartItems !== null &&
                cartItems.length > 0 &&
                cartItems.map((item, index) => {
                  return (
                    <div className="ctc-prod-con" key={index}>
                      <Link
                        href={`/products/${item?.slug}`}
                        className="ctc-prod-img"
                      >
                        <img src={serverUrl + item.image} alt="imgname" />
                      </Link>

                      <div className="ctc-desc-pri">
                        <span className="ctc-parent-prod">{item.name}</span>
                        <span className="ctc-parent-pric">
                          ₹ {toIndianCurrency(item.total?.toFixed(2))}
                        </span>
                      </div>

                      <div className="ctc-qty-del">
                        <span className="ctc-qty">
                          <div className="quantity">
                            <input
                              type="number"
                              min="1"
                              max="100"
                              value={item.qty}
                              slug="shopItem"
                              // defaultValue="1"
                            />
                            <div className="quantity-nav">
                              <button
                                className="quantity-button quantity-up"
                                onClick={() =>
                                  incrementCartItem(item.slug, item.qty)
                                }
                              >
                                +
                              </button>
                              <button
                                className="quantity-button quantity-down"
                                onClick={() =>
                                  decrementCartItem(item.slug, item.qty)
                                }
                              >
                                -
                              </button>
                            </div>
                          </div>
                        </span>
                        <span className="ctc-del">
                          <button onClick={() => removeItem(item.slug)}>
                            <svg
                              fill="#000000"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                            >
                              <path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z" />
                            </svg>{" "}
                            Remove
                          </button>
                        </span>
                      </div>

                      <div className="ctc-tot-pri">
                        <div className="tot-txt-pri">
                          <span className="tot-txt">Total</span>
                          <span className="tot-pri">
                            ‭ {toIndianCurrency(item?.total?.toFixed(2))}‬
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <OrderSummary buttonText={"Proceed to Checkout"} />
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;
