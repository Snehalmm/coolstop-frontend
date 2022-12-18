import ProductInfo from "../Details/ProductInfo";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { serverUrl } from "../../../utils/config";

const ProductSlide = ({ data, item }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // let productImage =
  //   data?.productImages !== null
  //     ? serverUrl + data.productImages.image[0].url
  //     : null;

  return (
    <>
      <section>
        <div className="grid-container">
          <div className="pd-top-parent">
            <div className="pd-top1">
              <div className="product-page-slider">
                <Slider {...settings}>
                  <ul className="product-slider-for">
                    <li>
                      <a
                        href="/images/pro-slide-1.jpg"
                        className="fresco prd_image"
                        data-fresco-group="prod_lightbox"
                        data-fresco-caption="Product Photo Desc-1"
                        data-fresco-group-options="thumbnails: 'vertical'"
                        data-fresco-options="thumbnail: '/images/pro-slide-1-thm.jpg'"
                      >
                        {data?.productImages !== null && (
                          <Image
                            src={
                              data?.productImages !== null
                                ? serverUrl +
                                  data.productImages.image.data[0].attributes
                                    .url
                                : null
                            }
                            alt="image"
                            width={600}
                            height={600}
                          />
                        )}
                      </a>
                    </li>
                  </ul>
                  <ul className="product-slider-for">
                    <li>
                      <a
                        href="/images/pro-slide-2.jpg"
                        className="fresco prd_image"
                        data-fresco-group="prod_lightbox"
                        data-fresco-caption="Product Photo Desc-2"
                        data-fresco-group-options="thumbnails: 'vertical'"
                        data-fresco-options="thumbnail: '/images/pro-slide-2-thm.jpg'"
                      >
                        {data?.productImages !== null && (
                          <Image
                            src={
                              data?.productImages !== null
                                ? serverUrl +
                                  data.productImages.image.data[1].attributes
                                    .url
                                : null
                            }
                            alt="image"
                            width={600}
                            height={600}
                          />
                        )}
                      </a>
                    </li>
                  </ul>
                  <ul className="product-slider-for">
                    <li>
                      <a
                        href="images/pro-slide-3.jpg"
                        className="fresco prd_image"
                        data-fresco-group="prod_lightbox"
                        data-fresco-caption="Product Photo Desc-3"
                        data-fresco-group-options="thumbnails: 'vertical'"
                        data-fresco-options="thumbnail: '/images/pro-slide-3-thm.jpg'"
                      >
                        {data?.productImages !== null && (
                          <Image
                            src={
                              data?.productImages !== null
                                ? serverUrl +
                                  data.productImages.image.data[2].attributes
                                    .url
                                : null
                            }
                            alt="image"
                            width={600}
                            height={600}
                          />
                        )}
                      </a>
                    </li>
                  </ul>
                </Slider>
                <ul className="product-slider-nav">
                  <li>
                    <a href="#">
                      <Image
                        src={
                          data?.productImages !== null
                            ? serverUrl +
                              data.productImages.image.data[2].attributes.url
                            : null
                        }
                        alt="slide-1"
                        width={500}
                        height={200}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        src={
                          data?.productImages !== null
                            ? serverUrl +
                              data.productImages.image.data[0].attributes.url
                            : null
                        }
                        alt="slide-2"
                        width={500}
                        height={200}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        src={
                          data?.productImages !== null
                            ? serverUrl +
                              data.productImages.image.data[1].attributes.url
                            : null
                        }
                        alt="slide-3"
                        width={500}
                        height={200}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <ProductInfo data={data} item={item} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSlide;
