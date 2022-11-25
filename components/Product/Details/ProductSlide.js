import ProductInfo from "../Details/ProductInfo";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const ProductSlide = ({ data, item }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
                        <Image
                          src="/images/pro-slide-1.jpg"
                          alt="image"
                          width={600}
                          height={600}
                        />
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
                        <Image
                          src="/images/pro-slide-2.jpg"
                          alt="img"
                          width={600}
                          height={600}
                        />
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
                        <Image
                          src="/images/pro-slide-3.jpg"
                          alt="img"
                          width={600}
                          height={600}
                        />
                      </a>
                    </li>
                  </ul>
                </Slider>
                <ul className="product-slider-nav">
                  <li>
                    <a href="#">
                      <Image
                        src="/images/pro-slide-1-thm.jpg"
                        alt="slide-1"
                        width={500}
                        height={200}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        src="/images/pro-slide-2-thm.jpg"
                        alt="slide-2"
                        width={500}
                        height={200}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        src="/images/pro-slide-3-thm.jpg"
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
