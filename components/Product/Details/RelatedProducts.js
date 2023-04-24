import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { serverUrl } from "../../../utils/config";
import { useState, useEffect } from "react";
import StarRating from "../../common/StarRating";
import { toIndianCurrency } from "../../../utils/services";
import { useRouter } from "next/router";

const RelatedProducts = ({ dataRating, data }) => {
  const router = useRouter();
  const [relatedProducts, setRelatedProducts] = useState(data);
  const slideSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    // swipeToSlide: 2,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },
    ],
  };

  const onCardClick = (slug) => {
    router.push(`/products/${slug}`);
  };
  return (
    <>
      {relatedProducts?.length > 0 && (
        <>
          <section>
            <div className="grid-container">
              <div className="sec-area-titles">
                <h3>Related Products</h3>
                <span>Customer Also Viewed</span>
              </div>
            </div>
          </section>

          <section>
            <div className="grid-container">
              <div className="rel-products-con related-slick">
                <Slider {...slideSettings}>
                  {relatedProducts?.length > 0 &&
                    relatedProducts.map((item) => {
                      let productImage =
                        item?.productImages !== null &&
                        item?.productImages?.image
                          ? serverUrl + item.productImages.image[0].url
                          : null;

                      let brandImage =
                        item?.brand !== null && item?.brand
                          ? serverUrl + item?.brand?.image.url
                          : null;

                      return (
                        <div
                          className="prod-card"
                          key={item.id}
                          onClick={() => onCardClick(item.slug)}
                        >
                          <div>
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
                          </div>

                          <div className="prod-details">
                            <div className="prod-details-1">
                              <a href="#">
                                {brandImage !== null && (
                                  <Image
                                    height="90"
                                    width="90"
                                    src={brandImage}
                                    alt="image"
                                  />
                                )}
                              </a>
                            </div>
                            <div className="prod-details-2">
                              <h2>
                                <a href="#">{item.name}</a>
                              </h2>
                            </div>
                            <div className="prod-details-3">
                              <span className="slp">
                                ₹{toIndianCurrency(item.csp)}
                              </span>
                              <span className="mrp">
                                <s>₹{toIndianCurrency(item.mrp)}</s>
                              </span>
                            </div>
                            <div className="prod-details-4">
                              <span className="b-rating">
                                <StarRating
                                  count={5}
                                  size={25}
                                  defaultValue={dataRating.reviewStar}
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
                      );
                    })}
                </Slider>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default RelatedProducts;
