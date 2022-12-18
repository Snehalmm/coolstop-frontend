import React from "react";
import Image from "next/image";
import { toIndianCurrency } from "../../utils/services";
import Link from "next/link";
import { serverUrl } from "../../utils/config";
import { cartActions } from "../../stores/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const TopSeller = ({ data, item }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  let count = 1;

  const addItem = (data) => {
    var cartItemObj = {
      id: item.id,
      slug: data.slug,
      name: data.name,
      csp: data.csp,
      total: count * data.csp,
      mrp: data.mrp,
      image: data.cardImage.data.attributes.url,
      qty: count,
    };
    dispatch(cartActions.addProduct(cartItemObj));
    router.push("/cart");
  };
  return (
    <>
      <section className="grid-container">
        <div className="sec-title">
          <h1>Top Sellers</h1>
        </div>

        <div className="top-seller-hm">
          {data.map((item) => {
            return (
              <div className="top-sell-blk" key={item.id}>
                <Link
                  href={`/products/${item.attributes.slug}`}
                  as={`/products/${item.attributes.slug}`}
                  className="prod-img"
                >
                  <Image
                    src={
                      serverUrl + item.attributes.cardImage.data.attributes.url
                    }
                    alt="Daikin"
                    width={300}
                    height={300}
                  />
                </Link>
                <a className="prod-tit" href="#">
                  <h2>{item.attributes.name}</h2>
                </a>
                <span className="model-no">{item.attributes.modelNo}</span>
                <span className="model-price">
                  &#8377;{toIndianCurrency(item.attributes.csp)}{" "}
                  <s>&#8377;{toIndianCurrency(item.attributes.mrp)}</s>
                </span>
                <div className="buy-butt">
                  <button
                    onClick={() => addItem(item.attributes)}
                    // {`/products/${item.attributes.slug}`}
                    // as={`/products/${item.attributes.slug}`}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default TopSeller;
