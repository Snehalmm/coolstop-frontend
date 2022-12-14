import React from "react";
import Image from "next/image";
import { serverUrl } from "../../utils/config";

const Brand = ({ data }) => {
  return (
    <>
      <section className="grid-container margin-top-2">
        <div className="sec-title">
          <h1>Brands We Offer</h1>
        </div>

        <div className="brand-logo">
          {data.map((item) => {
            return (
              <div className="blogos" key={item.id}>
                <Image
                  src={serverUrl + item.attributes.image.data.attributes.url}
                  alt={item.attributes.name}
                  // width={200}
                  // height={200}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Brand;
