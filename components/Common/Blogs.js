import React from 'react';
import Image from 'next/image';
import { serverUrl } from '../../utils/config';
import Link from 'next/link';

const Blogs = ({ data }) => {
  return (
    <>
      <section className="grid-container margin-top-2">
        <div className="sec-cards">
          {data.map((item, index) => {
            return (
              <div className="s-card" key={index}>
                <div className="card-title">
                  <h3>{item.heading}</h3>
                  <span>{item.subHeading}</span>
                </div>
                <div className="card-image">
                  <Image
                    src={serverUrl + item.image.data.attributes.url}
                    alt="VRV Technology"
                    width={404}
                    height={216}
                  />
                </div>
                <div className="card-text">
                  <p>{item.description}</p>
                  <Link href={item.buttonUrl}>{item.buttonText}</Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Blogs;
