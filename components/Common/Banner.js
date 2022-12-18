import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const Banner = ({ data }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="top-four-4">
        <section>
          <div className="hmp-slider">
            <Slider {...settings}>
              {data.map((item, index) => {
                return (
                  <div className="slide-1" key={index}>
                    <div className="grid-container">
                      <picture>
                        <source
                          media="(min-width: 1200px)"
                          srcSet="/images/slide-1.jpg"
                        />
                        <source
                          media="(min-width: 992px)"
                          srcSet="/images/slide-1-tablet.jpg"
                        />
                        <source
                          media="(min-width: 668px)"
                          srcSet="/images/slide-1-mobile.jpg"
                        />
                        <source
                          media="(min-width: 0px)"
                          srcSet="/images/slide-1-mobile.jpg"
                        />
                        <Image
                          src={item.image.data.attributes.formats.thumbnail.url}
                          srcSet="/images/slide-1-mobile.jpg"
                          alt="Daikin"
                          width={1300}
                          height={500}
                        />
                      </picture>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
