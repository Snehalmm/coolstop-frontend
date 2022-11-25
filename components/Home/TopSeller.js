import React from "react";
import Image from "next/image";
import { toIndianCurrency } from "../../utils/services";
import Link from "next/link";
import { serverUrl } from "../../utils/config";

const TopSeller = ({ data }) => {
  return (
    <>
      <section className="grid-container">
        <div className="sec-title">
          <h1>Top Sellers</h1>
        </div>

        <div className="top-seller-hm">
          {data.map((item, index) => {
            return (
              <Link href={`/products/${item.id}`} as={`/products/${item.id}`}>
                <div className="top-sell-blk" key={index}>
                  <a className="prod-img" href="#">
                    <Image
                      src={
                        serverUrl +
                        item.attributes.cardImage.data.attributes.url
                      }
                      alt="Daikin"
                      width={300}
                      height={300}
                    />
                  </a>
                  <a className="prod-tit" href="#">
                    <h2>{item.attributes.name}</h2>
                  </a>
                  <span className="model-no">{item.attributes.modelNo}</span>
                  <span className="model-price">
                    &#8377;{toIndianCurrency(item.attributes.csp)}{" "}
                    <s>&#8377;{toIndianCurrency(item.attributes.mrp)}</s>
                  </span>
                  <div className="buy-butt">
                    <a href="#">Buy Now</a>
                  </div>
                </div>
              </Link>
            );
          })}
          {/* 
          <div className="top-sell-blk">
            <a className="prod-img" href="#">
              <Image
                src="/images/prod-2.jpg"
                alt="Daikin"
                width={300}
                height={300}
              />
            </a>
            <a className="prod-tit" href="#">
              <h2>Daikin Non Inverter 2 Star</h2>
            </a>
            <span className="model-no">FTQ/DTQ/GTQ50TV16</span>
            <span className="model-price">
              &#8377;33000 <s>&#8377;38700</s>
            </span>
            <div className="buy-butt">
              <a href="#">Buy Now</a>
            </div>
          </div>

          <div className="top-sell-blk">
            <a className="prod-img" href="#">
              <Image
                src="/images/prod-3.jpg"
                alt="Daikin"
                width={300}
                height={300}
              />
            </a>
            <a className="prod-tit" href="#">
              <h2>Daikin Non Inverter 3 Star</h2>
            </a>
            <span className="model-no">FTL/DTL/GTL35TV16</span>
            <span className="model-price">
              &#8377;29500 <s>&#8377;34700</s>
            </span>
            <div className="buy-butt">
              <a href="#">Buy Now</a>
            </div>
          </div>

          <div className="top-sell-blk">
            <a className="prod-img" href="#">
              <Image
                src="/images/prod-4.jpg"
                alt="Daikin"
                width={300}
                height={300}
              />
            </a>
            <a className="prod-tit" href="#">
              <h2>Daikin Inverter 5 Star</h2>
            </a>
            <span className="model-no">FTKF/DTKF35TV16</span>
            <span className="model-price">
              &#8377;43500 <s>&#8377;48700</s>
            </span>
            <div className="buy-butt">
              <a href="#">Buy Now</a>
            </div>
          </div>

          <div className="top-sell-blk">
            <a className="prod-img" href="#">
              <Image
                src="/images/prod-5.jpg"
                alt="Daikin"
                width={300}
                height={300}
              />
            </a>
            <a className="prod-tit" href="#">
              <h2>Daikin Inverter 4 Star</h2>
            </a>
            <span className="model-no">FTKP/DTKP35TV16</span>
            <span className="model-price">
              &#8377;39000 <s>&#8377;42400</s>
            </span>
            <div className="buy-butt">
              <a href="#">Buy Now</a>
            </div>
          </div>

          <div className="top-sell-blk">
            <a className="prod-img" href="#">
              <Image
                src="/images/prod-6.jpg"
                alt="Daikin"
                width={300}
                height={300}
              />
            </a>
            <a className="prod-tit" href="#">
              <h2>Daikin Inverter 3 Star</h2>
            </a>
            <span className="model-no">FTKL/DTKL35TV16</span>
            <span className="model-price">
              &#8377;35750 <s>&#8377;39400</s>
            </span>
            <div className="buy-butt">
              <a href="#">Buy Now</a>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default TopSeller;
