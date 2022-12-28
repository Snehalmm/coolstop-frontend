import React from "react";
import Image from "next/image";
import Link from "next/link";
import { serverUrl } from "../../utils/config";
import { toIndianCurrency } from "../../utils/services";
import StarRating from "../Product/StarRating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useRouter } from "next/router";

const ProductsList = ({ data }) => {
  const router = useRouter();
  const slideSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    // swipeToSlide: 2,
    swipe: false,
  };

  const onCardClick = (slug) => {
    router.push(`/products/${slug}`);
  };
  return (
    <>
      <section>
        <div className="grid-container">
          <div className="sec-area-titles">
            <h3 style={{ marginBottom: "20px" }}>All Products</h3>
          </div>
        </div>
      </section>

      <section>
        <div className="grid-container">
          {/* <div className="rel-products-con"> */}
          <Slider {...slideSettings}>
            {data?.length > 0 &&
              data?.map((item, index) => {
                let productImage =
                  item?.attributes?.productImages !== null &&
                  item.attributes?.productImages?.image?.data !== null
                    ? serverUrl +
                      item?.attributes?.productImages?.image.data[0].attributes
                        .url
                    : null;

                let brandImage =
                  item?.attributes?.brand?.data !== null
                    ? serverUrl +
                      item?.attributes?.brand?.data?.attributes.image.data
                        .attributes.url
                    : null;

                return (
                  item.attributes.publishedAt !== null && (
                    <div className="pro-card-con" key={index}>
                      <div
                        className="prod-card"
                        key={index}
                        onClick={() => onCardClick(item.attributes.slug)}
                        style={{ marginBottom: "1px" }}
                      >
                        <Link
                          href={`/products/${item.attributes.slug}`}
                          as={`/products/${item.attributes.slug}`}
                        >
                          {productImage !== null && (
                            <figure>
                              <Image
                                height="286"
                                width="286"
                                src={productImage}
                                alt="Product Title"
                              />
                            </figure>
                          )}
                        </Link>

                        <div className="prod-details">
                          <div className="prod-details-1">
                            <a href="#">
                              {brandImage !== null && (
                                <Image
                                  height="100"
                                  width="100"
                                  src={brandImage}
                                  alt="image"
                                />
                              )}
                            </a>
                          </div>
                          <div className="prod-details-2">
                            <h2>
                              <a href="#">{item.attributes.name}</a>
                            </h2>
                          </div>
                          <div className="prod-details-3">
                            <span className="slp">
                              ₹{toIndianCurrency(item.attributes.csp)}
                            </span>
                            <span className="mrp">
                              <s>₹{toIndianCurrency(item.attributes.mrp)}</s>
                            </span>
                          </div>
                          <div className="prod-details-4">
                            <span className="b-rating">
                              <StarRating
                                count={5}
                                size={25}
                                value={item.attributes.reviewStar}
                                disabled={true}
                                activeColor={"#FFA534"}
                                inactiveColor={"#ddd"}
                              />
                            </span>
                          </div>
                          <div className="prod-details-5">
                            <span className="emi">
                              No Cost EMI | Standard EMI From ₹ 1,188
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                );
              })}
          </Slider>
          {/* </div> */}
        </div>
      </section>

      {/* <div className="grid-container">
          <Slider {...slideSettings}>
            {data?.length > 0 &&
              data?.map((item, index) => {
                let productImage =
                  item?.attributes?.productImages !== null &&
                  item.attributes?.productImages?.image?.data !== null
                    ? serverUrl +
                      item?.attributes?.productImages?.image.data[0].attributes
                        .url
                    : null;

                let brandImage =
                  item?.attributes?.brand?.data !== null
                    ? serverUrl +
                      item?.attributes?.brand?.data?.attributes.image.data
                        .attributes.url
                    : null;

                return (
                  item.attributes.publishedAt !== null && (
                    <div className="pro-card-con" key={index}>
                      <div className="prod-card" key={index}>
                        <Link
                          href={`/products/${item.attributes.slug}`}
                          as={`/products/${item.attributes.slug}`}
                        >
                          {productImage !== null && (
                            <figure>
                              <Image
                                height="286"
                                width="286"
                                src={productImage}
                                alt="Product Title"
                              />
                            </figure>
                          )}
                        </Link>

                        <div className="prod-details">
                          <div className="prod-details-1">
                            <a href="#">
                              {brandImage !== null && (
                                <Image
                                  height="100"
                                  width="100"
                                  src={brandImage}
                                  alt="image"
                                />
                              )}
                            </a>
                          </div>
                          <div className="prod-details-2">
                            <h2>
                              <a href="#">{item.attributes.name}</a>
                            </h2>
                          </div>
                          <div className="prod-details-3">
                            <span className="slp">
                              ₹{toIndianCurrency(item.attributes.csp)}
                            </span>
                            <span className="mrp">
                              <s>₹{toIndianCurrency(item.attributes.mrp)}</s>
                            </span>
                          </div>
                          <div className="prod-details-4">
                            <span className="b-rating">
                              <StarRating
                                count={5}
                                size={25}
                                value={item.attributes.reviewStar}
                                disabled={true}
                                activeColor={"#FFA534"}
                                inactiveColor={"#ddd"}
                              />
                            </span>
                          </div>
                          <div className="prod-details-5">
                            <span className="emi">
                              No Cost EMI | Standard EMI From ₹ 1,188
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                );
              })}
          </Slider>
        </div> */}
    </>
  );
};

export default ProductsList;
