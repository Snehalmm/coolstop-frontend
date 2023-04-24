import Features from "../components/home/Features";
import { cartBreadcrums } from "../utils/data/breadcrumbs";
import ShoppingCart from "../components/Product/ShoppingCart";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { NextSeo } from "next-seo";
import { serverUrl } from "../utils/config";
import Script from "next/script";
import Head from "next/head";

const Cart = () => {
  return (
    <>
      <NextSeo title="My cart" description="Some content " />
      <Breadcrumbs data={cartBreadcrums} />
      <ShoppingCart />
      <Features />
    </>
  );
};

export default Cart;

// export async function getServerSideProps(context) {
//   const { code } = context.query;
//   const res = await fetch(
//     `${serverUrl}/api/discount-coupons?filters[code]=${code}`
//     // {
//     //   headers: { Authorization: `Bearer ${token}` },
//     // }
//   );
//   const productData = await res.json();

//   return {
//     props: { productData },
//   };
// }
