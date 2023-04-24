import React, { useState } from "react";
import Features from "../../../components/Home/Features";
import { productDetailBreadcrumb } from "../../../utils/data/breadcrumbs";
import Breadcrumbs from "../../../components/common/Breadcrumbs";
import ProductSlide from "../../../components/Product/Details/ProductSlide";
import SpecificationTable from "../../../components/Product/SpecificationTable";
import RelatedProducts from "../../../components/Product/Details/RelatedProducts";
import { token } from "../../../utils/config";
import { NextSeo, SocialProfileJsonLd } from "next-seo";
import { serverUrl } from "../../../utils/config";
import Head from "next/head";

const ProductDetails = ({ productData }) => {
  // const [productDetailsData, setProductDetailsData] = useState(
  //   props.productData
  // );
  return (
    <>
      {productData?.data?.attributes?.seo?.canonicalURL !== null && (
        <Head>
          <link
            rel="canonical"
            href={productData?.data?.attributes?.seo?.canonicalURL}
          ></link>
        </Head>
      )}
      {productData?.data?.attributes?.seo?.metaTitle !== null && (
        <NextSeo
          title={productData?.data?.attributes?.seo?.metaTitle}
          description="A short description goes here. ajajajaja"
        />
      )}
      {productData?.data?.attributes?.seo?.metaSocial !== null &&
        productData?.data?.attributes?.seo?.metaSocial?.length > 0 &&
        productData?.data?.attributes?.seo.metaSocial.map((item, i) => {
          <SocialProfileJsonLd
            key={i}
            type="Person"
            name={item.title}
            // url={item.image.data.attributes.url}
            sameAs={[
              "http://www.facebook.com/your-profile",
              "http://instagram.com/yourProfile",
              "http://www.linkedin.com/in/yourprofile",
              "http://plus.google.com/your_profile",
            ]}
          />;
        })}
      {productData !== null && (
        <>
          <Breadcrumbs data={productDetailBreadcrumb} />
          <ProductSlide
            data={productData?.data?.attributes}
            item={productData?.data?.id}
          />
          <SpecificationTable data={productData?.data?.attributes} />
          <RelatedProducts
            data={productData?.data?.attributes.relatedProducts}
            dataRating={productData?.data?.attributes}
          />
          <Features />
        </>
      )}
    </>
  );
};

export default ProductDetails;

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const res = await fetch(`${serverUrl}/api/products/${slug}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const productData = await res.json();

  return {
    props: { productData },
  };
}
