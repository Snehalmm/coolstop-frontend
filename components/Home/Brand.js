import React from "react";
import Image from "next/image";
import { serverUrl } from "../../utils/config";

const Brand = ({ data }) => {
  return (
    <div>
      <section className="grid-container margin-top-2">
        <div className="sec-title">
          <h1>Brands We Offer</h1>
        </div>

        <div className="brand-logo">
          {data.map((item, index) => {
            return (
              <div className="blogos">
                <Image
                  key={index}
                  src={serverUrl + item.attributes.image.data.attributes.url}
                  alt={item.attributes.name}
                  width={200}
                  height={200}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Brand;
