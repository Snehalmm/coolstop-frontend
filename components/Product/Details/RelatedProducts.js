import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const RelatedProducts = () => {
  const slideSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    // swipeToSlide: 2,
    swipe: true,
  };
  return (
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
          <div className="rel-products-con">
            <Slider {...slideSettings}>
              <div className="prod-card">
                <figure>
                  <a href="#">
                    <Image
                      src="/images/prod-image.jpg"
                      alt="Product Title"
                      width={200}
                      height={200}
                    />
                  </a>
                </figure>
                <div className="prod-details">
                  <div className="prod-details-1">
                    <a href="#">
                      <Image
                        src="/images/brand-small-logo.jpg"
                        alt="img"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                  <div className="prod-details-2">
                    <h2>
                      <a href="#">Daikin Window AC</a>
                    </h2>
                  </div>
                  <div className="prod-details-3">
                    <span className="slp">₹ 24,990</span>
                    <span className="mrp">
                      <s>₹ 29,090</s>
                    </span>
                  </div>
                  <div className="prod-details-4">
                    <span className="b-rating">
                      <Image
                        src="/images/star-rating.jpg"
                        alt="Rating"
                        width={80}
                        height={80}
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
              <div className="prod-card">
                <figure>
                  <a href="#">
                    <Image
                      src="/images/prod-image.jpg"
                      alt="Product Title"
                      width={200}
                      height={200}
                    />
                  </a>
                </figure>

                <div className="prod-details">
                  <div className="prod-details-1">
                    <a href="#">
                      <Image
                        src="/images/brand-small-logo.jpg"
                        width={100}
                        height={100}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="prod-details-2">
                    <h2>
                      <a href="#">Daikin Window AC</a>
                    </h2>
                  </div>
                  <div className="prod-details-3">
                    <span className="slp">₹ 24,990</span>
                    <span className="mrp">
                      <s>₹ 29,090</s>
                    </span>
                  </div>
                  <div className="prod-details-4">
                    <span className="b-rating">
                      <Image
                        src="/images/star-rating.jpg"
                        alt="Rating"
                        width={80}
                        height={80}
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

              <div className="prod-card">
                <figure>
                  <a href="#">
                    <Image
                      src="/images/prod-image.jpg"
                      alt="Product Title"
                      width={200}
                      height={200}
                    />
                  </a>
                </figure>

                <div className="prod-details">
                  <div className="prod-details-1">
                    <a href="#">
                      <Image
                        src="/images/brand-small-logo.jpg"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                  <div className="prod-details-2">
                    <h2>
                      <a href="#">Daikin Window AC</a>
                    </h2>
                  </div>
                  <div className="prod-details-3">
                    <span className="slp">₹ 24,990</span>
                    <span className="mrp">
                      <s>₹ 29,090</s>
                    </span>
                  </div>
                  <div className="prod-details-4">
                    <span className="b-rating">
                      <Image
                        src="/images/star-rating.jpg"
                        alt="Rating"
                        width={80}
                        height={80}
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

              <div className="prod-card">
                <figure>
                  <a href="#">
                    <Image
                      src="/images/prod-image.jpg"
                      alt="Product Title"
                      width={200}
                      height={200}
                    />
                  </a>
                </figure>

                <div className="prod-details">
                  <div className="prod-details-1">
                    <a href="#">
                      <Image
                        src="/images/brand-small-logo.jpg"
                        alt="img"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                  <div className="prod-details-2">
                    <h2>
                      <a href="#">Daikin Window AC</a>
                    </h2>
                  </div>
                  <div className="prod-details-3">
                    <span className="slp">₹ 24,990</span>
                    <span className="mrp">
                      <s>₹ 29,090</s>
                    </span>
                  </div>
                  <div className="prod-details-4">
                    <span className="b-rating">
                      <Image
                        src="/images/star-rating.jpg"
                        alt="Rating"
                        width={80}
                        height={80}
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
              <div className="prod-card">
                <figure>
                  <a href="#">
                    <Image
                      src="/images/prod-image.jpg"
                      alt="Product Title"
                      width={200}
                      height={200}
                    />
                  </a>
                </figure>

                <div className="prod-details">
                  <div className="prod-details-1">
                    <a href="#">
                      <Image
                        src="/images/brand-small-logo.jpg"
                        alt="img"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                  <div className="prod-details-2">
                    <h2>
                      <a href="#">Daikin Window AC</a>
                    </h2>
                  </div>
                  <div className="prod-details-3">
                    <span className="slp">₹ 24,990</span>
                    <span className="mrp">
                      <s>₹ 29,090</s>
                    </span>
                  </div>
                  <div className="prod-details-4">
                    <span className="b-rating">
                      <Image
                        src="/images/star-rating.jpg"
                        alt="Rating"
                        width={80}
                        height={80}
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
              <div className="prod-card">
                <figure>
                  <a href="#">
                    <Image
                      src="/images/prod-image.jpg"
                      alt="Product Title"
                      width={200}
                      height={200}
                    />
                  </a>
                </figure>

                <div className="prod-details">
                  <div className="prod-details-1">
                    <a href="#">
                      <Image
                        src="/images/brand-small-logo.jpg"
                        alt="img"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                  <div className="prod-details-2">
                    <h2>
                      <a href="#">Daikin Window AC</a>
                    </h2>
                  </div>
                  <div className="prod-details-3">
                    <span className="slp">₹ 24,990</span>
                    <span className="mrp">
                      <s>₹ 29,090</s>
                    </span>
                  </div>
                  <div className="prod-details-4">
                    <span className="b-rating">
                      <Image
                        src="/images/star-rating.jpg"
                        alt="Rating"
                        width={80}
                        height={80}
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
              <div className="prod-card">
                <figure>
                  <a href="#">
                    <Image
                      src="/images/prod-image.jpg"
                      alt="Product Title"
                      width={200}
                      height={200}
                    />
                  </a>
                </figure>

                <div className="prod-details">
                  <div className="prod-details-1">
                    <a href="#">
                      <Image
                        src="/images/brand-small-logo.jpg"
                        alt="img"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                  <div className="prod-details-2">
                    <h2>
                      <a href="#">Daikin Window AC</a>
                    </h2>
                  </div>
                  <div className="prod-details-3">
                    <span className="slp">₹ 24,990</span>
                    <span className="mrp">
                      <s>₹ 29,090</s>
                    </span>
                  </div>
                  <div className="prod-details-4">
                    <span className="b-rating">
                      <Image
                        src="/images/star-rating.jpg"
                        alt="Rating"
                        width={80}
                        height={80}
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
              <div className="prod-card">
                <figure>
                  <a href="#">
                    <Image
                      src="/images/prod-image.jpg"
                      alt="Product Title"
                      width={200}
                      height={200}
                    />
                  </a>
                </figure>

                <div className="prod-details">
                  <div className="prod-details-1">
                    <a href="#">
                      <Image
                        src="/images/brand-small-logo.jpg"
                        alt="img"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                  <div className="prod-details-2">
                    <h2>
                      <a href="#">Daikin Window AC</a>
                    </h2>
                  </div>
                  <div className="prod-details-3">
                    <span className="slp">₹ 24,990</span>
                    <span className="mrp">
                      <s>₹ 29,090</s>
                    </span>
                  </div>
                  <div className="prod-details-4">
                    <span className="b-rating">
                      <Image
                        src="/images/star-rating.jpg"
                        alt="Rating"
                        width={80}
                        height={80}
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
              <div className="prod-card">
                <figure>
                  <a href="#">
                    <Image
                      src="/images/prod-image.jpg"
                      alt="Product Title"
                      width={200}
                      height={200}
                    />
                  </a>
                </figure>

                <div className="prod-details">
                  <div className="prod-details-1">
                    <a href="#">
                      <Image
                        src="/images/brand-small-logo.jpg"
                        alt="img"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                  <div className="prod-details-2">
                    <h2>
                      <a href="#">Daikin Window AC</a>
                    </h2>
                  </div>
                  <div className="prod-details-3">
                    <span className="slp">₹ 24,990</span>
                    <span className="mrp">
                      <s>₹ 29,090</s>
                    </span>
                  </div>
                  <div className="prod-details-4">
                    <span className="b-rating">
                      <Image
                        src="/images/star-rating.jpg"
                        alt="Rating"
                        width={80}
                        height={80}
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
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedProducts;
